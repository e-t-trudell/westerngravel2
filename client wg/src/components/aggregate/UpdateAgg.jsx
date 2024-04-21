import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import AggregateForm from './AggregateForm';
import DeleteAggButton from '../components/DeleteButton';

const UpdateAgg = (props) => {
    const { id } = useParams(); 
    const [agg,setAgg] = useState()
    const [loaded, setLoaded]=useState(false);
    const navigate = useNavigate();

    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/aggregate/' + id)
            .then((res) => {
                setAgg(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])
    
    const updateAggregate = (aggParam) => {
        axios.put('http://localhost:8000/api/aggregates/' + id, agg)
            .then((res) => {
                console.log(res);
                navigate("/aggregates"); // this will take us back to the Main.jsx
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update an Aggregate</h1>
            {
            loaded && (
                <>
                    <AggregateForm 
                        onSubmitProp={updateAggregate} 
                        initialAggregateName={agg.aggregateName} 
                        initialSize={agg.size}
                        initialCost={agg.cost}/>
                    <DeleteAggButton aggId={agg._id} successCallback={()=> navigate('/aggregates')}/>
                </>
            )}
        </div>
    )
}
export default UpdateAgg;