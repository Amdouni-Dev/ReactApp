import React from 'react';
import Product from './Product';
import {products} from '../data/products';
import data1 from '../data/products.json';
import { Card, Col, Row } from 'react-bootstrap';

function Products() {
  const inlineStyle={
    color:"green",
    fontSize:"14px",
}

const styleImage={
  width:"40px", height:"40px"
}
const styleCard={
  backgroundColor:"grey",
  marginBottom:"10px",
  width:"200",
  height:"100"
  


}
const styleText={
  color:"black",
  fontSize:"14px"
}
  return (
console.log(data1),


    <div>
<h1>Hi Products </h1>
{/* <ul>
                {data1.map((record, i) => <li key={i}>{record.id} - {record.name} {record.description}</li>)}
            </ul> */}
  <Row>
 {data1.map((record, i) =>

        <Col >
          <Card key={i} >
          <Card.Title style={styleText} >{record.name}</Card.Title>
            <Card.Body style={styleCard}>   
     
            
            <Card.Img  style={styleImage} src={require(`../assets/images/${record.img}`)} alt="Mon image" />
              
              <Card.Text style={styleText}>{record.description}</Card.Text>
              <Card.Text style={styleText}>{record.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
   
     

)}
   </Row>


{/* 
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))} */}
    </div>
  );
}

export default Products;
