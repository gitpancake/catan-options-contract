import { useMemo, useState } from "react";
import { useDealText } from "~/hooks/useDealText";
import { CatanResource, Contract } from "~/types/Contract";

interface Props {
  addNewContract: (contract: Contract) => void;
}

export const CreateOptionsContract = ({ addNewContract }: Props) => {
  const [maker, setMaker] = useState<string>("");
  const [taker, setTaker] = useState<string>("");

  const [perRoundResourceAmount, setPerRoundResourceAmount] = useState<number>(0);
  const [perRoundResourceType, setPerRoundResourceType] = useState<CatanResource>(CatanResource.Brick);

  const [immediateReceiveResourceAmount, setImmediateReceiveResourceAmount] = useState<number>(0);
  const [immediateReceiveResourceType, setImmediateReceiveResourceType] = useState<CatanResource>(CatanResource.Brick);

  const [finalResourceAmounts, setFinalResourceAmounts] = useState<number>(0);
  const [finalResourceType, setFinalResourceType] = useState<CatanResource>(CatanResource.Brick);

  const dealSentence = useDealText({
    maker,
    taker,
    perRoundResource: {
      amount: perRoundResourceAmount,
      resource: perRoundResourceType,
    },
    immediateReceive: {
      amount: immediateReceiveResourceAmount,
      resource: immediateReceiveResourceType,
    },
    finalResource: {
      amount: finalResourceAmounts,
      resource: finalResourceType,
    },
  });

  const buttonDisabled = useMemo(() => {
    return maker === "" || taker === "" || perRoundResourceAmount === 0 || immediateReceiveResourceAmount === 0 || finalResourceAmounts === 0;
  }, [finalResourceAmounts, immediateReceiveResourceAmount, maker, perRoundResourceAmount, taker]);

  return (
    <div className="flex flex-col gap-2 justify-between max-w-[600px] border-white border-2 p-2">
      <p>Create New</p>

      <div className="flex flex-col gap-1">
        <p className="text-xs">Maker</p>
        <input type="text" value={maker} onChange={(e) => setMaker(e.target.value)} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs">Taker</p>
        <input type="text" value={taker} onChange={(e) => setTaker(e.target.value)} />
      </div>
      <div className="flex flex-row gap-2 justify-start">
        <div className="flex flex-col gap-1">
          <p className="text-xs">Per Round Resource Amount</p>
          <input
            type="number"
            value={perRoundResourceAmount}
            onChange={(e) => {
              if (isNaN(parseInt(e.target.value))) return;

              setPerRoundResourceAmount(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">Per Round Resource</p>
          <select value={perRoundResourceType} onChange={(e) => setPerRoundResourceType(e.target.value as CatanResource)}>
            {Object.values(CatanResource).map((resource) => (
              <option key={resource} value={resource}>
                {resource}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-start">
        <div className="flex flex-col gap-1">
          <p className="text-xs">Immediate Resource Amount</p>
          <input
            type="number"
            value={immediateReceiveResourceAmount}
            onChange={(e) => {
              if (isNaN(parseInt(e.target.value))) return;

              setImmediateReceiveResourceAmount(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">Immediate Resource</p>
          <select value={immediateReceiveResourceType} onChange={(e) => setImmediateReceiveResourceType(e.target.value as CatanResource)}>
            {Object.values(CatanResource).map((resource) => (
              <option key={resource} value={resource}>
                {resource}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-start">
        <div className="flex flex-col gap-1">
          <p className="text-xs">Final Resource Amount</p>
          <input
            type="number"
            value={finalResourceAmounts}
            onChange={(e) => {
              if (isNaN(parseInt(e.target.value))) return;

              setFinalResourceAmounts(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">Final Resource</p>
          <select value={finalResourceType} onChange={(e) => setFinalResourceType(e.target.value as CatanResource)}>
            {Object.values(CatanResource).map((resource) => (
              <option key={resource} value={resource}>
                {resource}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p>{dealSentence}</p>
      <div className="flex flex-row justify-center">
        <button
          disabled={buttonDisabled}
          onClick={() => {
            addNewContract({
              maker,
              taker,
              perRoundResource: {
                amount: perRoundResourceAmount,
                resource: perRoundResourceType,
              },
              immediateReceive: {
                amount: immediateReceiveResourceAmount,
                resource: immediateReceiveResourceType,
              },
              finalResource: {
                amount: finalResourceAmounts,
                resource: finalResourceType,
              },
            });
          }}
        >
          <p>Add New Contract</p>
        </button>
      </div>
    </div>
  );
};
