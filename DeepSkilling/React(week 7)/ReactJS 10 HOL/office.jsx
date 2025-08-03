// Office.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Office = ({ name, rent, address, image }) => {
  const rentStyle = {
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold',
    margin: '4px 0'
  };

  const containerStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    marginBottom: '20px',
    fontFamily: 'Segoe UI, Arial, sans-serif',
    background: '#fff',
    boxSizing: 'border-box'
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '6px',
    objectFit: 'cover',
    display: 'block',
    marginBottom: '8px'
  };

  const handleImageError = (e) => {
    e.currentTarget.src = 'https://source.unsplash.com/400x200/?office';
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: '6px 0' }}>{name}</h3>
      <img
        src={image}
        alt={name}
        style={imgStyle}
        onError={handleImageError}
      />
      <p style={rentStyle}>Rent: ₹{rent}</p>
      <p style={{ margin: '4px 0' }}>Address: {address}</p>
    </div>
  );
};

Office.propTypes = {
  name: PropTypes.string.isRequired,
  rent: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string
};

Office.defaultProps = {
  image: 'https://source.unsplash.com/400x200/?workspace'
};

export default Office;
