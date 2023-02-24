interface CreateAcquirerBookletDTO {
  code: number;
}

interface CreateAcquirerAddress {
  address: string;
  cep: string;
  neighborhood: string;
}

interface CreateAcquirerDTO {
  name: string;
  cpf: string;
  phone: string;
  whatsapp: string;
  landline: string;
  campaignId: string;
  acquirerAddress: CreateAcquirerAddress;
  codeBooklet: CreateAcquirerBookletDTO[];
}

export { CreateAcquirerDTO, CreateAcquirerBookletDTO, CreateAcquirerAddress };
