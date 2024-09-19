// src/atoms/serviceRequestsAtom.js
import { atom } from 'jotai';

export const serviceRequestsAtom = atom([
  {
    id: 1,
    description: 'Power outage at my main residence.',
    status: 'Closed',
    date: '2023-08-15',
    addressId: 1,
  },
  {
    id: 2,
    description: 'Meter malfunction at my secondary property.',
    status: 'Open',
    date: '2023-09-05',
    addressId: 2,
  },
]);