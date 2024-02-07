/*import React from 'react'
import { removeEmployee } from '../service/localstorage';
import { getListEmployees } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const EmployeeItem = ({ employee, setEmployees }) => {
    const { id, name,dui,licencia,residencia, email, address, addresscomplement, phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }

    return (
        <tr className="table-primasry">
            <th>{name}</th>
            <th>{dui}</th>
            <th>{licencia}</th>
            <th>{residencia}</th>
            <td>{email}</td>
            <td>{address}</td>
            <td>{addresscomplement}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Delete</span>
                </div>
            </td>
        </tr>
    )
}
*/
/*
import React from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EmployeeItem = ({ employee, setEmployees }) => {
    const { id, name, dui, licencia, residencia, email, address, addresscomplement, phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <tr className="table-primasry">
            <th>{name}</th>
            <th>{dui}</th>
            <th>{licencia}</th>
            <th>{residencia}</th>
            <td>{email}</td>
            <td>{address}</td>
            <td>{addresscomplement}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Delete</span>
                </div>
            </td>
        </tr>
    );
};*/
