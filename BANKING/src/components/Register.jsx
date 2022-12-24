import React, { useState } from 'react';
import './Register.css'; 
import './Animationstyle.css'; 

export const Register=()=>{
    return (
        <div className='Home'>
            <h2>VIRTUAL BANKING</h2>
            <h2><a href="/">HOME</a></h2>
            <h3>REGISTER</h3>
            <h4>USERNAME</h4>
           <input type="text" placeholder="FIRST NAME"/>
           <br></br>
           <input type="text" placeholder="LAST NAME"/>
           <br></br>
           <input type="text" placeholder="EMAIL"/>
           <br></br>
           <input type="text" placeholder="PHONE"/>
           <br></br>
           <input type="password" placeholder="PASSWORD"/>
           <br></br>
           <input type="password" placeholder="REPEAT PASSWORD"/>
            <br></br>
            <br></br>
            <br></br>
            <button className='button'>REGISTER</button>
                <div class="wrapper">
                <div class="candles">
                    <div class="light__wave"></div>
                    <div class="candle1">
                    <div class="candle1__body">
                        <div class="candle1__eyes">
                        <span class="candle1__eyes-one"></span>
                        <span class="candle1__eyes-two"></span>
                        </div>
                        <div class="candle1__mouth"></div>
                    </div>
                    <div class="candle1__stick"></div>
                    </div>
                    
                    <div class="candle2">
                    <div class="candle2__body">
                        <div class="candle2__eyes">
                        <div class="candle2__eyes-one"></div>
                        <div class="candle2__eyes-two"></div>
                        </div>
                    </div>
                    <div class="candle2__stick"></div>
                    </div>
                    <div class="candle2__fire"></div>
                    <div class="sparkles-one"></div>
                    <div class="sparkles-two"></div>
                    <div class="candle__smoke-one">

                    </div>
                    <div class="candle__smoke-two">

                    </div>
                    
                </div>
                <div class="floor">
                </div>
                
                </div>
</div>       
 )
}