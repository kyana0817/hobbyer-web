import {
  Box
} from '@mui/material'

export const Wave = ({mt ,children}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: -10,
        bottom: '0',
        left: '0',
        width: '100vw',
        height: 'calc(calc(100% - 100vh) + 200px)',
        color: theme => theme.palette.primary.main,
        background: theme => theme.palette.primary.main
      }}
    >
      <Box sx={{mt: mt}}>
        {children}
      </Box>
    </Box>
  )
}