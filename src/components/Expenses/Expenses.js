import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (exp) => exp.date.getFullYear().toString() === selectedYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
