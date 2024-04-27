import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListitem from './components/ChatListitem';
import Chatintro from './components/Chatintro';

import { MdDonutLarge } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

export default () => {

  const [chatlist, setChatList] = useState([{},{},{},{},{},{},{},{},{},{}]);

  return(
    <div className='app-window'>
      <div className='sidebar'>
        
        <header>
          <img className='header--avatar' src='https://www.w3schools.com/w3css/img_avatar2.png'alt=''/>
          <div className='header--buttons'>
            <div className='header--btn'>
              <MdDonutLarge style={{color: '#919191'}} />
            </div>
            <div className='header--btn'>
              <MdChat style={{color: '#919191'}} />
            </div>
            <div className='header--btn'>
              <MdMoreVert style={{color: '#919191'}} />
            </div>
          </div>
        </header>
        
        <div className='search'>
          <div className='search--input'>
          <IoSearch fontSize='small' style={{color: '#919191'}}/>
          <input type='search' placeholder='Procurar ou começar uma nova conversa' />

          </div>
        </div>

        <div className='chatlist'>
          {chatlist.map((item, key)=>(
            <ChatListitem
              key={key}
            />
          ))}
        </div>

      </div>
      <div className='contentarea'>
        <Chatintro />
      </div>
    </div>
  );
}