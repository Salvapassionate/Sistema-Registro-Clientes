/*import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById } from '../service/localstorage';
import { useForm } from '../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editEmployee } from '../service/localstorage';
import Axios from "axios";



export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        dui: '',
        licencia: '',
        residencia: '',
        email: '',
        address: '',
        addresscomplement: '',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    const add = ()=>{
        Axios.post("http://localhost:3001/create",{
            name:inputValues.name,
            dui:inputValues.dui,
            licencia:inputValues.licencia,
            residencia:inputValues.residencia,
            email:inputValues.email,
            address:inputValues.address,
            addresscomplement:inputValues.addresscomplement,
            phone:inputValues.phone

        }).then(()=>{
            alert("Cliente registrado");

        });
    }*/
    //Parte de Listar
   /* const getClientes = ()=>{
        Axios.get("http://localhost:3001/clientes").then((response)=>{
          setEmployees(response.data);
          alert("hola");
        });
    }
    function twoEventClick(){
        add();
        getClientes();
    }*/
    /*return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/create-employee")}>Lista</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} Employee</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Nombre</label>
                        <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Dui</label>
                        <input
                            name="dui"
                            type="text"
                            value={inputValues.dui}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Licencia de Conducir</label>
                        <input
                            name="licencia"
                            type="text"
                            value={inputValues.licencia}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Tarjerta de Residencia</label>
                        <input
                            name="residencia"
                            type="text"
                            value={inputValues.residencia}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Correo</label>
                        <input
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Dirección</label>
                        <input
                            type="text"
                            name="address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Dirección Complementaria</label>
                        <input
                            type="text"
                            name="addresscomplement"
                            value={inputValues.addresscomplement}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>



                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Celular</label>
                        <input
                            name="phone"
                            type="text"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" onClick={add}  className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Employee</button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} Employee.
                        </div>
                    </div>
                )
            }

        </div >
    )
}*/

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import uuid from 'react-uuid';

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
       
        name: '',
        dui: '',
        licencia: '',
        residencia: '',
        email: '',
        address: '',
        addresscomplement: '',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            Axios.get(`http://localhost:3001/employee/${id}`)
                .then(response => {
                    console.log(response.data+"Formulario");
                    setForm(response.data);
                    alert("Se recupera datos")
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    /*const addEmployee = (employee) => {
        Axios.post("http://localhost:3001/create", employee)
            .then(() => {
                alert("Cliente registrado con exito");
            })
            .catch(error => {
                console.error(error);
            });
    };*/
    const addEmployee = () => {
        const newEmployee = { ...inputValues, id: uuid() }; // Agregar el id generado por uuid() al objeto de empleado
        Axios.post("http://localhost:3001/create", newEmployee)
            .then(() => {
                alert("Cliente registrado con éxito");
            })
            .catch(error => {
                console.error(error);
            });
    };

    const editEmployee = (id, newEmployee) => {
        Axios.put(`http://localhost:3001/update/${id}`, newEmployee)
            .then(() => {
                alert("Cliente editado");
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/create-employee")}>Lista</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} Employee</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Nombre</label>
                        <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Dui</label>
                        <input
                            name="dui"
                            type="text"
                            value={inputValues.dui}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Licencia de Conducir</label>
                        <input
                            name="licencia"
                            type="text"
                            value={inputValues.licencia}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Tarjerta de Residencia</label>
                        <input
                            name="residencia"
                            type="text"
                            value={inputValues.residencia}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Correo</label>
                        <input
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Dirección</label>
                        <input
                            type="text"
                            name="address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Dirección Complementaria</label>
                        <input
                            type="text"
                            name="addresscomplement"
                            value={inputValues.addresscomplement}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Celular</label>
                        <input
                            name="phone"
                            type="text"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Employee</button>
                    </div>
                </form>
            </div>

            {showAlert && (
                <div className="px-5">
                    <div className="alert alert-success">
                        <strong>Well done!</strong> {id ? "edit" : "added a new"} Employee.
                    </div>
                </div>
            )}
        </div>
    );
};

/*import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import uuid from 'react-uuid';

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm } = useForm({
        name: '',
        dui: '',
        licencia: '',
        residencia: '',
        email: '',
        address: '',
        addresscomplement: '',
        phone: ''
    });

    useEffect(() => {
        const setFormEmployee = async () => {
            if (id) {
                try {
                    const response = await Axios.get(`http://localhost:3001/employee/${id}`);
                    const employeeData = response.data;
                    setForm(employeeData);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        
        setFormEmployee();
    }, [id]);

    const setForm = (employeeData) => {
        // Lógica para establecer los valores del formulario
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await editEmployee(id, inputValues);
                alert("Cliente editado");
            } else {
                await addEmployee({ id: uuid(), ...inputValues });
                alert("Cliente registrado");
            }
            resetForm();
            setshowAlert(true);
            setTimeout(() => {
                setshowAlert(false);
            }, 2000);
        } catch (error) {
            console.error(error);
        }
    };

    const addEmployee = async (employee) => {
        try {
            await Axios.post("http://localhost:3001/create", employee);
        } catch (error) {
            throw new Error(error);
        }
    };

    const editEmployee = async (id, newEmployee) => {
        try {
            await Axios.put(`http://localhost:3001/update/${id}`, newEmployee);
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/create-employee")}>Lista</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} Employee</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Nombre</label>
                        <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>
                   
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Dui</label>
                        <input
                            name="dui"
                            type="text"
                            value={inputValues.dui}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Licencia de Conducir</label>
                        <input
                            name="licencia"
                            type="text"
                            value={inputValues.licencia}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Tarjerta de Residencia</label>
                        <input
                            name="residencia"
                            type="text"
                            value={inputValues.residencia}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Correo</label>
                        <input
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Dirección</label>
                        <input
                            type="text"
                            name="address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Dirección Complementaria</label>
                        <input
                            type="text"
                            name="addresscomplement"
                            value={inputValues.addresscomplement}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Celular</label>
                        <input
                            name="phone"
                            type="text"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Employee</button>
                    </div>
                </form>
            </div>

            {showAlert && (
                <div className="px-5">
                    <div className="alert alert-success">
                        <strong>Well done!</strong> {id ? "edit" : "added a new"} Employee.
                    </div>
                </div>
            )}
        </div>
    );
};
*/
