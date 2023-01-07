import {
  Box,
  Toolbar,
  Typography
} from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'center'
        }}
      >
        <Typography>
          ©2022 Hobbyer
        </Typography>
      </Toolbar>
    </Box>
  )
}