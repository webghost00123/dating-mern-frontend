import React from 'react'
import "./Header.css"
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';


export default function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className="heade-icon" />
        </IconButton>
        <img className='header_logo' source="logo192.png" alt='header' />
        <IconButton>
            <ForumIcon fontSize="large" className="heade-icon" />
        </IconButton>
    </div>
  )
}
