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

export interface RewardRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchCompoundForAccounts"
      | "batchStakeGmxForAccount"
      | "bnGmx"
      | "bonusGmxTracker"
      | "claim"
      | "claimEsGmx"
      | "claimFees"
      | "compound"
      | "compoundForAccount"
      | "esGmx"
      | "feeGlpTracker"
      | "feeGmxTracker"
      | "glp"
      | "glpManager"
      | "gmx"
      | "gov"
      | "initialize"
      | "isInitialized"
      | "mintAndStakeGlp"
      | "mintAndStakeGlpETH"
      | "setGov"
      | "stakeEsGmx"
      | "stakeGmx"
      | "stakeGmxForAccount"
      | "stakedGlpTracker"
      | "stakedGmxTracker"
      | "unstakeAndRedeemGlp"
      | "unstakeAndRedeemGlpETH"
      | "unstakeEsGmx"
      | "unstakeGmx"
      | "weth"
      | "withdrawToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "StakeGlp"
      | "StakeGmx"
      | "UnstakeGlp"
      | "UnstakeGmx"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchCompoundForAccounts",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchStakeGmxForAccount",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "bnGmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bonusGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimEsGmx",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
  encodeFunctionData(functionFragment: "compound", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "compoundForAccount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "esGmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeGlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "glp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "glpManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeGlp",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeGlpETH",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "stakeEsGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeGmxForAccount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedGlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAndRedeemGlp",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAndRedeemGlpETH",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeEsGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchCompoundForAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchStakeGmxForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bnGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bonusGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimEsGmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "compound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compoundForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "esGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeGlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "glp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "glpManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeGlp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeGlpETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeEsGmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeGmxForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedGlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeAndRedeemGlp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeAndRedeemGlpETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeEsGmx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstakeGmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
}

export namespace StakeGlpEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeGmxEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnstakeGlpEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnstakeGmxEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RewardRouter extends BaseContract {
  connect(runner?: ContractRunner | null): RewardRouter;
  waitForDeployment(): Promise<this>;

  interface: RewardRouterInterface;

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

  batchCompoundForAccounts: TypedContractMethod<
    [_accounts: AddressLike[]],
    [void],
    "nonpayable"
  >;

