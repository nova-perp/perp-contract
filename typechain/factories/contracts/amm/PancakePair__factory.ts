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
  PancakePair,
  PancakePairInterface,
} from "../../../contracts/amm/PancakePair";

const _abi = [
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance1",
        type: "uint256",
      },
    ],
    name: "setReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061014b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630902f1ac1461003b5780638392b8c014610073575b600080fd5b610043610098565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b6100966004803603604081101561008957600080fd5b50803590602001356100c2565b005b6000546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b600080546001600160701b0319166001600160701b0393841617600160701b600160e01b031916600160701b9290931691909102919091176001600160e01b0316600160e01b4263ffffffff160217905556fea264697066735822122038c8ff584f49217586870e18dd061c3f7fc97245300662827d4a3a9535e1db7964736f6c634300060c0033";

type PancakePairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PancakePairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PancakePair__factory extends ContractFactory {
  constructor(...args: PancakePairConstructorParams) {
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
      PancakePair & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PancakePair__factory {
    return super.connect(runner) as PancakePair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PancakePairInterface {
    return new Interface(_abi) as PancakePairInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PancakePair {
    return new Contract(address, _abi, runner) as unknown as PancakePair;
  }
}