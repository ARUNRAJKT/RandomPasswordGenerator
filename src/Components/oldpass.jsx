import React from "react";
import { Grid } from '@mui/material'
import './Style.css'
export default function oldpass() {
    const oldPasswords = JSON.parse(localStorage.getItem('Passwords')) || [];
    return (
        <React.Fragment><center><br /><br /><br />
            <div style={{ marginLeft: "6%" }}>
                <Grid container >
                    {oldPasswords.map((item, index) => (
                        <Grid item xs={2} className="oldpass" key={index} style={{
                            borderRadius: "10px",
                            fontSize: "20px",
                            fontFamily: "cursive",
                            height: "35px",
                            background: "linear-gradient(180deg, rgba(150,14,140,1) 32%, rgba(19,4,87,1) 100%)",
                            color: "white",
                            margin: "1%"
                        }}>
                            {item}
                        </Grid>
                    ))}
                </Grid></div>
        </center>
        </React.Fragment>
    )
}