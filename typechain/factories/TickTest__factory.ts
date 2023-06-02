/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TickTest } from "../TickTest";

export class TickTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TickTest> {
    return super.deploy(overrides || {}) as Promise<TickTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickTest {
    return super.attach(address) as TickTest;
  }
  connect(signer: Signer): TickTest__factory {
    return super.connect(signer) as TickTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickTest {
    return new Contract(address, _abi, signerOrProvider) as TickTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal0X128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal1X128",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityCumulativeX128",
        type: "uint160",
      },
      {
        internalType: "int56",
        name: "tickCumulative",
        type: "int56",
      },
      {
        internalType: "uint32",
        name: "time",
        type: "uint32",
      },
      {
        internalType: "uint192",
        name: "rewardPerLiquidityCumulativeX64",
        type: "uint192",
      },
    ],
    name: "cross",
    outputs: [
      {
        internalType: "int128",
        name: "liquidityNet",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickCurrent",
        type: "int24",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal0X128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal1X128",
        type: "uint256",
      },
    ],
    name: "getFeeGrowthInside",
    outputs: [
      {
        internalType: "uint256",
        name: "feeGrowthInside0X128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside1X128",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "liquidityGross",
            type: "uint128",
          },
          {
            internalType: "int128",
            name: "liquidityNet",
            type: "int128",
          },
          {
            internalType: "uint256",
            name: "feeGrowthOutside0X128",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeGrowthOutside1X128",
            type: "uint256",
          },
          {
            internalType: "int56",
            name: "tickCumulativeOutside",
            type: "int56",
          },
          {
            internalType: "uint160",
            name: "secondsPerLiquidityOutsideX128",
            type: "uint160",
          },
          {
            internalType: "uint32",
            name: "secondsOutside",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "uint192",
            name: "rewardPerLiquidityOutsideX64",
            type: "uint192",
          },
        ],
        internalType: "struct Tick.Info",
        name: "info",
        type: "tuple",
      },
    ],
    name: "setTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickSpacing",
        type: "int24",
      },
    ],
    name: "tickSpacingToMaxLiquidityPerTick",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "ticks",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidityGross",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "liquidityNet",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "feeGrowthOutside0X128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthOutside1X128",
        type: "uint256",
      },
      {
        internalType: "int56",
        name: "tickCumulativeOutside",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityOutsideX128",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "secondsOutside",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
      {
        internalType: "uint192",
        name: "rewardPerLiquidityOutsideX64",
        type: "uint192",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickCurrent",
        type: "int24",
      },
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal0X128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal1X128",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityCumulativeX128",
        type: "uint160",
      },
      {
        internalType: "int56",
        name: "tickCumulative",
        type: "int56",
      },
      {
        internalType: "uint32",
        name: "time",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "upper",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "maxLiquidity",
        type: "uint128",
      },
      {
        internalType: "uint192",
        name: "rewardPerLiquidityCumulativeX64",
        type: "uint192",
      },
    ],
    name: "update",
    outputs: [
      {
        internalType: "bool",
        name: "flipped",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d64806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806397308ed31161005b57806397308ed3146100ec578063b613524a1461010c578063e6fb02ee14610121578063f30dba93146101345761007d565b806330e3ff4c1461008257806382c66f87146100ac5780638e27463b146100cc575b600080fd5b610095610090366004610ac9565b61015c565b6040516100a3929190610cfc565b60405180910390f35b6100bf6100ba3660046109eb565b61017b565b6040516100a39190610c7e565b6100df6100da366004610a0c565b61018e565b6040516100a39190610c65565b6100ff6100fa366004610bee565b6101b4565b6040516100a39190610c70565b61011f61011a3660046109eb565b6101d2565b005b61011f61012f366004610b1d565b6101e0565b6101476101423660046109eb565b610340565b6040516100a399989796959493929190610c92565b60008061016d8188888888886103bd565b915091509550959350505050565b600061018682610469565b90505b919050565b60006101a4818d8d8d8d8d8d8d8d8d8d8d6104d3565b9c9b505050505050505050505050565b60006101c68189898989898989610714565b98975050505050505050565b6101dd600082610812565b50565b600291820b820b600090815260208181526040918290208351815492850151600f0b6001600160801b03908116600160801b029181166fffffffffffffffffffffffffffffffff1990941693909317909216919091178155908201516001820155606082015192810192909255608081015160038301805460a084015160c085015160e08601511515600160f81b027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff63ffffffff909216600160d81b0263ffffffff60d81b196001600160a01b03909416670100000000000000027fffffffffff0000000000000000000000000000000000000000ffffffffffffff60069890980b66ffffffffffffff1666ffffffffffffff199096169590951796909616939093179190911693909317929092169190911790556101000151600490910180546001600160c01b039092166001600160c01b0319909216919091179055565b600060208190529081526040902080546001820154600283015460038401546004909401546001600160801b03841694600160801b909404600f0b93600681900b9167010000000000000082046001600160a01b031691600160d81b810463ffffffff1691600160f81b90910460ff16906001600160c01b031689565b600285810b80820b60009081526020899052604080822088850b850b83529082209193849391929184918291908a900b1261040357505060018201546002830154610416565b8360010154880391508360020154870390505b6000808b60020b8b60020b12156104385750506001830154600284015461044b565b84600101548a0391508460020154890390505b92909803979097039b96909503949094039850939650505050505050565b60008082600281900b620d89e7198161047e57fe5b05029050600083600281900b620d89e88161049557fe5b0502905060008460020b83830360020b816104ac57fe5b0560010190508062ffffff166001600160801b038016816104c957fe5b0495945050505050565b60028b810b900b600090815260208d90526040812080546001600160801b0316826104fe828e610853565b9050856001600160801b0316816001600160801b0316111561054c576040805162461bcd60e51b81526020600482015260026024820152614c4f60f01b604482015290519081900360640190fd5b6001600160801b038281161590821615811415945015610657578d60020b8f60020b13610627578b83600101819055508a8360020181905550898360030160076101000a8154816001600160a01b0302191690836001600160a01b03160217905550888360030160006101000a81548166ffffffffffffff021916908360060b66ffffffffffffff1602179055508783600301601b6101000a81548163ffffffff021916908363ffffffff160217905550848360040160006101000a8154816001600160c01b0302191690836001600160c01b031602179055505b6003830180547effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160f81b1790555b82546fffffffffffffffffffffffffffffffff19166001600160801b038216178355866106b5576106b06106ab8e600f0b8560000160109054906101000a9004600f0b600f0b61090f90919063ffffffff16565b610925565b6106e2565b6106e26106ab8e600f0b8560000160109054906101000a9004600f0b600f0b61093690919063ffffffff16565b8354600f9190910b6001600160801b03908116600160801b0291161790925550909d9c50505050505050505050505050565b600296870b870b60009081526020989098526040909720600181018054909603909555948401805490930390925560038301805463ffffffff600160d81b6001600160a01b036701000000000000008085048216909603169094027fffffffffff0000000000000000000000000000000000000000ffffffffffffff90921691909117600681810b90950390940b66ffffffffffffff1666ffffffffffffff199094169390931782810484169095039092160263ffffffff60d81b19909316929092179091556004810180546001600160c01b038082169094039093166001600160c01b03199093169290921790915554600160801b9004600f0b90565b600290810b810b60009081526020929092526040822082815560018101839055908101829055600381019190915560040180546001600160c01b0319169055565b60008082600f0b12156108b857826001600160801b03168260000384039150816001600160801b0316106108b3576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b610909565b826001600160801b03168284019150816001600160801b03161015610909576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b92915050565b8181018281121560008312151461090957600080fd5b80600f81900b811461018957600080fd5b8082038281131560008312151461090957600080fd5b8035801515811461018957600080fd5b8035600f81900b811461018957600080fd5b8035600281900b811461018957600080fd5b8035600681900b811461018957600080fd5b80356001600160801b038116811461018957600080fd5b80356001600160a01b038116811461018957600080fd5b80356001600160c01b038116811461018957600080fd5b803563ffffffff8116811461018957600080fd5b6000602082840312156109fc578081fd5b610a058261096e565b9392505050565b60008060008060008060008060008060006101608c8e031215610a2d578687fd5b610a368c61096e565b9a50610a4460208d0161096e565b9950610a5260408d0161095c565b985060608c0135975060808c01359650610a6e60a08d016109a9565b9550610a7c60c08d01610980565b9450610a8a60e08d016109d7565b9350610a996101008d0161094c565b9250610aa86101208d01610992565b9150610ab76101408d016109c0565b90509295989b509295989b9093969950565b600080600080600060a08688031215610ae0578081fd5b610ae98661096e565b9450610af76020870161096e565b9350610b056040870161096e565b94979396509394606081013594506080013592915050565b600080828403610140811215610b31578283fd5b610b3a8461096e565b925061012080601f1983011215610b4f578283fd5b610b5881610d0a565b9150610b6660208601610992565b8252610b746040860161095c565b60208301526060850135604083015260808501356060830152610b9960a08601610980565b6080830152610baa60c086016109a9565b60a0830152610bbb60e086016109d7565b60c0830152610100610bce81870161094c565b60e0840152610bde8287016109c0565b9083015250919491935090915050565b600080600080600080600060e0888a031215610c08578283fd5b610c118861096e565b96506020880135955060408801359450610c2d606089016109a9565b9350610c3b60808901610980565b9250610c4960a089016109d7565b9150610c5760c089016109c0565b905092959891949750929550565b901515815260200190565b600f9190910b815260200190565b6001600160801b0391909116815260200190565b6001600160801b03999099168952600f9790970b60208901526040880195909552606087019390935260069190910b60808601526001600160a01b031660a085015263ffffffff1660c0840152151560e08301526001600160c01b03166101008201526101200190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715610d2657fe5b60405291905056fea264697066735822122010ebd7758e5df90e2c40ae405399481f05d659a21eebc839c8bcbaf5f03104dd64736f6c63430007060033";
