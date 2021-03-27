import { ISubscanValidatorApiResponse } from '../models/ISubscanValidatorApiResponse';
import { IValidator } from '../models/IValidator';
import { IValidatorBaseInfo } from '../models/ValidatorAddressList';

const apiKey = 'a3503e02fd0f24fee83b286623673a26';

export const fetchSingleValidator = async (
  validatorBaseInfo: IValidatorBaseInfo
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
        stash: validatorBaseInfo.address,
      }),
    }
  );
  const data: ISubscanValidatorApiResponse = await res.json();
  const ret = mapISubscanValidatorApiResponseToIValidator(
    data,
    validatorBaseInfo
  );
  return ret;
};

const mapISubscanValidatorApiResponseToIValidator = (
  data: ISubscanValidatorApiResponse,
  validatorBaseInfo: IValidatorBaseInfo
): IValidator => {
  const controllerDisplayName = data.data.info.controller_account_display.display.trim();
  const stashDisplayName = data.data.info.stash_account_display.display.trim();

  // try stash or controller display.
  const displayName =
    controllerDisplayName !== '' ? controllerDisplayName : stashDisplayName;

  // if neither use hardcoded value
  const name = displayName ? displayName : validatorBaseInfo.name;

  const ret: IValidator = {
    name: name,
    address: validatorBaseInfo.address,
    fee: data.data.info.validator_prefs_value / 10000000,
    nominators: data.data.info.count_nominators,
    selfBond: parseFloat(data.data.info.bonded_owner) / 1000000000000,
  };
  return ret;
};

export const fetchValidators = async (
  validatorAddressList: IValidatorBaseInfo[]
): Promise<IValidator[]> => {
  const validators: IValidator[] = await Promise.all(
    validatorAddressList.map(fetchSingleValidator)
  );
  return validators;
};
