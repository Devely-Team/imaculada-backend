interface AcquirerAddress {
  address: string;
  cep: string;
  neighborhood: string;
}

interface UpdateAcquirerDTO {
  name: string;
  phone: string;
  whatsapp: string;
  landline: string;
  acquirerAddress: AcquirerAddress;
  codeBooklet: AcquirerBookletDTO[];
}

interface UpdateBookletAcquirerDTO {
  campaignId: string;
  codeBooklet: AcquirerBookletDTO[];
}

export { UpdateAcquirerDTO, UpdateBookletAcquirerDTO };
