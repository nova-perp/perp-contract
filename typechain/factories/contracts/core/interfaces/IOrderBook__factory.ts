/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOrderBook,
  IOrderBookInterface,
} from "../../../../contracts/core/interfaces/IOrderBook";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    name: "executeDecreaseOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    name: "executeIncreaseOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    name: "executeSwapOrder",
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
      {
        internalType: "uint256",
        name: "_orderIndex",
        type: "uint256",
      },
    ],
    name: "getDecreaseOrder",
    outputs: [
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralDelta",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "triggerPrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "triggerAboveThreshold",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "executionFee",
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
      {
        internalType: "uint256",
        name: "_orderIndex",
        type: "uint256",
      },
    ],
    name: "getIncreaseOrder",
    outputs: [
      {
        internalType: "address",
        name: "purchaseToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "purchaseTokenAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "triggerPrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "triggerAboveThreshold",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "executionFee",
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
      {
        internalType: "uint256",
        name: "_orderIndex",
        type: "uint256",
      },
    ],
    name: "getSwapOrder",
    outputs: [
      {
        internalType: "address",
        name: "path0",
        type: "address",
      },
      {
        internalType: "address",
        name: "path1",
        type: "address",
      },
      {
        internalType: "address",
        name: "path2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "triggerRatio",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "triggerAboveThreshold",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "shouldUnwrap",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IOrderBook__factory {
  static readonly abi = _abi;
  static createInterface(): IOrderBookInterface {
    return new Interface(_abi) as IOrderBookInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IOrderBook {
    return new Contract(address, _abi, runner) as unknown as IOrderBook;
  }
}