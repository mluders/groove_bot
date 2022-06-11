const sendMessageToFrontend = (type, payload) => {
  console.log(`Backend: Sending ${type}`);

  window.postMessage({
    type,
    payload
  }, '*');
};

window.addEventListener('message', async (e) => {
  if (!e.data.type.startsWith('backend')) return;

  console.log(`Backend: Received ${e.data.type}`);

  if (e.data.type === 'backend.youtube.startDownload') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    sendMessageToFrontend(
      'frontend.youtube.finishDownload',
      { localVideoPath: '/dummy/path' }
    )
  }
});
