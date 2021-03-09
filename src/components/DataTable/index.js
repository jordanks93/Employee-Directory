import React, { useContext } from "react";
import EmployeeDataContext from "../../utils/EmployeeDataContext";
import './style.css';
import { Container, Table, Button } from 'react-bootstrap';


function DataTable() {
  const { filteredEmployees } = useContext(EmployeeDataContext);
  const { sortData, searchName } = useContext(EmployeeDataContext);

  return (
    <Container >
      <div>
        {/* employee search/filter */}
        <input type="text" placeholder="Enter a name" onChange={(event) => searchName(event)} />
        <p className='text-center mt-2'>
          Enter name to filter the results
        </p>
      </div>

      <Table striped bordered hover variant="dark">
        {/* employee data sort buttons */}
        <thead>
          <tr>
            <td>
              <p className='p-2 m-2 font-weight-bold'>Picture</p>
            </td>
            <td>
              <Button
                variant='outline-primary'
                className="mt-2"
                onClick={() => sortData("name")}>Name
              </Button>
            </td>
            <td>
              <Button
                variant='outline-primary'
                className="mt-2"
                onClick={() => sortData("location")}>Location
                </Button>
            </td>
            <td>
              <Button
                variant='outline-primary'
                className="mt-2"
                onClick={() => sortData("email")}>Email
                </Button>
            </td>
            <td>
              <p className='p-2 m-2 font-weight-bold'>Phone</p>
            </td>
          </tr>
        </thead>

        {/* employee data table */}
        <tbody>
          {filteredEmployees.map(({ login, picture, name, location, email, phone }) => {
            return (
              <tr key={login.uuid}>
                <td>
                  <img
                    src={picture.large}
                    alt={name.first + " " + name.last}
                  />
                </td>
                <td>{name.first + " " + name.last}</td>
                <td>{`${location.state}, ${location.country}`}</td>
                <td>{email}</td>
                <td>{phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default DataTable;
