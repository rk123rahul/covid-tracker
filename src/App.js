import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css"
import pic from "./WhatsApp Image 2020-09-08 at 2.50.34 PM.jpeg";
import RoomIcon from '@material-ui/icons/Room';
import Box2 from "./Box2";
import Clock from "./Clock";
import Smallbox from "./Smallbox";
import Box1 from  "./Box1";
import Master from "./Master";
const App = () => {
  return (
    <>

      <div className="header">
    
              
              <div class>
               < RoomIcon className="icon"></RoomIcon>
      
              
            </div>
        <div className='header2'>
          <div className="first">
            <h1 className="india">
              INDIA COVID-19 Tracker</h1>
              <div class="head_name">
            <p>Let's all pray to make our Earth Covid-19 Free Soon. Stay Safe And Do</p>
            <p> The Locate.</p>
            </div>

          </div>
          <div>
            <div class="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div class="container">
                <Box1/>
                <Master/>
              </div>
            </div>
          </div>
          <br></br>
          <div>
          <div class="card2">
             
               <Box2></Box2>
            </div>
          </div>
        </div>
        <div className="header3">
        <div className="india2">
            <h1 className="india">
              INDIA MAP</h1>
            <p className="hover">HOVER OVER A STATE FOR MORE DETAILS</p>
     

          </div> 
          <div>
          <div class="card3">
               <Smallbox></Smallbox>
             
               <Clock></Clock>
              
              {/* <div className="pic">
                  <img src={pic} alt="india map" width="350px"  ></img>
              </div> */}
            
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default App;
