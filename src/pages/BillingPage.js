// src/pages/BillingPage.js
import React from 'react';
import { useAtom } from 'jotai';
import { billsAtom } from '../atoms/billsAtom';
import { userAtom } from '../atoms/userAtom';
import {
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';

const BillingPage = () => {
  const [bills] = useAtom(billsAtom);
  const [user] = useAtom(userAtom);

  const handlePayBill = (billId) => {
    // Implement payment logic here
    alert(`Bill ${billId} has been paid (stubbed).`);
  };

  // Get addresses as a map for quick lookup
  const addressMap = user.addresses.reduce((acc, address) => {
    acc[address.id] = address;
    return acc;
  }, {});

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Billing & Payments
      </Typography>
      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell>
                    {addressMap[bill.addressId]
                      ? `${addressMap[bill.addressId].street}, ${addressMap[bill.addressId].city}`
                      : 'Unknown Address'}
                  </TableCell>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell>${bill.amount.toFixed(2)}</TableCell>
                  <TableCell>{bill.status}</TableCell>
                  <TableCell>
                    {bill.status !== 'Paid' && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handlePayBill(bill.id)}
                      >
                        Pay Now
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingPage;