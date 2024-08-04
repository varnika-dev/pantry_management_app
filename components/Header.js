// components/Header.js
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header({ search, setSearch }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
       <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Varnika&apos;s Pantry Tracker</h1>


      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search items..."
          variant="outlined"
          size="small"
          style={{ width: '300px' }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </div>
    </div>
  );
}
