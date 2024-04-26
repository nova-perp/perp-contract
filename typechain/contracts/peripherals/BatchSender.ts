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

export interface BatchSenderInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "gov"
      | "isHandler"
      | "send"
      | "sendAndEmit"
      | "setGov"
      | "setHandler"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "BatchSend"): EventFragment;

  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isHandler",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [AddressLike, AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "sendAndEmit",
    values: [AddressLike, AddressLike[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [AddressLike, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendAndEmit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
}

export namespace BatchSendEvent {
  export type InputTuple = [
    typeId: BigNumberish,
    token: AddressLike,
    accounts: AddressLike[],
    amounts: BigNumberish[]
  ];
  export type OutputTuple = [
    typeId: bigint,
    token: string,
    accounts: string[],
    amounts: bigint[]
  ];
  export interface OutputObject {
    typeId: bigint;
    token: string;
    accounts: string[];
    amounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BatchSender extends BaseContract {
  connect(runner?: ContractRunner | null): BatchSender;
  waitForDeployment(): Promise<this>;

  interface: BatchSenderInterface;

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

  gov: TypedContractMethod<[], [string], "view">;

  isHandler: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  send: TypedContractMethod<
    [_token: AddressLike, _accounts: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  sendAndEmit: TypedContractMethod<
    [
      _token: AddressLike,
      _accounts: AddressLike[],
      _amounts: BigNumberish[],
      _typeId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  setHandler: TypedContractMethod<
    [_handler: AddressLike, _isActive: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isHandler"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "send"
  ): TypedContractMethod<
    [_token: AddressLike, _accounts: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sendAndEmit"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _accounts: AddressLike[],
      _amounts: BigNumberish[],
      _typeId: BigNumberish
    ],
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

  getEvent(
    key: "BatchSend"
  ): TypedContractEvent<
    BatchSendEvent.InputTuple,
    BatchSendEvent.OutputTuple,
    BatchSendEvent.OutputObject
  >;

  filters: {
    "BatchSend(uint256,address,address[],uint256[])": TypedContractEvent<
      BatchSendEvent.InputTuple,
      BatchSendEvent.OutputTuple,
      BatchSendEvent.OutputObject
    >;
    BatchSend: TypedContractEvent<
      BatchSendEvent.InputTuple,
      BatchSendEvent.OutputTuple,
      BatchSendEvent.OutputObject
    >;
  };
}
