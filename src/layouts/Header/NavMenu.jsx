import { useState } from 'react';
import { 
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Link } from 'react-router-dom';


export const NavMenu = () => {
  const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        background: theme => theme.palette.background.default
      }}
    >
      <BottomNavigationAction component={Link} to="" label="ホーム" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/friend" label="フレンド" icon={<Diversity1Icon />} />
      <BottomNavigationAction component={Link} to="" label="サークル" icon={<Diversity3Icon />} />
    </BottomNavigation>
  )
}