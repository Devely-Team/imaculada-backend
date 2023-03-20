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
}

export { UpdateAcquirerDTO };
