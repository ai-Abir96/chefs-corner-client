import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chef = ({ cd }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    total_recipies,
    likes,
  } = cd;
  return (
    <div>
      <div>
        <Card className="w-96 mx-auto">
          <CardHeader className="relative h-80">
            <LazyLoad>
              <img
                src={chef_picture}
                alt="img-blur-shadow"
                className="w-full h-full"
              />
            </LazyLoad>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              {chef_name}
            </Typography>
            <Typography>
              Experince: {years_of_experience} years
            </Typography>
            <Typography>Total Recepies: {total_recipies}</Typography>
            <Typography>Likes: {likes}</Typography>
          </CardBody>
          <CardFooter divider className="py-3">
            <Link
              to={`/chef-details/${id}`}
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              <Button className="button" fullWidth>
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Chef;
