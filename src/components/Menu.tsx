
import { useState } from "react";
import MenuItem from "./MenuItem";
import { Button } from "@/components/ui/button";

const menuCategories = ["All", "Pastries", "Cakes", "Bread", "Desserts"];

const menuItems = [
  {
    name: "Classic French Croissant",
    description: "Buttery, flaky pastry with a golden exterior and tender layers within.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1626",
    category: "Pastries"
  },
  {
    name: "Chocolate Éclair",
    description: "Choux pastry filled with cream and topped with rich chocolate ganache.",
    price: "$5.75",
    image: "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1074",
    category: "Pastries"
  },
  {
    name: "Fruit Tart",
    description: "Buttery pastry shell filled with vanilla custard and topped with fresh seasonal fruits.",
    price: "$6.25",
    image: "https://images.unsplash.com/photo-1621236354503-a3a9c10e5efb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1074",
    category: "Desserts"
  },
  {
    name: "Vanilla Bean Macaron",
    description: "Delicate almond meringue cookies with vanilla buttercream filling.",
    price: "$2.75",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1159",
    category: "Pastries"
  },
  {
    name: "Sourdough Bread",
    description: "Artisanal bread with a tangy flavor and chewy texture, baked to perfection.",
    price: "$7.50",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1064",
    category: "Bread"
  },
  {
    name: "Opera Cake",
    description: "Elegant layered cake with coffee buttercream and chocolate ganache.",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1676037150408-4b6e84b7927c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1170",
    category: "Cakes"
  },
  {
    name: "Raspberry Charlotte",
    description: "Ladyfinger-lined mousse cake with fresh raspberries and vanilla cream.",
    price: "$7.95",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1170",
    category: "Cakes"
  },
  {
    name: "Pain au Chocolat",
    description: "Flaky croissant-like pastry with dark chocolate pieces folded inside.",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1170",
    category: "Pastries"
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of handcrafted pastries and desserts made with the finest ingredients and exceptional attention to detail.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
