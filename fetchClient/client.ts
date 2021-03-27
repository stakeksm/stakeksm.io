import { ISubscanValidatorApiResponse } from '../models/ISubscanValidatorApiResponse';
import { IValidator } from '../models/IValidator';

const apiKey = 'a3503e02fd0f24fee83b286623673a26';

export const fetchSingleValidator = async (
  address: string
): Promise<IValidator> => {
  const res = await fetch(
    `https://kusama.api.subscan.io/api/scan/staking/validator`,
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({
        stash: address,
      }),
    }
  );
  const data: ISubscanValidatorApiResponse = await res.json();
  const ret = mapISubscanValidatorApiResponseToIValidator(data, address);
  return ret;
};

const mapISubscanValidatorApiResponseToIValidator = (
  data: ISubscanValidatorApiResponse,
  address: string
): IValidator => {
  const controllerDisplayName = data.data.info.controller_account_display.display.trim();
  const stashDisplayName = data.data.info.stash_account_display.display.trim();

  const name =
    controllerDisplayName !== '' ? controllerDisplayName : stashDisplayName;

  const ret: IValidator = {
    name: name,
    address: address,
    fee: data.data.info.validator_prefs_value / 10000000,
    nominators: data.data.info.count_nominators,
    selfBond: parseFloat(data.data.info.bonded_owner) / 1000000000000,
  };
  return ret;
};

export const fetchValidators = async (
  validatorAddressList: string[]
): Promise<IValidator[]> => {
  const validators: IValidator[] = await Promise.all(
    validatorAddressList.map(fetchSingleValidator)
  );
  return validators;
};
