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

export interface FastPriceFeedInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASIS_POINTS_DIVISOR"
      | "BITMASK_32"
      | "CUMULATIVE_DELTA_PRECISION"
      | "MAX_CUMULATIVE_FAST_DELTA"
      | "MAX_CUMULATIVE_REF_DELTA"
      | "MAX_PRICE_DURATION"
      | "MAX_REF_PRICE"
      | "PRICE_PRECISION"
      | "disableFastPrice"
      | "disableFastPriceVoteCount"
      | "disableFastPriceVotes"
      | "enableFastPrice"
      | "fastPriceEvents"
      | "favorFastPrice"
      | "getPrice"
      | "getPriceData"
      | "gov"
      | "initialize"
      | "isInitialized"
      | "isSigner"
      | "isSpreadEnabled"
      | "isUpdater"
      | "lastUpdatedAt"
      | "lastUpdatedBlock"
      | "maxCumulativeDeltaDiffs"
      | "maxDeviationBasisPoints"
      | "maxPriceUpdateDelay"
      | "maxTimeDeviation"
      | "minAuthorizations"
      | "minBlockInterval"
      | "priceData"
      | "priceDataInterval"
      | "priceDuration"
      | "prices"
      | "setCompactedPrices"
      | "setFastPriceEvents"
      | "setGov"
      | "setIsSpreadEnabled"
      | "setLastUpdatedAt"
      | "setMaxCumulativeDeltaDiffs"
      | "setMaxDeviationBasisPoints"
      | "setMaxPriceUpdateDelay"
      | "setMaxTimeDeviation"
      | "setMinAuthorizations"
      | "setMinBlockInterval"
      | "setPriceDataInterval"
      | "setPriceDuration"
      | "setPrices"
      | "setPricesWithBits"
      | "setPricesWithBitsAndExecute"
      | "setSigner"
      | "setSpreadBasisPointsIfChainError"
      | "setSpreadBasisPointsIfInactive"
      | "setTokenManager"
      | "setTokens"
      | "setUpdater"
      | "setVaultPriceFeed"
      | "spreadBasisPointsIfChainError"
      | "spreadBasisPointsIfInactive"
      | "tokenManager"
      | "tokenPrecisions"
      | "tokens"
      | "vaultPriceFeed"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DisableFastPrice"
      | "EnableFastPrice"
      | "MaxCumulativeDeltaDiffExceeded"
      | "PriceData"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BITMASK_32",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CUMULATIVE_DELTA_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_CUMULATIVE_FAST_DELTA",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_CUMULATIVE_REF_DELTA",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_PRICE_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_REF_PRICE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableFastPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableFastPriceVoteCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableFastPriceVotes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enableFastPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fastPriceEvents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "favorFastPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, AddressLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSigner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isSpreadEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isUpdater",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedAt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxCumulativeDeltaDiffs",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxDeviationBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxPriceUpdateDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTimeDeviation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minAuthorizations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minBlockInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceDataInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "prices", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setCompactedPrices",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFastPriceEvents",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setIsSpreadEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setLastUpdatedAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxCumulativeDeltaDiffs",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxDeviationBasisPoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxPriceUpdateDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxTimeDeviation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinAuthorizations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinBlockInterval",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceDataInterval",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrices",
    values: [AddressLike[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPricesWithBits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPricesWithBitsAndExecute",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setSigner",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setSpreadBasisPointsIfChainError",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSpreadBasisPointsIfInactive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokens",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setUpdater",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setVaultPriceFeed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "spreadBasisPointsIfChainError",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "spreadBasisPointsIfInactive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPrecisions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultPriceFeed",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "BITMASK_32", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CUMULATIVE_DELTA_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_CUMULATIVE_FAST_DELTA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_CUMULATIVE_REF_DELTA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_PRICE_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_REF_PRICE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableFastPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableFastPriceVoteCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableFastPriceVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableFastPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fastPriceEvents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "favorFastPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSpreadEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isUpdater", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxCumulativeDeltaDiffs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxDeviationBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxPriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTimeDeviation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minAuthorizations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minBlockInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceDataInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCompactedPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFastPriceEvents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIsSpreadEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLastUpdatedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxCumulativeDeltaDiffs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxDeviationBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxPriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxTimeDeviation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinAuthorizations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinBlockInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceDataInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPricesWithBits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPricesWithBitsAndExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSpreadBasisPointsIfChainError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSpreadBasisPointsIfInactive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUpdater", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVaultPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "spreadBasisPointsIfChainError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "spreadBasisPointsIfInactive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenPrecisions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultPriceFeed",
    data: BytesLike
  ): Result;
}

