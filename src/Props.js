import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css"





const Props = (props) => {


    return (
        <>

            {/* <div className="box2flex2">
                <div className="box3">
                    <p>{props.state}</p>
                </div>
                <div className="box3">
                    <p>{props.confirmed}</p>
                </div>
                <div className="box3">
                    <p>{props.active}</p>
                </div>
                <div className="box3">
                    <p>{props.recovered}</p>
                </div>
                <div className="box3">
                    <p>{ props.deceased}</p>
                </div>
            </div> */}
            {/* <table>
                <tr>
                    <td>{props.state}</td>
                    <td> {props.confirmed}</td>
                    <td>{props.active}</td>
                    <td >  {props.recovered}</td>
                    <td> {props.deceased}</td>
                </tr>
            </table> */}
                      <tr>
                        <th scope="row">{props.state}</th>
                        <td>{props.confirmed}</td>
                        <td>{props.active}</td>
                        <td> {props.recovered}</td>
                        <td> {props.deceased}</td>
                    </tr>

        </>
    );
};

export default Props;
