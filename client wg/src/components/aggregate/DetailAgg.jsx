import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const [agg, setAgg] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/aggregate/' + id )
            .then( res => {
                console.log(res.data);
                setAgg(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);
    return (
        <div>
            <p>Aggregate Name: {agg.aggregateName}</p>
            <p>Aggregate Size: {agg.size}</p>
            <p>Aggregate Cost: {agg.cost}</p>
            <Link to={"/aggregate/update/" + agg._id}>Edit</Link>
            <Link to={"/aggregates/" }>Back to Aggregates List</Link>
        </div>
    );
}
export default Detail;