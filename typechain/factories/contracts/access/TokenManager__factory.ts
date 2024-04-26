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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TokenManager,
  TokenManagerInterface,
} from "../../../contracts/access/TokenManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minAuthorizations",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "ClearAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "SignAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "SignalApprove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "SignalApproveNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "SignalApproveNFTs",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "SignalPendingAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "SignalSetAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "timelock",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "gov",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "action",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "SignalSetGov",
    type: "event",
  },
  {
    inputs: [],
    name: "actionsNonce",
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
    name: "admin",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "approveNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "approveNFTs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isInitialized",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isSigner",
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
    name: "minAuthorizations",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "pendingActions",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "receiveNFTs",
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
        name: "_admin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
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
        name: "_timelock",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "signApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "signApproveNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "signApproveNFTs",
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
        name: "_admin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "signSetAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_timelock",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "signSetGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "signalApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "signalApproveNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "signalApproveNFTs",
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
        name: "_admin",
        type: "address",
      },
    ],
    name: "signalSetAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_timelock",
        type: "address",
      },
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "signedActions",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "signers",
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
    name: "signersLength",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516126653803806126658339818101604052602081101561003357600080fd5b50516001600055600480546001600160a01b031916331790556003556126078061005e6000396000f3fe608060405234801561001057600080fd5b506004361061013e5760003560e01c80630b13beca14610143578063181fcd331461017b5780632079fb9a14610235578063287800c91461026e578063392e53cd1461028857806341f684f3146102a457806342a1fcee146102ac5780634dc5ecb31461036857806375fd490c146103a45780637df73e27146103d257806387c6d4f9146103f85780639fddaac114610424578063a224cee71461045a578063a4c04bb7146104fb578063a62fb17014610503578063adb384b61461053f578063dce6e18d146105f9578063ddf67a9f1461062f578063e2d03cc51461066b578063e30569e5146106a3578063e9075621146106c0578063f00cb942146106fc578063f23f9775146107b8578063f466634b146107f4578063f52dc4f71461082a578063f851a44014610866575b600080fd5b6101796004803603606081101561015957600080fd5b506001600160a01b0381358116916020810135909116906040013561086e565b005b6101796004803603606081101561019157600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156101c457600080fd5b8201836020820111156101d657600080fd5b803590602001918460208302840111600160201b831117156101f757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506109de945050505050565b6102526004803603602081101561024b57600080fd5b5035610bd4565b604080516001600160a01b039092168252519081900360200190f35b610276610bfb565b60408051918252519081900360200190f35b610290610c01565b604080519115158252519081900360200190f35b610276610c0a565b610179600480360360808110156102c257600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156102f557600080fd5b82018360208201111561030757600080fd5b803590602001918460208302840111600160201b8311171561032857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505091359250610c10915050565b6101796004803603608081101561037e57600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135610e06565b610179600480360360408110156103ba57600080fd5b506001600160a01b0381358116916020013516610f9a565b610290600480360360208110156103e857600080fd5b50356001600160a01b0316611123565b6102906004803603604081101561040e57600080fd5b506001600160a01b038135169060200135611138565b6101796004803603606081101561043a57600080fd5b506001600160a01b03813581169160208101359091169060400135611158565b6101796004803603602081101561047057600080fd5b810190602081018135600160201b81111561048a57600080fd5b82018360208201111561049c57600080fd5b803590602001918460208302840111600160201b831117156104bd57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506112d8945050505050565b6102766113e1565b6101796004803603608081101561051957600080fd5b506001600160a01b038135811691602081013582169160408201351690606001356113e7565b6101796004803603606081101561055557600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561058857600080fd5b82018360208201111561059a57600080fd5b803590602001918460208302840111600160201b831117156105bb57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506115b6945050505050565b6101796004803603606081101561060f57600080fd5b506001600160a01b038135811691602081013590911690604001356116f9565b6101796004803603608081101561064557600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135611866565b6101796004803603606081101561068157600080fd5b506001600160a01b03813581169160208101358216916040909101351661196a565b610290600480360360208110156106b957600080fd5b5035611b06565b610179600480360360808110156106d657600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135611b1b565b6101796004803603608081101561071257600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561074557600080fd5b82018360208201111561075757600080fd5b803590602001918460208302840111600160201b8311171561077857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505091359250611caa915050565b610179600480360360808110156107ce57600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135611dea565b6101796004803603606081101561080a57600080fd5b506001600160a01b03813581169160208101359091169060400135611f4a565b6101796004803603608081101561084057600080fd5b506001600160a01b0381358116916020810135909116906040810135906060013561210b565b61025261220c565b600260005414156108b4576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314610906576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b60028054600101908190556040805169185c1c1c9bdd9953919560b21b6020808301919091526001600160601b0319606088811b8216602a85015287901b16603e830152605282018590526072808301859052835180840390910181526092909201909252805191012061097a818361221b565b604080516001600160a01b03808816825286166020820152808201859052606081018390526080810184905290517fcd9ba83b63715dc15ac193645d6e925bf4b487c94b73d709b8b6dea608efd4cc9181900360a00190a150506001600055505050565b60026000541415610a24576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314610a76576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b60028054600101908190556040516a617070726f76654e46547360a81b60208083019182526001600160601b0319606088811b8216602b86015287901b16603f840152845160009388938893889388936053019180860191028083838b5b83811015610aec578181015183820152602001610ad4565b50505050905001828152602001945050505050604051602081830303815290604052805190602001209050610b21818361221b565b7ff9d0354d71c261982d98abd09b735f3663b2d7275e2569ad5fd907a4092765f9858585848660405180866001600160a01b03168152602001856001600160a01b0316815260200180602001848152602001838152602001828103825285818151815260200191508051906020019060200280838360005b83811015610bb1578181015183820152602001610b99565b50505050905001965050505050505060405180910390a150506001600055505050565b60058181548110610be157fe5b6000918252602090912001546001600160a01b0316905081565b60035481565b60015460ff1681565b60055490565b60026000541415610c56576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314610ca8576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b60008484848460405160200180806a617070726f76654e46547360a81b815250600b01856001600160a01b031660601b8152601401846001600160a01b031660601b8152601401838051906020019060200280838360005b83811015610d18578181015183820152602001610d00565b50505050905001828152602001945050505050604051602081830303815290604052805190602001209050610d4c81612274565b610d55816122c4565b60005b8351811015610def57856001600160a01b031663095ea7b386868481518110610d7d57fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610dcb57600080fd5b505af1158015610ddf573d6000803e3d6000fd5b505060019092019150610d589050565b50610dfa81836123a6565b50506001600055505050565b60026000541415610e4c576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314610e9e576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b6040805166617070726f766560c81b6020808301919091526001600160601b0319606088811b8216602785015287901b16603b830152604f8201859052606f80830185905283518084039091018152608f9092019092528051910120610f0381612274565b610f0c816122c4565b846001600160a01b031663095ea7b385856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610f6357600080fd5b505af1158015610f77573d6000803e3d6000fd5b505050506040513d6020811015610f8d57600080fd5b50610dfa905081836123a6565b60026000541415610fe0576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b600260009081553381526006602052604090205460ff16611036576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b6002805460010190819055604080516739b2ba20b236b4b760c11b6020808301919091526001600160601b0319606087811b8216602885015286901b16603c830152605080830185905283518084039091018152607090920190925280519101206110a1818361221b565b336000908152600860209081526040808320848452825291829020805460ff1916600117905581516001600160a01b0387811682528616918101919091528082018390526060810184905290517f4fc9433645aa0a3670e9185496bbd752209fed7a9696fb8a954a0db30ef927b09181900360800190a1505060016000555050565b60066020526000908152604090205460ff1681565b600860209081526000928352604080842090915290825290205460ff1681565b6002600054141561119e576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b600260009081553381526006602052604090205460ff166111f4576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b604080516739b2ba20b236b4b760c11b6020808301919091526001600160601b0319606087811b8216602885015286901b16603c8301526050808301859052835180840390910181526070909201909252805191012061125381612274565b61125c816122c4565b836001600160a01b031663704b6c02846040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156112ab57600080fd5b505af11580156112bf573d6000803e3d6000fd5b505050506112cd81836123a6565b505060016000555050565b6004546001600160a01b03163314611325576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b60015460ff16156113675760405162461bcd60e51b81526004018080602001828103825260218152602001806125046021913960400191505060405180910390fd5b6001805460ff191681179055805161138690600590602084019061245f565b5060005b81518110156113dd5760008282815181106113a157fe5b6020908102919091018101516001600160a01b03166000908152600690915260409020805460ff1916600190811790915591909101905061138a565b5050565b60025481565b6002600054141561142d576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b600260009081553381526006602052604090205460ff16611483576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b604080516b39b4b3b730b629b2ba23b7bb60a11b6020808301919091526001600160601b0319606088811b8216602c85015287811b82168486015286901b166054830152606880830185905283518084039091018152608890920190925280519101206114ef81612274565b33600090815260086020908152604080832084845290915290205460ff161561155e576040805162461bcd60e51b815260206004820152601c60248201527b151bdad95b93585b9859d95c8e88185b1c9958591e481cda59db995960221b604482015290519081900360640190fd5b336000908152600860209081526040808320848452825291829020805460ff19166001179055815183815290810184905281516000805160206125b2833981519152929181900390910190a150506001600055505050565b600260005414156115fc576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b0316331461164e576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b60005b81518110156112cd57836001600160a01b03166323b872dd843085858151811061167757fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b1580156116d557600080fd5b505af11580156116e9573d6000803e3d6000fd5b5050600190920191506116519050565b6002600054141561173f576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314611791576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b60028054600101908190556040805166617070726f766560c81b6020808301919091526001600160601b0319606088811b8216602785015287901b16603b830152604f8201859052606f80830185905283518084039091018152608f9092019092528051910120611802818361221b565b604080516001600160a01b03808816825286166020820152808201859052606081018390526080810184905290517fc19251bf5f704ddc3d5babe6f4e5bde0dded20b19f7844716861821ab3163cd79181900360a00190a150506001600055505050565b600260005414156118ac576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b600260009081553381526006602052604090205460ff16611902576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b6040805169185c1c1c9bdd9953919560b21b6020808301919091526001600160601b0319606088811b8216602a85015287901b16603e83015260528201859052607280830185905283518084039091018152609290920190925280519101206114ef81612274565b600260005414156119b0576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314611a02576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b6002805460010190819055604080516b39b4b3b730b629b2ba23b7bb60a11b6020808301919091526001600160601b0319606088811b8216602c85015287811b82168486015286901b16605483015260688083018590528351808403909101815260889092019092528051910120611a7a818361221b565b336000908152600860209081526040808320848452825291829020805460ff1916600117905581516001600160a01b0388811682528781169282019290925290851681830152606081018390526080810184905290517f634e13057d45400506e3b303913ac59b61e5a8137ea6fed5ed44aa0b8bc3c5689181900360a00190a150506001600055505050565b60076020526000908152604090205460ff1681565b60026000541415611b61576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314611bb3576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b604080516b39b4b3b730b629b2ba23b7bb60a11b6020808301919091526001600160601b0319606088811b8216602c85015287811b82168486015286901b16605483015260688083018590528351808403909101815260889092019092528051910120611c1f81612274565b611c28816122c4565b846001600160a01b031663996a7a1e85856040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b158015611c8857600080fd5b505af1158015611c9c573d6000803e3d6000fd5b50505050610dfa81836123a6565b60026000541415611cf0576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b600260009081553381526006602052604090205460ff16611d46576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b60008484848460405160200180806a617070726f76654e46547360a81b815250600b01856001600160a01b031660601b8152601401846001600160a01b031660601b8152601401838051906020019060200280838360005b83811015611db6578181015183820152602001611d9e565b505050509050018281526020019450505050506040516020818303038152906040528051906020012090506114ef81612274565b60026000541415611e30576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b60026000556004546001600160a01b03163314611e82576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b6040805169185c1c1c9bdd9953919560b21b6020808301919091526001600160601b0319606088811b8216602a85015287901b16603e8301526052820185905260728083018590528351808403909101815260929092019092528051910120611eea81612274565b611ef3816122c4565b846001600160a01b031663095ea7b385856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015611c8857600080fd5b60026000541415611f90576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b600260009081553381526006602052604090205460ff16611fe6576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b604080516739b2ba20b236b4b760c11b6020808301919091526001600160601b0319606087811b8216602885015286901b16603c8301526050808301859052835180840390910181526070909201909252805191012061204581612274565b33600090815260086020908152604080832084845290915290205460ff16156120b4576040805162461bcd60e51b815260206004820152601c60248201527b151bdad95b93585b9859d95c8e88185b1c9958591e481cda59db995960221b604482015290519081900360640190fd5b336000908152600860209081526040808320848452825291829020805460ff19166001179055815183815290810184905281516000805160206125b2833981519152929181900390910190a1505060016000555050565b60026000541415612151576040805162461bcd60e51b815260206004820152601f60248201526000805160206124e4833981519152604482015290519081900360640190fd5b600260009081553381526006602052604090205460ff166121a7576040805162461bcd60e51b81526020600482015260176024820152600080516020612570833981519152604482015290519081900360640190fd5b6040805166617070726f766560c81b6020808301919091526001600160601b0319606088811b8216602785015287901b16603b830152604f8201859052606f80830185905283518084039091018152608f90920190925280519101206114ef81612274565b6004546001600160a01b031681565b600082815260076020908152604091829020805460ff19166001179055815184815290810183905281517f64df01c46eb530dc540770a0b88cc32f0b8c2b371a546ae0b13cc8ca6671fff9929181900390910190a15050565b60008181526007602052604090205460ff166122c15760405162461bcd60e51b81526004018080602001828103825260228152602001806125906022913960400191505060405180910390fd5b50565b6000805b600554811015612328576000600582815481106122e157fe5b60009182526020808320909101546001600160a01b031680835260088252604080842088855290925291205490915060ff161561231f576001909201915b506001016122c8565b50806123655760405162461bcd60e51b815260040180806020018281038252602381526020018061254d6023913960400191505060405180910390fd5b6003548110156113dd5760405162461bcd60e51b81526004018080602001828103825260288152602001806125256028913960400191505060405180910390fd5b60008281526007602052604090205460ff16612409576040805162461bcd60e51b815260206004820152601d60248201527f546f6b656e4d616e616765723a20696e76616c6964205f616374696f6e000000604482015290519081900360640190fd5b600082815260076020908152604091829020805460ff19169055815184815290810183905281517ff4640d39061e643d9b802cb3725953405344555ad6dbb1cbdb0495f3eccb8e68929181900390910190a15050565b8280548282559060005260206000209081019282156124b4579160200282015b828111156124b457825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061247f565b506124c09291506124c4565b5090565b5b808211156124c05780546001600160a01b03191681556001016124c556fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c00546f6b656e4d616e616765723a20616c726561647920696e697469616c697a6564546f6b656e4d616e616765723a20696e73756666696369656e7420617574686f72697a6174696f6e546f6b656e4d616e616765723a20616374696f6e206e6f7420617574686f72697a6564546f6b656e4d616e616765723a20666f7262696464656e000000000000000000546f6b656e4d616e616765723a20616374696f6e206e6f74207369676e616c6c6564aae28fe5531fe5dfb8d12409392ec67b50c825dd06233312cb6aeaddd16cbd22a264697066735822122048ad31c65ed6dd9c308cf425022f4952e6530db5598374a377ad389a6ab32aea64736f6c634300060c0033";

type TokenManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenManager__factory extends ContractFactory {
  constructor(...args: TokenManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _minAuthorizations: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_minAuthorizations, overrides || {});
  }
  override deploy(
    _minAuthorizations: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_minAuthorizations, overrides || {}) as Promise<
      TokenManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenManager__factory {
    return super.connect(runner) as TokenManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenManagerInterface {
    return new Interface(_abi) as TokenManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenManager {
    return new Contract(address, _abi, runner) as unknown as TokenManager;
  }
}
