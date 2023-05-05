interface QuotaData {
  month: string;
  year: string;
  expiryDate: string;
  drawDate: string;
  quota: number;
}

export const campaignPaymentDate = [
  {
    month: "maio",
    year: "2023",
    expiryDate: "2023-05-12",
    drawDate: "2023-05-14",
    quota: 1,
  },
  {
    month: "junho",
    year: "2023",
    expiryDate: "2023-06-09",
    drawDate: "2023-06-11",
    quota: 2,
  },
  {
    month: "julho",
    year: "2023",
    expiryDate: "2023-07-14",
    drawDate: "2023-07-16",
    quota: 3,
  },
  {
    month: "agosto",
    year: "2023",
    expiryDate: "2023-08-11",
    drawDate: "2023-08-13",
    quota: 4,
  },
  {
    month: "setembro",
    year: "2023",
    expiryDate: "2023-09-08",
    drawDate: "2023-09-10",
    quota: 5,
  },
  {
    month: "outubro",
    year: "2023",
    expiryDate: "2023-10-13",
    drawDate: "2023-10-15",
    quota: 6,
  },
  {
    month: "novembro",
    year: "2023",
    expiryDate: "2023-11-10",
    drawDate: "2023-11-12",
    quota: 7,
  },
  {
    month: "dezembro",
    year: "2023",
    expiryDate: "2023-12-08",
    drawDate: "2023-12-10",
    quota: 8,
  },
  {
    month: "janeiro",
    year: "2024",
    expiryDate: "2024-01-12",
    drawDate: "2024-01-14",
    quota: 9,
  },
  {
    month: "fevereiro",
    year: "2024",
    expiryDate: "2024-02-09",
    drawDate: "2024-02-11",
    quota: 10,
  },
  {
    month: "março",
    year: "2024",
    expiryDate: "2024-03-08",
    drawDate: "2024-03-10",
    quota: 11,
  },
  {
    month: "abril",
    year: "2024",
    expiryDate: "2024-04-12",
    drawDate: "2024-04-14",
    quota: 12,
  },
];

export function getCurrentQuotaNumber(
  quotaData: QuotaData[],
): QuotaData | null {
  const currentDate = new Date();

  for (let i = 0; i < quotaData.length; i++) {
    const expiryDate = new Date(quotaData[i].expiryDate);
    if (currentDate < expiryDate) {
      return quotaData[i];
    }
  }

  return null; // retorna null se nenhuma quota estiver disponível
}
