import React from 'react';
import PropTypes from 'prop-types';
import { Cursor } from 'mongoose';
import { Link } from 'react-router-dom';

function ProductCard({Cid, imageSrc, title, oldPrice, newPrice, discount }) {
  return (
    <div style={styles.card}>
      {discount && (
        <span style={styles.discountBadge}>{discount}% OFF</span>
      )}
      <Link to={`/productInterface/${Cid}`}>
      <img src={imageSrc} alt={title} style={styles.image} />
      </Link>
      <div style={styles.info}>
        <h5>{title}</h5>
        <p>
          {
            discount && (
              <span style={styles.oldPrice}>${oldPrice}</span>
            )
          }
          
          <span style={styles.newPrice}>${newPrice}</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    position: 'relative',
    textAlign: 'center',
    height:'67vh',
    width:"50vh",
    paddingRight:'3vh',
    cursor:'pointer',
  },
  discountBadge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'red',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
  },
  image: {
    width: '100%',
    height: '55vh',
    
  },
  info: {
    
  },
  oldPrice: {
    textDecoration: 'line-through',
    color: '#888',
  },
  newPrice: {
    color: 'red',
  },
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
  discount: PropTypes.number,
};

export default ProductCard;
