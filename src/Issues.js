import React, {Component} from 'react';

class Issues extends Component{
    render(){ 
        const {issues} = this.props;
        const issuesList = issues.length ? (
            issues.map(issue => {
               
                return(
                    <div className='issues container'>
                    
                        <div className='center card-content'>
                         
                        <span className="card-title" key={issue.id}>{issue.title}</span>
                        
                        </div>
                    </div>
                )
                
            })
        ) : (<div className="center">no Issues for this member</div>)
    return(
        <div className="container">
        <h1 className='center'>Issues</h1>
        {issuesList}
        
        </div>
    )
    }
}
export default Issues;