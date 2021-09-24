import React from 'react'
import { useDispatch } from 'react-redux';
import { borrarRegistro } from '../actions/nomina';


const Element = ({data}) => {
    const { fecha, tipocontrato, empresa, id} = data;

    const dispatch = useDispatch()

    let fechaFormato;
  
    if(fecha.seconds){
        const date = fecha.toDate();
        //`${date.getDay()} - ${date.getUTCMonth()} - ${date.getFullYear()}`
        fechaFormato = date.toLocaleDateString("es-MX");
    }else{
        fechaFormato = fecha;
    }

    const handleDelete = () => {
        dispatch(borrarRegistro(id));
      };
    
      return (
        <>
          <td>{fechaFormato}</td>
          <td>{tipocontrato}</td>
          <td>{empresa}</td>
          <td>
            <button onClick={handleDelete} className="btn red">
              <i className="material-icons">delete_forever</i>
            </button>
          </td>
        </>
      );
    };
    
    export default Element;