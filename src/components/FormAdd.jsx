import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nomina';

const FormAdd = () => {
    const dispatch = useDispatch();

    const [viewForm, setViewForm] = useState(false)

    const [contrato,setContrato] = useState(
        {
            tipoContrato:'',
            empresa:'',
        }
    );

    const{tipoContrato,empresa} = contrato;

    const handleAdd = () => {
        setViewForm(!viewForm)
        
    };
    const handleChange = (e) =>{
        setContrato({
            ...contrato,
            [e.target.name]: e.target.value
        })
    };
    
    const handleSave = (e) =>{
        const cantidadcontratos = contrato;
        dispatch(crearRegistro(cantidadcontratos));
        
        setContrato({
            tipoContrato:'',
            empresa:'',
            })
    }

    return (
        <div >
            <button onClick={handleAdd}className="btn btn-green">
                {
                   !viewForm ? "Agregar" : "Cerrar"
                }
            </button>
            {
                viewForm && (
                    <div className="animate__animated animate__fadeInDown">
                    <div className="input-field col s12">
                        <label htmlFor="icon_prefix1">Tipo de contrato</label>
                        <input 
                        id="icon_prefix1"
                        type="text" 
                        value={tipoContrato} 
                        onChange={handleChange} 
                        name="tipoContrato"
                        />
                    </div>
                     <div className="input-field col s12">
                        <label htmlFor="icon_prefix2">Empresa</label>
                        <input 
                        id="icon_prefix2"
                        type="text" 
                        value={empresa} 
                        onChange={handleChange} 
                        name="empresa"
                        />  
                     </div>
                     <div className="input-field col s12">
                        <label htmlFor="icon_prefix3">PATRON </label>
                        <input 
                        id="icon_prefix3"
                        type="text" 
                        name="patron"
                        />  
                     </div>
                     <div className="input-field col s12">
                        <label htmlFor="icon_prefix4">TRABAJADOR </label>
                        <input 
                        id="icon_prefix4"
                        type="text"
                        name="trabajador"
                        />  
                     </div>
                    <button onClick={handleSave} className="btn blue">Agregar</button>
                    </div>
                )
            }
        </div>
    )
}

export default FormAdd
