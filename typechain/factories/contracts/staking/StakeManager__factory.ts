/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  StakeManager,
  StakeManagerInterface,
} from "../../../contracts/staking/StakeManager";

const _abi = [
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardTracker",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stakeForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610262806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806312d43a5114610046578063790b5a6c1461006a578063cfad57a2146100a8575b600080fd5b61004e6100ce565b604080516001600160a01b039092168252519081900360200190f35b6100a66004803603608081101561008057600080fd5b506001600160a01b038135811691602081013582169160408201351690606001356100dd565b005b6100a6600480360360208110156100be57600080fd5b50356001600160a01b03166101b3565b6000546001600160a01b031681565b6000546001600160a01b03163314610134576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b60408051631e42d69b60e21b81526001600160a01b0385811660048301819052602483015284811660448301526064820184905291519186169163790b5a6c9160848082019260009290919082900301818387803b15801561019557600080fd5b505af11580156101a9573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b0316331461020a576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b039290921691909117905556fea2646970667358221220991722b6ed403f232cda454f1015cfcc7e687af0b9af216ff13dd7b4b532548964736f6c634300060c0033";

type StakeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakeManager__factory extends ContractFactory {
  constructor(...args: StakeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      StakeManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): StakeManager__factory {
    return super.connect(runner) as StakeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeManagerInterface {
    return new Interface(_abi) as StakeManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StakeManager {
    return new Contract(address, _abi, runner) as unknown as StakeManager;
  }
}
