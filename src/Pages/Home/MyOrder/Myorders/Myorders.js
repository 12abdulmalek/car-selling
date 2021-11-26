import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const Myorders = () => {
    const {user} = useAuth();
    const [orders , setOrders] =useState([]);
   
    useEffect(()=>{
        const url = `https://desolate-mesa-41652.herokuapp.com/orders`
        fetch(url)
        .then(res =>res.json())
        .then(data=>{
             console.log(data._id);
             const dataBack = data.filter(item=> item.email === user.email)
                setOrders(dataBack) 
             
        }
       )
    },[]);
    const deleteData = (item) => {
        const proced = window.confirm('are you delete your data');
        if(proced){
           const url = `https://desolate-mesa-41652.herokuapp.com/orders/${item}`
           fetch(url,{
                method:'DELETE'
           })
           .then(res=>res.json())
           .then(data => {
            //    console.log(item,data._id);
               if(data.deletedCount>0){
                  //  alert("success hoicos tui");
                   const orderItem=orders.filter((user)=>user._id!==item);
                      setOrders(orderItem);
                  }
           })
        }
            
       } 
    return (
      <div>
          
            <Row xs={1} md={2} className="g-4"> 
         {
                orders.map(item=> <div>
                    <h1>{item.productName}</h1>
                    <img src={item.pic}/>
                    <span>{item.email}</span>
                    
                    <Button className="btn btn-danger" onClick={()=>{deleteData(item._id)}}>delete item</Button>
              
                </div>)
            }
</Row>
      </div>

    );
};

export default Myorders;