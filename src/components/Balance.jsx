import React, { useState } from "react";
import TxnContainer from "./TxnContainer";

const Balance = (props) => {
  const [txnVisible, toggleTxnVisible] = useState(true);

  // color: ${(props) => (props.isIncome ? "green" : "red")}

  return (
    <div className="balanceContainer">
      <div className=" flex items-center justify-center font-bold w-full gap-80 mt-6">
        <button
          onClick={() => toggleTxnVisible(!txnVisible)}
          className="bg-black text-white py-2 px-4 rounded cursor-pointer font-bold"
        >
          {txnVisible ? "Cancel" : "ADD"}
        </button>
      </div>

      {txnVisible && (
        <TxnContainer
          toggleTxnVisible={toggleTxnVisible}
          addTransaction={props.addTransaction}
        />
      )}

      <div className="flex flex-row gap-6 m-4 items-start justify-center">

        <h1 className="flex gap-1 flex-col text-center border border-slate-500 w-48 rounded px-6 py-6">
          Expense<span style={{color : "red"}} className="font-bold text-3xl">${props.expense}</span>
        </h1>
        <h1 className="flex gap-1 flex-col text-center border border-slate-500 w-48 rounded px-6 py-6">
          Income<span style={{color : "green"}} className="font-bold text-3xl">${props.income}</span>
        </h1>

      </div>

    </div>
  );
};

export default Balance;
