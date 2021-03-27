import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  makeStyles,
  Link,
  Typography,
} from '@material-ui/core';
import { IValidator } from '../models/IValidator';

// import useSWR from 'swr'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    background: 'white',
  },
});

interface Props {
  validators: IValidator[];
}

export const ValidatorTable: React.FC<Props> = ({
  validators,
}: Props): JSX.Element => {
  const classes = useStyles();
  const align = 'center';

  return (
    <Box border={1} borderRadius={16} bgcolor={'black'}>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Validator</TableCell>
              <TableCell align={align}>
                <Typography color={'textPrimary'}>Address</Typography>
              </TableCell>
              <TableCell align={align}>
                <Typography color={'textPrimary'}>Stats</Typography>
              </TableCell>
              <TableCell align={align}>
                <Typography color={'textPrimary'}>Fee</Typography>
              </TableCell>
              <TableCell align={align}>
                <Typography color={'textPrimary'}>Self Bond</Typography>
              </TableCell>
              <TableCell align={align}>
                <Typography color={'textPrimary'}>Nominators</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {validators.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align={align}>{row.address}</TableCell>
                <TableCell align={align}>
                  <Link
                    href={`https://www.cryptolab.network/tools/validatorStatus?stash=${row.address}`}
                  >
                    <Typography color={'textPrimary'}>
                      Validator Stats
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell align={align}>{row.fee}</TableCell>
                <TableCell align={align}>{row.selfBond}</TableCell>
                <TableCell align={align}>{row.nominators}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
