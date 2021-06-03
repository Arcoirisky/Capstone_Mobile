/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

export const kpiSlice = createSlice({
  name: 'kpi',
  initialState: {
    // Need endpoint for kpi and service indicators.
    storeKpis: [
      {
        id: 1,
        name: 'Venta total',
        value: 1000000,
        created_at: '1621547176',
      },
      {
        id: 2,
        name: 'Venta total',
        value: 1005000,
        created_at: '1621633576',
      },
      {
        id: 3,
        name: 'Venta total',
        value: 1100000,
        created_at: '1621723576',
      },
      {
        id: 4,
        name: 'Venta total',
        value: 909000,
        created_at: '1621809976',
      },
      {
        id: 5,
        name: 'Venta neta',
        value: 500000,
        created_at: '1621547176',
      },
      {
        id: 6,
        name: 'Venta neta',
        value: 550000,
        created_at: '1621633576',
      },
      {
        id: 7,
        name: 'Venta neta',
        value: 400000,
        created_at: '1621723576',
      },
      {
        id: 8,
        name: 'Venta neta',
        value: 600000,
        created_at: '1621809976',
      },
      {
        id: 9,
        name: 'Margen',
        value: 500000,
        created_at: '1621547176',
      },
      {
        id: 10,
        name: 'Margen',
        value: 455000,
        created_at: '1621633576',
      },
      {
        id: 11,
        name: 'Margen',
        value: 700000,
        created_at: '1621723576',
      },
      {
        id: 12,
        name: 'Margen',
        value: 700000,
        created_at: '1621809976',
      },
    ],
  },
  reducers: {},
});

export default kpiSlice.reducer;