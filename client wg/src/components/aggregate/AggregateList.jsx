import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteAggButton from './DeleteAggButton';
const AggregateList = (props) => {
    const [agg, setAgg] = useState([]);

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/aggragates")
    	.then((res)=>{setAgg(res.data);})
    	.catch((err)=>{console.log(err);})
    }, [])

    const removeFromDom = personId=>{
        setAgg(agg.filter(agg => agg._id !== aggId))
    }
    
    return (
        <div>
            {agg.map((agg, index)=>{
                return (
                <div key={index}>
                    <Link to={`/aggregate/${agg._id}`}>{agg.aggregateName}'s Page!</Link> 
                    |
                    <Link to={"/aggregate/update/" + agg._id}>Edit</Link>
                    |
                    <DeleteAggButton aggId={agg._id} successCallback={()=>removeFromDom(agg._id)}/>
                </div>
                )})
            }
        </div>
    );
        
}
export default AggregateList;