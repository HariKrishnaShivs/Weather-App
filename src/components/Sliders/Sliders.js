import React, { Component } from 'react'


// Import Swiper styles
import 'swiper/swiper.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Sliders.css';
import Calendar from 'react-calendar';

class Sliders extends Component{
    constructor(){
        super();
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
        this.state={
            API:'478f2269cbeb8bb60f6242a5712b4f32',
            s:"0",
            assign:0,
            obj:{},
            details:0,
            datepdetails:""
        }
    }

    /*componentDidMount(){
      //document.getElementById("s1").innerHTML="Hello guys";
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.location.params.city}&appid=${this.state.API}&units=metric&lang=en`)
        .then(res=>res.json())
        .then(res=>{
            //document.getElementById("s1").innerHTML=res.list[0].main.temp;
            console.log(res);
        });
    }

    func1=(e)=>{
     this.setState({s:e.target.value},()=>{
         console.log(this.state.s);
     });
    }*/

    setdetails=(vals,dates)=>{
        this.setState({details:vals,datepdetails:dates},()=>{
            console.log(`${this.state.datepdetails},date details are fixed`);
        });
    }

    func=()=>{
        
            if(this.state.assign===0)
            {
             fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.location.params.city}&appid=${this.state.API}&units=metric&lang=en`)
            .then(res=>res.json())
            .then(res=>{
                //document.getElementById("s1").innerHTML=res.list[0].main.temp;
                console.log(res);
                this.setState({obj:res,assign:1});
            });
              }
          else
            {
                return(
                        <Swiper
                            slidesPerView={1}
                            navigation
                            onSlideChange={() => {this.setdetails(0,'')}}
                            onSwiper={()=>{this.setdetails(0,'')}}
                            >
                                {this.state.obj.list.map((listele,index)=>{
                                    var fstr=listele.dt_txt.substring(0,10);
                                    if(index===0)
                                    {
                                            //console.log(`${index},${index-1}`);
                                            return (
                                            <SwiperSlide > 
                                                <div class="slide" >
                                                    {listele.main.temp}
                                                    <button onClick={()=>{this.setdetails(1,fstr)}}>View details</button>
                                                    <button onClick={()=>{this.setdetails(0,'')}}>Hide details</button>
                                                </div>
                                            </SwiperSlide>
                                            )
                                     }
                                     else
                                     {
                                         
                                    var pstr=this.state.obj.list[index-1].dt_txt.substr(0,10);
                                          if(pstr!==fstr)
                                          {
                                            return (
                                                <SwiperSlide > 
                                                    <div class="slide" >
                                                        {listele.main.temp}
                                                        <button onClick={()=>{this.setdetails(1,fstr)}}>View details</button>
                                                    <button onClick={()=>{this.setdetails(0,'')}}>Hide details</button>
                                                    </div>
                                                </SwiperSlide>
                                                )
                                          }
                                     }
                                })}
                        </Swiper>
                )
            }
    }

    func1=()=>{
       if(this.state.details===1)
       {
           return(
               <div class="bs2">
            <Swiper
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {this.state.obj.list.map((listele)=>{
                     var prdate=listele.dt_txt.substring(0,10);
                     if(prdate===this.state.datepdetails)
                     {
                        return (
                            <SwiperSlide > 
                                <div class="slide" >
                                    {listele.main.temp}
                                </div>
                            </SwiperSlide>
                            )
                     }
                })}
               </Swiper>
               </div>
           )
       }
       else
       {
           return(
               <div></div>
           )
       }
    }

    /*onChange=(date)=>{
        this.setState({date},()=>{
            console.log(`${this.state.date}`);
        })
    }*/

    render(){
        return(
            <div class="container-fluid bimg">
                <div class="row">
                    <div class="col-8 col-sm-4">
                        <div class="bs">
                        {this.func()}
                        </div>
                    </div>
                    <div class="col-4 clo-sm-8">
                        {this.func1()}
                    </div>
                 </div>
        </div>
        )
    }
}

export default Sliders;




{/*<SwiperSlide >
    <div class="slide" id="s2">
        Slide2
    </div>
</SwiperSlide>
<SwiperSlide >
    <div class="slide" id="s3">
        Slide2
    </div>
</SwiperSlide>
<SwiperSlide >
    <div class="slide" id="s4">
        Slide2
    </div>
</SwiperSlide>*/}

{/*
if(this.state.s==="0")
        {
          return(
             <div>
                 <input type="radio" name="r1" value="2020-10-18" text="sell" onChange={this.func1}/>
                 <input type="radio" name="r1" value="2020-10-19" text="buy" onChange={this.func1}/>
             </div>
          )
        }*/}