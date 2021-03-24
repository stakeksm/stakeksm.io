export interface IValidator {
  name: string;
  address: string;
  statsLink: string;
  fee: string;
  selfBond: number;
  // activeBond: number;
  nominators: number;
}
