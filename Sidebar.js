import { Button, IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {

  const dispatch = useDispatch();


  return (
    <div className='sidebar'>
      <Button 
      onClick={()=> dispatch(openSendMessage())}
      startIcon={<AddIcon fontSize='large' />} 
      className='sidebar__compose'
       >
        Compose
      </Button>

      <SidebarOption selected={true} Icon={InboxIcon} title='inbox' number={34} />
      <SidebarOption Icon={StarIcon} title='Starred' number={34} />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={34} />
      <SidebarOption Icon={LabelImportantOutlinedIcon} title='Important' number={34} />
      <SidebarOption Icon={SendOutlinedIcon} title='Sent' number={34} />
      <SidebarOption Icon={InsertDriveFileOutlinedIcon} title='Drafts' number={34} />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title='More' number={34} />

      <div className='sidebar__footer'>
        <div className='sidebar__footericons'>
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
