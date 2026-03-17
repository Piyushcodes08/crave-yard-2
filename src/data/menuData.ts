import menuBeverages from "@/assets/gallery-1.png";
import menuChinese from "@/assets/gallery-1.png";
import menuMaggi from "@/assets/gallery-1.png";
import menuMomos from "@/assets/gallery-1.png";
import menuRice from "@/assets/gallery-1.png";
import menuSnacks from "@/assets/gallery-1.png";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  rating: number;
}

export interface MenuCategory {
  categoryId: number;
  categoryName: string;
  image: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    categoryId: 1,
    categoryName: "Beverages",
    image: menuBeverages,
    items: [
      { id: 1, name: "Raspberry Cooler", price: 160, rating: 4.4 },
      { id: 2, name: "Cold Coffee", price: 190, rating: 4.7 },
      { id: 3, name: "Peach Iced Tea", price: 160, rating: 4.3 },
      { id: 4, name: "Lychee Cooler", price: 160, rating: 4.2 },
      { id: 5, name: "Lemon Iced Tea", price: 160, rating: 4.5 },
      { id: 6, name: "Mint Mojito", price: 160, rating: 4.6 },
      { id: 7, name: "Thums Up (330 ML)", price: 65, rating: 4.1 },
    ],
  },
  {
    categoryId: 2,
    categoryName: "Chinese",
    image: menuChinese,
    items: [
      { id: 8, name: "Cheese Chilli Dry", price: 280, rating: 4.6 },
      { id: 9, name: "Manchurian Dry", price: 220, rating: 4.5 },
      { id: 10, name: "Manchurian Gravy", price: 220, rating: 4.4 },
      { id: 11, name: "Paneer Manchurian Dry", price: 220, rating: 4.5 },
      { id: 12, name: "Paneer Chilli Gravy", price: 250, rating: 4.6 },
      { id: 13, name: "Chilli Potato", price: 220, rating: 4.3 },
      { id: 14, name: "Paneer Chilli Dry", price: 250, rating: 4.6 },
    ],
  },
  {
    categoryId: 3,
    categoryName: "Maggi",
    image: menuMaggi,
    items: [
      { id: 15, name: "Veg Masala Maggi", price: 120, rating: 4.2 },
      { id: 16, name: "Veg Butter Masala Maggi", price: 150, rating: 4.4 },
      { id: 17, name: "Plain Butter Masala Maggi", price: 130, rating: 4.1 },
      { id: 18, name: "Veg Schezwan Maggi", price: 150, rating: 4.5 },
      { id: 19, name: "Plain Masala Maggi", price: 100, rating: 4.0 },
      { id: 20, name: "Plain Tadka Maggi", price: 150, rating: 4.3 },
      { id: 21, name: "Veg Butter Schezwan Maggi", price: 170, rating: 4.6 },
      { id: 22, name: "Plain Schezwan Maggi", price: 130, rating: 4.2 },
      { id: 23, name: "Veg Tadka Maggi", price: 170, rating: 4.5 },
    ],
  },
  {
    categoryId: 4,
    categoryName: "Momos",
    image: menuMomos,
    items: [
      { id: 24, name: "Veg Tandoori Momos (6 pcs)", price: 220, rating: 4.6 },
      { id: 25, name: "Paneer Kurkure Momos (6 pcs)", price: 240, rating: 4.7 },
      { id: 26, name: "Veg Chilli Dry Momos (6 pcs)", price: 220, rating: 4.5 },
      { id: 27, name: "Paneer Tandoori Momos (6 pcs)", price: 240, rating: 4.6 },
      { id: 28, name: "Cheese Chilli Dry Momos (6 pcs)", price: 260, rating: 4.7 },
      { id: 29, name: "Veg Afghani Momos (6 pcs)", price: 220, rating: 4.4 },
      { id: 30, name: "Veg Paneer Fried Momos (6 pcs)", price: 160, rating: 4.3 },
      { id: 31, name: "Veg Cheese Steamed Momos (6 pcs)", price: 160, rating: 4.4 },
      { id: 32, name: "Paneer Chilli Dry Momos (6 pcs)", price: 240, rating: 4.6 },
      { id: 33, name: "Crave Yard Special Tandoori (6 pcs)", price: 280, rating: 4.8 },
      { id: 34, name: "Crave Yard Special Steamed (6 pcs)", price: 160, rating: 4.4 },
      { id: 35, name: "Paneer Afghani Momos (6 pcs)", price: 240, rating: 4.6 },
      { id: 36, name: "Veg Paneer Steamed Momos (6 pcs)", price: 140, rating: 4.2 },
      { id: 37, name: "Veg Steamed Momos (6 pcs)", price: 130, rating: 4.1 },
      { id: 38, name: "Cheese Kurkure Momos (6 pcs)", price: 260, rating: 4.7 },
      { id: 39, name: "Veg Fried Momos (6 pcs)", price: 150, rating: 4.2 },
      { id: 40, name: "Cheese Paneer Fried Momos (6 pcs)", price: 180, rating: 4.5 },
      { id: 41, name: "Cheese Afghani Momos (6 pcs)", price: 260, rating: 4.7 },
      { id: 42, name: "Veg Cheese Fried Momos (6 pcs)", price: 180, rating: 4.4 },
      { id: 43, name: "Cheese Tandoori Momos (6 pcs)", price: 260, rating: 4.7 },
      { id: 44, name: "Cheese Chilli Steamed (6 pcs)", price: 160, rating: 4.4 },
      { id: 45, name: "Veg Kurkure Momos (6 pcs)", price: 220, rating: 4.5 },
      { id: 46, name: "Cheese Chilli Fried Momos (6 pcs)", price: 180, rating: 4.5 },
    ],
  },
  {
    categoryId: 5,
    categoryName: "Rice & Noodles",
    image: menuRice,
    items: [
      { id: 47, name: "Singapuri Cheese Noodles", price: 200, rating: 4.5 },
      { id: 48, name: "Singapuri Cheese Fried Rice", price: 250, rating: 4.6 },
      { id: 49, name: "Manchurian Noodles", price: 190, rating: 4.4 },
      { id: 50, name: "Schezwan Noodles", price: 180, rating: 4.4 },
      { id: 51, name: "Hakka Noodles", price: 180, rating: 4.3 },
      { id: 52, name: "Manchurian Fried Rice", price: 200, rating: 4.4 },
      { id: 53, name: "Paneer Fried Rice", price: 220, rating: 4.5 },
      { id: 54, name: "Schezwan Fried Rice", price: 190, rating: 4.4 },
      { id: 55, name: "Chilli Garlic Noodles", price: 190, rating: 4.4 },
      { id: 56, name: "Veg Fried Rice", price: 180, rating: 4.3 },
      { id: 57, name: "Chilli Garlic Fried Rice", price: 200, rating: 4.4 },
    ],
  },
  {
    categoryId: 6,
    categoryName: "Snacks",
    image: menuSnacks,
    items: [
      { id: 58, name: "Chinese Bhel", price: 220, rating: 4.5 },
      { id: 59, name: "Salted Fries", price: 110, rating: 4.1 },
      { id: 60, name: "Loaded Fries", price: 180, rating: 4.6 },
      { id: 61, name: "Mayo Fries", price: 150, rating: 4.2 },
      { id: 62, name: "Peri Peri Fries", price: 120, rating: 4.3 },
      { id: 63, name: "Masala Fries", price: 120, rating: 4.2 },
    ],
  },
];