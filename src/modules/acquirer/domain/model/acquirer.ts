import { BookletProps } from "../../../booklet/domain/model/booklet";

interface AcquirerProps {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  whatsapp: string;
  landline: string;
  address: string;
  cep: string;
  neighborhood: string;
  booklet: BookletProps[];
  createdAt: Date;
  updatedAt: Date;
}

class Acquirer {
  private props: AcquirerProps;

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get cpf() {
    return this.props.cpf;
  }

  get phone() {
    return this.props.phone;
  }

  get whatsapp() {
    return this.props.whatsapp;
  }

  get landline() {
    return this.props.landline;
  }

  get booklet() {
    return this.props.booklet;
  }

  get address() {
    return this.props.address;
  }

  get cep() {
    return this.props.cep;
  }

  get neighborhood() {
    return this.props.neighborhood;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  constructor(props: AcquirerProps) {
    this.props = props;
  }
}

export { Acquirer, AcquirerProps };
