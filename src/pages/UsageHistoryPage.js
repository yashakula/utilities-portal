// src/pages/UsageHistoryPage.js
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { usageDataAtom } from '../atoms/usageDataAtom';
import { userAtom } from '../atoms/userAtom';
import { Line } from 'react-chartjs-2';
import {
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const UsageHistoryPage = () => {
  const [usageData] = useAtom(usageDataAtom);
  const [user] = useAtom(userAtom);
  const [addressId, setAddressId] = useState(user.addresses[0]?.id || '');

  const selectedUsageData = usageData.find((data) => data.addressId === addressId);

  const chartData = {
    labels: selectedUsageData ? selectedUsageData.dates : [],
    datasets: [
      {
        label: 'Utility Usage',
        data: selectedUsageData ? selectedUsageData.values : [],
        fill: false,
        borderColor: '#3f51b5',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Usage History
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
      <Card>
        <CardContent>
          {selectedUsageData ? (
            <Line data={chartData} />
          ) : (
            <Typography>No usage data available for this address.</Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UsageHistoryPage;