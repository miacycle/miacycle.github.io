
import { Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="/lovable-uploads/97ba6128-0174-4dc8-9ed6-0a4d58913834.png"
          alt="Artistic bicycle background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
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
              src="/lovable-uploads/623d0e6d-b4d7-44a4-97f9-a33b521935cf.png"
              alt="Mia Grenell"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
