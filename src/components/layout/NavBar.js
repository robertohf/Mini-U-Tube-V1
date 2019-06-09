import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import GoogleLogin from 'react-google-login'

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }))

function NavBar() {
    const classes = useStyles();

    const responseGoogle = (response) => {
      console.log(response);
    }
    
    let refreshTime = () => {
      var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Tegucigalpa"});
      document.getElementById("time").innerHTML = dateString.replace(", ", " - ");
    }
    
    setInterval(refreshTime, 1000);

    return (
      <div className={classes.grow}>
        <AppBar position="static" style={{ backgroundColor: '#F41C1C' }}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Mini UTube
            </Typography>
            <div className="minutes-hours" style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '40%',
            }}>
              <Typography variant="h6">
              <p id="time"></p>
              </Typography>
            </div>
            <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <GoogleLogin
                  clientId= "1077692023870-5qb4ln0t1oh0qpd9q5d69gqkq8ckbspk.apps.googleusercontent.com"
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar