// src/pages/ServiceRequestsPage.js
import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useAtom } from 'jotai';
import { serviceRequestsAtom } from '../atoms/serviceRequestsAtom';
import { userAtom } from '../atoms/userAtom';

const ServiceRequestsPage = () => {
  const [serviceRequests, setServiceRequests] = useAtom(serviceRequestsAtom);
  const [user] = useAtom(userAtom);
  const [description, setDescription] = useState('');
  const [addressId, setAddressId] = useState(user.addresses[0]?.id || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      description,
      status: 'Open',
      date: new Date().toLocaleDateString(),
      addressId,
    };
    setServiceRequests((prev) => [...prev, newRequest]);
    setDescription('');
  };

  // Get addresses as a map for quick lookup
  const addressMap = user.addresses.reduce((acc, address) => {
    acc[address.id] = address;
    return acc;
  }, {});

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Service Requests
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Submit a New Request
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal" required>
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
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Your Service Requests
          </Typography>
          <List>
            {serviceRequests.map((request) => (
              <ListItem key={request.id}>
                <ListItemText
                  primary={request.description}
                  secondary={`Address: ${
                    addressMap[request.addressId]
                      ? `${addressMap[request.addressId].street}, ${addressMap[request.addressId].city}`
                      : 'Unknown Address'
                  } | Status: ${request.status} | Date: ${request.date}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceRequestsPage;