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

export interface BasePositionManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASIS_POINTS_DIVISOR"
      | "admin"
      | "approve"
      | "depositFee"
      | "ethTransferGasLimit"
      | "feeReserves"
      | "gov"
      | "increasePositionBufferBps"
      | "maxGlobalLongSizes"
      | "maxGlobalShortSizes"
      | "referralStorage"
      | "router"
      | "sendValue"
      | "setAdmin"
      | "setDepositFee"
      | "setEthTransferGasLimit"
      | "setGov"
      | "setIncreasePositionBufferBps"
      | "setMaxGlobalSizes"
      | "setReferralStorage"
      | "shortsTracker"
      | "vault"
      | "weth"
      | "withdrawFees"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DecreasePositionReferral"
      | "IncreasePositionReferral"
      | "SetAdmin"
      | "SetDepositFee"
      | "SetEthTransferGasLimit"
      | "SetIncreasePositionBufferBps"
      | "SetMaxGlobalSizes"
      | "SetReferralStorage"
      | "WithdrawFees"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ethTransferGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeReserves",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increasePositionBufferBps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxGlobalLongSizes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxGlobalShortSizes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "referralStorage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendValue",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEthTransferGasLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setIncreasePositionBufferBps",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxGlobalSizes",
    values: [AddressLike[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferralStorage",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "shortsTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawFees",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ethTransferGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increasePositionBufferBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxGlobalLongSizes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxGlobalShortSizes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referralStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDepositFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEthTransferGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIncreasePositionBufferBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxGlobalSizes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferralStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shortsTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFees",
    data: BytesLike
  ): Result;
}

