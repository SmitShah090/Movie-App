import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MovieCreation, Search, Tv, Whatshot } from '@material-ui/icons';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100
  },
  icon: {
      color: 'white'
  }
});

const MainNav =() => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const history = useHistory()

  useEffect(() => {
    if(value === 0)  history.push("/")
    else if(value === 1) history.push("/movies")
    else if(value === 2) history.push("/series")
    else if(value === 3) history.push("/search")
  }, [value,history])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction className={classes.icon} label="Trending" value={0} icon={<Whatshot />} />
      <BottomNavigationAction className={classes.icon} label="Movies" value={1} icon={<MovieCreation />} />
      <BottomNavigationAction className={classes.icon} label="TV Series" value={2} icon={<Tv />} />
      <BottomNavigationAction className={classes.icon} label="Search" value={3} icon={<Search />} />
    </BottomNavigation>
  );
}

export default MainNav