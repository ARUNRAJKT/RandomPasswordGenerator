import React from "react";
import Navbar from '../Components/navbar';
import Passgenerator from '../Components/passgenerator'
export default function mainpage(){
    return(
        <React.Fragment>
            <Navbar/>
            <Passgenerator/>
        </React.Fragment>
    )
}