import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { products } from '@/lib/data/products';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/lib/cart';

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const addItem = useCart((state) => state.addItem);
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="font-serif text-3xl font-semibold">Product Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <Button asChild className="mt-8">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: 'Added to Cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto justify-center item-center py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="font-serif text-4xl font-semibold">{product.name}</h1>
          <p className="mt-4 text-xl font-semibold">₹{product.price}</p>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          <Button onClick={handleAddToCart} className="mt-8" size="lg">
            Add to Cart
          </Button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-8 font-serif text-2xl font-semibold">
            You Might Also Like
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id}>
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="h-64 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{relatedProduct.name}</CardTitle>
                  <CardDescription>{relatedProduct.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <span className="text-lg font-semibold">
                    ₹{relatedProduct.price}
                  </span>
                  <Button asChild variant="outline">
                    <Link to={`/products/${relatedProduct.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;