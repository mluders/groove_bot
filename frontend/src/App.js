import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import VideoImport from './pages/video_import';
import VideoList from './pages/video_list';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/videos"
            element={<VideoList />}
          />

          <Route
            path="/videos/new"
            element={<VideoImport />}
          />

          <Route
            path="*"
            element={<Navigate to="/videos" replace />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
