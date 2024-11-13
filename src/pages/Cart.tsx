import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/cart';

const Cart = () => {
  const { items } = useCart();

  return (
    <div className="container mx-auto justify-center item-center text-center py-8">
      <h1 className="font-serif text-4xl font-semibold">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">Your cart is empty</p>
          <Button asChild className="mt-4">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-muted-foreground">Price: ₹{item.price}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Quantity: {item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;