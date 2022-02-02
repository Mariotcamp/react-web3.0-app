import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(1)

  useEffect(()=>{
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xE8cFCFAc39f6BFF3b700b2Ed1E575437Fcef8D10&order_direction=asc'
      )
      setpunkListData(openseaData.data.assets);
    }
    
    return getMyNfts();
  },[]);

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
        </>
      )}
    </div>
  );
}

export default App;
