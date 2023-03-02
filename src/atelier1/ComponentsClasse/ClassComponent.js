import { Component} from 'react';
class ClassComponent extends Component{

  constructor(props){
 
    super(props);

    console.log(this.state);
    this.addLikes=this.addLikes.bind(this);



  
}  
state = {likes:0,state1:this.props.title,state2:"Hello from Child"}
// methodes attachée
addLikes(){
    // sou2el : aaleh medakheltlou state illi aandi ! est ce que howa yaaref direct state hedhyka 
    this.setState( (oldState)=> ({
     ...oldState,
      likes:oldState.likes+1
        
    }) )
}
sayHello(){
    console.log('Hi Mannou');
}
render(){
    return(
        <>
        <div>
            <h1>Class Component</h1>
            <p>{this.state.state1}</p>
            <p>{this.state.likes} </p>
            <button onClick={this.sayHello} >Say Hello To Mouna !</button>
            <button onClick={this.addLikes} >Like</button>
        </div>
        </>
    )
}

}
export default ClassComponent;

