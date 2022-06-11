import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';

function VideoList() {
  const videos = [
    { id: 0, name: 'Benny Greb Clinic' },
    { id: 1, name: 'Tony Royster Metronome Practice' }
  ];

  return (
    <>
      <Button
        variant="contained"
        component={Link}
        to="/videos/new"
      >
          New Video
      </Button>
      <Box>
        <List>
          {videos.map(({ id, name }) => (
            <ListItem button key={id}>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default VideoList;
