import {
  Avatar,
  Box,
  Button,
  Stack,
  Paper,
  Typography,
  experimentalStyled
} from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import { ProfileItem } from '../components/ProfileItem';
import { useAuth } from '../utils/authentication';


const MainButton = experimentalStyled(Button)(({theme}) => ({
  ...theme.typography.h4,
  boxShadow: theme.shadows[1],
  maxWidth: 300,
  width: '100%',
  lineHeight: 4,
}))

const SubButton = experimentalStyled(Button)(({theme}) => ({
  ...theme.typography.body1,
  boxShadow: theme.shadows[1],
  fontWeight: 700,
  maxWidth: 200,
  width: '100%',
  lineHeight: 6,
}))


export const Home = () => {
  const { state: {user} } = useAuth();
  
  return (
      <Paper sx={{mt: 18, p: 2, maxWidth: 500, mx: 'auto'}}>
        <Box sx={{mt: -10, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Box>
            <Avatar sx={{ width: 128, height: 128, outline: '8px solid', outlineColor: theme => theme.palette.background.default }}/>
          </Box>
          <Box sx={{mt: 2}}>
            <Typography variant="h2">{user.username}</Typography>
          </Box>
          <Box sx={{display: 'flex', gap: '8px',mt: 1}}>
            <ProfileItem value={"0人"}>
              <Diversity1Icon fontSize="small"/>
            </ProfileItem>
            <ProfileItem value={"0サークル"}>
              <Diversity3Icon fontSize="small"/>
            </ProfileItem>
          </Box>
          <Box sx={{mt: 6, width: '100%', textAlign: 'center'}}>
            <MainButton variant='contained'>
              マッチング開始
            </MainButton>
          </Box>
          <Stack direction="row" spacing={4} sx={{mt: 6, justifyContent: 'center', width: '100%'}}>
            <SubButton variant='outlined'>
              フレンド一覧
            </SubButton>
            <SubButton variant='outlined'>
              サークル一覧
            </SubButton>
          </Stack>
        </Box>
      </Paper>
  )
}