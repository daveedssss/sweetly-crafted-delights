
import { useState } from "react";
import { Eye } from "lucide-react";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const MenuItem = ({ name, description, price, image, category }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md menu-item-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 bg-primary rounded-full">
            <Eye className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-xs font-medium text-primary">
          {category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="font-medium text-primary">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
