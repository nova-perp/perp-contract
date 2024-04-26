/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  StakedGlpMigrator,
  StakedGlpMigratorInterface,
} from "../../../contracts/staking/StakedGlpMigrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_glp",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakedGlpTracker",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeGlpTracker",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeGlpTracker",
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
    inputs: [],
    name: "glp",
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
    inputs: [],
    name: "isEnabled",
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
    inputs: [],
    name: "sender",
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
    inputs: [],
    name: "stakedGlpTracker",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526004805460ff60a01b1916600160a01b17905534801561002357600080fd5b506040516107373803806107378339818101604052608081101561004657600080fd5b50805160208201516040830151606090930151600080546001600160a01b03199081163317909155600180546001600160a01b039586169083161790556002805493851693821693909317909255600380549484169483169490941790935560048054929093169116179055610676806100c16000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806312d43a51146100885780632f2770db146100ac57806367e404ce146100b65780636aa633b6146100be57806378a207ee146100da578063a9059cbb146100e2578063af394d001461010e578063cfad57a214610116578063e1c363b71461013c575b600080fd5b610090610144565b604080516001600160a01b039092168252519081900360200190f35b6100b4610153565b005b6100906101b9565b6100c66101c8565b604080519115158252519081900360200190f35b6100906101d8565b6100b4600480360360408110156100f857600080fd5b506001600160a01b0381351690602001356101e7565b610090610259565b6100b46004803603602081101561012c57600080fd5b50356001600160a01b0316610268565b6100906102e1565b6000546001600160a01b031681565b6000546001600160a01b031633146101aa576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b6004805460ff60a01b19169055565b6001546001600160a01b031681565b600454600160a01b900460ff1681565b6002546001600160a01b031681565b6000546001600160a01b0316331461023e576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b600154610255906001600160a01b031683836102f0565b5050565b6003546001600160a01b031681565b6000546001600160a01b031633146102bf576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b031681565b600454600160a01b900460ff1661034e576040805162461bcd60e51b815260206004820152601e60248201527f5374616b6564476c704d69677261746f723a206e6f7420656e61626c65640000604482015290519081900360640190fd5b6001600160a01b0383166103935760405162461bcd60e51b81526004018080602001828103825260318152602001806106106031913960400191505060405180910390fd5b6001600160a01b0382166103d85760405162461bcd60e51b815260040180806020018281038252602f8152602001806105e1602f913960400191505060405180910390fd5b600354600480546040805163098bf59d60e01b81526001600160a01b0388811694820185905292831660248201526044810186905260648101939093525192169163098bf59d9160848082019260009290919082900301818387803b15801561044057600080fd5b505af1158015610454573d6000803e3d6000fd5b5050600480546002546040805163098bf59d60e01b81526001600160a01b038a81169582018690529283166024820152604481018890526064810194909452519116935063098bf59d9250608480830192600092919082900301818387803b1580156104bf57600080fd5b505af11580156104d3573d6000803e3d6000fd5b50506004805460025460408051631e42d69b60e21b81526001600160a01b038a81169582019590955288851660248201529184166044830152606482018790525192909116935063790b5a6c925060848082019260009290919082900301818387803b15801561054257600080fd5b505af1158015610556573d6000803e3d6000fd5b50506003546004805460408051631e42d69b60e21b81526001600160a01b0389811694820185905260248201949094529183166044830152606482018790525191909216935063790b5a6c9250608480830192600092919082900301818387803b1580156105c357600080fd5b505af11580156105d7573d6000803e3d6000fd5b5050505050505056fe5374616b6564476c704d69677261746f723a207472616e7366657220746f20746865207a65726f20616464726573735374616b6564476c704d69677261746f723a207472616e736665722066726f6d20746865207a65726f2061646472657373a2646970667358221220612da5725b6aaa60909c13f0ef02a831f6e295ee046d2f5e70ca8a937ffb3ee264736f6c634300060c0033";

type StakedGlpMigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakedGlpMigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakedGlpMigrator__factory extends ContractFactory {
  constructor(...args: StakedGlpMigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _sender: AddressLike,
    _glp: AddressLike,
    _stakedGlpTracker: AddressLike,
    _feeGlpTracker: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _sender,
      _glp,
      _stakedGlpTracker,
      _feeGlpTracker,
      overrides || {}
    );
  }
  override deploy(
    _sender: AddressLike,
    _glp: AddressLike,
    _stakedGlpTracker: AddressLike,
    _feeGlpTracker: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _sender,
      _glp,
      _stakedGlpTracker,
      _feeGlpTracker,
      overrides || {}
    ) as Promise<
      StakedGlpMigrator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): StakedGlpMigrator__factory {
    return super.connect(runner) as StakedGlpMigrator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakedGlpMigratorInterface {
    return new Interface(_abi) as StakedGlpMigratorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StakedGlpMigrator {
    return new Contract(address, _abi, runner) as unknown as StakedGlpMigrator;
  }
}