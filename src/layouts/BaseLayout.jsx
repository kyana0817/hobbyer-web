import {
  Box,
  styled,
  Container
} from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from './Header'
import { Footer } from './Footer'
import { Wave } from './Wave'
import { ReactComponent as WaveSvg } from '../assets/images/wave1.svg'

import { Authoraization } from '../utils/authentication'

const StyledWave = styled(WaveSvg)(() => ({
  height: 196,
  width: '100%'
}))

export const BaseLayout = () => {

  return (
    <>
      <Header/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container sx={{pt: '60px', flex: 1}}>
          <Authoraization>
            <Outlet/>
          </Authoraization>
        </Container>
        <Footer/>
      </Box>
      <Wave mt={'-196px'}>
        <StyledWave/>
      </Wave>
    </>
  )
}
