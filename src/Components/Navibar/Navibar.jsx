import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Tooltip } from "@mui/material";




import { createTheme, ThemeProvider } from "@mui/material/styles";

import logo from "./logoCiting.svg";




class Navibar extends Component {

    render() {

        const theme = createTheme({
            palette: {
                primary: { main: this.props.configurations.primaryColor }, // dk green
                secondary: { main: this.props.configurations.secondaryColor } // light green
            },
        });

        return (
            <ThemeProvider theme={theme}>
                <AppBar color='primary' position="static">
                     <Toolbar >
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                        <Grid item xs={5}>
                                <Typography variant="h4" component="h1" color="inherit" align='left' style={{ marginTop: '0.3em' }}  >
                                    {this.props.configurations.institutionName}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <img alt={'citing insights logo'} src={logo} />
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={1}>
                                    <Tooltip title={this.props.isAuthenticated ? this.props.user.name : null} aria-label="username">
                                        <span>
                                                    <Button
                                                        className={"NavLinkButton"}
                                                        variant={"contained"}>
                                                        Logout
                                                    </Button>

                                        </span>
                                    </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar> 
                </AppBar>
            </ThemeProvider>

        );
    }
}

export default Navibar;