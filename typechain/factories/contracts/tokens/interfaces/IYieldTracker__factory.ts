/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IYieldTracker,
  IYieldTrackerInterface,
} from "../../../../contracts/tokens/interfaces/IYieldTracker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
    name: "claimable",
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
    name: "getTokensPerInterval",
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
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "updateRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IYieldTracker__factory {
  static readonly abi = _abi;
  static createInterface(): IYieldTrackerInterface {
    return new Interface(_abi) as IYieldTrackerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IYieldTracker {
    return new Contract(address, _abi, runner) as unknown as IYieldTracker;
  }
}