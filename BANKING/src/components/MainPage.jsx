import React, { useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {FormControl, Slider, TextField, Typography, Grid, Button, Autocomplete} from "@mui/material";
import './Login.css'; 
import './Animationstyle.css'; 
import './Slider.css'; 

export const MainPage=()=>{
   

    return (
        <div className='Home'>
            <h2>VIRTUAL BANKING</h2>
            <h2><a href="/">HOME</a></h2>
            <form>
                <label>
                SUMA
                <br></br>
                    <input type="text" name="name" />
                </label>
                </form>
                <br></br>
                <form action="/action_page.php">
                    <label for="cars">VALUTA</label>
                    <br></br>
                    <select name="cars" id="cars">
                        <option value="volvo">RON</option>
                        <option value="saab">USD</option>
                        <option value="opel">EUR</option>
                    </select>
                    </form>
                    <br></br>
                    <label>ALEGE PERIOADA</label>
                    <div class="slider">
                    <input type="range" min="-100" max="0" value="0" class="range blue"/></div>

                
                    <br></br>
                    <button className='button'>VEZI OFERTELE</button>

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
