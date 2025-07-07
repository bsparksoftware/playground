// src/pages/UsernameFrame.jsx
import React from 'react';

const UsernameFrame = () => {
  return (
    <iframe
      src="/username-input"
      id = "bst_frame3"
      name='frame3'
      title="Username Input"
      width="100%"
      height="300"
      style={{ border: '1px solid #ccc', borderRadius: '8px' }}
    >
      Your browser does not support iframes.
    </iframe>
  );
};

export default UsernameFrame;
