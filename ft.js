const ws = new WebSocket("ws://localhost:8000/track");

navigator.geolocation.watchPosition((pos) => {
  ws.send(JSON.stringify({
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  }));
});