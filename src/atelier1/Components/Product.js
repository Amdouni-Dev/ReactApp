import { Card, Col, Row } from 'react-bootstrap';
const imageUrl = '../assets/images/product2.jpg';
function Product(props) {
    const { name, description, price } = props;
 
      const inlineStyle={
          color:"green",
          fontSize:"14px",
      }

      const styleImage={
        width:"40px", height:"40px"
      }
      const styleCard={
        backgroundColor:"grey"
      }
    return (
      <Row>
        <Col>
          <Card>

          {/* <p style={inlineStyle} >Hi React Class</p> */}

            <Card.Body style={styleCard}>
             
            <Card.Img  style={styleImage} src={require('../assets/images/product2.jpg')} alt="Mon image" />

              <Card.Title>Product Name</Card.Title>
              <Card.Text>Product Description</Card.Text>
              <Card.Text>Product Price</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
  export default Product;



  
  
  