
import { Cake, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-pastry-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Chef</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/public/lovable-uploads/56e8bd90-459c-469d-9345-e4aa446d0fbc.png"
                alt="Dave Sebastien Ghermino - Master Pastry Chef"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-playfair italic text-lg text-primary">"Pastry is poetry that melts on your tongue."</p>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">Dave Sebastien Ghermino</h3>
            <p className="text-foreground">
              Welcome to my world of sweet creations! My journey into pastry began over 15 years ago when I fell in love with the art of transforming simple ingredients into extraordinary delights.
            </p>
            <p className="text-foreground">
              After training in Paris under renowned pastry chefs and working in prestigious establishments across Europe, I returned home to start Sweetly Crafted Delights - a pastry boutique where tradition meets innovation.
            </p>
            <p className="text-foreground">
              Each pastry I create is a reflection of my dedication to exceptional quality and my passion for pushing the boundaries of flavor and presentation. I believe in using only the finest seasonal ingredients, sourced locally whenever possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Cake className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">Master Pastry Chef</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Award className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">Award Winning</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">15+ Years Experience</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
