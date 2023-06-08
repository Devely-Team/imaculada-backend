export interface CreateSingleBookletDTO {
  id: string;
  acquirerId: string;
  campaignId: string;
  codeBooklet: number;
  quota: number;
  createdAt: Date;
  updatedAt: Date;
}
