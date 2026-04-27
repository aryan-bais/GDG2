import axios from "axios";

export default function SOSButton() {

  const handleSOS = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const data = {
        location: `${pos.coords.latitude},${pos.coords.longitude}`,
        contacts: ["+91XXXXXXXXXX"],
      };

      await axios.post("http://localhost:8000/sos", data);
      alert("SOS Sent!");
    });
  };

  return (
    <button onClick={handleSOS} style={{background:"red",color:"#fff"}}>
      🚨 SOS
    </button>
  );
}