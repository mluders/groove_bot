import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, TextField } from '@mui/material';

import { startYouTubeDownload, useYouTubeDownload } from '../../api/youtube';

function VideoList() {
  const [importing, setImporting] = useState(false);
  const [videoSource, setVideoSource] = useState('');
  
  useYouTubeDownload(({ localVideoPath }) => {
    console.log(`Download complete: ${localVideoPath}`)
  });

  const onImport = () => {
    setImporting(true);
    startYouTubeDownload(videoSource);
  };

  if (importing) {
    return <CircularProgress />;
  }

  return (
    <>
      <TextField
        required
        label="YouTube Link"
        value={videoSource}
        onChange={(e) => setVideoSource(e.target.value)}
      />
      <Button
        variant="contained"
        disabled={!videoSource}
        onClick={onImport}
      >
        Import
      </Button>
    </>
  );
}

export default VideoList;
