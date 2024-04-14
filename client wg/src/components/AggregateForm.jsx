import { useState } from "react";

const AggregateForm = (props) => {
    const {initialAggregateName, onSubmitProp} = props
    // const [message, setMessage] = useState('Loading...')
    const [aggregateName, setAggregateName] = useState('')

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        onSubmitProp({aggregateName});
    }
    return (
        <>
            <form className="col-s-6 mx-auto" onSubmit={onSubmitHandler}>
                <div>
                    <label className="form-label">Aggregate Name</label><br/>
                    <input className="form-control" type="text" name='aggregatename' value={aggregateName} onChange = {(e)=>setAggregateName(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-info mt-3">Create Aggregate</button>
                </div>
            </form>
        </>
    )
}
export default AggregateForm;