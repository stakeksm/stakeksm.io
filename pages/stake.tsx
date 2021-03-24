import CommonLayout from '../components/layout';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Link } from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Link as ExternalLink,
} from '@material-ui/core';

export default function Stake() {
  return (
    <CommonLayout>
      <Head>
        <title>{'How to stake KSM'}</title>
      </Head>
      <Container maxWidth="md">
        <Box
          my={4}
          color={'white'}
          bgcolor={'black'}
          minWidth={'100%'}
          minHeight={'50%'}
        >
          <Typography variant={'h3'} align={'center'}>
            How To Stake KSM
          </Typography>
          <ol>
            <li>
              <Typography variant={'body1'} color={'secondary'}>
                {`
                Create a Kusama account if you don’t have one already. Please
                note it is recommended to create two accounts: one to use as the
                controller account and one to use as your stash account. Learn
                more about this here Also, make sure you leave a small amount of
                KSM transferrable in both accounts. Do not bond your total
                amount from your stash, and also send a small amount of KSM to
                your controller account. This is in order to have enough liquid
                funds for paying transaction fees when bonding and un-bonding
                funds.`}
              </Typography>
            </li>
            <li>
              {' '}
              <Typography variant={'body1'} color={'secondary'}>
                {`Go to the`}
              </Typography>
              <a href="https://polkadot.js.org/apps/#/explorer">
                <Typography variant={'body1'} color={'secondary'}>
                  {'Polkadot.js main page'}
                </Typography>
              </a>
            </li>
          </ol>
        </Box>
      </Container>
    </CommonLayout>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params.id as string);
//   return {
//     props: {
//       postData,
//     },
//   };
// };
