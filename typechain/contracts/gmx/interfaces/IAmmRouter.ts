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

export interface IAmmRouterInterface extends Interface {
  getFunction(
    nameOrSignature: "removeLiquidity" | "swapExactTokensForTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
}

export interface IAmmRouter extends BaseContract {
  connect(runner?: ContractRunner | null): IAmmRouter;
  waitForDeployment(): Promise<this>;

  interface: IAmmRouterInterface;

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

  removeLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;

  swapExactTokensForTokens: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [[bigint, bigint] & { amountA: bigint; amountB: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForTokens"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  filters: {};
}