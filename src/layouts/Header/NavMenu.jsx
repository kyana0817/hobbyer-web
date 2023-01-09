import { useState, useRef } from 'react';
import { 
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Fade,
  MenuList,
  MenuItem,
  Paper,
  Popper,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../../lib/auth';
import { useAuth } from '../../utils/authentication';

const navList = [
  {
    name: 'home',
    to: '',
    label: 'ホーム',
    icon: <HomeIcon />,
    component: Link
  },
  {
    name: 'friend',
    to: '/friend',
    label: 'フレンド',
    icon: <Diversity1Icon />,
    component: Link
  },
  {
    name: 'circle',
    to: '',
    label: 'サークル',
    icon: <Diversity3Icon />,
    component: Link
  },
  {
    name: 'other',
    label: 'その他',
    icon: <MoreHorizIcon />
  }
]

const PopUpContent = ({TransitionProps}) => {
  const navigate = useNavigate();
  const {dispatch} = useAuth()
  return (
    <Fade {...TransitionProps} timeout={350}>
      <Box
        sx={{
          marginRight: 2
        }}
      >
        <Paper
          sx={{
            width: 200
          }}
        >
          <MenuList>
            <MenuItem
              onClick={async () => {
                await logout()
                dispatch({type: 'logout'})
                navigate('/auth')
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: (theme) => theme.palette.error.light
                }}
              >
                ログアウト
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>
    </Fade>
  )
};

export const NavMenu = () => {
  const [value, setValue] = useState(0)
  const ref = useRef(undefined)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }


  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navList[newValue].name !== 'other' && setOpen(false)
        }}
        sx={{
          background: theme => theme.palette.background.default
        }}
      >
        {navList.map(({name, ...item}) => (
          <BottomNavigationAction
            key={item.label}
            sx={{
              width: 85
            }}
            ref={name === 'other'? ref: undefined}
            onClick={name === 'other'? handleOpen: undefined}
            {...item}
          />
        ))}
      </BottomNavigation>
      <Popper open={open} anchorEl={ref.current} transition>
        {({ TransitionProps }) => (
          <PopUpContent
            TransitionProps={TransitionProps}
          />
        )}
      </Popper>
    </>
  )
}
