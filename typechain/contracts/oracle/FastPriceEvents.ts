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

export interface FastPriceEventsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "emitPriceEvent"
      | "gov"
      | "isPriceFeed"
      | "setGov"
      | "setIsPriceFeed"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "PriceUpdate"): EventFragment;

  encodeFunctionData(
    functionFragment: "emitPriceEvent",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPriceFeed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setIsPriceFeed",
    values: [AddressLike, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "emitPriceEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIsPriceFeed",
    data: BytesLike
  ): Result;
}

export namespace PriceUpdateEvent {
  export type InputTuple = [
    token: AddressLike,
    price: BigNumberish,
    priceFeed: AddressLike
  ];
  export type OutputTuple = [token: string, price: bigint, priceFeed: string];
  export interface OutputObject {
    token: string;
    price: bigint;
    priceFeed: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FastPriceEvents extends BaseContract {
  connect(runner?: ContractRunner | null): FastPriceEvents;
  waitForDeployment(): Promise<this>;

  interface: FastPriceEventsInterface;

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

  emitPriceEvent: TypedContractMethod<
    [_token: AddressLike, _price: BigNumberish],
    [void],
    "nonpayable"
  >;

  gov: TypedContractMethod<[], [string], "view">;

  isPriceFeed: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  setIsPriceFeed: TypedContractMethod<
    [_priceFeed: AddressLike, _isPriceFeed: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "emitPriceEvent"
  ): TypedContractMethod<
    [_token: AddressLike, _price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isPriceFeed"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIsPriceFeed"
  ): TypedContractMethod<
    [_priceFeed: AddressLike, _isPriceFeed: boolean],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "PriceUpdate"
  ): TypedContractEvent<
    PriceUpdateEvent.InputTuple,
    PriceUpdateEvent.OutputTuple,
    PriceUpdateEvent.OutputObject
  >;

  filters: {
    "PriceUpdate(address,uint256,address)": TypedContractEvent<
      PriceUpdateEvent.InputTuple,
      PriceUpdateEvent.OutputTuple,
      PriceUpdateEvent.OutputObject
    >;
    PriceUpdate: TypedContractEvent<
      PriceUpdateEvent.InputTuple,
      PriceUpdateEvent.OutputTuple,
      PriceUpdateEvent.OutputObject
    >;
  };
}
