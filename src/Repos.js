import React , {Component} from 'react';


class repos extends Component{
   
    state = {
        repos:[]
    }

    componentDidMount(){
            console.log(this.props.repos);
    //     axios.get('https://api.github.com/users/mohammedghanim/repos').then(res => {
          this.setState({
        
            repos: this.props.repos
         })    
         
    }
    render(){
       
        const {repos} = this.state;
        const repolist = repos.length ? (
            repos.map(repo => {
                return(
                    <div className="post card" key={repo.id}>
                        <div className="card-content">
                            <span className="card-title">{repo.name}</span>
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