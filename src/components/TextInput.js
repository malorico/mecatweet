import React, { Component } from 'react'

export class TextInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tonto:true
        }

    }
    //aqui iremos guardando el texto según lo vayamos introduciendo en el texarea.
    textoActual =" ";
    //en este objeto reestablecemos el contenido de texarea cada vez que pulsemos espacio.
    textarea={ };

    
    handleKeyPress = (event) =>{
        this.setState({ tonto: true});
        let igual = true;
        this.textoActual = event.target.value;
        console.log(this.textoActual);
        const textoTweet = this.props.tweet;
        for(var i=0;i<this.textoActual.length;i++){
            if(this.textoActual[i] !== textoTweet[i]){
                igual = false;
                this.setState({ tonto: false});
                
            }
            //si el usuario pulsa la barra espaciadora llamaremos a la función borrarPalabra
            if (event.keyCode === 32) {
                this.borrarPalabra();
                
            }
        
    }

}
    // esta función introduce una cadena vacía en el textarea.
    borrarPalabra(){
        console.log("he entrado en borrarPalabra");
   
        this.textarea["textoIntroducido"].value = "";
    }
    update = (event) => {
        this.textarea[event.target.name] = event.target // we'll attach the target in the form obj here so we can reference it later
      }
  
    pulsarBoton = (event) => {
        let igual = true;
        const textoTweet = this.props.tweet;
        this.textoActual = event.target.value;
            
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
              
                <textarea name ="textoIntroducido" className="form-control "onKeyDown={this.handleKeyPress} onChange={this.update}>

                </textarea>
                <button className="btn btn-primary" onClick={this.pulsarBoton}>
                    COMPROBAR
                </button>
                
            
            </div>
        )
    }
} 

export default TextInput
