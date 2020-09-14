import React , {useState,useEffect}from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css"
// import Sdata from "./Sdata";
import Props from "./Props";
import axios from "axios"; 

const Box2 = () => {
  const [con, setCon] = useState([]);
  
  console.log(con);
  useEffect(()=>{
          async function getData(){
              const dhr = await axios.get(`https://api.covid19india.org/data.json`);
              
              
             
              setCon(dhr.data.statewise);
          }
          getData();
  },[]);
  return (
    <>


      {/* <div className="box2flex">
        <div className="box2">
          <p> STATE/UT</p>
          
        </div>
        <div className="box2">
          <p>CONFIRMED</p>
        </div>
        <div className="box2">
          <p>ACTIVE</p>
        </div>
        <div className="box2">
          <p>RECOVERED</p>
        </div>
        <div className="box2">
          <p>DECEASED</p>
        </div>
      </div> */}
      <table class="table table-borderless">
      <tbody>
      <tr className="danger">
                        <th scope="row">STATE/UT</th>
                        <td>CONFIRMED</td>
                        <td>ACTIVE</td>
                        <td> RECOVERED</td>
                        <td> DECEASED</td>
                    </tr>
                    
        {con.map((val) =>{
          return(
            <Props
            state={val.state}
            confirmed ={val.confirmed}
            active={val.active}
            recovered ={val.recovered}
            deceased ={val.deaths}
            />
        


          );
        } )}
         
         </tbody>
        </table>

    </>
  );
};

export default Box2;
