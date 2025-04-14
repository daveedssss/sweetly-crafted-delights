
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-pattern flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              <span className="text-primary">Sweetly Crafted</span> <br />
              <span className="text-gold-dark">Delights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Indulge in exquisite pastries crafted with passion and precision by Dave Sebastien Ghermino, 
              where every bite tells a story of tradition and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#menu">
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1609950547346-a4f431435b2b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1170"
              alt="Assorted pastries displayed beautifully"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white p-6">
              <p className="text-sm uppercase tracking-wider">Master Pastry Chef</p>
              <h3 className="text-2xl font-semibold">Dave Sebastien Ghermino</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
