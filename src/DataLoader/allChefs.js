import axios from "axios";
const allChefs = async () => {
  const fetchData = await fetch(
    "https://chefs-corner-server-ai-abir96.vercel.app/chef_data"
  );
  const data = await fetchData.json();
  return data;
};

export default allChefs;
