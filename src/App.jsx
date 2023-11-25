import React, { useEffect, useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";

const App = (props) => {

  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    setTransactions(transactionArray);
  };

  const calcBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => calcBalance(), [transactions])

  return (
    <div>
      <div className="flex justify-between items-center p-7 bg-slate-400">
        <h1 className="text-2xl ">Expense Tracker |</h1>
       <h1 className="text-2xl ">Balance: ${income - expense}</h1>
      </div>

      <div className="flex items-center flex-col p-2 h-[80vh]">
        <div className="w-[40vw]">
          <Balance addTransaction={addTransaction} expense={expense} income={income} />
        </div>
        <div className="w-[40vw] h-[40vh]">
          <Transaction transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default App;
