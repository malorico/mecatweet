import React, { Component } from 'react'

export class TweetImportado extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const tweets =[];
        
        this.props.tweets.forEach((tweet,index) => {
            tweets.push(<li key={index}>{tweet.text}</li>)
        }); 
        console.log(tweets)
       
        return (

            <div>
                <h1>tweet importado </h1>

                
                <p>
                  
                  {tweets}
                </p>
                
            </div>
        )
        
    }
}

export default TweetImportado
