import { Inter } from "next/font/google";
import { CreateOptionsContract } from "~/components/CreateContract";
import { ViewContracts } from "~/components/ViewContracts";
import { useOptionsContracts } from "~/hooks/useOptionsContract";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { contractList, addNewContract, removeContractAtIndex, reset } = useOptionsContracts();

  return (
    <main className={`flex min-h-screen flex-col p-24 gap-2 ${inter.className}`}>
      <h1 className="text-center">Catan Options Contract Terminal</h1>
      <p className="text-center">
        Welcome to the Catan Options Terminal. Create a new contract, play it out during the game, and complete it once the trade has been completed or the trade has been forfeit.
      </p>
      <div className="flex flex-col items-center">
        <CreateOptionsContract addNewContract={addNewContract} />
      </div>
      {contractList.map((contract, index) => (
        <ViewContracts contract={contract} removeContractAtIndex={removeContractAtIndex} index={index} key={`${contract.maker}-${contract.taker}-${index}`} />
      ))}
    </main>
  );
}
