import { useState } from "react";

const AggregateForm = (props) => {
    const {initialAggregateName, onSubmitProp} = props
    // const [message, setMessage] = useState('Loading...')
    const [aggName, setAggName] = useState('')
    const [aggSize, setAggSize] = useState('')
    const [aggCost, setAggCost] = useState('')

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        onSubmitProp({aggName, size, cost});
    }
    return (
        <>
            <form className="col-s-6 mx-auto" onSubmit={onSubmitHandler}>
                <div>
                    <label className="form-label">Aggregate Name</label><br/>
                    <input className="form-control" type="text" name='aggregatename' value={aggName} onChange = {(e)=>setAggName(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Aggregate Name</label><br/>
                    <input className="form-control" type="text" name='aggregatesize' value={aggSize} onChange = {(e)=>setAggSize(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Aggregate Name</label><br/>
                    <input className="form-control" type="text" name='aggregatecost' value={aggCost} onChange = {(e)=>setAggCost(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-info mt-3">Create Aggregate</button>
                </div>
            </form>
        </>
    )
}
export default AggregateForm;