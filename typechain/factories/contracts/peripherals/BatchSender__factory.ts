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
  BatchSender,
  BatchSenderInterface,
} from "../../../contracts/peripherals/BatchSender";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "typeId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "BatchSend",
    type: "event",
  },
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
        name: "",
        type: "address",
      },
    ],
    name: "isHandler",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_typeId",
        type: "uint256",
      },
    ],
    name: "sendAndEmit",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782558152600160208190526040909120805460ff191690911790556107518061004d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806312d43a511461006757806346ea87af1461008b578063745ae40b146100c55780639cb7de4b146101fc578063cfad57a21461022a578063f8129cd214610250575b600080fd5b61006f610383565b604080516001600160a01b039092168252519081900360200190f35b6100b1600480360360208110156100a157600080fd5b50356001600160a01b0316610392565b604080519115158252519081900360200190f35b6101fa600480360360808110156100db57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561010557600080fd5b82018360208201111561011757600080fd5b803590602001918460208302840111600160201b8311171561013857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561018757600080fd5b82018360208201111561019957600080fd5b803590602001918460208302840111600160201b831117156101ba57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050913592506103a7915050565b005b6101fa6004803603604081101561021257600080fd5b506001600160a01b0381351690602001351515610416565b6101fa6004803603602081101561024057600080fd5b50356001600160a01b0316610498565b6101fa6004803603606081101561026657600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561029057600080fd5b8201836020820111156102a257600080fd5b803590602001918460208302840111600160201b831117156102c357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561031257600080fd5b82018360208201111561032457600080fd5b803590602001918460208302840111600160201b8311171561034557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610511945050505050565b6000546001600160a01b031681565b60016020526000908152604090205460ff1681565b3360009081526001602052604090205460ff16610404576040805162461bcd60e51b81526020600482015260166024820152752130ba31b429b2b73232b91d103337b93134b23232b760511b604482015290519081900360640190fd5b61041084848484610580565b50505050565b6000546001600160a01b0316331461046d576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b6001600160a01b03919091166000908152600160205260409020805460ff1916911515919091179055565b6000546001600160a01b031633146104ef576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526001602052604090205460ff1661056e576040805162461bcd60e51b81526020600482015260166024820152752130ba31b429b2b73232b91d103337b93134b23232b760511b604482015290519081900360640190fd5b61057b8383836000610580565b505050565b60005b835181101561064e57600084828151811061059a57fe5b6020026020010151905060008483815181106105b257fe5b602090810291909101810151604080516323b872dd60e01b81523360048201526001600160a01b038681166024830152604482018490529151929450908a16926323b872dd926064808401938290030181600087803b15801561061457600080fd5b505af1158015610628573d6000803e3d6000fd5b505050506040513d602081101561063e57600080fd5b5050600190920191506105839050565b50836001600160a01b0316817fa1552778fd4edc5098fd82f614c100bf0f42c781e7926907643e2894679da0f38585604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156106c15781810151838201526020016106a9565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156107005781810151838201526020016106e8565b5050505090500194505050505060405180910390a35050505056fea264697066735822122086a5e6c7beeaf101c747964583d158c49b9f27cdab4129771472e695fd2e308564736f6c634300060c0033";

type BatchSenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BatchSenderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BatchSender__factory extends ContractFactory {
  constructor(...args: BatchSenderConstructorParams) {
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
      BatchSender & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BatchSender__factory {
    return super.connect(runner) as BatchSender__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BatchSenderInterface {
    return new Interface(_abi) as BatchSenderInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BatchSender {
    return new Contract(address, _abi, runner) as unknown as BatchSender;
  }
}
