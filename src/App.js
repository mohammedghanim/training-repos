import React, {Component} from 'react';
import Repos from './Repos';
import Addform from './Addform';
import axios from 'axios';


class App extends Component {
  state = {
    username: null,
    repos:[]  
  }
  fireSearch = (username) => {
    axios.get('https://api.github.com/users/'+ username +'/repos').then(res => {
              this.setState({
          
                  repos: res.data
        
              })
          })
  
  }
  render(){
  return (
    <div className="App">
    <h1 className="center">Repositories</h1>
    <Addform fireSearch={this.fireSearch} />
    <Repos repos={this.state.repos} />
    </div>
  );
}

}
export default App;
