import React from 'react';
import {
  Box,
  makeStyles,
  Link as ExternalLink,
  Typography,
} from '@material-ui/core';
import {
  DataGrid,
  DataGridProps,
  GridCellParams,
  GridColumns,
  GridValueFormatterParams,
} from '@material-ui/data-grid';
import { IValidator } from '../models/IValidator';
// import useSWR from 'swr'

const useStyles = makeStyles({
  table: {
    // TODO: these height and widths are HACKS, use flexbox instead
    width: 1000,
    height: 650,
    background: 'black',
    color: 'white',
    justifyContent: 'center',
    '& .MuiDataGrid-footer': {
      display: 'none',
    },
  },
});

interface Props {
  validators: IValidator[];
}

export const ValidatorTable: React.FC<Props> = ({
  validators,
}: Props): JSX.Element => {
  const classes = useStyles();
  const defaultColumnWidth = 100;
  const numberColumnWidth = defaultColumnWidth / 2;

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Validator',
      description:
        'The display name of the validator. This is either the controller or stash name, depending on how the validator operator setup their naming.',
      type: 'string',
      flex: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'address',
      headerName: 'Address',
      description: 'The Kusama stash address of the validator.',
      type: 'string',
      flex: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'statsLink',
      headerName: 'Stats',
      description: 'Stats provided by cryptolab.network',
      flex: numberColumnWidth,
      sortable: false,
      renderCell: (params: GridCellParams) => {
        const address = params.getValue('address');
        return (
          <ExternalLink
            href={`https://www.cryptolab.network/tools/validatorStatus?stash=${address}`}
          >
            <Typography color={'textSecondary'}>Validator Stats</Typography>
          </ExternalLink>
        );
      },
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'fee',
      headerName: 'Fee',
      type: 'string',
      flex: numberColumnWidth,
      description:
        'Fee formatted in percent. This is the commission charged by validators, specifically, the cut of all staking rewards the validator takes before rewards are distributed.',
      valueFormatter: (params: GridValueFormatterParams) =>
        `${(params.getValue('fee') as number).toFixed(2)}%`,
      sortComparator: (v1, v2, _1, _2) => {
        return (v1 as number) - (v2 as number);
      },
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'selfBond',
      headerName: 'Self Bond',
      type: 'number',
      description: 'The amount of self-stake from the validator operator',
      flex: numberColumnWidth,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'nominators',
      headerName: 'Nominator count',
      type: 'number',
      description:
        'The number of nominators nominating this validator as a stake provider',
      flex: numberColumnWidth,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  // id field is required for datagrid
  const validatorsWithId = validators.map((validator, index, _) => {
    return {
      id: index,
      ...validator,
    };
  });

  const dataGridProps: DataGridProps = {
    columns: columns,
    rows: validatorsWithId,
    disableSelectionOnClick: true,
  };

  return (
    <Box
      display={'flex'}
      border={1}
      borderRadius={30}
      bgcolor={'black'}
      // height and width need to be corrected, this is set just to debug the  datagrid
    >
      <DataGrid className={classes.table} {...dataGridProps} />
    </Box>
  );
};
