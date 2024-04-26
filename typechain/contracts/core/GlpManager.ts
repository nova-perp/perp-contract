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

export interface GlpManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASIS_POINTS_DIVISOR"
      | "GLP_PRECISION"
      | "MAX_COOLDOWN_DURATION"
      | "PRICE_PRECISION"
      | "USDG_DECIMALS"
      | "addLiquidity"
      | "addLiquidityForAccount"
      | "aumAddition"
      | "aumDeduction"
      | "cooldownDuration"
      | "getAum"
      | "getAumInUsdg"
      | "getAums"
      | "getGlobalShortAveragePrice"
      | "getGlobalShortDelta"
      | "getPrice"
      | "glp"
      | "gov"
      | "inPrivateMode"
      | "isHandler"
      | "lastAddedAt"
      | "removeLiquidity"
      | "removeLiquidityForAccount"
      | "setAumAdjustment"
      | "setCooldownDuration"
      | "setGov"
      | "setHandler"
      | "setInPrivateMode"
      | "setShortsTracker"
      | "setShortsTrackerAveragePriceWeight"
      | "shortsTracker"
      | "shortsTrackerAveragePriceWeight"
      | "usdg"
      | "vault"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AddLiquidity" | "RemoveLiquidity"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GLP_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_COOLDOWN_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USDG_DECIMALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityForAccount",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "aumAddition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "aumDeduction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cooldownDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getAum", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "getAumInUsdg",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "getAums", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getGlobalShortAveragePrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getGlobalShortDelta",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values: [boolean]): string;
  encodeFunctionData(functionFragment: "glp", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "inPrivateMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isHandler",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastAddedAt",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityForAccount",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAumAdjustment",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCooldownDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setInPrivateMode",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setShortsTracker",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setShortsTrackerAveragePriceWeight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shortsTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shortsTrackerAveragePriceWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "usdg", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GLP_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_COOLDOWN_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "USDG_DECIMALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "aumAddition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "aumDeduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cooldownDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAumInUsdg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAums", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalShortAveragePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalShortDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "glp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inPrivateMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastAddedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAumAdjustment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCooldownDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInPrivateMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShortsTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShortsTrackerAveragePriceWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shortsTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shortsTrackerAveragePriceWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
}

