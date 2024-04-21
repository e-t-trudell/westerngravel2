import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const [con, setCon] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/concrete/' + id )
            .then( res => {
                console.log(res.data);
                setCon(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);
    return (
        <div>
            <p>Concrete Name: {con.concrete}</p>
            <p>Concrete Size: {con.mix}</p>
            <p>Concrete Cost: {con.cost}</p>
            <Link to={"/concrete/update/" + agg._id}>Edit</Link>
            <Link to={"/concretes/" }>Back to Concretes List</Link>
        </div>
    );
}
export default Detail;