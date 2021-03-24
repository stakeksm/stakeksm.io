import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { globalAppBarHeight } from './Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    height: globalAppBarHeight,
    top: 'auto',
    bottom: 0,
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} position="fixed" color="primary">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="body1" color="inherit"></Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
