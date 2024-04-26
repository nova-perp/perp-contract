/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface RouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addPlugin"
      | "approvePlugin"
      | "approvedPlugins"
      | "decreasePosition"
      | "decreasePositionAndSwap"
      | "decreasePositionAndSwapETH"
      | "decreasePositionETH"
      | "denyPlugin"
      | "directPoolDeposit"
      | "gov"
      | "increasePosition"
      | "increasePositionETH"
      | "pluginDecreasePosition"
      | "pluginIncreasePosition"
      | "pluginTransfer"
      | "plugins"
      | "removePlugin"
      | "setGov"
      | "swap"
      | "swapETHToTokens"
      | "swapTokensToETH"
      | "usdg"
      | "vault"
      | "weth"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;

  encodeFunctionData(
    functionFragment: "addPlugin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approvePlugin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedPlugins",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePosition",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePositionAndSwap",
    values: [
      AddressLike[],
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePositionAndSwapETH",
    values: [
      AddressLike[],
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePositionETH",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "denyPlugin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "directPoolDeposit",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increasePosition",
    values: [
      AddressLike[],
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increasePositionETH",
    values: [
      AddressLike[],
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginDecreasePosition",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginIncreasePosition",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginTransfer",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "plugins",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removePlugin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [AddressLike[], BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapETHToTokens",
    values: [AddressLike[], BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensToETH",
    values: [AddressLike[], BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "usdg", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addPlugin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvePlugin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedPlugins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePositionAndSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePositionAndSwapETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePositionETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "denyPlugin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "directPoolDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increasePositionETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginDecreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginIncreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "plugins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePlugin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapETHToTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensToETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
}

export namespace SwapEvent {
  export type InputTuple = [
    account: AddressLike,
    tokenIn: AddressLike,
    tokenOut: AddressLike,
    amountIn: BigNumberish,
    amountOut: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    tokenIn: string,
    tokenOut: string,
    amountIn: bigint,
    amountOut: bigint
  ];
  export interface OutputObject {
    account: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: bigint;
    amountOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Router extends BaseContract {
  connect(runner?: ContractRunner | null): Router;
  waitForDeployment(): Promise<this>;

  interface: RouterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addPlugin: TypedContractMethod<[_plugin: AddressLike], [void], "nonpayable">;

  approvePlugin: TypedContractMethod<
    [_plugin: AddressLike],
    [void],
    "nonpayable"
  >;

  approvedPlugins: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [boolean],
    "view"
  >;

  decreasePosition: TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  decreasePositionAndSwap: TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish,
      _minOut: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  decreasePositionAndSwapETH: TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish,
      _minOut: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  decreasePositionETH: TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  denyPlugin: TypedContractMethod<[_plugin: AddressLike], [void], "nonpayable">;

  directPoolDeposit: TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  gov: TypedContractMethod<[], [string], "view">;

  increasePosition: TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  increasePositionETH: TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish
    ],
    [void],
    "payable"
  >;

  pluginDecreasePosition: TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  pluginIncreasePosition: TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _sizeDelta: BigNumberish,
      _isLong: boolean
    ],
    [void],
    "nonpayable"
  >;

  pluginTransfer: TypedContractMethod<
    [
      _token: AddressLike,
      _account: AddressLike,
      _receiver: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  plugins: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  removePlugin: TypedContractMethod<
    [_plugin: AddressLike],
    [void],
    "nonpayable"
  >;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  swap: TypedContractMethod<
    [
      _path: AddressLike[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  swapETHToTokens: TypedContractMethod<
    [_path: AddressLike[], _minOut: BigNumberish, _receiver: AddressLike],
    [void],
    "payable"
  >;

  swapTokensToETH: TypedContractMethod<
    [
      _path: AddressLike[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  usdg: TypedContractMethod<[], [string], "view">;

  vault: TypedContractMethod<[], [string], "view">;

  weth: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addPlugin"
  ): TypedContractMethod<[_plugin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "approvePlugin"
  ): TypedContractMethod<[_plugin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "approvedPlugins"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "decreasePosition"
  ): TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decreasePositionAndSwap"
  ): TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish,
      _minOut: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decreasePositionAndSwapETH"
  ): TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish,
      _minOut: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decreasePositionETH"
  ): TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike,
      _price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "denyPlugin"
  ): TypedContractMethod<[_plugin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "directPoolDeposit"
  ): TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "increasePosition"
  ): TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "increasePositionETH"
  ): TypedContractMethod<
    [
      _path: AddressLike[],
      _indexToken: AddressLike,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "pluginDecreasePosition"
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginIncreasePosition"
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _sizeDelta: BigNumberish,
      _isLong: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pluginTransfer"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _account: AddressLike,
      _receiver: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "plugins"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removePlugin"
  ): TypedContractMethod<[_plugin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGov"
  ): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      _path: AddressLike[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapETHToTokens"
  ): TypedContractMethod<
    [_path: AddressLike[], _minOut: BigNumberish, _receiver: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapTokensToETH"
  ): TypedContractMethod<
    [
      _path: AddressLike[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "usdg"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "weth"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;

  filters: {
    "Swap(address,address,address,uint256,uint256)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
  };
}
