import { useCallback, useMemo, useState } from "react";
import { Contract } from "~/types/Contract";

export const useOptionsContracts = () => {
  const [contractList, setContractList] = useState<Contract[]>([]);

  const addNewContract = useCallback((contract: Contract) => {
    setContractList((prev) => {
      const contractList = [...prev];
      contractList.push(contract);
      return contractList;
    });
  }, []);

  const removeContractAtIndex = useCallback((index: number) => {
    setContractList((prev) => {
      const newContract = [...prev];
      newContract.splice(index, 1);
      return newContract;
    });
  }, []);

  const reset = useCallback(() => {
    setContractList([]);
  }, []);

  return useMemo(() => {
    return {
      contractList,
      addNewContract,
      removeContractAtIndex,
      reset,
    };
  }, [addNewContract, contractList, removeContractAtIndex, reset]);
};
