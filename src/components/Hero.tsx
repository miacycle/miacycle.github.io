
import { Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4 fade-in">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Mia Grenell</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Graduate Research Assistant & Open Source Engineer
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              University of Sydney, Australia 🇦🇺 · University of Texas, Austin 🤘
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/uploads/mia-grenell.jpg"
              alt="Mia Grenell"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
