import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../lib/auth'
import { useAuth } from '../utils/authentication';
import img from '../assets/images/login.jpg';
import { currentUser } from '../features/auth';


export const Login = () => {
  const { dispatch } = useAuth()
  const navigation = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async () => {
    try {
      await login(form.email, form.password);
      const user = await currentUser();
      dispatch({type: 'login', user});
      navigation('/')
    } catch(e) {
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
            お帰りなさい！👋
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
              label="メールアドレス"
              type="email"
              name="email"
              autoComplete='email'
              fullWidth
              value={form.email}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              mt: 1
            }}
          >
            <TextField
              label="パスワード"
              type="password"
              name="password"
              autoComplete='email'
              fullWidth
              value={form.password}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: 1,
            textAlign: 'right'
          }}
        >
          <Typography
            variant="caption"
            component={Link}
            color="text.primary"
            to="/"
          >
            パスワードを忘れた方は
          </Typography>
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
            ログイン
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
            アカウントをお持ちでない?
          </Typography>
          <Typography
            variant="caption"
            component={Link}
            color="text.primary"
            to="./signup"
          >
            サインアップ
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}