import Card from "react-bootstrap/Card";
import { Component } from 'react';
import Button from "react-bootstrap/Button";

class Product extends Component {
   

    constructor(props) {
        super(props);
    }
    state = { product:this.props.product, likes:this.props.product.like, dislikes:this.props.product.dislikes};  

    like=()=>{
this.setState( (oldState)=>( {
  ...oldState,likes:oldState.likes+1
  
} ) )

    }
    render() { 
        const styleCard={
            backgroundColor:"grey",
            marginBottom:"10px",
            width:"18rem",
            height:"100"
            
          
          
          }
        return ( 
        <Card style={styleCard}>
        <Card.Img variant="top" src={require("../assets/images/"+this.state.product.img)} />
        <Card.Body>
          <Card.Title>{this.state.product.title}</Card.Title>
          <Card.Text>
          {this.state.product.description}
          </Card.Text>
          <Card.Text>
          {this.state.product.price}
          </Card.Text>
          <Card.Text>
          Likes: {this.state.likes}
          </Card.Text>
          <Card.Text>Quantité: {this.state.product.quantity} </Card.Text>
          <Button variant="primary" onClick={this.like} >Like</Button> 
          <Button variant="primary" onClick={ ()=>this.props.Buyfunction(this.state.product) }  disabled={this.state.product.quantity<=0} >Buy</Button> 
        </Card.Body>
      </Card> );
    }
}
 
export default Product;