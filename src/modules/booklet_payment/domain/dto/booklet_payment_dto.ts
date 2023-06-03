import { StatusPayment, TypePayment } from "../model/booklet_payment";

interface CreateBookletPaymentDTO {
  bookletId: string;
  isPaid: boolean;
  typePayment: TypePayment;
  status: StatusPayment;
  payDay: Date;
  obs?: string;
}

interface SetNewStatusBookletPaymentDTO {
  isPaid: boolean;
  typePayment: TypePayment;
  status: StatusPayment;
  payDay: Date;
  obs?: string;
}

export { CreateBookletPaymentDTO, SetNewStatusBookletPaymentDTO };
