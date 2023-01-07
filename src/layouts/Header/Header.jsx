import {
  AppBar,
  Box,
  Typography,
  Toolbar
} from '@mui/material'

import { NavMenu } from './NavMenu'

export const Header = () => {
  return (
    <AppBar variant='main.header'>
      <Toolbar sx={{
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h1" sx={{
            lineHeight: '60px',
            color: theme => theme.palette.primary.main
          }}>
            Hobbyer
          </Typography>
        </Box>
        <NavMenu/>
      </Toolbar>
    </AppBar>
  )
}