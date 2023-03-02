import { Component } from "react";
class Mounting extends Component {

constructor(props){
    super(props);
    
}
state={}
/**
getDerivedStateFromProps est appelée chaque fois que les props
 ou l'état (ou state) d'un composant sont mis à jour
  et elle permet de synchroniser l'état du composant
   avec les nouvelles valeurs de props.
*/
static getDerivedStateFromProps(props,state){
console.log(`props ${props}`)
return null;
}
componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);

    console.log("From componentDidMount")
}
handleScroll = () => {
    console.log('scrolling');
  };


render(){
    console.log("From render")
    return ( <h1>Mounting</h1>
    
    
    );
}



}
export default Mounting;