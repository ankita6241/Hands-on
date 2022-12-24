import logo from './logo.svg';
import './App.css';
import { EmployeesData } from './Employee';
import EmployeesList from './EmployeesList';
import { useState } from 'react';
 import { ThemeContext } from './ThemeContext';
function App() {
  const Employees = EmployeesData;
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <label>SELECT A THEME </label>
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>

      <EmployeesList  employees={Employees} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;