export namespace AddLiquidityEvent {
  export type InputTuple = [
    account: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    aumInUsdg: BigNumberish,
    glpSupply: BigNumberish,
    usdgAmount: BigNumberish,
    mintAmount: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    token: string,
    amount: bigint,
    aumInUsdg: bigint,
    glpSupply: bigint,
    usdgAmount: bigint,
    mintAmount: bigint
  ];
  export interface OutputObject {
    account: string;
    token: string;
    amount: bigint;
    aumInUsdg: bigint;
    glpSupply: bigint;
    usdgAmount: bigint;
    mintAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveLiquidityEvent {
  export type InputTuple = [
    account: AddressLike,
    token: AddressLike,
    glpAmount: BigNumberish,
    aumInUsdg: BigNumberish,
    glpSupply: BigNumberish,
    usdgAmount: BigNumberish,
    amountOut: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    token: string,
    glpAmount: bigint,
    aumInUsdg: bigint,
    glpSupply: bigint,
    usdgAmount: bigint,
    amountOut: bigint
  ];
  export interface OutputObject {
    account: string;
    token: string;
    glpAmount: bigint;
    aumInUsdg: bigint;
    glpSupply: bigint;
    usdgAmount: bigint;
    amountOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GlpManager extends BaseContract {
  connect(runner?: ContractRunner | null): GlpManager;
  waitForDeployment(): Promise<this>;

  interface: GlpManagerInterface;

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

  GLP_PRECISION: TypedContractMethod<[], [bigint], "view">;

  MAX_COOLDOWN_DURATION: TypedContractMethod<[], [bigint], "view">;

  PRICE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  USDG_DECIMALS: TypedContractMethod<[], [bigint], "view">;

  addLiquidity: TypedContractMethod<
    [
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  addLiquidityForAccount: TypedContractMethod<
    [
      _fundingAccount: AddressLike,
      _account: AddressLike,
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  aumAddition: TypedContractMethod<[], [bigint], "view">;

  aumDeduction: TypedContractMethod<[], [bigint], "view">;

  cooldownDuration: TypedContractMethod<[], [bigint], "view">;

  getAum: TypedContractMethod<[maximise: boolean], [bigint], "view">;

  getAumInUsdg: TypedContractMethod<[maximise: boolean], [bigint], "view">;

  getAums: TypedContractMethod<[], [bigint[]], "view">;

  getGlobalShortAveragePrice: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    "view"
  >;

  getGlobalShortDelta: TypedContractMethod<
    [_token: AddressLike, _price: BigNumberish, _size: BigNumberish],
    [[bigint, boolean]],
    "view"
  >;

  getPrice: TypedContractMethod<[_maximise: boolean], [bigint], "view">;

  glp: TypedContractMethod<[], [string], "view">;

  gov: TypedContractMethod<[], [string], "view">;

  inPrivateMode: TypedContractMethod<[], [boolean], "view">;

  isHandler: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  lastAddedAt: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  removeLiquidity: TypedContractMethod<
    [
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  removeLiquidityForAccount: TypedContractMethod<
    [
      _account: AddressLike,
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  setAumAdjustment: TypedContractMethod<
    [_aumAddition: BigNumberish, _aumDeduction: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCooldownDuration: TypedContractMethod<
    [_cooldownDuration: BigNumberish],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  setHandler: TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setInPrivateMode: TypedContractMethod<
    [_inPrivateMode: boolean],
    [void],
    "nonpayable"
  >;

  setShortsTracker: TypedContractMethod<
    [_shortsTracker: AddressLike],
    [void],
    "nonpayable"
  >;

  setShortsTrackerAveragePriceWeight: TypedContractMethod<
    [_shortsTrackerAveragePriceWeight: BigNumberish],
    [void],
    "nonpayable"
  >;

  shortsTracker: TypedContractMethod<[], [string], "view">;

  shortsTrackerAveragePriceWeight: TypedContractMethod<[], [bigint], "view">;

  usdg: TypedContractMethod<[], [string], "view">;

  vault: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BASIS_POINTS_DIVISOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "GLP_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_COOLDOWN_DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRICE_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "USDG_DECIMALS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addLiquidityForAccount"
  ): TypedContractMethod<
    [
      _fundingAccount: AddressLike,
      _account: AddressLike,
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "aumAddition"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "aumDeduction"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cooldownDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAum"
  ): TypedContractMethod<[maximise: boolean], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAumInUsdg"
  ): TypedContractMethod<[maximise: boolean], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAums"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getGlobalShortAveragePrice"
  ): TypedContractMethod<[_token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getGlobalShortDelta"
  ): TypedContractMethod<
    [_token: AddressLike, _price: BigNumberish, _size: BigNumberish],
    [[bigint, boolean]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPrice"
  ): TypedContractMethod<[_maximise: boolean], [bigint], "view">;
  getFunction(
    nameOrSignature: "glp"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "inPrivateMode"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isHandler"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastAddedAt"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityForAccount"
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAumAdjustment"
  ): TypedContractMethod<
    [_aumAddition: BigNumberish, _aumDeduction: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCooldownDuration"
  ): TypedContractMethod<
    [_cooldownDuration: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setHandler"
  ): TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInPrivateMode"
  ): TypedContractMethod<[_inPrivateMode: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setShortsTracker"
  ): TypedContractMethod<[_shortsTracker: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setShortsTrackerAveragePriceWeight"
  ): TypedContractMethod<
    [_shortsTrackerAveragePriceWeight: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "shortsTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "shortsTrackerAveragePriceWeight"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "usdg"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AddLiquidity"
  ): TypedContractEvent<
    AddLiquidityEvent.InputTuple,
    AddLiquidityEvent.OutputTuple,
    AddLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "RemoveLiquidity"
  ): TypedContractEvent<
    RemoveLiquidityEvent.InputTuple,
    RemoveLiquidityEvent.OutputTuple,
    RemoveLiquidityEvent.OutputObject
  >;

  filters: {
    "AddLiquidity(address,address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;
    AddLiquidity: TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;

    "RemoveLiquidity(address,address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;
    RemoveLiquidity: TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;
  };
}
