import React, { Component } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import TweetImportado from './components/TweetImportado'
import Info from './components/Info'
import Error from './components/Error'



export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      "Tweets": [
        {
          "created_at": "Thu Apr 06 15:24:15 +0000 2017",
          "id_str": "850006245121695744",
          "text": "Today sharing our vision for the future",
          "user": {
            "id": 2244994945,
            "name": "Twitter Dev",
            "screen_name": "TwitterDev",
            "location": "Internet",
            "url": "https://dev.twitter.com/",
            "description": "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://twittercommunity.com/ \u2328\ufe0f #TapIntoTwitter"
          },
          "place": {   
          },
          "entities": {
            "hashtags": [      
            ],
            "urls": [
              {
                "url": "https://t.co/XweGngmxlP",
                "unwound": {
                  "url": "https://cards.twitter.com/cards/18ce53wgo4h/3xo1c",
                  "title": "Building the Future of the Twitter API Platform"
                }
              }
            ],
            "user_mentions": [     
            ]
          }
        },
        {
          "created_at": "Thu Apr 06 15:24:15 +0000 2017",
          "id_str": "850006245121695744",
          "text": "Marcos jaquenen está forrao",
          "user": {
            "id": 2244994945,
            "name": "Twitter Dev",
            "screen_name": "TwitterDev",
            "location": "Internet",
            "url": "https://dev.twitter.com/",
            "description": "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://twittercommunity.com/ \u2328\ufe0f #TapIntoTwitter"
          },
          "place": {   
          },
          "entities": {
            "hashtags": [      
            ],
            "urls": [
              {
                "url": "https://t.co/XweGngmxlP",
                "unwound": {
                  "url": "https://cards.twitter.com/cards/18ce53wgo4h/3xo1c",
                  "title": "Building the Future of the Twitter API Platform"
                }
              }
            ],
            "user_mentions": [     
            ]
          }
        }
      ]
    
    }
  }

  render() {
    return (
      <div>
        <TweetImportado tweets={this.state.Tweets}/>
        <TextInput tweet={this.state.Tweets[1].text}/>
        
        <Info/>
        <Error/>
      </div>
    )
  }
}

export default App
