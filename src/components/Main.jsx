import React from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './main.css'
import PunkList from './PunkList';
import { useState, useEffect } from 'react';

const Main = ({selectedPunk, punkListData}) => {

  const [activePunk, setActivePunk] = useState(punkListData[0])

  useEffect(()=>{
    setActivePunk(punkListData[selectedPunk])
  },[punkListData, selectedPunk])

  return (
    <div className='main'>
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt=""></img>
          </div>
        </div>
        <div className="punkInfo">
          <div className="punkDetails" style={{color: 'white'}}>
            <div className="title">{activePunk.name}</div>
            <div className="itemNumber">・#{activePunk.token_id}</div>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url}></img>
            </div>
            <div className="ownerInfoAndShareIcon">
              <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                  <div style={{color: 'white'}}>{activePunk.owner.address}</div>
                  {console.log(activePunk.owner)}
                  <div className='ownerHandle'>@{activePunk.owner.user.username}</div>
                </div>
              </div>
              <div className="socialShareIcon">
                <div className="ownerLink">
                  <img src={instagramLogo} alt=""></img>
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt=""></img>
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
