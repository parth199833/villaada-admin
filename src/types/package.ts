export type Package = {
  name: string;
  price: number;
  invoiceDate: string;
  status: string;
};

export type BookingTableType = {
  id: number;
  unitPrise: number;
  freeCancellationTerms: number;
  numberOfNights: number;
  accommodationTaxes: number;
  typeOfTaxes: any;
  maximumCapacityOfPeople: number;
};
