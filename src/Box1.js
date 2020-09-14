import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css"
import {Doughnut} from 'react-chartjs-2';


const Box1 = () => {
    const data = {
        labels: ['active', 'recovered','deceased' ],
        datasets:[
            {
                // label: 'Sales for 2020 (M)',
                data :[900936,3398823,73953],
                backgroundColor:[ 
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
            <Doughnut data={data} />
           </div>
           

        </>
    );
};

export default Box1;
