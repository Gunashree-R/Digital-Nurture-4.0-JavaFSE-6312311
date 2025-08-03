import React from 'react';
import Office from './office';

function App() {
  const officeList = [
    {
      name: "Green Tower",
      rent: 75000,
      address: "MG Road, Bangalore",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Skyline Plaza",
      rent: 45000,
      address: "Electronic City, Bangalore",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Metro Hub",
      rent: 60000,
      address: "Whitefield, Bangalore",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80"

    },
    {
      name: "Skyline Heights",
      rent: 55000,
      address: "Koramangala, Bangalore",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Debug: make sure the array length is correct
  console.log('Number of offices to render:', officeList.length);

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    background: '#f5f5f7',
    minHeight: '100vh',
    boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      <h1>Office Space Rental App</h1>
      {officeList.map((o, i) => (
        <Office
          key={i}
          name={o.name}
          rent={o.rent}
          address={o.address}
          image={o.image}
        />
      ))}
    </div>
  );
}

export default App;
