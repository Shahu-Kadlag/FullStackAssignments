import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense(e) {
    e.preventDefault();

    setExpenses([...expenses, { name, amount: Number(amount) }]);
    setName("");
    setAmount("");
  }

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Personal Expense Tracker</h1>

      <form onSubmit={addExpense}>
        <input
          placeholder="Expense Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <button type="submit">Add Expense</button>
      </form>

      <h2>Expense List</h2>

      {expenses.map((e, i) => (
        <p key={i}>
          {e.name} - ₹{e.amount.toFixed(2)}
        </p>
      ))}

      <h2>Total Expenses: ₹{total.toFixed(2)}</h2>
      <h3>Number of Expenses: {expenses.length}</h3>
    </div>
  );
}

export default App;