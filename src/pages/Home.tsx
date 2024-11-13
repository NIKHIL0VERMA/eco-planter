import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Star } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Spring Delight',
    description: 'A vibrant mix of seasonal flowers with marigolds',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    name: 'Rose Romance',
    description: 'Premium arrangement of red and pink roses',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    name: 'Lotus Dreams',
    description: 'Elegant arrangement with lotus and mixed flowers',
    price: 2499,
    image: 'https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?auto=format&fit=crop&q=80&w=500',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Beautiful flowers! Perfect for my daughter\'s wedding ceremony.',
    image: 'https://plus.unsplash.com/premium_photo-1726873351723-cb980a1d6dcb?auto=formate&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    rating: 5,
    comment: 'Amazing quality and timely delivery. Best florist in the city!',
    image: 'https://plus.unsplash.com/premium_photo-1689838026921-c09632fd77ff?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    name: 'Anjali Patel',
    rating: 5,
    comment: 'The puja flowers were fresh and beautifully arranged.',
    image: 'https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?auto=format&fit=crop&q=80&w=200',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative flex h-full items-center justify-center text-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-5xl font-bold">
              Fresh Flowers & Beautiful Arrangements
            </h1>
            <p className="mt-4 text-lg">
              Handcrafted bouquets for every occasion, from weddings to pujas
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-16 mx-auto justify-center">
        <h2 className="text-center font-serif text-3xl font-semibold">Flowers & Pots</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-semibold">₹{product.price}</span>
                <Button asChild variant="outline">
                  <Link to={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted mx-auto justify-center item-center py-16">
        <div className="container justify-center item-center mx-auto">
          <h2 className="text-center font-serif text-3xl font-semibold">
            Customer Reviews
          </h2>
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <div className="flex text-yellow-400">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container justicy-center mx-auto py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold">About Eco Planter</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At Eco Planter, we take pride in creating beautiful floral arrangements
            for all occasions - from traditional Indian weddings to modern celebrations.
            Our expert florists carefully select the freshest flowers from local markets
            and craft each arrangement with love and attention to detail. With same-day
            delivery available across major Indian cities, we make it easy to share the
            joy of flowers with your loved ones.
          </p>
          <Button asChild className="mt-8" variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;