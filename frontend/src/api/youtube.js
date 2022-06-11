import { useEffect } from 'react';

const startYouTubeDownload = (url) => {
  const type = 'backend.youtube.startDownload';
  console.log(`Frontend: Sending ${type}`);
  window.postMessage({ type, payload: { url } }, '*');
};

const useYouTubeDownload = (onComplete) => {
  return useEffect(() => {
    const onMessage = (e) => {
      if (!e.data.type.startsWith('front')) return;

      console.log(`Frontend: Received ${e.data.type}`)

      if (e.data.type === 'frontend.youtube.finishDownload') {
        const { localVideoPath } = e.data.payload;
        onComplete({ localVideoPath });
      }
    };

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  }, []);
};

export {
  startYouTubeDownload,
  useYouTubeDownload
}
