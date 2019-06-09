import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
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
    
    return (
      <div className={classes.grow}>
        <AppBar position="static" style={{ backgroundColor: '#F41C1C' }}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Mini UTube
            </Typography>
            <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                  <GoogleLogin
                    clientId= "329979726216-sg2ej8obkls897g1de7e80q4vilk8fse.apps.googleusercontent.com"
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