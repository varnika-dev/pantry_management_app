import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function PantryForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name: name.trim().toLowerCase(), quantity: parseInt(quantity, 10) });
    setMessage('Items added to inventory');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    setName('');
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <TextField
        label="Item Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '16px' }}
      />
      <TextField
        label="Quantity"
        variant="outlined"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
        style={{ marginRight: '16px' }}
      />
      <Button type="submit" variant="contained" color="primary">Add Item</Button>
      {message && <div>{message}</div>}
    </form>
  );
}
