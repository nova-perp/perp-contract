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

export interface ShortsTrackerTimelockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASIS_POINTS_DIVISOR"
      | "MAX_BUFFER"
      | "admin"
      | "averagePriceUpdateDelay"
      | "buffer"
      | "cancelAction"
      | "disableIsGlobalShortDataReady"
      | "isHandler"
      | "lastUpdated"
      | "maxAveragePriceChange"
      | "pendingActions"
      | "setAdmin"
      | "setAveragePriceUpdateDelay"
      | "setBuffer"
      | "setContractHandler"
      | "setGlobalShortAveragePrices"
      | "setGov"
      | "setHandler"
      | "setIsGlobalShortDataReady"
      | "setMaxAveragePriceChange"
      | "signalSetAdmin"
      | "signalSetAveragePriceUpdateDelay"
      | "signalSetGov"
      | "signalSetHandler"
      | "signalSetIsGlobalShortDataReady"
      | "signalSetMaxAveragePriceChange"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClearAction"
      | "GlobalShortAveragePriceUpdated"
      | "SetAdmin"
      | "SetAveragePriceUpdateDelay"
      | "SetContractHandler"
      | "SetGov"
      | "SetIsGlobalShortDataReady"
      | "SetMaxAveragePriceChange"
      | "SignalPendingAction"
      | "SignalSetAdmin"
      | "SignalSetAveragePriceUpdateDelay"
      | "SignalSetGov"
      | "SignalSetHandler"
      | "SignalSetIsGlobalShortDataReady"
      | "SignalSetMaxAveragePriceChange"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BUFFER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "averagePriceUpdateDelay",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buffer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelAction",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disableIsGlobalShortDataReady",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isHandler",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdated",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxAveragePriceChange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingActions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAveragePriceUpdateDelay",
    values: [BigNumberish]
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
    functionFragment: "setGlobalShortAveragePrices",
    values: [AddressLike, AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setGov",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsGlobalShortDataReady",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxAveragePriceChange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetAveragePriceUpdateDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetGov",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetHandler",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetIsGlobalShortDataReady",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetMaxAveragePriceChange",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_BUFFER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "averagePriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableIsGlobalShortDataReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxAveragePriceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAveragePriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBuffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalShortAveragePrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIsGlobalShortDataReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxAveragePriceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetAveragePriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetIsGlobalShortDataReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetMaxAveragePriceChange",
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

export namespace GlobalShortAveragePriceUpdatedEvent {
  export type InputTuple = [
    token: AddressLike,
    oldAveragePrice: BigNumberish,
    newAveragePrice: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    oldAveragePrice: bigint,
    newAveragePrice: bigint
  ];
  export interface OutputObject {
    token: string;
    oldAveragePrice: bigint;
    newAveragePrice: bigint;
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

export namespace SetAveragePriceUpdateDelayEvent {
  export type InputTuple = [averagePriceUpdateDelay: BigNumberish];
  export type OutputTuple = [averagePriceUpdateDelay: bigint];
  export interface OutputObject {
    averagePriceUpdateDelay: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetContractHandlerEvent {
  export type InputTuple = [handler: AddressLike, isHandler: boolean];
  export type OutputTuple = [handler: string, isHandler: boolean];
  export interface OutputObject {
    handler: string;
    isHandler: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetGovEvent {
  export type InputTuple = [target: AddressLike, gov: AddressLike];
  export type OutputTuple = [target: string, gov: string];
  export interface OutputObject {
    target: string;
    gov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetIsGlobalShortDataReadyEvent {
  export type InputTuple = [
    target: AddressLike,
    isGlobalShortDataReady: boolean
  ];
  export type OutputTuple = [target: string, isGlobalShortDataReady: boolean];
  export interface OutputObject {
    target: string;
    isGlobalShortDataReady: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetMaxAveragePriceChangeEvent {
  export type InputTuple = [maxAveragePriceChange: BigNumberish];
  export type OutputTuple = [maxAveragePriceChange: bigint];
  export interface OutputObject {
    maxAveragePriceChange: bigint;
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

export namespace SignalSetAdminEvent {
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

export namespace SignalSetAveragePriceUpdateDelayEvent {
  export type InputTuple = [averagePriceUpdateDelay: BigNumberish];
  export type OutputTuple = [averagePriceUpdateDelay: bigint];
  export interface OutputObject {
    averagePriceUpdateDelay: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalSetGovEvent {
  export type InputTuple = [target: AddressLike, gov: AddressLike];
  export type OutputTuple = [target: string, gov: string];
  export interface OutputObject {
    target: string;
    gov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalSetHandlerEvent {
  export type InputTuple = [
    target: AddressLike,
    handler: AddressLike,
    isActive: boolean,
    action: BytesLike
  ];
  export type OutputTuple = [
    target: string,
    handler: string,
    isActive: boolean,
    action: string
  ];
  export interface OutputObject {
    target: string;
    handler: string;
    isActive: boolean;
    action: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalSetIsGlobalShortDataReadyEvent {
  export type InputTuple = [
    target: AddressLike,
    isGlobalShortDataReady: boolean
  ];
  export type OutputTuple = [target: string, isGlobalShortDataReady: boolean];
  export interface OutputObject {
    target: string;
    isGlobalShortDataReady: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignalSetMaxAveragePriceChangeEvent {
  export type InputTuple = [maxAveragePriceChange: BigNumberish];
  export type OutputTuple = [maxAveragePriceChange: bigint];
  export interface OutputObject {
    maxAveragePriceChange: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ShortsTrackerTimelock extends BaseContract {
  connect(runner?: ContractRunner | null): ShortsTrackerTimelock;
  waitForDeployment(): Promise<this>;

  interface: ShortsTrackerTimelockInterface;

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

  MAX_BUFFER: TypedContractMethod<[], [bigint], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  averagePriceUpdateDelay: TypedContractMethod<[], [bigint], "view">;

  buffer: TypedContractMethod<[], [bigint], "view">;

  cancelAction: TypedContractMethod<[_action: BytesLike], [void], "nonpayable">;

  disableIsGlobalShortDataReady: TypedContractMethod<
    [_shortsTracker: AddressLike],
    [void],
    "nonpayable"
  >;

  isHandler: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  lastUpdated: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  maxAveragePriceChange: TypedContractMethod<[], [bigint], "view">;

  pendingActions: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  setAveragePriceUpdateDelay: TypedContractMethod<
    [_averagePriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  setBuffer: TypedContractMethod<[_buffer: BigNumberish], [void], "nonpayable">;

  setContractHandler: TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setGlobalShortAveragePrices: TypedContractMethod<
    [
      _shortsTracker: AddressLike,
      _tokens: AddressLike[],
      _averagePrices: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<
    [_shortsTracker: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;

  setHandler: TypedContractMethod<
    [_target: AddressLike, _handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  setIsGlobalShortDataReady: TypedContractMethod<
    [_shortsTracker: AddressLike, _value: boolean],
    [void],
    "nonpayable"
  >;

  setMaxAveragePriceChange: TypedContractMethod<
    [_maxAveragePriceChange: BigNumberish],
    [void],
    "nonpayable"
  >;

  signalSetAdmin: TypedContractMethod<
    [_admin: AddressLike],
    [void],
    "nonpayable"
  >;

  signalSetAveragePriceUpdateDelay: TypedContractMethod<
    [_averagePriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  signalSetGov: TypedContractMethod<
    [_shortsTracker: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;

  signalSetHandler: TypedContractMethod<
    [_target: AddressLike, _handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  signalSetIsGlobalShortDataReady: TypedContractMethod<
    [_shortsTracker: AddressLike, _value: boolean],
    [void],
    "nonpayable"
  >;

  signalSetMaxAveragePriceChange: TypedContractMethod<
    [_maxAveragePriceChange: BigNumberish],
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
    nameOrSignature: "MAX_BUFFER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "averagePriceUpdateDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "buffer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cancelAction"
  ): TypedContractMethod<[_action: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "disableIsGlobalShortDataReady"
  ): TypedContractMethod<[_shortsTracker: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isHandler"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastUpdated"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxAveragePriceChange"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingActions"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAveragePriceUpdateDelay"
  ): TypedContractMethod<
    [_averagePriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "setGlobalShortAveragePrices"
  ): TypedContractMethod<
    [
      _shortsTracker: AddressLike,
      _tokens: AddressLike[],
      _averagePrices: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<
    [_shortsTracker: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setHandler"
  ): TypedContractMethod<
    [_target: AddressLike, _handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setIsGlobalShortDataReady"
  ): TypedContractMethod<
    [_shortsTracker: AddressLike, _value: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxAveragePriceChange"
  ): TypedContractMethod<
    [_maxAveragePriceChange: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "signalSetAveragePriceUpdateDelay"
  ): TypedContractMethod<
    [_averagePriceUpdateDelay: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetGov"
  ): TypedContractMethod<
    [_shortsTracker: AddressLike, _gov: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetHandler"
  ): TypedContractMethod<
    [_target: AddressLike, _handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetIsGlobalShortDataReady"
  ): TypedContractMethod<
    [_shortsTracker: AddressLike, _value: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signalSetMaxAveragePriceChange"
  ): TypedContractMethod<
    [_maxAveragePriceChange: BigNumberish],
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
    key: "GlobalShortAveragePriceUpdated"
  ): TypedContractEvent<
    GlobalShortAveragePriceUpdatedEvent.InputTuple,
    GlobalShortAveragePriceUpdatedEvent.OutputTuple,
    GlobalShortAveragePriceUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "SetAdmin"
  ): TypedContractEvent<
    SetAdminEvent.InputTuple,
    SetAdminEvent.OutputTuple,
    SetAdminEvent.OutputObject
  >;
  getEvent(
    key: "SetAveragePriceUpdateDelay"
  ): TypedContractEvent<
    SetAveragePriceUpdateDelayEvent.InputTuple,
    SetAveragePriceUpdateDelayEvent.OutputTuple,
    SetAveragePriceUpdateDelayEvent.OutputObject
  >;
  getEvent(
    key: "SetContractHandler"
  ): TypedContractEvent<
    SetContractHandlerEvent.InputTuple,
    SetContractHandlerEvent.OutputTuple,
    SetContractHandlerEvent.OutputObject
  >;
  getEvent(
    key: "SetGov"
  ): TypedContractEvent<
    SetGovEvent.InputTuple,
    SetGovEvent.OutputTuple,
    SetGovEvent.OutputObject
  >;
  getEvent(
    key: "SetIsGlobalShortDataReady"
  ): TypedContractEvent<
    SetIsGlobalShortDataReadyEvent.InputTuple,
    SetIsGlobalShortDataReadyEvent.OutputTuple,
    SetIsGlobalShortDataReadyEvent.OutputObject
  >;
  getEvent(
    key: "SetMaxAveragePriceChange"
  ): TypedContractEvent<
    SetMaxAveragePriceChangeEvent.InputTuple,
    SetMaxAveragePriceChangeEvent.OutputTuple,
    SetMaxAveragePriceChangeEvent.OutputObject
  >;
  getEvent(
    key: "SignalPendingAction"
  ): TypedContractEvent<
    SignalPendingActionEvent.InputTuple,
    SignalPendingActionEvent.OutputTuple,
    SignalPendingActionEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetAdmin"
  ): TypedContractEvent<
    SignalSetAdminEvent.InputTuple,
    SignalSetAdminEvent.OutputTuple,
    SignalSetAdminEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetAveragePriceUpdateDelay"
  ): TypedContractEvent<
    SignalSetAveragePriceUpdateDelayEvent.InputTuple,
    SignalSetAveragePriceUpdateDelayEvent.OutputTuple,
    SignalSetAveragePriceUpdateDelayEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetGov"
  ): TypedContractEvent<
    SignalSetGovEvent.InputTuple,
    SignalSetGovEvent.OutputTuple,
    SignalSetGovEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetHandler"
  ): TypedContractEvent<
    SignalSetHandlerEvent.InputTuple,
    SignalSetHandlerEvent.OutputTuple,
    SignalSetHandlerEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetIsGlobalShortDataReady"
  ): TypedContractEvent<
    SignalSetIsGlobalShortDataReadyEvent.InputTuple,
    SignalSetIsGlobalShortDataReadyEvent.OutputTuple,
    SignalSetIsGlobalShortDataReadyEvent.OutputObject
  >;
  getEvent(
    key: "SignalSetMaxAveragePriceChange"
  ): TypedContractEvent<
    SignalSetMaxAveragePriceChangeEvent.InputTuple,
    SignalSetMaxAveragePriceChangeEvent.OutputTuple,
    SignalSetMaxAveragePriceChangeEvent.OutputObject
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

    "GlobalShortAveragePriceUpdated(address,uint256,uint256)": TypedContractEvent<
      GlobalShortAveragePriceUpdatedEvent.InputTuple,
      GlobalShortAveragePriceUpdatedEvent.OutputTuple,
      GlobalShortAveragePriceUpdatedEvent.OutputObject
    >;
    GlobalShortAveragePriceUpdated: TypedContractEvent<
      GlobalShortAveragePriceUpdatedEvent.InputTuple,
      GlobalShortAveragePriceUpdatedEvent.OutputTuple,
      GlobalShortAveragePriceUpdatedEvent.OutputObject
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

    "SetAveragePriceUpdateDelay(uint256)": TypedContractEvent<
      SetAveragePriceUpdateDelayEvent.InputTuple,
      SetAveragePriceUpdateDelayEvent.OutputTuple,
      SetAveragePriceUpdateDelayEvent.OutputObject
    >;
    SetAveragePriceUpdateDelay: TypedContractEvent<
      SetAveragePriceUpdateDelayEvent.InputTuple,
      SetAveragePriceUpdateDelayEvent.OutputTuple,
      SetAveragePriceUpdateDelayEvent.OutputObject
    >;

    "SetContractHandler(address,bool)": TypedContractEvent<
      SetContractHandlerEvent.InputTuple,
      SetContractHandlerEvent.OutputTuple,
      SetContractHandlerEvent.OutputObject
    >;
    SetContractHandler: TypedContractEvent<
      SetContractHandlerEvent.InputTuple,
      SetContractHandlerEvent.OutputTuple,
      SetContractHandlerEvent.OutputObject
    >;

    "SetGov(address,address)": TypedContractEvent<
      SetGovEvent.InputTuple,
      SetGovEvent.OutputTuple,
      SetGovEvent.OutputObject
    >;
    SetGov: TypedContractEvent<
      SetGovEvent.InputTuple,
      SetGovEvent.OutputTuple,
      SetGovEvent.OutputObject
    >;

    "SetIsGlobalShortDataReady(address,bool)": TypedContractEvent<
      SetIsGlobalShortDataReadyEvent.InputTuple,
      SetIsGlobalShortDataReadyEvent.OutputTuple,
      SetIsGlobalShortDataReadyEvent.OutputObject
    >;
    SetIsGlobalShortDataReady: TypedContractEvent<
      SetIsGlobalShortDataReadyEvent.InputTuple,
      SetIsGlobalShortDataReadyEvent.OutputTuple,
      SetIsGlobalShortDataReadyEvent.OutputObject
    >;

    "SetMaxAveragePriceChange(uint256)": TypedContractEvent<
      SetMaxAveragePriceChangeEvent.InputTuple,
      SetMaxAveragePriceChangeEvent.OutputTuple,
      SetMaxAveragePriceChangeEvent.OutputObject
    >;
    SetMaxAveragePriceChange: TypedContractEvent<
      SetMaxAveragePriceChangeEvent.InputTuple,
      SetMaxAveragePriceChangeEvent.OutputTuple,
      SetMaxAveragePriceChangeEvent.OutputObject
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

    "SignalSetAdmin(address)": TypedContractEvent<
      SignalSetAdminEvent.InputTuple,
      SignalSetAdminEvent.OutputTuple,
      SignalSetAdminEvent.OutputObject
    >;
    SignalSetAdmin: TypedContractEvent<
      SignalSetAdminEvent.InputTuple,
      SignalSetAdminEvent.OutputTuple,
      SignalSetAdminEvent.OutputObject
    >;

    "SignalSetAveragePriceUpdateDelay(uint256)": TypedContractEvent<
      SignalSetAveragePriceUpdateDelayEvent.InputTuple,
      SignalSetAveragePriceUpdateDelayEvent.OutputTuple,
      SignalSetAveragePriceUpdateDelayEvent.OutputObject
    >;
    SignalSetAveragePriceUpdateDelay: TypedContractEvent<
      SignalSetAveragePriceUpdateDelayEvent.InputTuple,
      SignalSetAveragePriceUpdateDelayEvent.OutputTuple,
      SignalSetAveragePriceUpdateDelayEvent.OutputObject
    >;

    "SignalSetGov(address,address)": TypedContractEvent<
      SignalSetGovEvent.InputTuple,
      SignalSetGovEvent.OutputTuple,
      SignalSetGovEvent.OutputObject
    >;
    SignalSetGov: TypedContractEvent<
      SignalSetGovEvent.InputTuple,
      SignalSetGovEvent.OutputTuple,
      SignalSetGovEvent.OutputObject
    >;

    "SignalSetHandler(address,address,bool,bytes32)": TypedContractEvent<
      SignalSetHandlerEvent.InputTuple,
      SignalSetHandlerEvent.OutputTuple,
      SignalSetHandlerEvent.OutputObject
    >;
    SignalSetHandler: TypedContractEvent<
      SignalSetHandlerEvent.InputTuple,
      SignalSetHandlerEvent.OutputTuple,
      SignalSetHandlerEvent.OutputObject
    >;

    "SignalSetIsGlobalShortDataReady(address,bool)": TypedContractEvent<
      SignalSetIsGlobalShortDataReadyEvent.InputTuple,
      SignalSetIsGlobalShortDataReadyEvent.OutputTuple,
      SignalSetIsGlobalShortDataReadyEvent.OutputObject
    >;
    SignalSetIsGlobalShortDataReady: TypedContractEvent<
      SignalSetIsGlobalShortDataReadyEvent.InputTuple,
      SignalSetIsGlobalShortDataReadyEvent.OutputTuple,
      SignalSetIsGlobalShortDataReadyEvent.OutputObject
    >;

    "SignalSetMaxAveragePriceChange(uint256)": TypedContractEvent<
      SignalSetMaxAveragePriceChangeEvent.InputTuple,
      SignalSetMaxAveragePriceChangeEvent.OutputTuple,
      SignalSetMaxAveragePriceChangeEvent.OutputObject
    >;
    SignalSetMaxAveragePriceChange: TypedContractEvent<
      SignalSetMaxAveragePriceChangeEvent.InputTuple,
      SignalSetMaxAveragePriceChangeEvent.OutputTuple,
      SignalSetMaxAveragePriceChangeEvent.OutputObject
    >;
  };
}
