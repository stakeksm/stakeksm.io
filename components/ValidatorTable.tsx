import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Box } from '@material-ui/core';
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
              <TableCell align={align}>Address</TableCell>
              <TableCell align={align}>Stats</TableCell>
              <TableCell align={align}>Fee</TableCell>
              <TableCell align={align}>Self Bond</TableCell>
              <TableCell align={align}>Nominators</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {validators.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align={align}>{row.address}</TableCell>
                <TableCell align={align}>{row.statsLink}</TableCell>
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
