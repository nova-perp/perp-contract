/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IYieldToken,
  IYieldTokenInterface,
} from "../../../../contracts/tokens/interfaces/IYieldToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "stakedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IYieldToken__factory {
  static readonly abi = _abi;
  static createInterface(): IYieldTokenInterface {
    return new Interface(_abi) as IYieldTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IYieldToken {
    return new Contract(address, _abi, runner) as unknown as IYieldToken;
  }
}
