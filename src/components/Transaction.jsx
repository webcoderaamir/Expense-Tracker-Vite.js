import React, { useEffect, useState } from "react";
import History from "./History";

const Transaction = (props) => {
  const [searchData, setSearchData] = useState("");
  const [filterTransaction, setFilterTransaction] = useState(props.transactions);

  const filterData = (searchData) => {
    if (!searchData || !searchData.trim().length) {
      setFilterTransaction(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchData.toLowerCase().trim())
    );
    setFilterTransaction(txn);
  };

  useEffect(() => filterData(searchData), [props.transactions]);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="font-bold text-xl">Transaction</h1>
      <input
        className="border rounded-md outline-none bg-slate-200 w-96 m-2 px-4 py-2"
        placeholder="Search"
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
          filterData(e.target.value);
        }}
      />

      {filterTransaction?.length
        ? filterTransaction.map((payload) => <History payload={payload} />)
        : ""}
    </div>
  );
};

export default Transaction;
