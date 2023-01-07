import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../utils/authentication'
import img from '../assets/images/signup.jpg'


export const Signup = () => {
  const { dispatch } = useAuth()
  const navigate = useNavigate()
  const [ form, setForm ] = useState({
    username: '',
    email: '',
    password: '',
    password_confirm: ''
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setForm(prev => ({
      ...prev,
      [name]: value      
    }))
  }

  const handleSubmit = async () => {
    try {
      await dispatch({type: 'user.signup', user: form})
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Card
      sx={{
        width: 800,
        height: 500,
        display: 'flex',
        mx: 'auto'
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 500
        }}
      >
        <CardMedia
          component="img"
          height={300}
          image={img}
          alt="hobby"
          sx={{
            height: '100%'
          }}
        />
      </Box>
      <CardContent 
        sx={{
          flex: 1,
          py: 2,
          px: 4
        }}
      >
        <Box>
          <Typography
            variant="h1"
            color="primary.main"
            sx={{
              fontSize: 20
            }}
          >
            Hobbyer
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 4
            }}
          >
            あなたが新人さんね、歓迎するわ🎉
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{mt: 1}}
          >
            趣味で繋がる、マッチングアプリ
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2
          }}
        >
          <Box
            sx={{
            }}
          >
            <TextField
              name="username"
              value={form.username}
              label="ユーザー名"
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              mt: 1
            }}
          >
            <TextField
              name="email"
              value={form.email}
              label="メールアドレス"
              type="email"
              inputProps={{
                autoComplete: 'email'
              }}
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              mt: 1
            }}
          >
            <TextField
              name="password"
              value={form.password}
              label="パスワード"
              type="password"
              autoComplete='new-password'
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              mt: 1
            }}
          >
            <TextField
              name="password_confirm"
              value={form.password_confirm}
              label="確認パスワード"
              type="password"
              autoComplete='new-password'
              fullWidth
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: 2
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            サインアップ
          </Button>
        </Box>
        <Box
          sx={{
            mt: 2
          }}
        >
          <Typography
            variant="caption"
          >
            見たことある顔だね、もしかしてこっちかい?
          </Typography>
          <Typography
            variant="caption"
            color="text.primary"
            component={Link}
            to="/"
          >
            ログイン
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}