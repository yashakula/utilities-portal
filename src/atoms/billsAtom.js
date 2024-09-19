// src/atoms/billsAtom.js
import { atom } from 'jotai';

export const billsAtom = atom([
  {
    id: 1,
    date: '2023-06-01',
    amount: 75.0,
    status: 'Paid',
    addressId: 1,
  },
  {
    id: 2,
    date: '2023-07-01',
    amount: 80.0,
    status: 'Due',
    addressId: 2,
  },
  // Add more bills associated with different addresses
]);