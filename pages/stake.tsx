import CommonLayout from '../components/layout';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  Box,
  Container,
  Typography,
  Button,
  Link as ExternalLink,
  withStyles,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundImage: 'url(/images/kusama-print-1.png)',
    backgroundAttachment: 'fixed',
    height: '100%',
    width: '100%',
  },
});

export default function Stake() {
  const LinkTypography = withStyles({
    root: {
      color: 'blue',
    },
  })(Typography);

  const classes = useStyles();

  return (
    <CommonLayout>
      <Head>
        <title>{'How to stake KSM'}</title>
      </Head>
      <Box className={classes.container}>
        <Container maxWidth="md">
          <Box
            my={4}
            color={'white'}
            bgcolor={'black'}
            minWidth={'100%'}
            minHeight={'50%'}
            padding={2}
          >
            <Typography variant={'h3'} align={'center'}>
              How To Stake KSM
            </Typography>
            <ol>
              <li>
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  paragraph={true}
                >
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
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  display={'inline'}
                >
                  {`Go to the `}
                </Typography>
                <ExternalLink href="https://polkadot.js.org/apps/#/explorer">
                  <LinkTypography
                    variant={'body1'}
                    color={'secondary'}
                    display={'inline'}
                  >
                    {`Polkadot.js main page`}
                  </LinkTypography>
                </ExternalLink>
              </li>
              <li>
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  display={'inline'}
                >
                  {`Click the Staking link in the `}
                </Typography>
                <ExternalLink href="https://polkadot.js.org/apps/#/staking">
                  <LinkTypography
                    variant={'body1'}
                    color={'secondary'}
                    display={'inline'}
                  >
                    {`Network tab above`}
                  </LinkTypography>
                </ExternalLink>
              </li>
              <li>
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  display={'inline'}
                >
                  {`Click the “+ Nominator button” (top right). If you use a Ledger, please use `}
                </Typography>
                <ExternalLink href="https://polkadot.js.org/apps/#/staking">
                  <LinkTypography
                    variant={'body1'}
                    color={'secondary'}
                    display={'inline'}
                  >
                    {`this workaround.`}
                  </LinkTypography>
                </ExternalLink>
              </li>
              <li>
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  paragraph={true}
                >
                  {`By default, Polkadot.js will try to auto-select a good subset of validators for you. It does this by estimating what your profits will be in terms of additional tokens that will be given to you as staking rewards. 
                  To choose this option, click “Bond and Nominate” 
                  If you want to choose your own validators, turn the “automatic selection” button off, set up your validator list manually, and click “Bond and Nominate” when you have made your selection.
                `}
                </Typography>
              </li>
              <li>
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  paragraph={true}
                >
                  {`Enter the password for your account.`}
                </Typography>
              </li>
              <li>
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  paragraph={true}
                >
                  {`Sign & submit.`}
                </Typography>
              </li>
            </ol>
            <Box paddingLeft={4}>
              <Typography
                variant={'body1'}
                color={'secondary'}
                paragraph={true}
              >
                {`That’s it! You will begin earning rewards in the era after the next one. Which is after approximately 6 hours.`}
              </Typography>
              <Typography
                variant={'body1'}
                color={'secondary'}
                paragraph={true}
                display={'inline'}
              >
                {`IMPORTANT: Make sure that you have at least 0.001666666667 KSM in the account that you are directing your staking rewards to. If you receive rewards of less than 0.001666666667 KSM and they are sent to an empty account, you will lose them. This has to do with the`}
              </Typography>
              <ExternalLink href="https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-">
                <LinkTypography
                  variant={'body1'}
                  color={'secondary'}
                  display={'inline'}
                >
                  {` existential deposit`}
                </LinkTypography>
              </ExternalLink>
              <Typography
                variant={'body1'}
                color={'secondary'}
                display={'inline'}
              >
                {` on Kusama.`}
              </Typography>
              <Box>
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  display={'inline'}
                >
                  {`** Adapted from the Polkadot guide located`}
                </Typography>
                <ExternalLink href="https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-">
                  <LinkTypography
                    variant={'body1'}
                    color={'secondary'}
                    display={'inline'}
                  >
                    {` here.`}
                  </LinkTypography>
                </ExternalLink>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </CommonLayout>
  );
}
