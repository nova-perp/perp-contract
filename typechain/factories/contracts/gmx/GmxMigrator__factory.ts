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
  GmxMigrator,
  GmxMigratorInterface,
} from "../../../contracts/gmx/GmxMigrator";

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
    inputs: [],
    name: "ammRouter",
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
        name: "",
        type: "address",
      },
    ],
    name: "caps",
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
    name: "endMigration",
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
    ],
    name: "getIouToken",
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
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "getTokenAmounts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
    ],
    name: "getTokenPrice",
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
    name: "gmxPrice",
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
    name: "hasMaxMigrationLimit",
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
        name: "_ammRouter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gmxPrice",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_whitelistedTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_iouTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_caps",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_lpTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_lpTokenAs",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_lpTokenBs",
        type: "address[]",
      },
    ],
    name: "initialize",
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
    ],
    name: "iouTokens",
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
    inputs: [],
    name: "isMigrationActive",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lpTokenAs",
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
    name: "lpTokenBs",
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
    name: "lpTokens",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "maxMigrationAmounts",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
    ],
    name: "migrate",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "migratedAmounts",
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
        name: "",
        type: "address",
      },
    ],
    name: "prices",
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
        internalType: "bool",
        name: "_hasMaxMigrationLimit",
        type: "bool",
      },
    ],
    name: "setHasMaxMigrationLimit",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxMigrationAmount",
        type: "uint256",
      },
    ],
    name: "setMaxMigrationAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenAmounts",
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
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedTokens",
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
] as const;

