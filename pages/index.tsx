import Head from 'next/head';
import CommonLayout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Container, Box, Typography, Button, Table } from '@material-ui/core';
import React from 'react';
import { ValidatorTable } from '../components/ValidatorTable';
import { validatorAddressList } from '../models/ValidatorAddressList';
import { fetchValidators } from '../fetchClient/client';
import { IValidator } from '../models/IValidator';

interface Props {
  validators: IValidator[];
}

const Home: React.FC<Props> = ({
  validators,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  // I'm ripping this as is from wordpress cause its awesome
  const stakeksmTitleFromWordpress: React.CSSProperties = {
    color: 'white',
    fontFamily: 'Open Sans, Sans-serif',
    fontSize: '90px',
    textTransform: 'uppercase',
    textShadow:
      ' 0 0 20px #fff, 0 0 10px #fff, 0 0 50px #ff0fad, 0 0 50px #ff0fad, 0 0 40px #ff0fad, 0 0 100px #ff0fad, 0 0 75px #ff0fad',
    lineHeight: '1.2em',
  };

  return (
    <CommonLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxWidth="xl">
        <Typography align={'center'} style={stakeksmTitleFromWordpress}>
          StakeKSM.io
        </Typography>
        <Typography variant={'h6'} align={'center'}>
          1000 Validator Accelerator
        </Typography>
        <Box my={4}>
          <ValidatorTable validators={validators} />
        </Box>
      </Container>
    </CommonLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const validators: IValidator[] = await fetchValidators(
      validatorAddressList
    );
    return {
      props: {
        validators: validators,
      },
    };
  } catch (e) {
    console.log(e);
  }
};

export default Home;
