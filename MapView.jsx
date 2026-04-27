import React, { useEffect, useState } from "react";

export default function MapView() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(pos.coords);
    });
  }, []);

  if (!location) return <p>Loading map...</p>;

  return (
    <iframe
      title="map"
      width="100%"
      height="300"
      src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
    />
  );
}