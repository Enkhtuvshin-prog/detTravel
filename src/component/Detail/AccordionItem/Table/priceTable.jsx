import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, from, to, price) {
  return { name, from, to, price };
}

const rows = [
  createData('', "01-06-2023", "31-12-2023", "$300 per night"),
  createData('',"01-06-2023", "31-12-2023", "$300 per night"),
  createData('', "01-06-2023", "31-12-2023", "$300 per night"),
  createData('', "01-06-2023"," 31-12-2023", "$4000 per night"),
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontWeight: "600" }}>
          <TableRow>
            <TableCell>Package</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.from}</TableCell>
              <TableCell align="right">{row.to}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}