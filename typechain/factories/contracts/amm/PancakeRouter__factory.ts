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
  PancakeRouter,
  PancakeRouterInterface,
} from "../../../contracts/amm/PancakeRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161037f38038061037f8339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905561031a806100656000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a8aa1b311461003b578063e8e337001461005f575b600080fd5b6100436100d2565b604080516001600160a01b039092168252519081900360200190f35b6100b4600480360361010081101561007657600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e001356100e1565b60408051938452602084019290925282820152519081900360600190f35b6000546001600160a01b031681565b600080600042841015610134576040805162461bcd60e51b815260206004820152601660248201527514185b98d85ad9549bdd5d195c8e881156141254915160521b604482015290519081900360640190fd5b60008054604080516340c10f1960e01b81526001600160a01b0389811660048301526103e86024830152915191909216926340c10f19926044808201939182900301818387803b15801561018757600080fd5b505af115801561019b573d6000803e3d6000fd5b505050508a6001600160a01b03166323b872dd3360008054906101000a90046001600160a01b03168c6040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b15801561021a57600080fd5b505af115801561022e573d6000803e3d6000fd5b505050506040513d602081101561024457600080fd5b505060008054604080516323b872dd60e01b81523360048201526001600160a01b039283166024820152604481018c90529051918d16926323b872dd926064808401936020939083900390910190829087803b1580156102a357600080fd5b505af11580156102b7573d6000803e3d6000fd5b505050506040513d60208110156102cd57600080fd5b50989b979a506103e899509697505050505050505056fea26469706673582212204d22f10bcacc1c7963559b87fe81992ef55c7afb2d1e0a7bf17048a6935b808b64736f6c634300060c0033";

type PancakeRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PancakeRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PancakeRouter__factory extends ContractFactory {
  constructor(...args: PancakeRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _pair: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_pair, overrides || {});
  }
  override deploy(
    _pair: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_pair, overrides || {}) as Promise<
      PancakeRouter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PancakeRouter__factory {
    return super.connect(runner) as PancakeRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PancakeRouterInterface {
    return new Interface(_abi) as PancakeRouterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PancakeRouter {
    return new Contract(address, _abi, runner) as unknown as PancakeRouter;
  }
}
