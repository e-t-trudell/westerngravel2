import React from 'react'
import axios from 'axios';
const DeleteConcreteButton = (props) => {
    const { concreteId, successCallback } = props;
    const deleteConcrete = e => {
        axios.delete('http://localhost:8000/api/concretes/' + concreteId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteConcrete}>
            Delete
        </button>
    )
}
export default DeleteConcreteButton;