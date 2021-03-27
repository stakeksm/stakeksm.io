export interface IValidator {
  name: string;
  address: string;
  fee: string;
  selfBond: number;
  // activeBond: number;
  nominators: number;
}
