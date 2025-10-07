import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Maximize2 } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  type: string;
  area: string;
  price: string;
}

export const PropertyCard = ({ image, title, location, type, area, price }: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
          {type}
        </Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Maximize2 className="w-4 h-4 mr-1" />
          <span className="text-sm">{area}</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-between items-center">
        <span className="text-2xl font-bold text-primary">{price}</span>
      </CardFooter>
    </Card>
  );
};
