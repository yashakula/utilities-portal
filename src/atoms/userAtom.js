// src/atoms/userAtom.js
import { atom } from 'jotai';

export const userAtom = atom({
  name: 'John Doe',
  email: 'user@example.com',
  addresses: [
    {
      id: 1,
      street: '123 Main St',
      city: 'Anytown',
      state: 'NY',
      zip: '12345',
    },
  ],
});