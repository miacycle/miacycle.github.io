import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          As an Open Source Software Engineer and researcher, I'm passionate about contributing to innovative technology solutions.
        </p>
        <p className="text-lg mb-6">
          I'm also currently teaching as a Graduate Research Assistant at the University of Texas, Austin. I continue to conduct research through the <a href="https://sydney.edu.au" className="text-blue-500 purple hover:underline">University of Sydney</a> in Australia, collaborating on a grant from the <a href="https://www.arc.gov.au" className="text-blue-500 purple hover:underline">Australian Research Council (ARC)</a>.
        </p>
        <p className="text-lg mb-6">
          In the future, I would like to pursue an interdisciplinary research approach where my love of cycling intersects with urban data analytics or smart city tech.
        </p>
        <p className="text-lg mb-6">
          I'm a maintainer for <a href="https://meshery.io" className="text-blue-500 purple hover:underline">Meshery</a>, where I help develop and improve cloud native infrastructure management. I also serve as a <a href="https://mentorship.lfx.linuxfoundation.org" className="text-blue-500 purple hover:underline" target="_blank" rel="noopener noreferrer">Linux Foundation LFX mentor</a> and a <a href="https://summerofcode.withgoogle.com" className="text-blue-500 purple hover:underline" target="_blank" rel="noopener noreferrer">Google Summer of Code mentor</a>, both for the Meshery project.
        </p>
        <p className="text-lg mb-6">
          When I'm not coding or researching, you can find me mountain biking — not just for the uphill grind and downhill action, but especially for the trail experience, with a focus on endurance and long-distance riding.
        </p>
        <p className="text-lg mb-6">
          I'm deeply interested in sustainable transportation and solar power as practical pathways to a cleaner future. Whether it's human-powered transit or renewable energy infrastructure, I believe technology and intentional design can drive meaningful environmental impact.
        </p>
        <p className="text-lg mb-6">
          I bring an engineering mindset to everything I do — including my performance training. I approach fitness with the same rigor I apply to software: tracking metrics, iterating on methods, and optimizing for long-term results.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Connect with me</h2>
        <p className="text-muted-foreground mb-6">
          Feel free to reach out through my social profiles.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="gap-2" asChild>
            <a href="https://github.com/miacycle" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button variant="secondary" className="gap-2" asChild>
            <a href="https://x.com/miacycle" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
              X (Twitter)
            </a>
          </Button>
          <Button variant="secondary" className="gap-2" asChild>
            <a href="https://www.linkedin.com/in/mia-grenell" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="http://layer5.io/community/members/mia-grenell" target="_blank" rel="noopener noreferrer">
              Layer5 Profile
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
