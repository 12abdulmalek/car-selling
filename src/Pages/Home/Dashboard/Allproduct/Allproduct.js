import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Allproduct = () => {
    const [orders , setOrders] =useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/orders`
        fetch(url)
        .then(res =>res.json())
        .then(data=>{
                setOrders(data) 
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
               if(data.deletedCount>0){
                   const orderItem=orders.filter((user)=>user._id!==item);
                   setOrders(orderItem);
                  }
           })
        }
            
       } 
    return (
        <div>
         {
             orders.map(item =>
             <div>
             <Card className="text-center">
             <Card.Img variant="top" src={item.pic} />
  {/* <Card.Header>Featured</Card.Header> */}
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
  
    <Button className="btn btn-danger" onClick={()=>{deleteData(item._id)}}>delete item</Button>
  </Card.Body>
  
</Card>
             </div>)
         }
        </div>
    );
};

export default Allproduct;