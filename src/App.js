import React, {Component} from 'react';
import Repos from './Repos';
import Addform from './Addform';
import axios from 'axios';
import Navbar from './Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Issues from './Issues';

class App extends Component {
  state = {
    username: null,
    repos:[],
    issues:[]
  }
  
  fireSearch = (username) => {
    axios.get('https://api.github.com/users/'+ username +'/repos').then(res => {
              this.setState({
          
                  repos: res.data
        
              })
          })
  }
  enterIssues = (urlstring) => {
    
    axios.get('https://api.github.com/' + urlstring).then(res => {
      this.setState({
        issues: res.data
      })
      }
      
    )
   
  }
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Route exact path='/Addform' component={Addform} />
    <Route exact path='/:username' component={Repos} fireSearch={this.fireSearch} />
    <Addform fireSearch={this.fireSearch} />
    <Repos repos={this.state.repos} enterIssues={this.enterIssues} />
    <Route exact path='/:username/:repository' component={() => <Issues Issues={this.state.issues} />}  />
    </div>
    </BrowserRouter>
  );
}

}
export default App;
