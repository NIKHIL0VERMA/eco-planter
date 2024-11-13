export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Spring Delight',
    description: 'A vibrant mix of seasonal flowers with marigolds',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=500',
    category: 'seasonal',
    featured: true,
  },
  {
    id: 2,
    name: 'Rose Romance',
    description: 'Premium arrangement of red and pink roses',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=500',
    category: 'roses',
    featured: true,
  },
  {
    id: 3,
    name: 'Lotus Dreams',
    description: 'Elegant arrangement with lotus and mixed flowers',
    price: 2499,
    image: 'https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?auto=format&fit=crop&q=80&w=500',
    category: 'mixed',
    featured: true,
  },
  {
    id: 4,
    name: 'Marigold Abundance',
    description: 'Traditional marigold arrangement for festivities',
    price: 999,
    image: 'https://images.unsplash.com/photo-1695301737779-abb0802bf47c?auto=format&fit=crop&q=80&w=500',
    category: 'seasonal',
  },
  {
    id: 5,
    name: 'Orchid Elegance',
    description: 'Premium orchids in a ceramic pot',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1707097700998-a84ab2eb2775?auto=format&fit=crop&q=80&w=500',
    category: 'luxury',
  },
  {
    id: 6,
    name: 'Garden Fresh',
    description: 'Mixed seasonal flowers in earthen pot',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=500',
    category: 'mixed',
  },
];