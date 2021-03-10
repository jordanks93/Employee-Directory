import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeDataContext from "../utils/EmployeeDataContext";
import DataTable from "../components/DataTable";

function Main() {

  const [employeeList, setEmployeeList] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  // Get API data
  useEffect(() => {
    API.getEmployees().then((res) => {
      setEmployeeList(res.data.results);
      setFilteredEmployees(res.data.results);
    });
  }, []);

  // Search/filter employees by name
  const searchName = (event) => {
    const filterName = event.target.value;

    const filteredList = employeeList.filter(({ name }) => {
      let results = name.first.toLowerCase() + " " + name.last.toLowerCase();
      if (results.indexOf(filterName.toLowerCase()) !== -1) {
        return name;
      }
    });
    setFilteredEmployees([...filteredList]);
  };

  // Sort employee data by name, location, or email
  const sortData = (column) => {
    switch (column) {
      case "name":
        employeeList.sort((a, b) => {
          if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
        setFilteredEmployees([...employeeList]);
        break;

      case "location":
        employeeList.sort((a, b) => {
          if (a.location.state.toLowerCase() < b.location.state.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
        setFilteredEmployees([...employeeList]);
        break;

      case "email":
        employeeList.sort((a, b) => {
          if (a.email.toLowerCase() < b.email.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
        setFilteredEmployees([...employeeList]);
        break;

      default:
        break;
    }
  };

  return (
    <EmployeeDataContext.Provider
      value={{ employeeList, filteredEmployees, searchName, sortData }}
    >
      <DataTable />
    </EmployeeDataContext.Provider>
  );
}

export default Main;