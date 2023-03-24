interface BookletProps {
  id: string;
  acquirerId: string;
  campaignId: string;
  codeBooklet: number;
  quota: number;
  paymentBookId?: string;
  createdAt: Date;
  updatedAt: Date;
}

class Booklet {
  private props: BookletProps;

  get id() {
    return this.props.id;
  }

  get acquirerId() {
    return this.props.acquirerId;
  }

  get campaignId() {
    return this.props.campaignId;
  }

  get codeBooklet() {
    return this.props.codeBooklet;
  }

  get quota() {
    return this.props.quota;
  }

  get paymentBookId() {
    return this.props.paymentBookId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  constructor(props: BookletProps) {
    this.props = props;
  }
}

export { Booklet, BookletProps };
