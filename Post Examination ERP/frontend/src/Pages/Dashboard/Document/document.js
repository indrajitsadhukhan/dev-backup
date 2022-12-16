import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FileDownload } from '@mui/icons-material';
import { DataTable } from '../../../Components/DataTable/datatable';

const columns = ['Name', 'Type', 'Date Added', 'Download'];
const data = [
  ['Marksheet 2018 sem 1', 'Marksheet', '12/6/2018', 'localhost:3000'],
  ['Marksheet 2018 sem 2', 'Marksheet', '1/10/2018', 'localhost:3000'],
];

const createDownloadButton = (link) => (
  <IconButton color="primary" aria-label="Download pdf" href={link}>
    <FileDownload />
  </IconButton>
);

export default function Document() {
  // eslint-disable-next-line no-return-assign
  data.forEach((row, index) => (data[index][3] = createDownloadButton(row[3])));

  return (
    <div style={{ maxWidth: '1024px' }}>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