export namespace DisableFastPriceEvent {
  export type InputTuple = [signer: AddressLike];
  export type OutputTuple = [signer: string];
  export interface OutputObject {
    signer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnableFastPriceEvent {
  export type InputTuple = [signer: AddressLike];
  export type OutputTuple = [signer: string];
  export interface OutputObject {
    signer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MaxCumulativeDeltaDiffExceededEvent {
  export type InputTuple = [
    token: AddressLike,
    refPrice: BigNumberish,
    fastPrice: BigNumberish,
    cumulativeRefDelta: BigNumberish,
    cumulativeFastDelta: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    refPrice: bigint,
    fastPrice: bigint,
    cumulativeRefDelta: bigint,
    cumulativeFastDelta: bigint
  ];
  export interface OutputObject {
    token: string;
    refPrice: bigint;
    fastPrice: bigint;
    cumulativeRefDelta: bigint;
    cumulativeFastDelta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceDataEvent {
  export type InputTuple = [
    token: AddressLike,
    refPrice: BigNumberish,
    fastPrice: BigNumberish,
    cumulativeRefDelta: BigNumberish,
    cumulativeFastDelta: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    refPrice: bigint,
    fastPrice: bigint,
    cumulativeRefDelta: bigint,
    cumulativeFastDelta: bigint
  ];
  export interface OutputObject {
    token: string;
    refPrice: bigint;
    fastPrice: bigint;
    cumulativeRefDelta: bigint;
    cumulativeFastDelta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FastPriceFeed extends BaseContract {
  connect(runner?: ContractRunner | null): FastPriceFeed;
  waitForDeployment(): Promise<this>;

  interface: FastPriceFeedInterface;

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

  BITMASK_32: TypedContractMethod<[], [bigint], "view">;

  CUMULATIVE_DELTA_PRECISION: TypedContractMethod<[], [bigint], "view">;

  MAX_CUMULATIVE_FAST_DELTA: TypedContractMethod<[], [bigint], "view">;

  MAX_CUMULATIVE_REF_DELTA: TypedContractMethod<[], [bigint], "view">;

  MAX_PRICE_DURATION: TypedContractMethod<[], [bigint], "view">;

  MAX_REF_PRICE: TypedContractMethod<[], [bigint], "view">;

  PRICE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  disableFastPrice: TypedContractMethod<[], [void], "nonpayable">;

  disableFastPriceVoteCount: TypedContractMethod<[], [bigint], "view">;

  disableFastPriceVotes: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  enableFastPrice: TypedContractMethod<[], [void], "nonpayable">;

  fastPriceEvents: TypedContractMethod<[], [string], "view">;

  favorFastPrice: TypedContractMethod<[_token: AddressLike], [boolean], "view">;

  getPrice: TypedContractMethod<
    [_token: AddressLike, _refPrice: BigNumberish, _maximise: boolean],
    [bigint],
    "view"
  >;

  getPriceData: TypedContractMethod<
    [_token: AddressLike],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;

  gov: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [
      _minAuthorizations: BigNumberish,
      _signers: AddressLike[],
      _updaters: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;

  isInitialized: TypedContractMethod<[], [boolean], "view">;

  isSigner: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isSpreadEnabled: TypedContractMethod<[], [boolean], "view">;

  isUpdater: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  lastUpdatedAt: TypedContractMethod<[], [bigint], "view">;

  lastUpdatedBlock: TypedContractMethod<[], [bigint], "view">;

  maxCumulativeDeltaDiffs: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  maxDeviationBasisPoints: TypedContractMethod<[], [bigint], "view">;

  maxPriceUpdateDelay: TypedContractMethod<[], [bigint], "view">;

  maxTimeDeviation: TypedContractMethod<[], [bigint], "view">;

  minAuthorizations: TypedContractMethod<[], [bigint], "view">;

  minBlockInterval: TypedContractMethod<[], [bigint], "view">;

  priceData: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        refPrice: bigint;
        refTime: bigint;
        cumulativeRefDelta: bigint;
        cumulativeFastDelta: bigint;
      }
    ],
    "view"
  >;

  priceDataInterval: TypedContractMethod<[], [bigint], "view">;

  priceDuration: TypedContractMethod<[], [bigint], "view">;

  prices: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  setCompactedPrices: TypedContractMethod<
    [_priceBitArray: BigNumberish[], _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  setFastPriceEvents: TypedContractMethod<
    [_fastPriceEvents: AddressLike],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  setIsSpreadEnabled: TypedContractMethod<
    [_isSpreadEnabled: boolean],
    [void],
    "nonpayable"
  >;

  setLastUpdatedAt: TypedContractMethod<
    [_lastUpdatedAt: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaxCumulativeDeltaDiffs: TypedContractMethod<
    [_tokens: AddressLike[], _maxCumulativeDeltaDiffs: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  setMaxDeviationBasisPoints: TypedContractMethod<
    [_maxDeviationBasisPoints: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaxPriceUpdateDelay: TypedContractMethod<
    [_maxPriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaxTimeDeviation: TypedContractMethod<
    [_maxTimeDeviation: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMinAuthorizations: TypedContractMethod<
    [_minAuthorizations: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMinBlockInterval: TypedContractMethod<
    [_minBlockInterval: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPriceDataInterval: TypedContractMethod<
    [_priceDataInterval: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPriceDuration: TypedContractMethod<
    [_priceDuration: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPrices: TypedContractMethod<
    [_tokens: AddressLike[], _prices: BigNumberish[], _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPricesWithBits: TypedContractMethod<
    [_priceBits: BigNumberish, _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPricesWithBitsAndExecute: TypedContractMethod<
    [
      _positionRouter: AddressLike,
      _priceBits: BigNumberish,
      _timestamp: BigNumberish,
      _endIndexForIncreasePositions: BigNumberish,
      _endIndexForDecreasePositions: BigNumberish,
      _maxIncreasePositions: BigNumberish,
      _maxDecreasePositions: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setSigner: TypedContractMethod<
    [_account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setSpreadBasisPointsIfChainError: TypedContractMethod<
    [_spreadBasisPointsIfChainError: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSpreadBasisPointsIfInactive: TypedContractMethod<
    [_spreadBasisPointsIfInactive: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTokenManager: TypedContractMethod<
    [_tokenManager: AddressLike],
    [void],
    "nonpayable"
  >;

  setTokens: TypedContractMethod<
    [_tokens: AddressLike[], _tokenPrecisions: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  setUpdater: TypedContractMethod<
    [_account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setVaultPriceFeed: TypedContractMethod<
    [_vaultPriceFeed: AddressLike],
    [void],
    "nonpayable"
  >;

  spreadBasisPointsIfChainError: TypedContractMethod<[], [bigint], "view">;

  spreadBasisPointsIfInactive: TypedContractMethod<[], [bigint], "view">;

  tokenManager: TypedContractMethod<[], [string], "view">;

  tokenPrecisions: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  tokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  vaultPriceFeed: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BASIS_POINTS_DIVISOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "BITMASK_32"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "CUMULATIVE_DELTA_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_CUMULATIVE_FAST_DELTA"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_CUMULATIVE_REF_DELTA"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_PRICE_DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_REF_PRICE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRICE_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "disableFastPrice"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "disableFastPriceVoteCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "disableFastPriceVotes"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "enableFastPrice"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "fastPriceEvents"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "favorFastPrice"
  ): TypedContractMethod<[_token: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "getPrice"
  ): TypedContractMethod<
    [_token: AddressLike, _refPrice: BigNumberish, _maximise: boolean],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriceData"
  ): TypedContractMethod<
    [_token: AddressLike],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _minAuthorizations: BigNumberish,
      _signers: AddressLike[],
      _updaters: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isInitialized"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSigner"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSpreadEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isUpdater"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastUpdatedAt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdatedBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxCumulativeDeltaDiffs"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxDeviationBasisPoints"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxPriceUpdateDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxTimeDeviation"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minAuthorizations"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minBlockInterval"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceData"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        refPrice: bigint;
        refTime: bigint;
        cumulativeRefDelta: bigint;
        cumulativeFastDelta: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "priceDataInterval"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "prices"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setCompactedPrices"
  ): TypedContractMethod<
    [_priceBitArray: BigNumberish[], _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFastPriceEvents"
  ): TypedContractMethod<[_fastPriceEvents: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIsSpreadEnabled"
  ): TypedContractMethod<[_isSpreadEnabled: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setLastUpdatedAt"
  ): TypedContractMethod<[_lastUpdatedAt: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMaxCumulativeDeltaDiffs"
  ): TypedContractMethod<
    [_tokens: AddressLike[], _maxCumulativeDeltaDiffs: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxDeviationBasisPoints"
  ): TypedContractMethod<
    [_maxDeviationBasisPoints: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxPriceUpdateDelay"
  ): TypedContractMethod<
    [_maxPriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxTimeDeviation"
  ): TypedContractMethod<
    [_maxTimeDeviation: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMinAuthorizations"
  ): TypedContractMethod<
    [_minAuthorizations: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMinBlockInterval"
  ): TypedContractMethod<
    [_minBlockInterval: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPriceDataInterval"
  ): TypedContractMethod<
    [_priceDataInterval: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPriceDuration"
  ): TypedContractMethod<[_priceDuration: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPrices"
  ): TypedContractMethod<
    [_tokens: AddressLike[], _prices: BigNumberish[], _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPricesWithBits"
  ): TypedContractMethod<
    [_priceBits: BigNumberish, _timestamp: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPricesWithBitsAndExecute"
  ): TypedContractMethod<
    [
      _positionRouter: AddressLike,
      _priceBits: BigNumberish,
      _timestamp: BigNumberish,
      _endIndexForIncreasePositions: BigNumberish,
      _endIndexForDecreasePositions: BigNumberish,
      _maxIncreasePositions: BigNumberish,
      _maxDecreasePositions: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSigner"
  ): TypedContractMethod<
    [_account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSpreadBasisPointsIfChainError"
  ): TypedContractMethod<
    [_spreadBasisPointsIfChainError: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSpreadBasisPointsIfInactive"
  ): TypedContractMethod<
    [_spreadBasisPointsIfInactive: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTokenManager"
  ): TypedContractMethod<[_tokenManager: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTokens"
  ): TypedContractMethod<
    [_tokens: AddressLike[], _tokenPrecisions: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setUpdater"
  ): TypedContractMethod<
    [_account: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setVaultPriceFeed"
  ): TypedContractMethod<[_vaultPriceFeed: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "spreadBasisPointsIfChainError"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "spreadBasisPointsIfInactive"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokenManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenPrecisions"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "vaultPriceFeed"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "DisableFastPrice"
  ): TypedContractEvent<
    DisableFastPriceEvent.InputTuple,
    DisableFastPriceEvent.OutputTuple,
    DisableFastPriceEvent.OutputObject
  >;
  getEvent(
    key: "EnableFastPrice"
  ): TypedContractEvent<
    EnableFastPriceEvent.InputTuple,
    EnableFastPriceEvent.OutputTuple,
    EnableFastPriceEvent.OutputObject
  >;
  getEvent(
    key: "MaxCumulativeDeltaDiffExceeded"
  ): TypedContractEvent<
    MaxCumulativeDeltaDiffExceededEvent.InputTuple,
    MaxCumulativeDeltaDiffExceededEvent.OutputTuple,
    MaxCumulativeDeltaDiffExceededEvent.OutputObject
  >;
  getEvent(
    key: "PriceData"
  ): TypedContractEvent<
    PriceDataEvent.InputTuple,
    PriceDataEvent.OutputTuple,
    PriceDataEvent.OutputObject
  >;

  filters: {
    "DisableFastPrice(address)": TypedContractEvent<
      DisableFastPriceEvent.InputTuple,
      DisableFastPriceEvent.OutputTuple,
      DisableFastPriceEvent.OutputObject
    >;
    DisableFastPrice: TypedContractEvent<
      DisableFastPriceEvent.InputTuple,
      DisableFastPriceEvent.OutputTuple,
      DisableFastPriceEvent.OutputObject
    >;

    "EnableFastPrice(address)": TypedContractEvent<
      EnableFastPriceEvent.InputTuple,
      EnableFastPriceEvent.OutputTuple,
      EnableFastPriceEvent.OutputObject
    >;
    EnableFastPrice: TypedContractEvent<
      EnableFastPriceEvent.InputTuple,
      EnableFastPriceEvent.OutputTuple,
      EnableFastPriceEvent.OutputObject
    >;

    "MaxCumulativeDeltaDiffExceeded(address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      MaxCumulativeDeltaDiffExceededEvent.InputTuple,
      MaxCumulativeDeltaDiffExceededEvent.OutputTuple,
      MaxCumulativeDeltaDiffExceededEvent.OutputObject
    >;
    MaxCumulativeDeltaDiffExceeded: TypedContractEvent<
      MaxCumulativeDeltaDiffExceededEvent.InputTuple,
      MaxCumulativeDeltaDiffExceededEvent.OutputTuple,
      MaxCumulativeDeltaDiffExceededEvent.OutputObject
    >;

    "PriceData(address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      PriceDataEvent.InputTuple,
      PriceDataEvent.OutputTuple,
      PriceDataEvent.OutputObject
    >;
    PriceData: TypedContractEvent<
      PriceDataEvent.InputTuple,
      PriceDataEvent.OutputTuple,
      PriceDataEvent.OutputObject
    >;
  };
}