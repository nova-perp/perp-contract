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

export interface UniPoolInterface extends Interface {
  getFunction(
    nameOrSignature: "observe" | "slot0" | "tickSpacing"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "observe",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tickSpacing",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacing",
    data: BytesLike
  ): Result;
}

export interface UniPool extends BaseContract {
  connect(runner?: ContractRunner | null): UniPool;
  waitForDeployment(): Promise<this>;

  interface: UniPoolInterface;

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

  observe: TypedContractMethod<
    [arg0: BigNumberish[]],
    [
      [bigint[], bigint[]] & {
        tickCumulatives: bigint[];
        secondsPerLiquidityCumulativeX128s: bigint[];
      }
    ],
    "view"
  >;

  slot0: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, boolean] & {
        sqrtPriceX96: bigint;
        tick: bigint;
        observationIndex: bigint;
        observationCardinality: bigint;
        observationCardinalityNext: bigint;
        feeProtocol: bigint;
        unlocked: boolean;
      }
    ],
    "view"
  >;

  tickSpacing: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "observe"
  ): TypedContractMethod<
    [arg0: BigNumberish[]],
    [
      [bigint[], bigint[]] & {
        tickCumulatives: bigint[];
        secondsPerLiquidityCumulativeX128s: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "slot0"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, boolean] & {
        sqrtPriceX96: bigint;
        tick: bigint;
        observationIndex: bigint;
        observationCardinality: bigint;
        observationCardinalityNext: bigint;
        feeProtocol: bigint;
        unlocked: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "tickSpacing"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}