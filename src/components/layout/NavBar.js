import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SearchBar from '../dashboard/SearchBar'

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
    
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Mini UTube
            </Typography>
              <SearchBar onSearchTermChange={ (searchTerm) => this.videoSearch(searchTerm) }/>
            </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar