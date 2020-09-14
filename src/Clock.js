import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css"



const Clock = () => {
    let time =new Date().toLocaleTimeString();
    let date =new Date().toLocaleDateString();
    return (
        <>

            <p className="last">LAST UPDATED<br></br><br></br>
                <span className="time"> {date}  {time}</span></p>

        </>
    );
};

export default Clock;
