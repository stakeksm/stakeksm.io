import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { globalAppBarHeight, Nav } from './Nav';
import {
  BottomNavigation,
  Box,
  Container,
  makeStyles,
  Paper,
} from '@material-ui/core';
import Copyright from '../components/Copyright';
import { Footer } from './Footer';

const name = 'StakeKSM';
export const siteTitle = 'StakeKSM.io';

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backToHome: {
    margin: '3rem 0 0',
  },
  main: {
    position: 'relative',
    top: globalAppBarHeight,
    height: `calc(100vh - ${2 * globalAppBarHeight}px);`,
    width: '100%',
  },
}));

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const classes = useStyles();

  return (
    <Box>
      <Head>
        <link rel="icon" href="/images/kusama-ksm-logo.png" />
        <meta
          name="description"
          content="StakeKSM.io: The Kusama community's validators"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />
      <Box className={`${classes.main}`} display="flex">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
