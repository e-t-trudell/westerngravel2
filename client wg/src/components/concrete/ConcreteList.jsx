import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteConcreteButton from './DeleteConcreteButton';
const ConcreteList = (props) => {
    const [con, setCon] = useState([]);

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/concretes")
    	.then((res)=>{setCon(res.data);})
    	.catch((err)=>{console.log(err);})
    }, [])

    const removeFromDom = conId=>{
        setCon(con.filter(con => con._id !== conId))
    }
    
    return (
        <div>
            {con.map((con, index)=>{
                return (
                <div key={index}>
                    <Link to={`/concrete/${con._id}`}>{con.concreteName}'s Page!</Link> 
                    |
                    <Link to={"/concrete/update/" + con._id}>Edit</Link>
                    |
                    <DeleteConcreteButton conId={con._id} successCallback={()=>removeFromDom(con._id)}/>
                </div>
                )})
            }
        </div>
    );
        
}
export default ConcreteList;