import { TypePayment } from "../../../booklet_payment/domain/model/booklet_payment";

interface AddManyPaymentDTO {
  typePayment: TypePayment;
  payDay: Date;
}

export { AddManyPaymentDTO };
