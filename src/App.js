import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { BaseLayout } from './layouts/BaseLayout';
import { AuthenticationLayout } from './layouts/AuthenticationLayout';

import { AuthenticationProvider } from './utils/authentication';
import { Home } from './pages/Home';
import { Friend } from './pages/Friend';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AuthenticationProvider>
          <Router>
            <Routes>
              <Route path="/auth" element={<AuthenticationLayout/>}>
                <Route path="" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
              </Route>
              <Route path="/" element={<BaseLayout/>}>
                <Route path="" element={<Home/>}/>  
                <Route path="friend" element={<Friend/>}/>
              </Route>
            </Routes>
          </Router>
        </AuthenticationProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
