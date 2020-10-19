import React, { Component } from 'react'
import './Weather.css'
import img5 from './../../assets/images/img5.jpg';
import { NavLink ,Link} from 'react-router-dom';
import Dynam from './../Dynam/Dynam.js'



class Weather extends Component{
    constructor()
    {
        super();
        this.state={
           city:'',
           API:'478f2269cbeb8bb60f6242a5712b4f32',
           tempr:'',
           data:''
        }
    }
    func=(e)=>{
        this.setState({city:e.target.value});
    }
    getWeather=()=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.API}&units=metric&lang=en`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            if(res.cod===200)
            {
                document.getElementById("errmsg").innerHTML="";
                this.setState({tempr:res.main.temp},()=>{
                    /*document.getElementById("cityname").innerHTML=this.state.tempr;*/
                })
            }
            else{
                this.setState({tempr:''});
                document.getElementById("errmsg").innerHTML="** Search for the city using spaces&camelcase";
            }
        });
    }
    render()
    {
        return(
            <div class="container-fluid bg">
                {/*<div class="row">
                    <input type="text" onChange={this.func} />
                    <button onClick={this.submit}>Submit</button>
                    <p>Temperature is :</p>
                    <p id="cityname">Hello</p>
                 </div>*/}
                 <div class="row">
                    <div class="col-xs-8 col-sm-4">
                        <div class="tbstyle">
                           <img src={img5} class="img5style"/>
                           <input type="text"  class="inp1" placeholder="Enter Your Name"/>
                            <input type="text" id="city" onChange={this.func} class="inp1" placeholder="Enter City Name"/>
                            <label id="errmsg" class="lbltxt"></label>
                            <button onClick={this.getWeather} class="inp1 clrbtn">Get Weather</button>
                          </div>  
                    </div>
                    <div class="col-xs-4 col-sm-8">
                        <div class="row">
                                <Link to={{pathname:"/slides",params:{city:this.state.city}}}>
                                  <button class="extbtn btn1">Weather forecast</button>
                                </Link>
                            <button class="extbtn btn2">About Us</button>
                        </div>
                        <div class="row ">
                              <Dynam temp={this.state.tempr}/>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default Weather;