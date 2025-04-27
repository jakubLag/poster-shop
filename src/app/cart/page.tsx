"use client";

import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { ArrowRight } from "lucide-react";
const Cart = () => {
  const { cart } = useCart();
  const totalSum = cart.reduce((sum, poster) => sum + (poster.price ?? 0), 0);

  return (
    <div className="flex justify-center min-h-[calc(100vh-96px)] w-screen">
      <Card className="w-3/5 px-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Cart</h1>

          <div className="flex items-center gap-10">
            <h2 className="font-semibold">Suma: {totalSum}zł</h2>
            <Button className="cursor-pointer">
              Checkout
              <ArrowRight />
            </Button>
          </div>
        </div>
        {cart.map((item, index) => (
          <CartItem key={index} poster={item} />
        ))}
      </Card>
    </div>
  );
};

export default Cart;
