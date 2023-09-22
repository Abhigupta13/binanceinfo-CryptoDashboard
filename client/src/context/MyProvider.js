// MyProvider.js
import React, { useState } from 'react';
import MyContext from './myContext';

const MyProvider = ({ children }) => {
  const [asset, setAsset] = useState('BTC');

  return (
    <MyContext.Provider value={{ asset, setAsset }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
