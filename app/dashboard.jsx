import Image from "next/image";
import MoneyIcon from "../public/money.svg";

export default function Dashboard() {
  const ColoredLine = () => (
    <hr
      style={{
        height: 4,
        margin: 30,
      }}
    />
  );

  return (
    <main className="h-screen">
      <p className="m-8 text-2xl font-extralight">Welcome User</p>
      <div className="m-8 grid grid-cols-4 gap-4">
        <div className="rounded-lg bg-blue-200">
          <p className="m-4 font-mono"> You have </p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            $0.00{" "}
          </p>
        </div>

        <div className="rounded-lg bg-blue-200">
          <p className="m-4 font-mono"> You have reached</p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            0 of your targets{" "}
          </p>
        </div>

        <div className="rounded-lg bg-blue-200">
          <p className="m-4 font-mono"> You have earned</p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            $0.00{" "}
          </p>
        </div>

        <div className="rounded-lg bg-blue-200">
          <p className="m-4 font-mono"> You have spent</p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            $0.00{" "}
          </p>
        </div>
      </div>

      <ColoredLine />

      <div className="m-8 grid grid-cols-2">
        <p className=" text-2xl font-extralight">Your Transactions</p>
        <button className="flex items-center justify-end gap-2 text-xl font-extralight">
          <Image src={MoneyIcon} width={50} />
          <p> Add an Transaction </p>
        </button>
      </div>
      <div className="m-8 h-3/5 rounded-lg bg-blue-200"></div>
    </main>
  );
}
