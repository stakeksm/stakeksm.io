import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

export const globalAppBarHeight = 65;

const useStyles = makeStyles((theme) => ({
  root: {
    height: globalAppBarHeight,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Nav: React.FC = () => {
  const classes = useStyles();
  const buttonTextVariant = 'button';

  return (
    <>
      <AppBar className={classes.root} position={'fixed'}>
        <Toolbar>
          <img width={65} height={65} src={'/images/Kusama-ksm-logo.png'} />
          <Button color="inherit">
            <Link href="/">
              <Typography variant={buttonTextVariant}>StakeKSM.io</Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/about">
              <Typography variant={buttonTextVariant}>About Us</Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/stake">
              <Typography variant={buttonTextVariant}>
                How To Stake KSM
              </Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
