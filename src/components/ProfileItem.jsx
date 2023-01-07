import { Typography } from '@mui/material'

export const ProfileItem = ({children, value}) => {
  return (
    <Typography component="p" sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      {children}
      <Typography component="span">
        {value}
      </Typography>
    </Typography>
  )
}