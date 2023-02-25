interface AcquirerBookletDTO {
  code: number;
}

interface AcquirerAddress {
  address: string;
  cep: string;
  neighborhood: string;
}

interface UpdateAcquirerDTO {
  name: string;
  cpf: string;
  phone: string;
  whatsapp: string;
  landline: string;
  campaignId: string;
  acquirerAddress: AcquirerAddress;
  codeBooklet: AcquirerBookletDTO[];
}

export { UpdateAcquirerDTO };
