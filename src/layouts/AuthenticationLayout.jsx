import { Outlet } from 'react-router-dom'
import {
  Box,
  Container,
  styled
} from '@mui/material'

import { Footer } from './Footer'
import { Wave } from './Wave'
import { ReactComponent as WaveSvg } from '../assets/images/wave2.svg'

const StyledWave = styled(WaveSvg)(() => ({
  height: 196,
  width: '100vw'
}))


export const AuthenticationLayout = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container sx={{pt: 20, flex: 1}}>
          <Box>
            <Outlet/>
          </Box>
        </Container>
        <Footer/>
      </Box>
      <Wave mt={'-196px'}>
        <StyledWave/>
      </Wave>
    </>
  )
}