  batchStakeGmxForAccount: TypedContractMethod<
    [_accounts: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  bnGmx: TypedContractMethod<[], [string], "view">;

  bonusGmxTracker: TypedContractMethod<[], [string], "view">;

  claim: TypedContractMethod<[], [void], "nonpayable">;

  claimEsGmx: TypedContractMethod<[], [void], "nonpayable">;

  claimFees: TypedContractMethod<[], [void], "nonpayable">;

  compound: TypedContractMethod<[], [void], "nonpayable">;

  compoundForAccount: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  esGmx: TypedContractMethod<[], [string], "view">;

  feeGlpTracker: TypedContractMethod<[], [string], "view">;

  feeGmxTracker: TypedContractMethod<[], [string], "view">;

  glp: TypedContractMethod<[], [string], "view">;

  glpManager: TypedContractMethod<[], [string], "view">;

  gmx: TypedContractMethod<[], [string], "view">;

  gov: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [
      _weth: AddressLike,
      _gmx: AddressLike,
      _esGmx: AddressLike,
      _bnGmx: AddressLike,
      _glp: AddressLike,
      _stakedGmxTracker: AddressLike,
      _bonusGmxTracker: AddressLike,
      _feeGmxTracker: AddressLike,
      _feeGlpTracker: AddressLike,
      _stakedGlpTracker: AddressLike,
      _glpManager: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  isInitialized: TypedContractMethod<[], [boolean], "view">;

  mintAndStakeGlp: TypedContractMethod<
    [
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  mintAndStakeGlpETH: TypedContractMethod<
    [_minUsdg: BigNumberish, _minGlp: BigNumberish],
    [bigint],
    "payable"
  >;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  stakeEsGmx: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  stakeGmx: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  stakeGmxForAccount: TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  stakedGlpTracker: TypedContractMethod<[], [string], "view">;

  stakedGmxTracker: TypedContractMethod<[], [string], "view">;

  unstakeAndRedeemGlp: TypedContractMethod<
    [
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  unstakeAndRedeemGlpETH: TypedContractMethod<
    [_glpAmount: BigNumberish, _minOut: BigNumberish, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  unstakeEsGmx: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  unstakeGmx: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  weth: TypedContractMethod<[], [string], "view">;

  withdrawToken: TypedContractMethod<
    [_token: AddressLike, _account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchCompoundForAccounts"
  ): TypedContractMethod<[_accounts: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "batchStakeGmxForAccount"
  ): TypedContractMethod<
    [_accounts: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bnGmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bonusGmxTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimEsGmx"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimFees"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "compound"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "compoundForAccount"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "esGmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeGlpTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeGmxTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "glp"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "glpManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _weth: AddressLike,
      _gmx: AddressLike,
      _esGmx: AddressLike,
      _bnGmx: AddressLike,
      _glp: AddressLike,
      _stakedGmxTracker: AddressLike,
      _bonusGmxTracker: AddressLike,
      _feeGmxTracker: AddressLike,
      _feeGlpTracker: AddressLike,
      _stakedGlpTracker: AddressLike,
      _glpManager: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isInitialized"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "mintAndStakeGlp"
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
    nameOrSignature: "mintAndStakeGlpETH"
  ): TypedContractMethod<
    [_minUsdg: BigNumberish, _minGlp: BigNumberish],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakeEsGmx"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakeGmx"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakeGmxForAccount"
  ): TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakedGlpTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stakedGmxTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unstakeAndRedeemGlp"
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
    nameOrSignature: "unstakeAndRedeemGlpETH"
  ): TypedContractMethod<
    [_glpAmount: BigNumberish, _minOut: BigNumberish, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unstakeEsGmx"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unstakeGmx"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "weth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawToken"
  ): TypedContractMethod<
    [_token: AddressLike, _account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "StakeGlp"
  ): TypedContractEvent<
    StakeGlpEvent.InputTuple,
    StakeGlpEvent.OutputTuple,
    StakeGlpEvent.OutputObject
  >;
  getEvent(
    key: "StakeGmx"
  ): TypedContractEvent<
    StakeGmxEvent.InputTuple,
    StakeGmxEvent.OutputTuple,
    StakeGmxEvent.OutputObject
  >;
  getEvent(
    key: "UnstakeGlp"
  ): TypedContractEvent<
    UnstakeGlpEvent.InputTuple,
    UnstakeGlpEvent.OutputTuple,
    UnstakeGlpEvent.OutputObject
  >;
  getEvent(
    key: "UnstakeGmx"
  ): TypedContractEvent<
    UnstakeGmxEvent.InputTuple,
    UnstakeGmxEvent.OutputTuple,
    UnstakeGmxEvent.OutputObject
  >;

  filters: {
    "StakeGlp(address,uint256)": TypedContractEvent<
      StakeGlpEvent.InputTuple,
      StakeGlpEvent.OutputTuple,
      StakeGlpEvent.OutputObject
    >;
    StakeGlp: TypedContractEvent<
      StakeGlpEvent.InputTuple,
      StakeGlpEvent.OutputTuple,
      StakeGlpEvent.OutputObject
    >;

    "StakeGmx(address,uint256)": TypedContractEvent<
      StakeGmxEvent.InputTuple,
      StakeGmxEvent.OutputTuple,
      StakeGmxEvent.OutputObject
    >;
    StakeGmx: TypedContractEvent<
      StakeGmxEvent.InputTuple,
      StakeGmxEvent.OutputTuple,
      StakeGmxEvent.OutputObject
    >;

    "UnstakeGlp(address,uint256)": TypedContractEvent<
      UnstakeGlpEvent.InputTuple,
      UnstakeGlpEvent.OutputTuple,
      UnstakeGlpEvent.OutputObject
    >;
    UnstakeGlp: TypedContractEvent<
      UnstakeGlpEvent.InputTuple,
      UnstakeGlpEvent.OutputTuple,
      UnstakeGlpEvent.OutputObject
    >;

    "UnstakeGmx(address,uint256)": TypedContractEvent<
      UnstakeGmxEvent.InputTuple,
      UnstakeGmxEvent.OutputTuple,
      UnstakeGmxEvent.OutputObject
    >;
    UnstakeGmx: TypedContractEvent<
      UnstakeGmxEvent.InputTuple,
      UnstakeGmxEvent.OutputTuple,
      UnstakeGmxEvent.OutputObject
    >;
  };
}