const _bytecode =
  "0x60806040526001805462ff00001961ff00199091166101001716905534801561002757600080fd5b506040516126543803806126548339818101604052602081101561004a57600080fd5b50516001600055600680546001600160a01b031916331790556002556125df806100756000396000f3fe608060405234801561001057600080fd5b506004361061018b5760003560e01c80630122f868146101905780630e913a6c146101b15780632079fb9a146101cd578063287800c914610206578063392e53cd1461022057806341410d4a1461022857806343b45f351461024e5780634dc5ecb3146102745780635183a7ca146102b057806364d4b173146102b857806366d97b21146106fd5780636c525d04146107235780637b0365a71461072b5780637df73e271461081c5780637efdec321461084257806387c6d4f91461086857806390b3c4e714610894578063918355271461089c578063a0e2e5f6146108d2578063a4c04bb7146108f8578063a758f6dd14610900578063a9d878ee1461092e578063ad68ebf714610936578063b17b658d14610962578063ceb6250e14610988578063cfed246b146109b6578063d02641a0146109dc578063daf9c21014610a02578063dce6e18d14610a28578063e30569e514610a5e578063e699e04814610a7b578063f52dc4f714610aa1578063f851a44014610add575b600080fd5b6101af600480360360208110156101a657600080fd5b50351515610ae5565b005b6101b9610b4e565b604080519115158252519081900360200190f35b6101ea600480360360208110156101e357600080fd5b5035610b5c565b604080516001600160a01b039092168252519081900360200190f35b61020e610b83565b60408051918252519081900360200190f35b6101b9610b89565b6101ea6004803603602081101561023e57600080fd5b50356001600160a01b0316610b92565b6101ea6004803603602081101561026457600080fd5b50356001600160a01b0316610bad565b6101af6004803603608081101561028a57600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135610bc8565b6101b9610d68565b6101af60048036036101408110156102cf57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156102fe57600080fd5b82018360208201111561031057600080fd5b803590602001918460208302840111600160201b8311171561033157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561038057600080fd5b82018360208201111561039257600080fd5b803590602001918460208302840111600160201b831117156103b357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561040257600080fd5b82018360208201111561041457600080fd5b803590602001918460208302840111600160201b8311171561043557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561048457600080fd5b82018360208201111561049657600080fd5b803590602001918460208302840111600160201b831117156104b757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561050657600080fd5b82018360208201111561051857600080fd5b803590602001918460208302840111600160201b8311171561053957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561058857600080fd5b82018360208201111561059a57600080fd5b803590602001918460208302840111600160201b831117156105bb57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561060a57600080fd5b82018360208201111561061c57600080fd5b803590602001918460208302840111600160201b8311171561063d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561068c57600080fd5b82018360208201111561069e57600080fd5b803590602001918460208302840111600160201b831117156106bf57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610d77945050505050565b61020e6004803603602081101561071357600080fd5b50356001600160a01b0316611220565b6101af611232565b6107cc6004803603602081101561074157600080fd5b810190602081018135600160201b81111561075b57600080fd5b82018360208201111561076d57600080fd5b803590602001918460208302840111600160201b8311171561078e57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061128c945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156108085781810151838201526020016107f0565b505050509050019250505060405180910390f35b6101b96004803603602081101561083257600080fd5b50356001600160a01b0316611344565b6101ea6004803603602081101561085857600080fd5b50356001600160a01b0316611359565b6101b96004803603604081101561087e57600080fd5b506001600160a01b0381351690602001356113ce565b6101ea6113ee565b6101af600480360360608110156108b257600080fd5b506001600160a01b038135811691602081013590911690604001356113fd565b61020e600480360360208110156108e857600080fd5b50356001600160a01b0316611476565b61020e611488565b61020e6004803603604081101561091657600080fd5b506001600160a01b038135811691602001351661148e565b61020e6114ab565b6101af6004803603604081101561094c57600080fd5b506001600160a01b0381351690602001356114b1565b6101b96004803603602081101561097857600080fd5b50356001600160a01b0316611b07565b61020e6004803603604081101561099e57600080fd5b506001600160a01b0381358116916020013516611b1c565b61020e600480360360208110156109cc57600080fd5b50356001600160a01b0316611b39565b61020e600480360360208110156109f257600080fd5b50356001600160a01b0316611b4b565b6101b960048036036020811015610a1857600080fd5b50356001600160a01b0316611bb6565b6101af60048036036060811015610a3e57600080fd5b506001600160a01b03813581169160208101359091169060400135611bcb565b6101b960048036036020811015610a7457600080fd5b5035611d38565b6101ea60048036036020811015610a9157600080fd5b50356001600160a01b0316611d4d565b6101af60048036036080811015610ab757600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135611d68565b6101ea611f41565b6006546001600160a01b03163314610b32576040805162461bcd60e51b815260206004820152601660248201526000805160206124ee833981519152604482015290519081900360640190fd5b60018054911515620100000262ff000019909216919091179055565b600154610100900460ff1681565b60078181548110610b6957fe5b6000918252602090912001546001600160a01b0316905081565b60025481565b60015460ff1681565b600c602052600090815260409020546001600160a01b031681565b6010602052600090815260409020546001600160a01b031681565b60026000541415610c0e576040805162461bcd60e51b815260206004820152601f60248201526000805160206123b5833981519152604482015290519081900360640190fd5b60026000556006546001600160a01b03163314610c60576040805162461bcd60e51b815260206004820152601660248201526000805160206124ee833981519152604482015290519081900360640190fd5b6040805166617070726f766560c81b6020808301919091526001600160601b0319606088811b8216602785015287901b16603b830152604f8201859052606f80830185905283518084039091018152608f9092019092528051910120610cc581611f50565b610cce81611fa0565b846001600160a01b031663095ea7b385856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610d2557600080fd5b505af1158015610d39573d6000803e3d6000fd5b505050506040513d6020811015610d4f57600080fd5b50610d5c90508183612086565b50506001600055505050565b60015462010000900460ff1681565b6006546001600160a01b03163314610dc4576040805162461bcd60e51b815260206004820152601660248201526000805160206124ee833981519152604482015290519081900360640190fd5b60015460ff1615610e1c576040805162461bcd60e51b815260206004820181905260248201527f476d784d69677261746f723a20616c726561647920696e697469616c697a6564604482015290519081900360640190fd5b8551875114610e5c5760405162461bcd60e51b81526004018080602001828103825260268152602001806125346026913960400191505060405180910390fd5b8451875114610e9c5760405162461bcd60e51b81526004018080602001828103825260238152602001806124cb6023913960400191505060405180910390fd5b8351875114610edc5760405162461bcd60e51b81526004018080602001828103825260218152602001806124676021913960400191505060405180910390fd5b8151835114610f1c5760405162461bcd60e51b815260040180806020018281038252602681526020018061250e6026913960400191505060405180910390fd5b8051835114610f5c5760405162461bcd60e51b815260040180806020018281038252602681526020018061255a6026913960400191505060405180910390fd5b6001805460ff191681179055600380546001600160a01b0319166001600160a01b038c1617905560048990558751610f9b9060079060208b0190612330565b5060005b8851811015610ff2576000898281518110610fb657fe5b6020908102919091018101516001600160a01b03166000908152600890915260409020805460ff19166001908117909155919091019050610f9f565b5060005b875181101561111657600088828151811061100d57fe5b6020908102919091018101516001600160a01b0381166000908152600b9092526040909120805460ff19166001179055885190915088908390811061104e57fe5b6020026020010151600c6000836001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508682815181106110ab57fe5b6020026020010151600d6000836001600160a01b03166001600160a01b03168152602001908152602001600020819055508582815181106110e857fe5b6020908102919091018101516001600160a01b039092166000908152600e9091526040902055600101610ff6565b5060005b835181101561121357600084828151811061113157fe5b6020908102919091018101516001600160a01b0381166000908152600f9092526040909120805460ff19166001179055845190915084908390811061117257fe5b602002602001015160106000836001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508282815181106111cf57fe5b6020908102919091018101516001600160a01b0392831660009081526011909252604090912080546001600160a01b0319169290911691909117905560010161111a565b5050505050505050505050565b600e6020526000908152604090205481565b6006546001600160a01b0316331461127f576040805162461bcd60e51b815260206004820152601660248201526000805160206124ee833981519152604482015290519081900360640190fd5b6001805461ff0019169055565b60608082516001600160401b03811180156112a657600080fd5b506040519080825280602002602001820160405280156112d0578160200160208202803683370190505b50905060005b835181101561133d5760008482815181106112ed57fe5b6020026020010151905060126000826001600160a01b03166001600160a01b031681526020019081526020016000205483838151811061132957fe5b6020908102919091010152506001016112d6565b5092915050565b60086020526000908152604090205460ff1681565b6001600160a01b038082166000908152600c6020526040812054909116806113c8576040805162461bcd60e51b815260206004820152601e60248201527f476d784d69677261746f723a20696e76616c696420696f7520746f6b656e0000604482015290519081900360640190fd5b92915050565b600a60209081526000928352604080842090915290825290205460ff1681565b6003546001600160a01b031681565b6006546001600160a01b0316331461144a576040805162461bcd60e51b815260206004820152601660248201526000805160206124ee833981519152604482015290519081900360640190fd5b6001600160a01b0392831660009081526014602090815260408083209490951682529290925291902055565b60126020526000908152604090205481565b60055481565b601360209081526000928352604080842090915290825290205481565b60045481565b600260005414156114f7576040805162461bcd60e51b815260206004820152601f60248201526000805160206123b5833981519152604482015290519081900360640190fd5b6002600055600154610100900460ff166115425760405162461bcd60e51b815260040180806020018281038252602a815260200180612580602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600b602052604090205460ff166115995760405162461bcd60e51b81526004018080602001828103825260228152602001806124886022913960400191505060405180910390fd5b600081116115ee576040805162461bcd60e51b815260206004820181905260248201527f476d784d69677261746f723a20696e76616c696420746f6b656e416d6f756e74604482015290519081900360640190fd5b60015462010000900460ff16156116a9573360009081526013602090815260408083206001600160a01b038616845290915290205461162d908261213e565b3360008181526013602090815260408083206001600160a01b038816808552818452828520879055948452601483528184209484529382529091205491905210156116a95760405162461bcd60e51b815260040180806020018281038252602881526020018061243f6028913960400191505060405180910390fd5b60006116b483611b4b565b905060006116d76004546116d1848661219d90919063ffffffff16565b906121f6565b90506000811161172e576040805162461bcd60e51b815260206004820152601f60248201527f476d784d69677261746f723a20696e76616c6964206d696e74416d6f756e7400604482015290519081900360640190fd5b6001600160a01b038416600090815260126020526040902054611751908461213e565b6001600160a01b0385166000908152601260208181526040808420859055600e8252909220549152116117cb576040805162461bcd60e51b815260206004820152601f60248201527f476d784d69677261746f723a20746f6b656e2063617020657863656564656400604482015290519081900360640190fd5b604080516323b872dd60e01b81523360048201523060248201526044810185905290516001600160a01b038616916323b872dd9160648083019260209291908290030181600087803b15801561182057600080fd5b505af1158015611834573d6000803e3d6000fd5b505050506040513d602081101561184a57600080fd5b50506001600160a01b0384166000908152600f602052604090205460ff1615611a6b576001600160a01b038085166000908152601060209081526040808320546011909252909120549082169116816118e8576040805162461bcd60e51b815260206004820152601b60248201527a476d784d69677261746f723a20696e76616c696420746f6b656e4160281b604482015290519081900360640190fd5b6001600160a01b038116611941576040805162461bcd60e51b815260206004820152601b60248201527a23b6bc26b4b3b930ba37b91d1034b73b30b634b2103a37b5b2b72160291b604482015290519081900360640190fd5b6003546040805163095ea7b360e01b81526001600160a01b0392831660048201526024810188905290519188169163095ea7b3916044808201926020929091908290030181600087803b15801561199757600080fd5b505af11580156119ab573d6000803e3d6000fd5b505050506040513d60208110156119c157600080fd5b505060035460408051635d5155ef60e11b81526001600160a01b038581166004830152848116602483015260448201899052600060648301819052608483018190523060a48401524260c48401528351919094169363baa2abde9360e480850194919392918390030190829087803b158015611a3c57600080fd5b505af1158015611a50573d6000803e3d6000fd5b505050506040513d6040811015611a6657600080fd5b505050505b6000611a7685611359565b9050806001600160a01b03166340c10f1933846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015611acf57600080fd5b505af1158015611ae3573d6000803e3d6000fd5b505050506040513d6020811015611af957600080fd5b505060016000555050505050565b600f6020526000908152604090205460ff1681565b601460209081526000928352604080842090915290825290205481565b600d6020526000908152604090205481565b6001600160a01b0381166000908152600d6020526040812054806113c8576040805162461bcd60e51b815260206004820181905260248201527f476d784d69677261746f723a20696e76616c696420746f6b656e207072696365604482015290519081900360640190fd5b600b6020526000908152604090205460ff1681565b60026000541415611c11576040805162461bcd60e51b815260206004820152601f60248201526000805160206123b5833981519152604482015290519081900360640190fd5b60026000556006546001600160a01b03163314611c63576040805162461bcd60e51b815260206004820152601660248201526000805160206124ee833981519152604482015290519081900360640190fd5b60058054600101908190556040805166617070726f766560c81b6020808301919091526001600160601b0319606088811b8216602785015287901b16603b830152604f8201859052606f80830185905283518084039091018152608f9092019092528051910120611cd48183612235565b604080516001600160a01b03808816825286166020820152808201859052606081018390526080810184905290517fc19251bf5f704ddc3d5babe6f4e5bde0dded20b19f7844716861821ab3163cd79181900360a00190a150506001600055505050565b60096020526000908152604090205460ff1681565b6011602052600090815260409020546001600160a01b031681565b60026000541415611dae576040805162461bcd60e51b815260206004820152601f60248201526000805160206123b5833981519152604482015290519081900360640190fd5b600260009081553381526008602052604090205460ff16611e04576040805162461bcd60e51b815260206004820152601660248201526000805160206124ee833981519152604482015290519081900360640190fd5b6040805166617070726f766560c81b6020808301919091526001600160601b0319606088811b8216602785015287901b16603b830152604f8201859052606f80830185905283518084039091018152608f9092019092528051910120611e6981611f50565b336000908152600a6020908152604080832084845290915290205460ff1615611ed7576040805162461bcd60e51b815260206004820152601b60248201527a11db5e135a59dc985d1bdc8e88185b1c9958591e481cda59db9959602a1b604482015290519081900360640190fd5b336000908152600a60209081526040808320848452825291829020805460ff19166001179055815183815290810184905281517faae28fe5531fe5dfb8d12409392ec67b50c825dd06233312cb6aeaddd16cbd22929181900390910190a150506001600055505050565b6006546001600160a01b031681565b60008181526009602052604090205460ff16611f9d5760405162461bcd60e51b81526004018080602001828103825260218152602001806123d56021913960400191505060405180910390fd5b50565b6000805b60075481101561200457600060078281548110611fbd57fe5b60009182526020808320909101546001600160a01b0316808352600a8252604080842088855290925291205490915060ff1615611ffb576001909201915b50600101611fa4565b50806120415760405162461bcd60e51b815260040180806020018281038252602281526020018061241d6022913960400191505060405180910390fd5b6002548110156120825760405162461bcd60e51b81526004018080602001828103825260278152602001806123f66027913960400191505060405180910390fd5b5050565b60008281526009602052604090205460ff166120e8576040805162461bcd60e51b815260206004820152601c60248201527b23b6bc26b4b3b930ba37b91d1034b73b30b634b2102fb0b1ba34b7b760211b604482015290519081900360640190fd5b600082815260096020908152604091829020805460ff19169055815184815290810183905281517ff4640d39061e643d9b802cb3725953405344555ad6dbb1cbdb0495f3eccb8e68929181900390910190a15050565b600082820183811015612196576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b6000826121ac575060006113c8565b828202828482816121b957fe5b04146121965760405162461bcd60e51b81526004018080602001828103825260218152602001806124aa6021913960400191505060405180910390fd5b600061219683836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b81525061228e565b600082815260096020908152604091829020805460ff19166001179055815184815290810183905281517f64df01c46eb530dc540770a0b88cc32f0b8c2b371a546ae0b13cc8ca6671fff9929181900390910190a15050565b6000818361231a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122df5781810151838201526020016122c7565b50505050905090810190601f16801561230c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161232657fe5b0495945050505050565b828054828255906000526020600020908101928215612385579160200282015b8281111561238557825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612350565b50612391929150612395565b5090565b5b808211156123915780546001600160a01b031916815560010161239656fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c00476d784d69677261746f723a20616374696f6e206e6f74207369676e616c6c6564476d784d69677261746f723a20696e73756666696369656e7420617574686f72697a6174696f6e476d784d69677261746f723a20616374696f6e206e6f7420617574686f72697a6564476d784d69677261746f723a206d61784d6967726174696f6e416d6f756e74206578636565646564476d784d69677261746f723a20696e76616c6964205f636170732e6c656e677468476d784d69677261746f723a20746f6b656e206e6f742077686974656c6973746564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77476d784d69677261746f723a20696e76616c6964205f7072696365732e6c656e677468476d784d69677261746f723a20666f7262696464656e00000000000000000000476d784d69677261746f723a20696e76616c6964205f6c70546f6b656e41732e6c656e677468476d784d69677261746f723a20696e76616c6964205f696f75546f6b656e732e6c656e677468476d784d69677261746f723a20696e76616c6964205f6c70546f6b656e42732e6c656e677468476d784d69677261746f723a206d6967726174696f6e206973206e6f206c6f6e67657220616374697665a26469706673582212208e5d9e1bc76d0a03ee0139c9dbdee4aa00258a9f8acdf1a64f98699688a2777464736f6c634300060c0033";

type GmxMigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GmxMigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GmxMigrator__factory extends ContractFactory {
  constructor(...args: GmxMigratorConstructorParams) {
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
      GmxMigrator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): GmxMigrator__factory {
    return super.connect(runner) as GmxMigrator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GmxMigratorInterface {
    return new Interface(_abi) as GmxMigratorInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): GmxMigrator {
    return new Contract(address, _abi, runner) as unknown as GmxMigrator;
  }
}