import React, { Component } from 'react'

export class TextInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tonto:true
        }

    }
    
    handleKeyPress = (event) =>{
        this.setState({ tonto: true});
        let igual = true;
        const textoActual =event.target.value;
        const textoTweet = this.props.tweet;
        for(var i=0;i<textoActual.length;i++){
            if(textoActual[i] !== textoTweet[i]){
                igual = false;
                this.setState({ tonto: false});
            }
            console.log(textoActual[i])
            console.log(textoTweet[i])
        }
        console.log(igual)
          
    }

    render() {
        return (
            <div>
                {/* <h1>text imput component</h1> */}
                <p className={
                (this.state.tonto ? "verde " : "rojo ") 
                  }>
                    Correcto
                </p>
                <textarea onChange={this.handleKeyPress}>

                </textarea>
            </div>
        )
    }
}

export default TextInput
