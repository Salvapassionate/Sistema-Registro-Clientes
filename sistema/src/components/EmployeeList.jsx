/*import { EmployeeItem } from './EmployeeItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';
//import Axios from "axios";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);


    return (
        <div>
            <h1 className="my-5 text-center">Administracción de clientes</h1>

            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Dui</th>
                                    <th scope="col">Licencia de Conducir</th>
                                    <th scope="col">Tarjeta de Residencia</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Direccion</th>
                                    <th scope='col'>Direccion Complementaria</th>
                                    <th scope="col">Celular</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No employees</h3>
                )
            }

        </div>
    )
}*/
/*
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { EmployeeItem } from './EmployeeItem';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/clientes")
            .then(response => {
                console.log(response.data);
                setEmployees(response.data);
                alert("Se recupera con exito")
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Administracción de clientes</h1>

            {employees.length > 0 ? (
                <div className="card bg-secondary p-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Dui</th>
                                <th scope="col">Licencia de Conducir</th>
                                <th scope="col">Tarjeta de Residencia</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Direccion</th>
                                <th scope='col'>Direccion Complementaria</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <EmployeeItem key={employee.id} employee={employee} setEmployees={setEmployees} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3 className="text-center">No tiene clientes</h3>
            )}
        </div>
    );
};

*/
/*import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:3001/clientes")
            .then(response => {
                console.log(response.data);
                setEmployees(response.data);
                alert(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1 className="my-5 text-center">Administracción de clientes</h1>

            {employees.length > 0 ? (
                <div className="card bg-secondary p-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Dui</th>
                                <th scope="col">Licencia de Conducir</th>
                                <th scope="col">Tarjeta de Residencia</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Direccion</th>
                                <th scope='col'>Direccion Complementaria</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id} className="table-primasry">
                                    <th>{employee.name}</th>
                                    <th>{employee.dui}</th>
                                    <th>{employee.licencia}</th>
                                    <th>{employee.residencia}</th>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.addresscomplement}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        <div className="d-flex gap-3">
                                            <span className="badge bg-success" onClick={() => navigate(`/edit-employee/${employee.id}`)}>Edit</span>
                                            <span className="badge bg-danger" onClick={() => deleteEmployee(employee.id)}>Delete</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3 className="text-center">No employees</h3>
            )}
        </div>
    );
};
*/

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:3001/cliente")
            .then(response => {
                console.log(response.data);
                const employeesData = response.data.rows; // Extrayendo solo los datos de los clientes
                setEmployees(employeesData);
                alert("Se trae los registros");
               
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
                console.log(id);
                alert("Se ha eliminado con exito")
            })
            .catch(error => {
                console.log("Error");
                console.error(error);
            });
    };
    const handlePrint = () => {
        const dataToPrint = employees.map(employee => (
            `ID: ${employee.id}, Nombre: ${employee.name}, DUI: ${employee.dui}, Licencia de Conducir: ${employee.licencia}, Tarjeta de Residencia: ${employee.residencia}, Correo: ${employee.email}, Dirección: ${employee.address}, Dirección Complementaria: ${employee.addresscomplement}, Celular: ${employee.phone}`
        )).join('\n');
    
        const blob = new Blob([dataToPrint], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'employees_data.txt');
    };

    console.log("IDs de los empleados:", employees.map(employee => employee.id));

    return (
        <div>
            <h1 className="my-5 text-center">Administracción de clientes</h1>

            <div className="card bg-secondary p-3">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dui</th>
                            <th scope="col">Licencia de Conducir</th>
                            <th scope="col">Tarjeta de Residencia</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Direccion</th>
                            <th scope='col'>Direccion Complementaria</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
    {Array.isArray(employees) && employees.map(employee => (
      
        <tr className="table-primasry">
            <th scope='row'>{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.dui}</td>
            <td>{employee.licencia}</td>
            <td>{employee.residencia}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.addresscomplement}</td>
            <td>{employee.phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${employee.id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteEmployee(employee.id)}>Delete</span>
                </div>
            </td>
        </tr>
    ))}
</tbody>

                </table>
            </div>
            <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block" onClick={handlePrint}>Imprimir</button>
                    </div>
            {employees.length === 0 && (
                
                <h3 className="text-center mt-3">No hay clientes</h3>
            )}
            <pre>{JSON.stringify(employees, null, 2)}</pre>
        </div>
    );
};

