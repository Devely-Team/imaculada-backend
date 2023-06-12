import { hasAccess } from "../../../../core/tools/has_access";
import { Success } from "../../../../core/tools/result_type";
import { Account } from "../../../user/account/domain/model/account";
import { ListBookletUseCase } from "../usecase/list_booklet_usecase";

class ListByParcelPaidBookletCommand {
  static async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_booklet",
      "listar os carnês do adquirente.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const result = await ListBookletUseCase.execute();

    if (result.ok === false) {
      return result;
    }

    const map = result.value.map(booklet => {
      const parcelsPaid = result.value.filter(
        c => c.codeBooklet === booklet.codeBooklet && c.paymentBookId,
      ).length;

      return {
        codeBooklet: booklet.codeBooklet,
        parcelsPaid,
        acquiredDay: booklet.createdAt,
        acquirerName:
          booklet.acquirer !== undefined && booklet.acquirer !== null
            ? booklet.acquirer.name
            : null,
        acquirerWhatsapp:
          booklet.acquirer !== undefined && booklet.acquirer !== null
            ? booklet.acquirer.whatsapp
            : null,
      };
    });

    const mapp = map.filter((obj, index, arr) => {
      return arr.findIndex(o => o.codeBooklet === obj.codeBooklet) === index;
    });

    return Success(mapp);
  }
}

export { ListByParcelPaidBookletCommand };
