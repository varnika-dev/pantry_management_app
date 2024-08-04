// pages/index.js
import { useState, useEffect } from 'react';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';
import Header from '../components/Header'; // Ensure this import is correct
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '../components/Firebase'; // Update this import based on your file structure

export default function Home() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'inventory'));
    const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
  };

  const handleAddItem = async (item) => {
    await addDoc(collection(firestore, 'inventory'), { ...item });
    fetchItems();
  };

  const handleAddToInventory = async (item) => {
    const itemRef = doc(firestore, 'inventory', item.id);
    await updateDoc(itemRef, { quantity: item.quantity + 1 });
    fetchItems();
  };

  const handleRemoveFromInventory = async (item) => {
    const itemRef = doc(firestore, 'inventory', item.id);
    if (item.quantity === 1) {
      await deleteDoc(itemRef); // Remove item if quantity is zero
    } else {
      await updateDoc(itemRef, { quantity: item.quantity - 1 });
    }
    fetchItems(); // Refresh the items list
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <div style={{ marginTop: '20px' }}> {/* Adjust margin as needed */}
        <PantryForm onAddItem={handleAddItem} />
        <PantryList
          items={filteredItems}
          onAddToInventory={handleAddToInventory}
          onRemoveFromInventory={handleRemoveFromInventory}
        />
      </div>
    </div>
  );
}
