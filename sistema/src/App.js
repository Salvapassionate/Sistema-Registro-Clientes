import { EmployeeList } from "./components";
import { Navbar } from "./components";
import { EmployeeForm } from "./components";
import { Login } from "./components";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>          
        
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/create-employee" element={<EmployeeList />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
};;
