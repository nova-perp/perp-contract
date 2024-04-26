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
} from "../../common";

export interface OrderBookReaderInterface extends Interface {
  getFunction(
    nameOrSignature: "getDecreaseOrders" | "getIncreaseOrders" | "getSwapOrders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDecreaseOrders",
    values: [AddressLike, AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getIncreaseOrders",
    values: [AddressLike, AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapOrders",
    values: [AddressLike, AddressLike, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDecreaseOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncreaseOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapOrders",
    data: BytesLike
  ): Result;
}

export interface OrderBookReader extends BaseContract {
  connect(runner?: ContractRunner | null): OrderBookReader;
  waitForDeployment(): Promise<this>;

  interface: OrderBookReaderInterface;

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

  getDecreaseOrders: TypedContractMethod<
    [
      _orderBookAddress: AddressLike,
      _account: AddressLike,
      _indices: BigNumberish[]
    ],
    [[bigint[], string[]]],
    "view"
  >;

  getIncreaseOrders: TypedContractMethod<
    [
      _orderBookAddress: AddressLike,
      _account: AddressLike,
      _indices: BigNumberish[]
    ],
    [[bigint[], string[]]],
    "view"
  >;

  getSwapOrders: TypedContractMethod<
    [
      _orderBookAddress: AddressLike,
      _account: AddressLike,
      _indices: BigNumberish[]
    ],
    [[bigint[], string[]]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getDecreaseOrders"
  ): TypedContractMethod<
    [
      _orderBookAddress: AddressLike,
      _account: AddressLike,
      _indices: BigNumberish[]
    ],
    [[bigint[], string[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getIncreaseOrders"
  ): TypedContractMethod<
    [
      _orderBookAddress: AddressLike,
      _account: AddressLike,
      _indices: BigNumberish[]
    ],
    [[bigint[], string[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSwapOrders"
  ): TypedContractMethod<
    [
      _orderBookAddress: AddressLike,
      _account: AddressLike,
      _indices: BigNumberish[]
    ],
    [[bigint[], string[]]],
    "view"
  >;

  filters: {};
}
