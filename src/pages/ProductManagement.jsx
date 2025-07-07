import React, { useEffect, useState } from 'react';
import styles from '../styles/ProductManagement.module.css';
import { FaPlusCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';

const API_BASE_URL = 'https://api.bsparksoftwaretechnologies.com/api/products';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product_id: '', name: '', description: '', price: '', color: 'Red', active: false, stock: 'Yes'
  });
  const [editingId, setEditingId] = useState(null);
  const [viewMode, setViewMode] = useState('view');

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_BASE_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = editingId ? `${API_BASE_URL}/${editingId}` : API_BASE_URL;
    const method = editingId ? 'PUT' : 'POST';
    const res = await fetch(url, {
      method, headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      fetchProducts();
      setFormData({ product_id: '', name: '', description: '', price: '', color: 'Red', active: false, stock: 'Yes' });
      setEditingId(null);
      setViewMode('view');
    }
  };

  const handleEdit = product => {
    setFormData(product);
    setEditingId(product.id);
    setViewMode('add');
  };

  const handleDelete = async id => {
    if (!window.confirm('Are you sure?')) return;
    await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  return (
    <div className={styles.fullPageLayout}>
      <aside className={styles.sidebar}>
        <button className={viewMode === 'add' ? styles.activeTab : ''} onClick={() => { setViewMode('add'); setEditingId(null); }}>
          <FaPlusCircle /> Add Product
        </button>
        <button className={viewMode === 'view' ? styles.activeTab : ''} onClick={() => setViewMode('view')}>
          View Products
        </button>
      </aside>

      <main className={styles.mainContent}>
        <h2 className={styles.heading}>🛒 Product Management</h2>

        {viewMode === 'add' && (
          <div className={styles.modalOverlay} onClick={() => setViewMode('view')}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <h3>{editingId ? 'Edit Product' : 'Add Product'}</h3>
<form onSubmit={handleSubmit} className={styles.form}>
  <div className={styles.formGroup}>
    <label htmlFor="product_id">Product ID</label>
    <input id="product_id" name="product_id" value={formData.product_id} onChange={handleChange} required />
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="name">Product Name</label>
    <input id="name" name="name" value={formData.name} onChange={handleChange} required />
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="description">Description</label>
    <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="price">Price</label>
    <input id="price" name="price" type="number" value={formData.price} onChange={handleChange} required />
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="color">Color</label>
    <select id="color" name="color" value={formData.color} onChange={handleChange}>
      <option>Red</option>
      <option>Blue</option>
      <option>Green</option>
      <option>Yellow</option>
    </select>
  </div>

  <div className={styles.formGrouplabel}>
    <label> Active </label>
      <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} />
  </div>

  <div className={styles.formGrouplabel}>
    <label>In Stock</label>
    <input type="radio" name="stock" value="Yes" checked={formData.stock === 'Yes'} onChange={handleChange} />
  </div>  
  <div className={styles.formGrouplabel}>
    <label>Outof Stock    </label>
      <input type="radio" name="stock" value="No" checked={formData.stock === 'No'} onChange={handleChange} />
    
  </div>

  <button type="submit" className={styles.submitButton}>Save</button>
</form>

            </div>
          </div>
        )}

        {viewMode === 'view' && (
          <>
            <h3 className={styles.subHeading}>Available Products</h3>
            <div className={styles.productGrid}>
              {products.map(p => (
                <div key={p.id} className={styles.productTile}>
                  <div className={styles.imagePlaceholder}>🛍️</div>
                  <div className={styles.details}>
                    <h4>{p.name}</h4>
                    <p className={styles.desc}>{p.description || 'No description available.'}</p>
                    <p className={styles.price}>₹{p.price}</p>
                    <p className={styles.meta}>
                      <strong>Color:</strong> {p.color} | <strong>Stock:</strong> {p.stock} | <strong>Active:</strong> {p.active ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div className={styles.tileActions}>
                    <button onClick={() => handleEdit(p)} title="Edit"><FaEdit /></button>
                    <button onClick={() => handleDelete(p.id)} title="Delete"><FaTrashAlt /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ProductManagement;
