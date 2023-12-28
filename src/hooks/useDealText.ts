import { useMemo } from "react";
import { Contract } from "~/types/Contract";

export const useDealText = (contract: Contract) => {
  return useMemo(() => {
    const { finalResource, immediateReceive, maker, perRoundResource, taker } = contract;

    return `${maker} will give ${taker} ${perRoundResource.amount} ${perRoundResource.resource} per round, and ${immediateReceive.amount} ${immediateReceive.resource} immediately. When ${maker} receives ${finalResource.amount} ${finalResource.resource}, they will give this to ${taker}, and the contract will be over. If ${maker} fails to fulfil this contract, they will forfeit the game unless another player steps in. `;
  }, [contract]);
};
