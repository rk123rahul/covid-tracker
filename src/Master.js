import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css"
import {Line} from 'react-chartjs-2';


const Master = () => {
    const data = {
        labels: ['confirmed', 'active','deceased' ],
        datasets:[
            {
                label: 'corona case 2020',
                data :[	4621183 ,944895,76914],
                pointBorderColor:[ 
                    'rgb(0, 0, 153)',
                    'rgb(0, 153, 51)',
                    'rgb(153, 153, 102)'

                ],
             
            }
        ]


    }
    return (
        <>
           <div  className="chart">
            <Line data={data} />
           </div>

        </>
    );
};

export default Master;
