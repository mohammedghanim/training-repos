import React , {Component} from 'react';
import submiticon from './submiticon.png';


class Addform extends Component{
    state = {
        username: null,
        repos: []
    }
    
 
    handleChange = (e) => {
  
        this.setState({
          username: e.target.value
        })
       }
    handleSubmit = (e) => {
        
        e.preventDefault();
       
        
          }
render(){
    return(
        <div className="container">
            <form className="center" onSubmit={this.handleSubmit}>
            <h1 className="center">Repositories</h1>
      <input type="text" className="center" id="usrname" onChange={this.handleChange}/>
      <button onClick={() => this.props.fireSearch(this.state.username)}><img src={submiticon} alt='submit icon'/>Submit</button>
    </form>
        </div>
    )
}
}
export default Addform;