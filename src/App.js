import React, { useEffect, useState } from 'react';
import EmployeeTable from './components/employeeTable.js';
import FilterEmployees from './components/filterEmployees.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import { getEmployees } from './utils/api';
import './App.css';

function App() {
  const [initialEmployees, updateAvailableEmployees] = useState([]);
  const [employeesToRender, updateEmployeesToRender] = useState([]);

  useEffect(() => {
    getEmployees().then(({ data: { results } }) => updateAvailableEmployees(results));
  }, []);

  return (
    <div className="App">
      <Header />
      <FilterEmployees employees = { initialEmployees } updateEmployees = { updateEmployeesToRender } />
      <EmployeeTable employees = { employeesToRender} />
      <Footer />
    </div>
  );
}

export default App;