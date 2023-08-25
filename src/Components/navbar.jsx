import React from "react";
import { Button, Grid } from '@mui/material'
import './Style.css'
import { Link } from "react-router-dom";
export default function navbar() {
    return (
        <React.Fragment>
            <Grid container className="navbar">
                <Grid item sm={4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/'>
                        <Button style={{ letterSpacing: "3px", color: "white", fontFamily: "monospace", fontSize: "150%" }}>
                            Home
                        </Button>
                    </Link>
                </Grid>
                <Grid item sm={6}>
                </Grid>
                <Grid item sm={2}>
                    <Link to='/oldpass'>
                        <Button style={{ color: "white", letterSpacing: "3px", wordSpacing: "3px", fontFamily: "monospace", fontSize: "150%" }}>
                            Old Passwords
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}