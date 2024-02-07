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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]); // Ignora la advertencia de ESLint para este useEffect
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    const addEmployee = () => {
        const newEmployee = { ...inputValues, id: uuid() }; // Se Agrega el id generado por uuid() al objeto de cliente
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
                <h1 className="text-center">{id ? "Editar" : "Agregar nuevo"} Cliente</h1>
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
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Editar" : "Agregar"} Cliente</button>
                    </div>
                </form>
            </div>

            {showAlert && (
                <div className="px-5">
                    <div className="alert alert-success">
                        <strong>Well done!</strong> {id ? "editar" : "agregar nuevo"} Cliente.
                    </div>
                </div>
            )}
        </div>
    );
};

