import { BookletProps } from "../../../booklet/domain/model/booklet";

interface UpdateAcquirerDTO {
  name: string;
  cpf: string;
  whatsapp: string;
  landline: string;
  booklet: BookletProps[];
}

export { UpdateAcquirerDTO };
