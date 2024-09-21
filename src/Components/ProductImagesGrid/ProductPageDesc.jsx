import React, { useState } from 'react';

const ProductPage = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('Small');
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (selectedColor) => setColor(selectedColor);
  const handleSizeChange = (event) => setSize(event.target.value);
  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) setQuantity(quantity + amount);
  };

  return (
    <div style={styles.container}>
      <h1>Sweatshirt</h1>
      <p style={styles.oldPrice}>$85.00</p>
      <p style={styles.newPrice}>$51.00</p>
      <p style={styles.desc}>I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
      
      <div>
        <p style={styles.head_stmt}><strong>Color</strong></p>
        <div style={styles.colors}>
          <span 
            style={{ ...styles.colorBox, backgroundColor: 'yellow' }} 
            onClick={() => handleColorChange('yellow')}
          />
          <span 
            style={{ ...styles.colorBox, backgroundColor: 'pink' }} 
            onClick={() => handleColorChange('pink')}
          />
          <span 
            style={{ ...styles.colorBox, backgroundColor: 'purple' }} 
            onClick={() => handleColorChange('purple')}
          />
          <span 
            style={{ ...styles.colorBox, backgroundColor: 'black' }} 
            onClick={() => handleColorChange('black')}
          />
        </div>
      </div>

      <div style={styles.sizeContainer}>
        <p style={styles.head_stmt}><strong>Size:</strong> {size}</p>
        <select value={size} onChange={handleSizeChange} style={styles.selectBox}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
        </select>
      </div>

      <div style={styles.quantityContainer}>
        <p style={styles.head_stmt}><strong>Quantity</strong></p>
        <button onClick={() => handleQuantityChange(-1)} style={styles.quantityButton}>-</button>
        <span style={styles.quantity}>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)} style={styles.quantityButton}>+</button>
      </div>

      <button style={styles.addToCartButton}>Add to Cart</button>
      <button style={styles.buyNowButton}>Buy Now</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '35vw',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  oldPrice: {
    textDecoration: 'line-through',
    color: 'gray',
    fontSize:'3vh'
  },
  newPrice: {
    color: 'red',
    fontSize: '24px',
  },
  desc:{ 
           fontSize:'2vh'
  },
  head_stmt:{
        fontSize:'3.5vh'
  },
  colors: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '150px',
    marginBottom: '10px',
  },
  colorBox: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  sizeContainer: {
    marginBottom: '20px',
  },
  selectBox: {
    padding: '5px',
    width: '100%',
    fontSize: '18px',
    marginBottom: '10px',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  quantityButton: {
    padding: '1vh 2vh',
    fontSize: '2vh',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  quantity: {
    margin: '0 10px',
    fontSize: '18px',
  },
  addToCartButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  buyNowButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ProductPage;
