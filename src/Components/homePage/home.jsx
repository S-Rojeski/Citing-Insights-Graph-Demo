
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";



class Home extends Component {
    render() {
        return (
            <div>

                <Grid container spacing={10}>


                    <Grid item xs={4} py={25} pc={5}>
                        <Link to="/barchart">
                            <img src={require('./coursework.png')} className="images" />
                        </Link>
                    </Grid>


                    <Grid item xs={4} py={25} pc={5}>
                        <Link to="/barchart">
                            <img src={require('./userscore.png')} className="images" />
                        </Link>
                    </Grid>

                    <Grid item xs={4} py={25} pc={5}>
                        <Link to="/barchart">
                            <img src={require('./inter.png')} className="images" />
                        </Link>
                    </Grid>
                
                </Grid>


            </div>
        );
    }
}

export default Home;
