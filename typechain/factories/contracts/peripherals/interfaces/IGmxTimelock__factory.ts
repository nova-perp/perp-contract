/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGmxTimelock,
  IGmxTimelockInterface,
} from "../../../../contracts/peripherals/interfaces/IGmxTimelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isLeverageEnabled",
        type: "bool",
      },
    ],
    name: "setIsLeverageEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "signalSetGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IGmxTimelock__factory {
  static readonly abi = _abi;
  static createInterface(): IGmxTimelockInterface {
    return new Interface(_abi) as IGmxTimelockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IGmxTimelock {
    return new Contract(address, _abi, runner) as unknown as IGmxTimelock;
  }
}
