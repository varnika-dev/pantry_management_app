// components/AddItem.js
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function AddItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleAddItem = () => {
    if (name && quantity) {
      onAddItem({ name, quantity });
      setMessage('Items added to cart');
      setName('');
      setQuantity('');
    }
  };

  return (
    <div>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddItem}
        style={{ marginTop: '10px' }}
      >
        Add Item
      </Button>
      {message && <div style={{ marginTop: '20px', color: 'green' }}>{message}</div>}
    </div>
  );
}
