// src/pages/SupportPage.js
import React from 'react';
import { Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const faqs = [
  {
    question: 'How do I pay my bill online?',
    answer: 'You can pay your bill online by navigating to the Billing & Payments page.',
  },
  {
    question: 'How can I report a power outage?',
    answer: 'Submit a service request through the Service Requests page or call our support line.',
  },
  // Add more FAQs as needed
];

const SupportPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Support
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <List>
            {faqs.map((faq, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText
                  primary={faq.question}
                  secondary={faq.answer}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      {/* You can add more support options like contact forms, live chat, etc. */}
    </div>
  );
};

export default SupportPage;