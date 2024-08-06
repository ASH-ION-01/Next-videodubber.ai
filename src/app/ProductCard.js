import { Button } from "@mantine/core";
import Menubar from "./Menubar";
import Heading from "./Heading";
import Upvote from "./Upvote";

const ProductCard = () => {
  return (
    <div className="max-w-[652px] mx-auto px-4 sm:px-6 md:px-8">
      <Menubar />
      <Heading />
      <Upvote />
    </div>
  );
};

export default ProductCard;
