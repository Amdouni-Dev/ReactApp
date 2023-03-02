import { Component} from 'react';
class Updating extends Component {
    constructor(props) {
        super(props);
    }

state={
    likes:0
}
shouldComponentUpdate(props,state){
    if(state.likes > 2){
        console.log(state.likes)
        console.log("not updating")
        return false;
    }else {
        return true;
    }
}

getSnapshotBeforeUpdate(prevProps,PrevState){
    console.log('====================================');
    console.log(prevProps);
    console.log('====================================');
 
    console.log(PrevState);
    return {prevProps,PrevState}
}
componentDidUpdate(){
    console.log("I m updated")
}
addLikes=()=>{
    this.setState( (oldState)=>(
        {
            likes:oldState.likes+1
        }
    ) )
}


render() {
    return (
        <div>
            <h1>Updating</h1>
        <h1>{this.state.likes} </h1>
<button onClick={this.addLikes} >Like</button>
        </div>
    )

  
}

}
export default Updating;