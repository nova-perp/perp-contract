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

export interface IVesterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bonusRewards"
      | "claimForAccount"
      | "claimable"
      | "claimedAmounts"
      | "cumulativeClaimAmounts"
      | "cumulativeRewardDeductions"
      | "getCombinedAverageStakedAmount"
      | "getMaxVestableAmount"
      | "getVestedAmount"
      | "pairAmounts"
      | "rewardTracker"
      | "setBonusRewards"
      | "setCumulativeRewardDeductions"
      | "setTransferredAverageStakedAmounts"
      | "setTransferredCumulativeRewards"
      | "transferStakeValues"
      | "transferredAverageStakedAmounts"
      | "transferredCumulativeRewards"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bonusRewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimForAccount",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimedAmounts",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeClaimAmounts",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeRewardDeductions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCombinedAverageStakedAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxVestableAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestedAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pairAmounts",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBonusRewards",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCumulativeRewardDeductions",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferredAverageStakedAmounts",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferredCumulativeRewards",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferStakeValues",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferredAverageStakedAmounts",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferredCumulativeRewards",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "bonusRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeClaimAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeRewardDeductions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCombinedAverageStakedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxVestableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBonusRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCumulativeRewardDeductions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferredAverageStakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferredCumulativeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferStakeValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferredAverageStakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferredCumulativeRewards",
    data: BytesLike
  ): Result;
}

export interface IVester extends BaseContract {
  connect(runner?: ContractRunner | null): IVester;
  waitForDeployment(): Promise<this>;

  interface: IVesterInterface;

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

  bonusRewards: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  claimForAccount: TypedContractMethod<
    [_account: AddressLike, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  claimable: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  claimedAmounts: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  cumulativeClaimAmounts: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  cumulativeRewardDeductions: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  getCombinedAverageStakedAmount: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  getMaxVestableAmount: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  getVestedAmount: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  pairAmounts: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  rewardTracker: TypedContractMethod<[], [string], "view">;

  setBonusRewards: TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCumulativeRewardDeductions: TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTransferredAverageStakedAmounts: TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTransferredCumulativeRewards: TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferStakeValues: TypedContractMethod<
    [_sender: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  transferredAverageStakedAmounts: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  transferredCumulativeRewards: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bonusRewards"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimForAccount"
  ): TypedContractMethod<
    [_account: AddressLike, _receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimable"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimedAmounts"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "cumulativeClaimAmounts"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "cumulativeRewardDeductions"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCombinedAverageStakedAmount"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxVestableAmount"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getVestedAmount"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pairAmounts"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardTracker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setBonusRewards"
  ): TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCumulativeRewardDeductions"
  ): TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTransferredAverageStakedAmounts"
  ): TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTransferredCumulativeRewards"
  ): TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferStakeValues"
  ): TypedContractMethod<
    [_sender: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferredAverageStakedAmounts"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferredCumulativeRewards"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  filters: {};
}