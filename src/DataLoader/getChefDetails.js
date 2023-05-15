const getChefDetails = async ({ params }) => {
  const fetchData = await fetch(
    "https://chefs-corner-server-ai-abir96.vercel.app/chef_data"
  );
  const data = await fetchData.json();

  const thisChef = data.find(
    (chef) => chef.id === parseInt(params.chefId)
  );
  return thisChef;
};

export default getChefDetails;
