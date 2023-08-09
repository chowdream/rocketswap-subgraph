import { Swap, SwapEvent } from "../generated/schema";
//by Top
export function handleSwap(event: SwapEvent): void {
  let swap = new Swap(event.transaction.hash.toHexString());
  swap.token0 = event.params.token0.toHexString();
  swap.token1 = event.params.token1.toHexString();
  swap.amount0 = event.params.amount0;
  swap.amount1 = event.params.amount1;
  swap.blockNumber = event.block.number;
  swap.save();
}
//end by Top