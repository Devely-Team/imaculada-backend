import { StatusPayment, TypePayment } from "../model/booklet_payment";

interface CreateBookletPaymentDTO {
  bookletId: string;
  isPaid: boolean;
  typePayment: TypePayment;
  status: StatusPayment;
  payDay: Date;
}

interface SetNewStatusBookletPaymentDTO {
  isPaid: boolean;
  typePayment: TypePayment;
  status: StatusPayment;
  payDay: Date;
}

export { CreateBookletPaymentDTO, SetNewStatusBookletPaymentDTO };
