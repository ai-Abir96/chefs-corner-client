import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    total_recipies,
    likes,
    recipes,
  } = chefDetails;

  const [likedRecipes, setLikedRecipes] = useState([]);

  const handleLikeRecipe = (recipeId) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      timer: 2000,
      timerProgressBar: true,
      text: "Thank you for making this recipe your favourite",
    });
    if (likedRecipes.includes(recipeId)) {
      setLikedRecipes(likedRecipes.filter((id) => id !== recipeId));
    } else {
      setLikedRecipes([...likedRecipes, recipeId]);
    }
  };
  return (
    <div
      className="lg:px-48 px-2 py-24"
      style={{ background: "#F6EADE" }}
    >
      <Card className=" lg:w-11/12 mx-auto p-10  flex lg:flex-row items-center justify-between">
        <CardHeader floated={false} className=" h-auto">
          <img
            src={chef_picture}
            style={{ width: 450, height: 500 }}
            alt=""
          />
        </CardHeader>
        <CardBody className="text-center">
          <h3 className=" text-7xl font-bold mb-10">{chef_name}</h3>
          <p className="text-2xl">
            <span className="font-bold">Years of Experience : </span>
            {years_of_experience} years
          </p>
          <div className="flex my-3 items-center justify-center text-xl">
            <p className="mr-10">Total Recipies : {total_recipies}</p>
            <p>Likes : {likes}</p>
          </div>
        </CardBody>
      </Card>
      <h1 className="my-32 text-center font-bold">Recipes</h1>
      {recipes.map((recipe) => (
        <Card key={recipe.id} className="my-5">
          <CardHeader
            floated={false}
            className=" h-auto px-5 py-2 flex justify-between items-center"
          >
            <div>
              <h1 className="text-5xl text-black font-bold">
                {recipe.name}
              </h1>
              <p className="text-xl pt-5">Rating: {recipe.rating}</p>
            </div>
            <div>
              <button
                disabled={likedRecipes.includes(recipe.id)}
                onClick={() => handleLikeRecipe(recipe.id)}
              >
                {likedRecipes.includes(recipe.id) ? (
                  <FontAwesomeIcon icon={faHeartSolid} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} />
                )}
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <h2 className="text-2xl text-black font-bold">
              Ingredients
            </h2>
            <ul className="list-disc list-inside pl-3 pt-2">
              {recipe.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
            <h2 className="text-2xl text-black font-bold mt-10">
              Cooking Method
            </h2>
            <p className="pt-2">{recipe.cooking_method}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ChefDetails;
