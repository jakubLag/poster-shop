import { Poster } from "@/context/CartContext";
import { Card } from "../ui/card";
import Image from "next/image";
import { Dot, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/context/CartContext";
type CartItemProps = {
  poster: Poster;
};

const CartItem = ({ poster }: CartItemProps) => {
  const { removeFromCart } = useCart();
  const deleteHandle = () => {
    removeFromCart(poster.id)
  };
  return (
    <Card className="p-5 flex flex-row items-center">
      <div>
        <Image
          alt={poster.poster}
          src={poster.poster}
          width={200}
          height={1}
          className="border"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <div>
          <h1 className="text-xl font-semibold mb-6">{poster.title}</h1>
          <div className="flex">
            <div className="flex">
              <span className="text-gray-600 text-lg">
                {poster.releaseYear}
              </span>
              <Dot color="#4a5565" />
              <span className="text-gray-600 text-lg">{poster.director}</span>
              <Dot color="#4a5565" />
              <span className="text-gray-600 text-lg">{poster.genre}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-semibold">{poster.price} zł</h1>

          <div>
            <Button className="cursor-pointer" variant={"outline"} onClick={deleteHandle}>
              <Trash2 color="red" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default CartItem;
