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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface PriceFeedTimelockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_BUFFER"
      | "admin"
      | "approve"
      | "buffer"
      | "cancelAction"
      | "isHandler"
      | "isKeeper"
      | "pendingActions"
      | "priceFeedSetTokenConfig"
      | "setAdjustment"
      | "setAdmin"
      | "setBuffer"
      | "setContractHandler"
      | "setExternalAdmin"
      | "setGov"
      | "setIsAmmEnabled"
      | "setIsSecondaryPriceEnabled"
      | "setIsSpreadEnabled"
      | "setKeeper"
      | "setMaxPriceUpdateDelay"
      | "setMaxStrictPriceDeviation"
      | "setMinBlockInterval"
      | "setPriceDuration"
      | "setPriceFeedUpdater"
      | "setPriceFeedWatcher"
      | "setPriceSampleSpace"
      | "setSpreadBasisPoints"
      | "setSpreadBasisPointsIfChainError"
      | "setSpreadBasisPointsIfInactive"
      | "setUseV2Pricing"
      | "setVaultPriceFeed"
      | "signalApprove"
      | "signalPriceFeedSetTokenConfig"
      | "signalSetGov"
      | "signalSetPriceFeedUpdater"
      | "signalSetPriceFeedWatcher"
      | "signalWithdrawToken"
      | "tokenManager"
      | "transferIn"
      | "withdrawToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClearAction"
      | "SignalApprove"
      | "SignalPendingAction"
      | "SignalPriceFeedSetTokenConfig"
      | "SignalSetGov"
      | "SignalSetPriceFeedWatcher"
      | "SignalWithdrawToken"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "MAX_BUFFER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buffer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelAction",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isHandler",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isKeeper",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingActions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeedSetTokenConfig",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdjustment",
    values: [AddressLike, AddressLike, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setBuffer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setContractHandler",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setExternalAdmin",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setGov",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsAmmEnabled",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsSecondaryPriceEnabled",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsSpreadEnabled",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setKeeper",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxPriceUpdateDelay",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxStrictPriceDeviation",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinBlockInterval",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceDuration",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceFeedUpdater",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceFeedWatcher",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceSampleSpace",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSpreadBasisPoints",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSpreadBasisPointsIfChainError",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSpreadBasisPointsIfInactive",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUseV2Pricing",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setVaultPriceFeed",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signalApprove",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalPriceFeedSetTokenConfig",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetGov",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetPriceFeedUpdater",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetPriceFeedWatcher",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "signalWithdrawToken",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferIn",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "MAX_BUFFER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedSetTokenConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdjustment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBuffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExternalAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIsAmmEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsSecondaryPriceEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsSpreadEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxPriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxStrictPriceDeviation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinBlockInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceFeedUpdater",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceFeedWatcher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceSampleSpace",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSpreadBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSpreadBasisPointsIfChainError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSpreadBasisPointsIfInactive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUseV2Pricing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVaultPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalPriceFeedSetTokenConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetPriceFeedUpdater",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetPriceFeedWatcher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalWithdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transferIn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
}

