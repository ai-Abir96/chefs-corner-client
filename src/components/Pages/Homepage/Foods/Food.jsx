import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const Food = ({ fd }) => {
  const { image, name, description } = fd;
  return (
    <Card className="w-96 mx-auto">
      <CardHeader floated={false} className="h-80">
        <img src={image} className="w-full h-full" alt="" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-2"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default Food;
