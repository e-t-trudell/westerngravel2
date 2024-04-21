import React from 'react'
import axios from 'axios';
const DeleteAggButton = (props) => {
    const { aggId, successCallback } = props;
    const deleteAgg = e => {
        axios.delete('http://localhost:8000/api/aggregates/' + aggId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteAgg}>
            Delete
        </button>
    )
}
export default DeleteAggButton;