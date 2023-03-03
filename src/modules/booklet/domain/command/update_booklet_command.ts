import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { UpdateBookletDTO } from "../dto/update_booklet_dto";
import { UpdateBookletUseCase } from "../usecase/update_booklet_usecase";

class UpdateBookletCommand {
  constructor(private usecase: UpdateBookletUseCase) {}

  async execute({ payDay }: UpdateBookletDTO, id: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "set_payment_booklet",
      "marcar como pago o carnê.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute({
      id,
      isPaid: true,
      payDay,
      createdAt: new Date(),
      updatedAt: new Date(),
      acquirerId: "",
      campaignId: "",
      codeBooklet: 0,
      quota: 0,
    });
  }
}

export { UpdateBookletCommand };
