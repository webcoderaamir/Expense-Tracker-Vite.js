import React, { useState } from "react";

const TxnContainer = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  const AddTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    // console.log({amount, desc, type})
    props.toggleTxnVisible();
  };

  return (
    <div>
      <div className="flex flex-col gap-4 border-2 w-fit p-4 rounded ml-32 m-8">
        <input
          className="border-2 px-4 py-2 w-80 outline-none cursor-pointer"
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          className="border-2 px-4 py-2 w-80 outline-none cursor-pointer"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="flex flex-row gap-3 w-full items-center">
          <input
            className="mx-2 my-0"
            type="radio"
            id="expense"
            name="expense"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>

          <input
            className="mx-2 my-0"
            type="radio"
            id="income"
            name="income"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="income">Income</label>
        </div>

        <button
          onClick={AddTransaction}
          className="bg-black text-white py-2 px-4 rounded cursor-pointer font-bold"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default TxnContainer;
