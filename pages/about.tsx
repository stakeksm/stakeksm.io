import React from 'react';
import Head from 'next/head';
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import Link from 'next/link';
import CommonLayout from '../components/layout';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
}));

export default function About(): JSX.Element {
  const classes = useStyles();
  return (
    <CommonLayout>
      <Head>
        <title>{'About Us'}</title>
      </Head>
      <Container maxWidth={'lg'}>
        <Box my={4} color={'white'} className={classes.box}>
          <img src={'images/Kusama1000.png'} width={500} height={200} />
          <Typography variant="body1" component="h1" gutterBottom>
            Our aim is to be a 1000 Validators nomination acceleration program.
            By nominating 16 Validators from our list you are contributing to
            further the decentralization and support the Polkadot network, as
            well as helping new validators establish a reputation
          </Typography>
        </Box>
      </Container>
    </CommonLayout>
  );
}
