import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import ConcreteForm from './ConcreteForm';
import DeleteConcreteButton from './DeleteConcreteButton';

const UpdateConcrete = (props) => {
    const { id } = useParams(); 
    const [concrete,setConcrete] = useState()
    const [loaded, setLoaded]=useState(false);
    const navigate = useNavigate();

    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/concrete/' + id)
            .then((res) => {
                setConcrete(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])
    
    const updateConcrete = (concreteParam) => {
        axios.put('http://localhost:8000/api/concretes/' + id, concrete)
            .then((res) => {
                console.log(res);
                navigate("/concretes"); // this will take us back to the Main.jsx
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Concrete</h1>
            {/* conditional render */}
            {
            loaded && (
                <>
                    <ConcreteForm 
                        onSubmitProp={updateConcrete} 
                        initialConcreteName={concrete.concrete} 
                        initialMix={concrete.mix}
                        initialCost={concrete.cost}/>
                    <DeleteConcreteButton concreteId={concrete._id} successCallback={()=> navigate('/concretes')}/>
                </>
            )}
        </div>
    )
}
export default UpdateConcrete;