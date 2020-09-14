import React , {useState,useEffect}from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css"
import axios from "axios";


const Smallbox = () => {
    const [con, setCon] = useState("1");
    const [act, setAct] = useState("2");
    const [rec, setRec] = useState("3");
    const [dec, setDec] = useState("4");

    useEffect(()=>{
            async function getData(){
                const res = await axios.get(`https://api.covid19india.org/data.json`);
                
                // const a = res.data.cases_time_series
                // console.log(res.data.cases_time_series[222]);
                setRec(res.data.cases_time_series[res.data.cases_time_series.length-1].totalrecovered);
                setCon(res.data.cases_time_series[res.data.cases_time_series.length-1].totalconfirmed);
                setAct(res.data.statewise[0].active);
               
                setDec(res.data.cases_time_series[res.data.cases_time_series.length-1].totaldeceased);
            }
            getData();
    },[]);
    return (
        <>

            <div className="flex1">
                <div class="card9">
                    <h2 className="text">CONFIRMED</h2>
                    <h2 className="text">{con}</h2>
                </div>
                <div class="card10">
                    <h2 className="text">ACTIVE</h2>
                    <h2 className="text">{act}</h2>
                </div>
                <div class="card11">
                    <h2 className="text">RECOVERED</h2>
                    <h2 className="text">{rec}</h2>
                </div>
                <div class="card12">
                    <h2 className="text">DECEASED</h2>
                    <h2 className="text">{dec}</h2>
                </div>

            </div>

        </>
    );
};

export default Smallbox;
