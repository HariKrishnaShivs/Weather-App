import React, { Component } from 'react'
import './Dynam.css'

class Dynam extends Component{
    constructor(){
        super();
    }
    render(){
        if(this.props.temp==='')
        {
            return(
                <div class="col"></div>
            )
        }
        else{
            return(
                <div class="dyntext">{this.props.temp}</div>
            )
        }
    }
}

export default Dynam;