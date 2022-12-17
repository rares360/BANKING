import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Home.css'; 
import './Animationstyle.css'; 
import { useNavigate } from 'react-router-dom';

export const Home=()=>{
    
    return (
        <div className='Home'>
            <h2>VIRTUAL BANKING</h2>
            <h4>- THE FUTURE IS NEAR -</h4>
            <br></br>
            <br></br>
            <Link to="/mainpage"><button className='button'>SIMULATOR</button></Link>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/login"><button className='button'>LOGIN</button></Link>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/register"><button className='button'>REGISTER</button></Link>
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