export namespace ClearActionEvent {
  export type InputTuple = [action: BytesLike];
  export type OutputTuple = [action: string];
  export interface OutputObject {
    action: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalApproveEvent {
  export type InputTuple = [
    token: AddressLike,
    spender: AddressLike,
    amount: BigNumberish,
    action: BytesLike
  ];
  export type OutputTuple = [
    token: string,
    spender: string,
    amount: bigint,
    action: string
  ];
  export interface OutputObject {
    token: string;
    spender: string;
    amount: bigint;
    action: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalPendingActionEvent {
  export type InputTuple = [action: BytesLike];
  export type OutputTuple = [action: string];
  export interface OutputObject {
    action: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalPriceFeedSetTokenConfigEvent {
  export type InputTuple = [
    vaultPriceFeed: AddressLike,
    token: AddressLike,
    priceFeed: AddressLike,
    priceDecimals: BigNumberish,
    isStrictStable: boolean
  ];
  export type OutputTuple = [
    vaultPriceFeed: string,
    token: string,
    priceFeed: string,
    priceDecimals: bigint,
    isStrictStable: boolean
  ];
  export interface OutputObject {
    vaultPriceFeed: string;
    token: string;
    priceFeed: string;
    priceDecimals: bigint;
    isStrictStable: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalSetGovEvent {
  export type InputTuple = [
    target: AddressLike,
    gov: AddressLike,
    action: BytesLike
  ];
  export type OutputTuple = [target: string, gov: string, action: string];
  export interface OutputObject {
    target: string;
    gov: string;
    action: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalSetPriceFeedWatcherEvent {
  export type InputTuple = [
    fastPriceFeed: AddressLike,
    account: AddressLike,
    isActive: boolean
  ];
  export type OutputTuple = [
    fastPriceFeed: string,
    account: string,
    isActive: boolean
  ];
  export interface OutputObject {
    fastPriceFeed: string;
    account: string;
    isActive: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalWithdrawTokenEvent {
  export type InputTuple = [
    target: AddressLike,
    token: AddressLike,
    receiver: AddressLike,
    amount: BigNumberish,
    action: BytesLike
  ];
  export type OutputTuple = [
    target: string,
    token: string,
    receiver: string,
    amount: bigint,
    action: string
  ];
  export interface OutputObject {
    target: string;
    token: string;
    receiver: string;
    amount: bigint;
    action: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PriceFeedTimelock extends BaseContract {
  connect(runner?: ContractRunner | null): PriceFeedTimelock;
  waitForDeployment(): Promise<this>;

  interface: PriceFeedTimelockInterface;

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

  MAX_BUFFER: TypedContractMethod<[], [bigint], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  approve: TypedContractMethod<
    [_token: AddressLike, _spender: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  buffer: TypedContractMethod<[], [bigint], "view">;

  cancelAction: TypedContractMethod<[_action: BytesLike], [void], "nonpayable">;

  isHandler: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isKeeper: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  pendingActions: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  priceFeedSetTokenConfig: TypedContractMethod<
    [
      _vaultPriceFeed: AddressLike,
      _token: AddressLike,
      _priceFeed: AddressLike,
      _priceDecimals: BigNumberish,
      _isStrictStable: boolean
    ],
    [void],
    "nonpayable"
  >;

  setAdjustment: TypedContractMethod<
    [
      _priceFeed: AddressLike,
      _token: AddressLike,
      _isAdditive: boolean,
      _adjustmentBps: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  setBuffer: TypedContractMethod<[_buffer: BigNumberish], [void], "nonpayable">;

  setContractHandler: TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setExternalAdmin: TypedContractMethod<
    [_target: AddressLike, _admin: AddressLike],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<
    [_target: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;

  setIsAmmEnabled: TypedContractMethod<
    [_priceFeed: AddressLike, _isEnabled: boolean],
    [void],
    "nonpayable"
  >;

  setIsSecondaryPriceEnabled: TypedContractMethod<
    [_priceFeed: AddressLike, _isEnabled: boolean],
    [void],
    "nonpayable"
  >;

  setIsSpreadEnabled: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _isSpreadEnabled: boolean],
    [void],
    "nonpayable"
  >;

  setKeeper: TypedContractMethod<
    [_keeper: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setMaxPriceUpdateDelay: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _maxPriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaxStrictPriceDeviation: TypedContractMethod<
    [_priceFeed: AddressLike, _maxStrictPriceDeviation: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMinBlockInterval: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _minBlockInterval: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPriceDuration: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _priceDuration: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPriceFeedUpdater: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setPriceFeedWatcher: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setPriceSampleSpace: TypedContractMethod<
    [_priceFeed: AddressLike, _priceSampleSpace: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSpreadBasisPoints: TypedContractMethod<
    [
      _priceFeed: AddressLike,
      _token: AddressLike,
      _spreadBasisPoints: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setSpreadBasisPointsIfChainError: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _spreadBasisPointsIfChainError: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSpreadBasisPointsIfInactive: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _spreadBasisPointsIfInactive: BigNumberish],
    [void],
    "nonpayable"
  >;

  setUseV2Pricing: TypedContractMethod<
    [_priceFeed: AddressLike, _useV2Pricing: boolean],
    [void],
    "nonpayable"
  >;

  setVaultPriceFeed: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _vaultPriceFeed: AddressLike],
    [void],
    "nonpayable"
  >;

  signalApprove: TypedContractMethod<
    [_token: AddressLike, _spender: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  signalPriceFeedSetTokenConfig: TypedContractMethod<
    [
      _vaultPriceFeed: AddressLike,
      _token: AddressLike,
      _priceFeed: AddressLike,
      _priceDecimals: BigNumberish,
      _isStrictStable: boolean
    ],
    [void],
    "nonpayable"
  >;

  signalSetGov: TypedContractMethod<
    [_target: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;

  signalSetPriceFeedUpdater: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  signalSetPriceFeedWatcher: TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  signalWithdrawToken: TypedContractMethod<
    [
      _target: AddressLike,
      _token: AddressLike,
      _receiver: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  tokenManager: TypedContractMethod<[], [string], "view">;

  transferIn: TypedContractMethod<
    [_sender: AddressLike, _token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawToken: TypedContractMethod<
    [
      _target: AddressLike,
      _token: AddressLike,
      _receiver: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_BUFFER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [_token: AddressLike, _spender: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buffer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cancelAction"
  ): TypedContractMethod<[_action: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isHandler"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isKeeper"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "pendingActions"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceFeedSetTokenConfig"
  ): TypedContractMethod<
    [
      _vaultPriceFeed: AddressLike,
      _token: AddressLike,
      _priceFeed: AddressLike,
      _priceDecimals: BigNumberish,
      _isStrictStable: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAdjustment"
  ): TypedContractMethod<
    [
      _priceFeed: AddressLike,
      _token: AddressLike,
      _isAdditive: boolean,
      _adjustmentBps: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBuffer"
  ): TypedContractMethod<[_buffer: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setContractHandler"
  ): TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setExternalAdmin"
  ): TypedContractMethod<
    [_target: AddressLike, _admin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<
    [_target: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setIsAmmEnabled"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _isEnabled: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setIsSecondaryPriceEnabled"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _isEnabled: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setIsSpreadEnabled"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _isSpreadEnabled: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setKeeper"
  ): TypedContractMethod<
    [_keeper: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxPriceUpdateDelay"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _maxPriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxStrictPriceDeviation"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _maxStrictPriceDeviation: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMinBlockInterval"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _minBlockInterval: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPriceDuration"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _priceDuration: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPriceFeedUpdater"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPriceFeedWatcher"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPriceSampleSpace"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _priceSampleSpace: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSpreadBasisPoints"
  ): TypedContractMethod<
    [
      _priceFeed: AddressLike,
      _token: AddressLike,
      _spreadBasisPoints: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSpreadBasisPointsIfChainError"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _spreadBasisPointsIfChainError: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSpreadBasisPointsIfInactive"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _spreadBasisPointsIfInactive: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setUseV2Pricing"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _useV2Pricing: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setVaultPriceFeed"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _vaultPriceFeed: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalApprove"
  ): TypedContractMethod<
    [_token: AddressLike, _spender: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalPriceFeedSetTokenConfig"
  ): TypedContractMethod<
    [
      _vaultPriceFeed: AddressLike,
      _token: AddressLike,
      _priceFeed: AddressLike,
      _priceDecimals: BigNumberish,
      _isStrictStable: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetGov"
  ): TypedContractMethod<
    [_target: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetPriceFeedUpdater"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetPriceFeedWatcher"
  ): TypedContractMethod<
    [_fastPriceFeed: AddressLike, _account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalWithdrawToken"
  ): TypedContractMethod<
    [
      _target: AddressLike,
      _token: AddressLike,
      _receiver: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tokenManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferIn"
  ): TypedContractMethod<
    [_sender: AddressLike, _token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawToken"
  ): TypedContractMethod<
    [
      _target: AddressLike,
      _token: AddressLike,
      _receiver: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ClearAction"
  ): TypedContractEvent<
    ClearActionEvent.InputTuple,
    ClearActionEvent.OutputTuple,
    ClearActionEvent.OutputObject
  >;
  getEvent(
    key: "SignalApprove"
  ): TypedContractEvent<
    SignalApproveEvent.InputTuple,
    SignalApproveEvent.OutputTuple,
    SignalApproveEvent.OutputObject
  >;
  getEvent(
    key: "SignalPendingAction"
  ): TypedContractEvent<
    SignalPendingActionEvent.InputTuple,
    SignalPendingActionEvent.OutputTuple,
    SignalPendingActionEvent.OutputObject
  >;
  getEvent(
    key: "SignalPriceFeedSetTokenConfig"
  ): TypedContractEvent<
    SignalPriceFeedSetTokenConfigEvent.InputTuple,
    SignalPriceFeedSetTokenConfigEvent.OutputTuple,
    SignalPriceFeedSetTokenConfigEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetGov"
  ): TypedContractEvent<
    SignalSetGovEvent.InputTuple,
    SignalSetGovEvent.OutputTuple,
    SignalSetGovEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetPriceFeedWatcher"
  ): TypedContractEvent<
    SignalSetPriceFeedWatcherEvent.InputTuple,
    SignalSetPriceFeedWatcherEvent.OutputTuple,
    SignalSetPriceFeedWatcherEvent.OutputObject
  >;
  getEvent(
    key: "SignalWithdrawToken"
  ): TypedContractEvent<
    SignalWithdrawTokenEvent.InputTuple,
    SignalWithdrawTokenEvent.OutputTuple,
    SignalWithdrawTokenEvent.OutputObject
  >;

  filters: {
    "ClearAction(bytes32)": TypedContractEvent<
      ClearActionEvent.InputTuple,
      ClearActionEvent.OutputTuple,
      ClearActionEvent.OutputObject
    >;
    ClearAction: TypedContractEvent<
      ClearActionEvent.InputTuple,
      ClearActionEvent.OutputTuple,
      ClearActionEvent.OutputObject
    >;

    "SignalApprove(address,address,uint256,bytes32)": TypedContractEvent<
      SignalApproveEvent.InputTuple,
      SignalApproveEvent.OutputTuple,
      SignalApproveEvent.OutputObject
    >;
    SignalApprove: TypedContractEvent<
      SignalApproveEvent.InputTuple,
      SignalApproveEvent.OutputTuple,
      SignalApproveEvent.OutputObject
    >;

    "SignalPendingAction(bytes32)": TypedContractEvent<
      SignalPendingActionEvent.InputTuple,
      SignalPendingActionEvent.OutputTuple,
      SignalPendingActionEvent.OutputObject
    >;
    SignalPendingAction: TypedContractEvent<
      SignalPendingActionEvent.InputTuple,
      SignalPendingActionEvent.OutputTuple,
      SignalPendingActionEvent.OutputObject
    >;

    "SignalPriceFeedSetTokenConfig(address,address,address,uint256,bool)": TypedContractEvent<
      SignalPriceFeedSetTokenConfigEvent.InputTuple,
      SignalPriceFeedSetTokenConfigEvent.OutputTuple,
      SignalPriceFeedSetTokenConfigEvent.OutputObject
    >;
    SignalPriceFeedSetTokenConfig: TypedContractEvent<
      SignalPriceFeedSetTokenConfigEvent.InputTuple,
      SignalPriceFeedSetTokenConfigEvent.OutputTuple,
      SignalPriceFeedSetTokenConfigEvent.OutputObject
    >;

    "SignalSetGov(address,address,bytes32)": TypedContractEvent<
      SignalSetGovEvent.InputTuple,
      SignalSetGovEvent.OutputTuple,
      SignalSetGovEvent.OutputObject
    >;
    SignalSetGov: TypedContractEvent<
      SignalSetGovEvent.InputTuple,
      SignalSetGovEvent.OutputTuple,
      SignalSetGovEvent.OutputObject
    >;

    "SignalSetPriceFeedWatcher(address,address,bool)": TypedContractEvent<
      SignalSetPriceFeedWatcherEvent.InputTuple,
      SignalSetPriceFeedWatcherEvent.OutputTuple,
      SignalSetPriceFeedWatcherEvent.OutputObject
    >;
    SignalSetPriceFeedWatcher: TypedContractEvent<
      SignalSetPriceFeedWatcherEvent.InputTuple,
      SignalSetPriceFeedWatcherEvent.OutputTuple,
      SignalSetPriceFeedWatcherEvent.OutputObject
    >;

    "SignalWithdrawToken(address,address,address,uint256,bytes32)": TypedContractEvent<
      SignalWithdrawTokenEvent.InputTuple,
      SignalWithdrawTokenEvent.OutputTuple,
      SignalWithdrawTokenEvent.OutputObject
    >;
    SignalWithdrawToken: TypedContractEvent<
      SignalWithdrawTokenEvent.InputTuple,
      SignalWithdrawTokenEvent.OutputTuple,
      SignalWithdrawTokenEvent.OutputObject
    >;
  };
}
