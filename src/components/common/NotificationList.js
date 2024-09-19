// src/components/common/NotificationList.js
import React from 'react';
import { useAtom } from 'jotai';
import { notificationAtom } from '../../atoms/notificationAtom';
import { Snackbar, Alert } from '@mui/material';

const NotificationList = () => {
  const [notifications, setNotifications] = useAtom(notificationAtom);

  const handleClose = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open
          autoHideDuration={6000}
          onClose={() => handleClose(notification.id)}
        >
          <Alert
            onClose={() => handleClose(notification.id)}
            severity={notification.type}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};

export default NotificationList;