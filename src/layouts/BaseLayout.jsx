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

import { useAuthorization } from '../utils/authentication'
import { useEffect } from 'react'

const StyledWave = styled(WaveSvg)(() => ({
  height: 196,
  width: '100vw'
}))

export const BaseLayout = () => {
  const {logged} = useAuthorization()
  const navigation = useNavigate()
  
  useEffect(() => {
    if (!logged) {
      navigation('/auth')
    }
  }, [])

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
          <Outlet/>
        </Container>
        <Footer/>
      </Box>
      <Wave mt={'-196px'}>
        <StyledWave/>
      </Wave>
    </>
  )
}
