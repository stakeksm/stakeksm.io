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
  return (
    <CommonLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxWidth="xl">
        <Typography variant={'h2'} align={'center'}>
          StakeKSM.io
        </Typography>
        <Typography variant={'subtitle1'} align={'center'}>
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
