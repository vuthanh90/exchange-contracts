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

interface IElixirPoolImmutablesInterface extends ethers.utils.Interface {
  functions: {
    "factory()": FunctionFragment;
    "fee()": FunctionFragment;
    "maxLiquidityPerTick()": FunctionFragment;
    "tickSpacing()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxLiquidityPerTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacing",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;

  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxLiquidityPerTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;

  events: {};
}

export class IElixirPoolImmutables extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IElixirPoolImmutablesInterface;

  functions: {
    factory(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "factory()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    fee(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "fee()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    tickSpacing(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    token0(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token0()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    token1(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token1()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<number>;

  "fee()"(overrides?: CallOverrides): Promise<number>;

  maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

  "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<BigNumber>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  "tickSpacing()"(overrides?: CallOverrides): Promise<number>;

  token0(overrides?: CallOverrides): Promise<string>;

  "token0()"(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  "token1()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<number>;

    "fee()"(overrides?: CallOverrides): Promise<number>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<number>;

    token0(overrides?: CallOverrides): Promise<string>;

    "token0()"(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    "token1()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    "fee()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    "token0()"(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    "token1()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLiquidityPerTick(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxLiquidityPerTick()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token1()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
