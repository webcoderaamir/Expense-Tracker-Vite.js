import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const History = (props) => {
  // const color = props.amount > 0 ? "Green" : "Red";

  const [deleteTxn, setDeleteTxn] = useState();

  const deleteTransaction = (id) => {
    let newArr = deleteTxn;
    let filteredArray = deleteTxn.filter((el, i) => {
      return i !== item;
    });

    setDeleteTxn(filteredArray);
  };

  return (
    <div
      // style={{ background: `${color}` }}
      className="flex flex-row py-4 w-96 bg-slate-400 rounded items-center justify-between"
    >
      <div className="pl-8">{props.payload.desc}</div>
      <div className="pl-32">${props.payload.amount}</div>
      <div onClick={() => deleteTransaction(i)} className="bg-slate-500 w-6 text-2xl mr-4">
        <MdDelete />
      </div>
    </div>
  );
};

export default History;
