import React from 'react';



const Issues = (Issues) => {
    console.log(Issues);
    const issuesList = Issues.length ? (
        Issues.map(issue => {
            return(
                <div className='issues container'>
                    <h1 className='center'>Issues</h1>
                    <div className='center card-content'>
                     
                    <span className="card-title">{issue.title}</span>
                      
                    </div>
                </div>
            )
        })
    ) : (<div className="center">no Issues for this member</div>)
    return(
        <div className="container">
        {issuesList}
       
        </div>
    )
}
export default Issues;