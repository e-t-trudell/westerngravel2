// import { useState, useEffect } from 'react';
// import axios from 'react';
// import NewItem from '../components/NewItem';
// import AggregateList from '../components/AggregateList';
// import ConcreteList from '../components/ConcreteList';


import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Main = (props) => {
    // const [itemList, setItemList] = useState([])
    // const [aggregateList, setAggregateList] = useState([])
    // const [concreteList, setConcreteList] = useState([])
    // // ----- all items -----
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/')
    //     .then((res) => {
    //         setItemList(res.data)
    //     })
    //     .catch((err)=> console.log(err))
    // }, [itemList])
    // // ----- aggregates -----
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/aggregates')
    //     .then((res) => {
    //         setAggregateList(res.data)
    //     })
    //     .catch((err)=> console.log(err))
    // }, [aggregateList])

    // const removeAggFromDom = aggregateId =>{
    //     axios.delete('http://localhost:8000/api/main/aggregates' + aggregateId)
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //     setAggregateList(aggregateList.filter(agg=>agg._id !== aggregateId));
    //     }).catch((err)=>console.log(err))
    // }
    // const createAggregate = userParam => {
    //     axios.post('http://localhost:8000/api/main/aggregates', userParam)
    //     .then((res)=>{
    //     console.log(res);
    //     console.log(res.data);
    //     setAggregateList([...aggregateList, res.data])
    //     .catch((err)=>{
    //         console.log({msg:'Posting Error',err:err})
    //         })
    //     })
    // }
    // // ----- concretes -----
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/concretes')
    //     .then((res) => {
    //         setConcreteList(res.data)
    //     })
    //     .catch((err)=> console.log(err))
    // }, [concreteList])
    // const removeConcreteFromDom = concreteId =>{
    //     axios.delete('http://localhost:8000/api/main/concretes/' + concreteId)
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //     setConcreteList(concreteList.filter(conc=>conc._id !== concreteId));
    //     }).catch((err)=>console.log(err))
    // }
    // const createConcrete = userParam => {
    //     axios.post('http://localhost:8000/api/main/concretes/', userParam)
    //     .then((res)=>{
    //     console.log(res);
    //     console.log(res.data);
    //     setConcreteList([...concreteList, res.data])
    //     .catch((err)=>{
    //         console.log({msg:'Posting Error',err:err})
    //         })
    //     })
    // }

    return (
        <div>
            {/* <NewItem onSubmitProp={createAggregate} initialAggregateName=''/>
            <AggregateList aggregateList={aggregateList} removeAggFromDom={removeAggFromDom}/>
            <ConcreteList concreteList={concreteList} removeConFromDom={removeConcreteFromDom}/> */}
            <Nav/>
            <Footer/>
        </div>
    )
}

export default Main;