import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure, Success } from "../../../../core/tools/result_type";
import { Account } from "../../../user/account/domain/model/account";
import {
  campaignPaymentDate,
  getCurrentQuotaNumber,
} from "../../infra/data/campaign_payment_date";
import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";

class StatusPaymentBookletCommand {
  constructor(private usecase: FindByCodeBookletUseCase) {}

  async execute(code: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_booklet",
      "Procura o status do pagamento.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const result = await this.usecase.execute(Number(code));

    if (result.ok === false) {
      return result;
    }

    if (result.ok === true && result.value.length === 0) {
      return Success({
        status: "Não possui boleto cadastrado",
      });
    }

    const currentQuota = getCurrentQuotaNumber(campaignPaymentDate);

    if (currentQuota === null) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.objectValidation,
          "Não ha nenhuma cota em aberto",
          "Não possui cotas em aberto na data atual.",
        ),
      );
    }

    const mappingBookletPayment = result.value.map(booklet => {
      if (
        booklet.quota <= currentQuota.quota &&
        booklet.bookletPayment !== null &&
        booklet.bookletPayment !== undefined &&
        booklet.bookletPayment.isPaid === true &&
        booklet.bookletPayment.status === "Paid"
      ) {
        const expiryDate = new Date(currentQuota.expiryDate);

        if (booklet.bookletPayment.payDay < expiryDate) {
          return {
            status: "Pagamento em dia",
            quota: booklet.quota,
            pay: booklet.bookletPayment,
          };
        }
        return {
          status: "Pago em atraso",
          quota: booklet.quota,
          pay: booklet.bookletPayment,
        };
      }
      if (booklet.quota <= currentQuota.quota) {
        return {
          status: "Não possui pagamento",
          quota: booklet.quota,
          pay: booklet.bookletPayment,
        };
      }

      return null;
    });

    const filter = mappingBookletPayment.filter(
      a => a !== null && a !== undefined,
    );
    const paymentCorret = filter.every(a => a?.status === "Pagamento em dia");
    const latePayment = filter.some(a => a?.status === "Pago em atraso");
    const doesNotPayment = filter.some(
      a => a?.status === "Não possui pagamento",
    );

    if (paymentCorret === true) {
      return Success({
        status: "Pagamento em dia",
      });
    }

    if (latePayment === true) {
      return Success({
        status: "Pago em atraso",
      });
    }

    if (doesNotPayment === true) {
      return Success({
        status: "Não possui pagamento",
      });
    }

    return Success({
      status: "STATUS NÃO ENCONTRADO",
    });
  }
}

export { StatusPaymentBookletCommand };
