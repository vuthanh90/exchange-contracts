/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IPangolinV2PoolDerivedStateInterface extends ethers.utils.Interface {
  functions: {
    "observe(uint32[])": FunctionFragment;
    "snapshotCumulativesInside(int24,int24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "observe",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "snapshotCumulativesInside",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "snapshotCumulativesInside",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPangolinV2PoolDerivedState extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPangolinV2PoolDerivedStateInterface;

  functions: {
    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tickCumulativeInside: BigNumber;
      secondsPerLiquidityInsideX128: BigNumber;
      secondsInside: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;

    "snapshotCumulativesInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tickCumulativeInside: BigNumber;
      secondsPerLiquidityInsideX128: BigNumber;
      secondsInside: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;
  };

  observe(
    secondsAgos: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<{
    tickCumulatives: BigNumber[];
    secondsPerLiquidityCumulativeX128s: BigNumber[];
    0: BigNumber[];
    1: BigNumber[];
  }>;

  "observe(uint32[])"(
    secondsAgos: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<{
    tickCumulatives: BigNumber[];
    secondsPerLiquidityCumulativeX128s: BigNumber[];
    0: BigNumber[];
    1: BigNumber[];
  }>;

  snapshotCumulativesInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    tickCumulativeInside: BigNumber;
    secondsPerLiquidityInsideX128: BigNumber;
    secondsInside: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
  }>;

  "snapshotCumulativesInside(int24,int24)"(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    tickCumulativeInside: BigNumber;
    secondsPerLiquidityInsideX128: BigNumber;
    secondsInside: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
  }>;

  callStatic: {
    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tickCumulativeInside: BigNumber;
      secondsPerLiquidityInsideX128: BigNumber;
      secondsInside: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;

    "snapshotCumulativesInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tickCumulativeInside: BigNumber;
      secondsPerLiquidityInsideX128: BigNumber;
      secondsInside: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;
  };

  filters: {};

  estimateGas: {
    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "snapshotCumulativesInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "snapshotCumulativesInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
