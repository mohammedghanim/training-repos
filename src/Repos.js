import React , {Component} from 'react';
import {Link} from 'react-router-dom';


class repos extends Component{
   
    state = {
        repos:[]
    }

    componentDidMount(){
           
    //     axios.get('https://api.github.com/users/mohammedghanim/repos').then(res => {
          this.setState({
        
            repos: this.props.repos
         })    
         
    }
    render(){
        
        const {repos} = this.props;
        const repolist = repos.length ? (
            repos.map(repo => {
                return(
             
                    <div className="post card" key={repo.id}>
                        <div className="card-content">
                     
                        <Link to={'/' + repo.owner.login + '/' + repo.name} onClick={() => this.props.enterIssues('repos/' + repo.owner.login + '/' + repo.name + '/issues')}>
                            <span className="card-title">{repo.name}</span>
                            </Link>
                        </div>
                    </div>
                   
                )
                
            })
        ) : (<div className="center">no repositories for this member</div>)
        return(
            <div className="container">
            {repolist}
           
            </div>
        )
    }
}
export default repos;