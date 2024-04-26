/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IReferralStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "codeOwners"
      | "getTraderReferralInfo"
      | "govSetCodeOwner"
      | "referrerDiscountShares"
      | "referrerTiers"
      | "setReferrerTier"
      | "setTier"
      | "setTraderReferralCode"
      | "traderReferralCodes"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "codeOwners",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTraderReferralInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "govSetCodeOwner",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "referrerDiscountShares",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "referrerTiers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferrerTier",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTier",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTraderReferralCode",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "traderReferralCodes",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "codeOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTraderReferralInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "govSetCodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referrerDiscountShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referrerTiers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferrerTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTraderReferralCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "traderReferralCodes",
    data: BytesLike
  ): Result;
}

export interface IReferralStorage extends BaseContract {
  connect(runner?: ContractRunner | null): IReferralStorage;
  waitForDeployment(): Promise<this>;

  interface: IReferralStorageInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  codeOwners: TypedContractMethod<[_code: BytesLike], [string], "view">;

  getTraderReferralInfo: TypedContractMethod<
    [_account: AddressLike],
    [[string, string]],
    "view"
  >;

  govSetCodeOwner: TypedContractMethod<
    [_code: BytesLike, _newAccount: AddressLike],
    [void],
    "nonpayable"
  >;

  referrerDiscountShares: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  referrerTiers: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  setReferrerTier: TypedContractMethod<
    [_referrer: AddressLike, _tierId: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTier: TypedContractMethod<
    [
      _tierId: BigNumberish,
      _totalRebate: BigNumberish,
      _discountShare: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setTraderReferralCode: TypedContractMethod<
    [_account: AddressLike, _code: BytesLike],
    [void],
    "nonpayable"
  >;

  traderReferralCodes: TypedContractMethod<
    [_account: AddressLike],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "codeOwners"
  ): TypedContractMethod<[_code: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getTraderReferralInfo"
  ): TypedContractMethod<[_account: AddressLike], [[string, string]], "view">;
  getFunction(
    nameOrSignature: "govSetCodeOwner"
  ): TypedContractMethod<
    [_code: BytesLike, _newAccount: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "referrerDiscountShares"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "referrerTiers"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setReferrerTier"
  ): TypedContractMethod<
    [_referrer: AddressLike, _tierId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTier"
  ): TypedContractMethod<
    [
      _tierId: BigNumberish,
      _totalRebate: BigNumberish,
      _discountShare: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTraderReferralCode"
  ): TypedContractMethod<
    [_account: AddressLike, _code: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "traderReferralCodes"
  ): TypedContractMethod<[_account: AddressLike], [string], "view">;

  filters: {};
}
