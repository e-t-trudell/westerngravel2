import { useState, useEffect } from 'react';
import axios from 'react';
import AggregateForm from '../components/AggregateForm';
import ConcreteForm from '../components/ConcreteForm';
import AggregateList from '../components/AggregateList';
import ConcreteList from '../components/ConcreteList';

const Main = (props) => {
    const [aggregateList, setAggregateList] = useState([])
    const [concreteList, setConcreteList] = useState([])
    // ----- aggregates -----
    useEffect(()=>{
        axios.get('http://localhost:8000/api/aggregates')
        .then((res) => {
            setAggregateList(res.data)
        })
        .catch((err)=> console.log(err))
    }, [aggregateList])

    const removeAggFromDom = aggregateId =>{
        axios.delete('http://localhost:8000/api/aggregate/' + aggregateId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        setAggregateList(aggregateList.filter(agg=>agg._id !== aggregateId));
        }).catch((err)=>console.log(err))
    }
    const createAggregate = userParam => {
        axios.post('http://localhost:8000/api/aggregate', userParam)
        .then((res)=>{
        console.log(res);
        console.log(res.data);
        setAggregateList([...aggregateList, res.data])
        .catch((err)=>{
            console.log({msg:'Posting Error',err:err})
            })
        })
    }
    // ----- concretes -----
    useEffect(()=>{
        axios.get('http://localhost:8000/api/concretes')
        .then((res) => {
            setConcreteList(res.data)
        })
        .catch((err)=> console.log(err))
    }, [concreteList])
    const removeConcreteFromDom = concreteId =>{
        axios.delete('http://localhost:8000/api/concrete/' + concreteId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        setConcreteList(concreteList.filter(conc=>conc._id !== concreteId));
        }).catch((err)=>console.log(err))
    }
    const createConcrete = userParam => {
        axios.post('http://localhost:8000/api/concrete', userParam)
        .then((res)=>{
        console.log(res);
        console.log(res.data);
        setConcreteList([...concreteList, res.data])
        .catch((err)=>{
            console.log({msg:'Posting Error',err:err})
            })
        })
    }

    return (
        <div>
            <AggregateForm onSubmitProp={createAggregate} initialAggregateName=''/>
            <AggregateList aggregateList={aggregateList} removeAggFromDom={removeAggFromDom}/>
            <hr/>
            <ConcreteForm onSubmitProp={createConcrete} initialConcreteName=''/>
            <ConcreteList concreteList={concreteList} removeConFromDom={removeConcreteFromDom}/>
        </div>
    )
}

export default Main;