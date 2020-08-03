/**
 *
 * Search
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon,
  },
  searchInput: {
    flexGrow: 1,
  },
  searchButton: {
    marginLeft: theme.spacing(2),
  },
}));
function Search(props) {
  const { search, setSearch, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.search} elevation={1}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Paper>
    </div>
  );
}

Search.propTypes = {};

export default Search;
