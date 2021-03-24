export interface SessionKey {
  babe: string;
  grandpa: string;
  im_online: string;
  authority_discovery: string;
}

export interface StashAccountDisplay {
  address: string;
  display: string;
  judgements?: any;
  parent_display: string;
  parent: string;
  account_index: string;
  identity: boolean;
}

export interface Judgement {
  index: number;
  judgement: string;
}

export interface ControllerAccountDisplay {
  address: string;
  display: string;
  judgements: Judgement[];
  parent_display: string;
  parent: string;
  account_index: string;
  identity: boolean;
}

export interface Info {
  rank_validator: number;
  bonded_nominators: string;
  bonded_owner: string;
  count_nominators: number;
  validator_prefs_value: number;
  latest_mining: number;
  reward_point: number;
  session_key: SessionKey;
  stash_account_display: StashAccountDisplay;
  controller_account_display: ControllerAccountDisplay;
  node_name: string;
  reward_account: string;
  reward_pot_balance: string;
}

export interface Data {
  info: Info;
}

export interface ISubscanValidatorApiResponse {
  code: number;
  message: string;
  ttl: number;
  data: Data;
}
