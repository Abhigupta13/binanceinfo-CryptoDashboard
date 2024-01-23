const axios = require('axios');
const router = require('express').Router();
const Crypto = require('./model');
const mongoose = require('mongoose');
const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

// Fecth data from api
// async function fetchAndStoreData() {
//     try {
//       const response = await axios.get(apiUrl);
//       const cryptoData = Object.values(response.data);

//       const top10Data = cryptoData.slice(0, 10);
  
//       await Crypto.deleteMany({}); 
  
//       for (const crypto of top10Data) {
//         const {
//           name,
//           last,
//           buy,
//           sell,
//           volume,
//           base_unit,
        
//         } = crypto;
  
//         const cryptoData = {
//           name,
//           last,
//           buy,
//           sell,
//           volume,
//           base_unit,
//         };
  
//         const newCrypto = new Crypto(cryptoData);
//         await newCrypto.save();
//       }
  
//       console.log('Data saved successfully.');
//     } catch (error) {
//       console.error('Error fetching and storing data:', error);
//       res.status(500).json({ error: 'Error fetching and storing data' });
//     } finally {
//     //   mongoose.connection.close();
//     }
//   }
  
//   fetchAndStoreData();

router.get('/data', async (req, res) => {
    try {
      const cryptoData = await Crypto.find({}, '-_id -__v');
      res.json(cryptoData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
 

module.exports = router;