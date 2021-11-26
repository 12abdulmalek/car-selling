import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {price,name,pic,desc,_id} = props.item;
    return (
        <Col >
        <Card>
          <Card.Img variant="top" src={pic} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {desc}
            </Card.Text>
            <span style={{marginRight:"12px" , color:"blue"}}>product rate : {price}</span>
         
            <Link to={`/orders/${_id}`}>
           <Button className="btn btn-primary">BUY NOW</Button>
           </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Product;