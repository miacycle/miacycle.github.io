
import { Button } from "@/components/ui/button";
import { Github, Mail, MessageSquare, Twitter } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows={5}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Connect with me</h2>
          <p className="text-muted-foreground">
            Feel free to reach out through my social profiles or contact form.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="gap-2" asChild>
              <a href="https://github.com/miacycle" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://x.com/miacycle" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Twitter className="w-5 h-5" />
                X (Twitter)
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="http://layer5.io/community/members/mia-grenell" target="_blank" rel="noopener noreferrer">
                Layer5 Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
