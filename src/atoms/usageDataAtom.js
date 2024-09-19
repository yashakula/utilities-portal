// src/atoms/usageDataAtom.js
import { atom } from 'jotai';

export const usageDataAtom = atom([
  {
    addressId: 1,
    dates: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    values: [120, 130, 125, 140, 135, 145, 150, 155, 160, 150, 145, 140],
  },
  {
    addressId: 2,
    dates: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    values: [100, 110, 105, 120, 115, 125, 130, 135, 140, 130, 125, 120],
  },
]);