export namespace DecreasePositionReferralEvent {
  export type InputTuple = [
    account: AddressLike,
    sizeDelta: BigNumberish,
    marginFeeBasisPoints: BigNumberish,
    referralCode: BytesLike,
    referrer: AddressLike
  ];
  export type OutputTuple = [
    account: string,
    sizeDelta: bigint,
    marginFeeBasisPoints: bigint,
    referralCode: string,
    referrer: string
  ];
  export interface OutputObject {
    account: string;
    sizeDelta: bigint;
    marginFeeBasisPoints: bigint;
    referralCode: string;
    referrer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreasePositionReferralEvent {
  export type InputTuple = [
    account: AddressLike,
    sizeDelta: BigNumberish,
    marginFeeBasisPoints: BigNumberish,
    referralCode: BytesLike,
    referrer: AddressLike
  ];
  export type OutputTuple = [
    account: string,
    sizeDelta: bigint,
    marginFeeBasisPoints: bigint,
    referralCode: string,
    referrer: string
  ];
  export interface OutputObject {
    account: string;
    sizeDelta: bigint;
    marginFeeBasisPoints: bigint;
    referralCode: string;
    referrer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetAdminEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetDepositFeeEvent {
  export type InputTuple = [depositFee: BigNumberish];
  export type OutputTuple = [depositFee: bigint];
  export interface OutputObject {
    depositFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetEthTransferGasLimitEvent {
  export type InputTuple = [ethTransferGasLimit: BigNumberish];
  export type OutputTuple = [ethTransferGasLimit: bigint];
  export interface OutputObject {
    ethTransferGasLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetIncreasePositionBufferBpsEvent {
  export type InputTuple = [increasePositionBufferBps: BigNumberish];
  export type OutputTuple = [increasePositionBufferBps: bigint];
  export interface OutputObject {
    increasePositionBufferBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetMaxGlobalSizesEvent {
  export type InputTuple = [
    tokens: AddressLike[],
    longSizes: BigNumberish[],
    shortSizes: BigNumberish[]
  ];
  export type OutputTuple = [
    tokens: string[],
    longSizes: bigint[],
    shortSizes: bigint[]
  ];
  export interface OutputObject {
    tokens: string[];
    longSizes: bigint[];
    shortSizes: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetReferralStorageEvent {
  export type InputTuple = [referralStorage: AddressLike];
  export type OutputTuple = [referralStorage: string];
  export interface OutputObject {
    referralStorage: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawFeesEvent {
  export type InputTuple = [
    token: AddressLike,
    receiver: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, receiver: string, amount: bigint];
  export interface OutputObject {
    token: string;
    receiver: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BasePositionManager extends BaseContract {
  connect(runner?: ContractRunner | null): BasePositionManager;
  waitForDeployment(): Promise<this>;

  interface: BasePositionManagerInterface;

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

  BASIS_POINTS_DIVISOR: TypedContractMethod<[], [bigint], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  approve: TypedContractMethod<
    [_token: AddressLike, _spender: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  depositFee: TypedContractMethod<[], [bigint], "view">;

  ethTransferGasLimit: TypedContractMethod<[], [bigint], "view">;

  feeReserves: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  gov: TypedContractMethod<[], [string], "view">;

  increasePositionBufferBps: TypedContractMethod<[], [bigint], "view">;

  maxGlobalLongSizes: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  maxGlobalShortSizes: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  referralStorage: TypedContractMethod<[], [string], "view">;

  router: TypedContractMethod<[], [string], "view">;

  sendValue: TypedContractMethod<
    [_receiver: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  setDepositFee: TypedContractMethod<
    [_depositFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  setEthTransferGasLimit: TypedContractMethod<
    [_ethTransferGasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  setIncreasePositionBufferBps: TypedContractMethod<
    [_increasePositionBufferBps: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaxGlobalSizes: TypedContractMethod<
    [
      _tokens: AddressLike[],
      _longSizes: BigNumberish[],
      _shortSizes: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  setReferralStorage: TypedContractMethod<
    [_referralStorage: AddressLike],
    [void],
    "nonpayable"
  >;

  shortsTracker: TypedContractMethod<[], [string], "view">;

  vault: TypedContractMethod<[], [string], "view">;

  weth: TypedContractMethod<[], [string], "view">;

  withdrawFees: TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BASIS_POINTS_DIVISOR"
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
    nameOrSignature: "depositFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ethTransferGasLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeReserves"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "increasePositionBufferBps"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxGlobalLongSizes"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxGlobalShortSizes"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "referralStorage"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sendValue"
  ): TypedContractMethod<
    [_receiver: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDepositFee"
  ): TypedContractMethod<[_depositFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setEthTransferGasLimit"
  ): TypedContractMethod<
    [_ethTransferGasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIncreasePositionBufferBps"
  ): TypedContractMethod<
    [_increasePositionBufferBps: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxGlobalSizes"
  ): TypedContractMethod<
    [
      _tokens: AddressLike[],
      _longSizes: BigNumberish[],
      _shortSizes: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setReferralStorage"
  ): TypedContractMethod<[_referralStorage: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "shortsTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "weth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawFees"
  ): TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "DecreasePositionReferral"
  ): TypedContractEvent<
    DecreasePositionReferralEvent.InputTuple,
    DecreasePositionReferralEvent.OutputTuple,
    DecreasePositionReferralEvent.OutputObject
  >;
  getEvent(
    key: "IncreasePositionReferral"
  ): TypedContractEvent<
    IncreasePositionReferralEvent.InputTuple,
    IncreasePositionReferralEvent.OutputTuple,
    IncreasePositionReferralEvent.OutputObject
  >;
  getEvent(
    key: "SetAdmin"
  ): TypedContractEvent<
    SetAdminEvent.InputTuple,
    SetAdminEvent.OutputTuple,
    SetAdminEvent.OutputObject
  >;
  getEvent(
    key: "SetDepositFee"
  ): TypedContractEvent<
    SetDepositFeeEvent.InputTuple,
    SetDepositFeeEvent.OutputTuple,
    SetDepositFeeEvent.OutputObject
  >;
  getEvent(
    key: "SetEthTransferGasLimit"
  ): TypedContractEvent<
    SetEthTransferGasLimitEvent.InputTuple,
    SetEthTransferGasLimitEvent.OutputTuple,
    SetEthTransferGasLimitEvent.OutputObject
  >;
  getEvent(
    key: "SetIncreasePositionBufferBps"
  ): TypedContractEvent<
    SetIncreasePositionBufferBpsEvent.InputTuple,
    SetIncreasePositionBufferBpsEvent.OutputTuple,
    SetIncreasePositionBufferBpsEvent.OutputObject
  >;
  getEvent(
    key: "SetMaxGlobalSizes"
  ): TypedContractEvent<
    SetMaxGlobalSizesEvent.InputTuple,
    SetMaxGlobalSizesEvent.OutputTuple,
    SetMaxGlobalSizesEvent.OutputObject
  >;
  getEvent(
    key: "SetReferralStorage"
  ): TypedContractEvent<
    SetReferralStorageEvent.InputTuple,
    SetReferralStorageEvent.OutputTuple,
    SetReferralStorageEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawFees"
  ): TypedContractEvent<
    WithdrawFeesEvent.InputTuple,
    WithdrawFeesEvent.OutputTuple,
    WithdrawFeesEvent.OutputObject
  >;

  filters: {
    "DecreasePositionReferral(address,uint256,uint256,bytes32,address)": TypedContractEvent<
      DecreasePositionReferralEvent.InputTuple,
      DecreasePositionReferralEvent.OutputTuple,
      DecreasePositionReferralEvent.OutputObject
    >;
    DecreasePositionReferral: TypedContractEvent<
      DecreasePositionReferralEvent.InputTuple,
      DecreasePositionReferralEvent.OutputTuple,
      DecreasePositionReferralEvent.OutputObject
    >;

    "IncreasePositionReferral(address,uint256,uint256,bytes32,address)": TypedContractEvent<
      IncreasePositionReferralEvent.InputTuple,
      IncreasePositionReferralEvent.OutputTuple,
      IncreasePositionReferralEvent.OutputObject
    >;
    IncreasePositionReferral: TypedContractEvent<
      IncreasePositionReferralEvent.InputTuple,
      IncreasePositionReferralEvent.OutputTuple,
      IncreasePositionReferralEvent.OutputObject
    >;

    "SetAdmin(address)": TypedContractEvent<
      SetAdminEvent.InputTuple,
      SetAdminEvent.OutputTuple,
      SetAdminEvent.OutputObject
    >;
    SetAdmin: TypedContractEvent<
      SetAdminEvent.InputTuple,
      SetAdminEvent.OutputTuple,
      SetAdminEvent.OutputObject
    >;

    "SetDepositFee(uint256)": TypedContractEvent<
      SetDepositFeeEvent.InputTuple,
      SetDepositFeeEvent.OutputTuple,
      SetDepositFeeEvent.OutputObject
    >;
    SetDepositFee: TypedContractEvent<
      SetDepositFeeEvent.InputTuple,
      SetDepositFeeEvent.OutputTuple,
      SetDepositFeeEvent.OutputObject
    >;

    "SetEthTransferGasLimit(uint256)": TypedContractEvent<
      SetEthTransferGasLimitEvent.InputTuple,
      SetEthTransferGasLimitEvent.OutputTuple,
      SetEthTransferGasLimitEvent.OutputObject
    >;
    SetEthTransferGasLimit: TypedContractEvent<
      SetEthTransferGasLimitEvent.InputTuple,
      SetEthTransferGasLimitEvent.OutputTuple,
      SetEthTransferGasLimitEvent.OutputObject
    >;

    "SetIncreasePositionBufferBps(uint256)": TypedContractEvent<
      SetIncreasePositionBufferBpsEvent.InputTuple,
      SetIncreasePositionBufferBpsEvent.OutputTuple,
      SetIncreasePositionBufferBpsEvent.OutputObject
    >;
    SetIncreasePositionBufferBps: TypedContractEvent<
      SetIncreasePositionBufferBpsEvent.InputTuple,
      SetIncreasePositionBufferBpsEvent.OutputTuple,
      SetIncreasePositionBufferBpsEvent.OutputObject
    >;

    "SetMaxGlobalSizes(address[],uint256[],uint256[])": TypedContractEvent<
      SetMaxGlobalSizesEvent.InputTuple,
      SetMaxGlobalSizesEvent.OutputTuple,
      SetMaxGlobalSizesEvent.OutputObject
    >;
    SetMaxGlobalSizes: TypedContractEvent<
      SetMaxGlobalSizesEvent.InputTuple,
      SetMaxGlobalSizesEvent.OutputTuple,
      SetMaxGlobalSizesEvent.OutputObject
    >;

    "SetReferralStorage(address)": TypedContractEvent<
      SetReferralStorageEvent.InputTuple,
      SetReferralStorageEvent.OutputTuple,
      SetReferralStorageEvent.OutputObject
    >;
    SetReferralStorage: TypedContractEvent<
      SetReferralStorageEvent.InputTuple,
      SetReferralStorageEvent.OutputTuple,
      SetReferralStorageEvent.OutputObject
    >;

    "WithdrawFees(address,address,uint256)": TypedContractEvent<
      WithdrawFeesEvent.InputTuple,
      WithdrawFeesEvent.OutputTuple,
      WithdrawFeesEvent.OutputObject
    >;
    WithdrawFees: TypedContractEvent<
      WithdrawFeesEvent.InputTuple,
      WithdrawFeesEvent.OutputTuple,
      WithdrawFeesEvent.OutputObject
    >;
  };
}
