/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPancakePair,
  IPancakePairInterface,
} from "../../../../contracts/amm/interfaces/IPancakePair";

const _abi = [
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IPancakePair__factory {
  static readonly abi = _abi;
  static createInterface(): IPancakePairInterface {
    return new Interface(_abi) as IPancakePairInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPancakePair {
    return new Contract(address, _abi, runner) as unknown as IPancakePair;
  }
}
