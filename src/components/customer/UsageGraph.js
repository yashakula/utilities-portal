// src/components/customer/UsageGraph.js
import React from 'react';
import { useAtom } from 'jotai';
import { usageDataAtom } from '../../atoms/usageDataAtom';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import "chart.js/auto";

const UsageGraph = ({ addressId }) => {
  const [usageData] = useAtom(usageDataAtom);

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
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Usage Over Time
        </Typography>
        {selectedUsageData ? (
          <Line data={chartData} />
        ) : (
          <Typography>No usage data available for this address.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UsageGraph;