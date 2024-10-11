import logo from '../images/proa.webp';
import './ConteudoLateral.css';
import ListItem from './Listitem.js';

import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCompass } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";



export default function ConteudoLateral() {
  return (
    <div className='ConteudoLateral'>

      <a href='/' className='Logotype'>
        <img src={logo} className='Logo' alt='Logo' />
        <span className='Instragam'>PROAGRAM</span>
      </a>
       

      <div>
        <ul className='NavagationButtons'>
          <ListItem icon={<IoHome />} text='Home'/>
          <ListItem icon={<IoSearch />} text='Search'/>
          <ListItem icon={<IoCompass />} text='Explore'/>
          <ListItem icon={<IoChatbubbleSharp />} text='Messages'/>

        </ul>
      </div>

    </div>
  );
}