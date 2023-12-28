import { useDealText } from "~/hooks/useDealText";
import { Contract } from "~/types/Contract";

interface Props {
  contract: Contract;
  removeContractAtIndex: (index: number) => void;
  index: number;
}

export const ViewContracts = ({ contract, removeContractAtIndex, index }: Props) => {
  const dealSentence = useDealText(contract);

  return (
    <div className="flex flex-row gap-2 justify-between border-white border-2">
      <div className="p-2">
        <p>{dealSentence}</p>
      </div>
      <div className="p-2 flex flex-col items-center justify-center">
        <button onClick={() => removeContractAtIndex(index)}>
          <p>Complete</p>
        </button>
      </div>
    </div>
  );
};
