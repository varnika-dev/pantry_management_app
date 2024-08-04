import { Card, CardContent, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';

const imageMap = {
  'chicken breasts': '/images/chicken-breasts-boneless.jpeg',
  'eggs': '/images/eggs.jpeg',
  'milk': '/images/milk.jpeg',
  'roma tomatoes': '/images/roma tomatoes.jpeg',
  'red onions': '/images/red onions.jpeg',
  'spinach': '/images/spinach.jpeg',
  'mixed veggies': '/images/mixed veggies.jpg',
  'potatoes': '/images/potatoes.jpeg',
  'lady finger':'/images/lady finger.jpeg',
  'bud light':'/images/bud light.jpeg',
  'whiskey':'/images/whiskey.webp',
  'absolut vodka':'/images/absolut vodka.webp',
};

export default function PantryList({ items, onAddToInventory, onRemoveFromInventory }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px' }}>
      {items.map(item => (
        <Card key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
          <div style={{ width: '100px', height: '100px', position: 'relative' }}>
            <Image src={imageMap[item.name.toLowerCase()] || '/images/milk.jpeg'} alt={item.name} layout="fill" objectFit="cover" />
          </div>
          <CardContent>
            <Typography variant="h6" style={{ marginBottom: '8px' }}>{item.name}</Typography>
            <Typography variant="body1" style={{ marginBottom: '8px' }}>Quantity: {item.quantity}</Typography>
            <div style={{ display: 'flex', gap: '8px' }}>
              <IconButton onClick={() => onAddToInventory(item)}><AddIcon /></IconButton>
              <IconButton onClick={() => onRemoveFromInventory(item)}><DeleteIcon /></IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
