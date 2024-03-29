type StatusPayment = "Paid" | "Pending" | "Canceled";
type TypePayment = "CreditCard" | "Boleto" | "Pix";

interface BookletPaymentProps {
  id: string;
  bookletId: string;
  isPaid: boolean;
  typePayment: TypePayment;
  status: StatusPayment;
  payDay: Date;
  createdAt: Date;
  updatedAt: Date;
}

class BookletPayment {
  private props: BookletPaymentProps;

  get id() {
    return this.props.id;
  }

  get bookletId() {
    return this.props.bookletId;
  }

  get isPaid() {
    return this.props.isPaid;
  }

  get typePayment() {
    return this.props.typePayment;
  }

  get status() {
    return this.props.status;
  }

  get payDay() {
    return this.props.payDay;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  constructor(props: BookletPaymentProps) {
    this.props = props;
  }
}

export { BookletPayment, BookletPaymentProps, StatusPayment, TypePayment };
