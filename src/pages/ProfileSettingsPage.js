// src/pages/ProfileSettingsPage.js
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const ProfileSettingsPage = () => {
  const [user, setUser] = useAtom(userAtom);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');

  // Address management state
  const [open, setOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    id: null,
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Update user information
    setUser((prev) => ({ ...prev, name, email }));
    alert('Profile updated (stubbed).');
  };

  // Address dialog handlers
  const handleOpenDialog = () => {
    setIsEditing(false);
    setCurrentAddress({ id: null, street: '', city: '', state: '', zip: '' });
    setOpen(true);
  };

  const handleEditAddress = (address) => {
    setIsEditing(true);
    setCurrentAddress(address);
    setOpen(true);
  };

  const handleDeleteAddress = (id) => {
    setUser((prev) => ({
      ...prev,
      addresses: prev.addresses.filter((address) => address.id !== id),
    }));
  };

  const handleAddressSubmit = () => {
    if (isEditing) {
      // Update existing address
      setUser((prev) => ({
        ...prev,
        addresses: prev.addresses.map((address) =>
          address.id === currentAddress.id ? currentAddress : address
        ),
      }));
    } else {
      // Add new address
      setUser((prev) => ({
        ...prev,
        addresses: [
          ...prev.addresses,
          { ...currentAddress, id: Date.now() },
        ],
      }));
    }
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Profile Settings
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <form onSubmit={handleProfileSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* You can add more fields like password change, etc. */}
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom>
        Addresses
      </Typography>
      <Card>
        <CardContent>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenDialog}
            sx={{ mb: 2 }}
          >
            Add Address
          </Button>
          <List>
            {user.addresses.map((address) => (
              <ListItem
                key={address.id}
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEditAddress(address)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteAddress(address.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText
                  primary={`${address.street}, ${address.city}, ${address.state} ${address.zip}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Address Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{isEditing ? 'Edit Address' : 'Add Address'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Street"
            fullWidth
            margin="normal"
            value={currentAddress.street}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, street: e.target.value })
            }
            required
          />
          <TextField
            label="City"
            fullWidth
            margin="normal"
            value={currentAddress.city}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, city: e.target.value })
            }
            required
          />
          <TextField
            label="State"
            fullWidth
            margin="normal"
            value={currentAddress.state}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, state: e.target.value })
            }
            required
          />
          <TextField
            label="ZIP Code"
            fullWidth
            margin="normal"
            value={currentAddress.zip}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, zip: e.target.value })
            }
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddressSubmit}>
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileSettingsPage;