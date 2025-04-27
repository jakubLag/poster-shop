import { Button } from "../ui/button";
import { ShoppingCart, Check } from "lucide-react";

type CartPoster = {};
type AddToCartButtonProps = {
  addHandle: (item: CartPoster) => void;
  cart: CartPoster[];
  isDisabled: boolean;
};
const AddToCartButton = ({
  addHandle,
  cart,
  isDisabled,
}: AddToCartButtonProps) => {
  return (
    <Button
      className="w-full cursor-pointer font-semibold"
      onClick={addHandle}
      disabled={isDisabled}
    >
      {isDisabled ? (
        <p className="w-full flex justify-center items-center gap-2">
          Already in cart <Check />
        </p>
      ) : (
        <p className="w-full flex justify-center items-center gap-2">
          Add to cart <ShoppingCart />
        </p>
      )}
    </Button>
  );
};

export default AddToCartButton;
