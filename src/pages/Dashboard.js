// src/pages/Dashboard.js
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';
import { usageDataAtom } from '../atoms/usageDataAtom';
import { billsAtom } from '../atoms/billsAtom';
import UsageGraph from '../components/customer/UsageGraph';
import RecentBills from '../components/customer/RecentBills';
import { Box, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Dashboard = () => {
  const [user] = useAtom(userAtom);
  const [addressId, setAddressId] = useState(user.addresses[0]?.id || '');

  // Pass addressId to child components if needed
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user.name}!
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Address</InputLabel>
        <Select
          value={addressId}
          onChange={(e) => setAddressId(e.target.value)}
          label="Address"
        >
          {user.addresses.map((address) => (
            <MenuItem key={address.id} value={address.id}>
              {`${address.street}, ${address.city}, ${address.state} ${address.zip}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <UsageGraph addressId={addressId} />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentBills addressId={addressId} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;