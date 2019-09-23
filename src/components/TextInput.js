import React, { Component } from 'react'

export class TextInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tonto:true
        }

    }
    textoActual =" ";

    handleKeyPress = (event) =>{
        this.setState({ tonto: true});
        let igual = true;
        this.textoActual = event.target.value;
        const textoTweet = this.props.tweet;
        for(var i=0;i<this.textoActual.length;i++){
            if(this.textoActual[i] !== textoTweet[i]){
                igual = false;
                this.setState({ tonto: false});
            }
            
            
        }
        
          
    }
    pulsarBoton = (event) => {
        let igual = true;
        const textoTweet = this.props.tweet;
       /*  console.log(textoTweet.includes(this.textoActual)); */
            
        if(this.textoActual.length !== textoTweet.length){
            igual = false; 
        }else {

                for(var i=0;i<this.textoActual.length;i++){
                if(this.textoActual[i] !== textoTweet[i] ){
                    igual = false;
                    this.setState({ tonto: false});
                }
        }
    }

        console.log(this.textoActual);
        console.log(textoTweet);
         console.log(igual);
       
}

    render() {
        return (
            <div>
                {/* <h1>text imput component</h1> */}
               {/*  <p className={
                (this.state.tonto ? "verde " : "rojo ") 
                  }>
                    Correcto
                </p> */}
                <textarea className="form-control "onChange={this.handleKeyPress}>

                </textarea>
                <button className="btn btn-danger" onClick={this.pulsarBoton}>
                    COMPROBAR
                </button>
                
            
            </div>
        )
    }
} 

// con el espacio que desaparezca lo que está en textarea
// Comprobar que tecla he pulsado y si la palabra es correcta y he pulsado
// el espacio, borrar el contenido de textarea.
// puedo usar una funcion que ya tengo aqui

export default TextInput
