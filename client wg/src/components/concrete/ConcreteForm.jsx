import { useState } from "react";

const ConcreteForm = (props) => {
    const {initialConcreteName, onSubmitProp} = props
    // const [message, setMessage] = useState('Loading...')
    const [concrete, setConcrete] = useState('')
    const [mix, setMix] = useState('')
    const [cost, setCost] = useState('')

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        onSubmitProp({concreteName});
    }
    return (
        <>
            <form className="col-s-6 mx-auto" onSubmit={onSubmitHandler}>
                <div>
                    <label className="form-label">Concrete Name</label><br/>
                    <input className="form-control" type="text" name='concretename' value={concrete} onChange = {(e)=>setConcrete(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Concrete Name</label><br/>
                    <input className="form-control" type="text" name='concretemix' value={mix} onChange = {(e)=>setMix(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Concrete Name</label><br/>
                    <input className="form-control" type="text" name='concretecost' value={cost} onChange = {(e)=>setCost(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-info mt-3">Create Concrete</button>
                </div>
            </form>
        </>
    )
}
export default ConcreteForm;