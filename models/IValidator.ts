export interface IValidator {
  name: string;
  address: string;
  fee: number;
  selfBond: number;
  // activeBond: number;
  nominators: number;
}
