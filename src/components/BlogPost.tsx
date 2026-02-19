
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  category: "cycling" | "tech" | "general";
}

const blogPosts: BlogPost[] = [
  {
    id: "discovering-hidden-trails",
    title: "Discovering Hidden Trails in Sydney's North Shore",
    date: "April 15, 2025",
    category: "cycling",
    content: `Last weekend, I explored some spectacular mountain biking trails connecting Ku-ring-gai Chase National Park to Garigal National Park. The technical single tracks and stunning harbor views made for an unforgettable ride. It was quite fun.

**The Route**

The adventure began at Terrey Hills and wound through a series of single tracks that most riders don't know exist. The trail network stitches together sections of both national parks, offering a surprisingly continuous ride through native bushland. I followed a tip from a local cycling club and was rewarded with over 25 km of mostly unpaved terrain.

**Technical Highlights**

The trails vary significantly in difficulty. Some sections feature tight switchbacks descending toward creek crossings, while others open up into fast flowing fire roads with glimpses of the distant harbour. A particularly memorable section near West Head Road required careful navigation over exposed sandstone slabs — grippy in the dry, but something to respect after rain.

**Wildlife and Scenery**

One of the best parts of riding in this corridor is the wildlife. I spotted a lyre bird scratching through leaf litter near a creek crossing and heard the unmistakable call of yellow-tailed black cockatoos overhead. The eucalyptus canopy kept the temperature surprisingly comfortable even on a warm April morning.

**Practical Notes**

- **Distance**: approximately 25 km
- **Elevation gain**: around 480 m
- **Difficulty**: intermediate to advanced
- **Best access point**: Terrey Hills or Warrimoo Avenue, Forestville
- Carry plenty of water — there are no taps on this stretch
- A GPS track or detailed trail map is strongly recommended

**Final Thoughts**

This is easily one of my favourite rides within an hour of the Sydney CBD. The combination of technical trail riding, coastal scenery, and genuine solitude makes it a must-do for anyone willing to explore beyond the well-signposted tourist circuits. I am already planning a return trip to ride the route in the opposite direction and pick up a few sections I missed.`
  },
  {
    id: "sunrise-ride",
    title: "Sunrise Ride Around Sydney Harbour",
    date: "April 10, 2025",
    category: "cycling",
    content: `There's something magical about cycling across the Harbour Bridge at dawn. Today's 30km loop took me through Kirribilli, Neutral Bay, and back through the CBD as the city was just waking up.

**Setting Off Before Sunrise**

I rolled out from Milsons Point at 5:45 am, just as the eastern sky was beginning to lighten. The air was crisp and still — a rare combination in Sydney — and the bridge was essentially empty of traffic. Riding across the pedestrian and cyclist lane with nothing but the low hum of the steel beneath my wheels and the harbour glittering below is an experience I never take for granted.

**Kirribilli and the Lower North Shore**

Descending into Kirribilli, I followed the foreshore path past the Prime Minister's official residence and the old naval precinct. The water was glassy and a lone sculler was already out, carving perfect arcs in the silence. From there I wound through Neutral Bay and Cremorne, where steep streets and tight corners kept the legs honest.

**The Return Leg Through the City**

Crossing back via the bridge as the first orange light hit the Opera House sails is one of those views that never gets old. I dropped into the CBD and rode through streets that would be choked with traffic in two hours but at 7 am belonged entirely to cyclists and delivery workers. A coffee stop at a tiny espresso bar in Surry Hills provided the perfect midpoint refuel.

**Ride Stats**

- **Distance**: 31 km
- **Elevation gain**: 340 m
- **Moving time**: 1 hour 22 minutes
- **Start / finish**: Milsons Point

**Tips for the Route**

The most important tip is to start early — both for the light and to avoid the growing foot traffic on the bridge path by mid-morning. Weekend mornings between 5:30 and 7:00 am are ideal. The descent from the bridge into Kirribilli has a tight left-hander at the bottom; take it steady if the road is damp.

Harbour Bridge sunrise rides are something I try to do at least once a month. No matter how familiar the route becomes, Sydney puts on a different show every time.`
  },
  {
    id: "coastal-adventure",
    title: "Coastal Adventure: Bondi to La Perouse",
    date: "April 3, 2025",
    category: "cycling",
    content: `Completed the scenic Eastern Beaches coastal ride from Bondi to La Perouse. The route offers stunning ocean views, challenging climbs, and plenty of coffee stops along the way.

**Why This Ride Is a Sydney Classic**

The Eastern Beaches corridor from Bondi down to La Perouse is one of those routes that locals know well but rarely tire of. At roughly 35 km out and back, it threads through Coogee, Maroubra, and Botany Bay National Park, with the Tasman Sea as a constant companion on one side and sandstone cliffs on the other.

**The Opening Climb: Campbell Parade to Bronte**

After the inevitable chaos of Bondi's Campbell Parade, the road climbs sharply toward Bronte. This short punch is a good early warm-up signal — if your legs feel hollow here, the day will be long. I crested the rise to find a stunning view back over Bondi Beach, the arc of white sand already dotted with early morning swimmers.

**Coogee to Maroubra: The Middle Miles**

The section between Coogee and Maroubra hugs the coast closely, dipping down toward sea level and then kicking back up at regular intervals. The road surface here is good and the gradient rarely exceeds eight percent, making it accessible for riders of most fitness levels. A bakery on Maroubra's beachfront road became my mandatory coffee and almond croissant stop.

**La Perouse and Botany Bay**

The final stretch south enters the fringes of Botany Bay National Park and delivers a palpable change in atmosphere — fewer cars, more native vegetation, and occasional glimpses across the bay toward the industrial port. La Perouse itself is a fascinating historical site: it was here that the French expedition of La Pérouse anchored in January 1788, just days after the arrival of the First Fleet.

**Ride Stats**

- **Distance**: ~35 km (one way); ~68 km return
- **Elevation gain**: approximately 620 m (return)
- **Highlights**: Bronte, Coogee, Maroubra Beach, Bare Island, La Perouse headland
- **Coffee stops**: multiple options in Coogee and Maroubra

**Getting Back**

I returned along the same corridor, which looks entirely different when ridden in the opposite direction — the light shifts, the climbs become descents, and familiar landmarks reveal new angles. By the time I rolled back into Bondi, the beach was filling up and the cafes had queues. Perfect timing.`
  },
  {
    id: "multi-cluster-management",
    title: "Multi-cluster Management with Meshery",
    date: "April 17, 2025",
    category: "tech",
    content: "Deep dive into how Meshery revolutionizes multi-cluster Kubernetes management and multi-cloud services configuration. Learn about unified control planes, seamless cluster registration, and centralized policy management across your entire cloud native infrastructure. The Kanvas Snapshot Helm Plugin allows users to generate a visual snapshot of their Helm charts directly from the command line. It simplifies the process of creating Meshery Snapshots, providing a visual representation of packaged Helm charts. This plugin integrates with Meshery Cloud and GitHub Actions to automate the workflow of snapshot creation, which is especially useful for Helm users who need to quickly visualize their chart configurations. Helm charts can be complex, especially when custom configurations are applied via values.yaml files. This Meshery extension bridges the gap between Helm chart configurations and their visual representation by converting Helm charts into Kanvas Snapshots. These snapshots can be received either via email or as a URL displayed directly in the terminal."
  },
  {
    id: "helm-kanvas-snapshot",
    title: "Introducing the Helm Kanvas Snapshot Plugin",
    date: "April 16, 2025",
    category: "tech",
    content: `Explore the powerful [Helm Kanvas Snapshot plugin](https://meshery.io/extensions/helm-kanvas-snapshot) that enables versioning and rollback capabilities for your Kubernetes configurations. See how it simplifies configuration management and provides instant visualization of your cluster state changes.

**What Is the Helm Kanvas Snapshot Plugin?**

The Helm Kanvas Snapshot plugin is an extension for Helm — the de-facto package manager for Kubernetes — that integrates directly with Meshery's Kanvas visualisation platform. When you deploy or upgrade a Helm release, the plugin automatically captures a snapshot of the resulting cluster configuration and stores it as a visual, shareable Kanvas diagram.

**The Problem It Solves**

Helm charts are powerful, but their rendered output can be difficult to reason about. A single \`helm upgrade\` touching a microservices application can modify dozens of Kubernetes resources simultaneously. Without a visual record, answering the question "what exactly changed between releases?" often means diffing large blocks of YAML.

The Kanvas Snapshot plugin changes this by generating a topology diagram before and after each operation, giving you a side-by-side visual diff at the resource graph level.

**Key Features**

- **Automated snapshot capture**: Triggered automatically on \`helm install\`, \`helm upgrade\`, and \`helm rollback\`
- **Visual diff**: Highlights added, modified, and removed resources between snapshots
- **Rollback integration**: Link any snapshot to a specific Helm revision, enabling one-click rollback with full visual context
- **CLI and CI/CD support**: Can be run from the terminal or incorporated into GitHub Actions pipelines
- **Shareable URLs**: Each snapshot generates a persistent URL for sharing with team members or attaching to pull requests

**Getting Started**

Install the plugin with a single command:

\`\`\`bash
helm plugin install https://github.com/meshery/helm-kanvas-snapshot
\`\`\`

After installation, connect it to your Meshery instance by setting the \`MESHERY_TOKEN\` and \`MESHERY_SERVER\` environment variables. From that point on, every Helm operation in your terminal or CI pipeline will produce a visual snapshot automatically.

**Example Workflow**

1. Run \`helm upgrade my-app ./charts/my-app --set image.tag=v2.1.0\`
2. The plugin intercepts the post-install hook and renders the cluster topology
3. A URL to the Kanvas snapshot appears in your terminal output
4. Your team reviews the visual diff in the browser before merging the deploy PR

**Why It Matters for Teams**

The biggest win is communication. Instead of pointing colleagues at raw YAML diffs, you can share a URL that shows exactly how the cluster topology changed. This is particularly valuable during incident response, when time spent interpreting configuration is time not spent fixing problems.

The Helm Kanvas Snapshot plugin is open source and actively maintained as part of the broader Meshery ecosystem. Contributions are welcome at the [Meshery GitHub repository](https://github.com/meshery/meshery).`
  },
  {
    id: "visual-kubernetes-topology",
    title: "Ending Finger-pointing in Cloud Native Infrastructure Management with Layer5 Kanvas",
    date: "April 12, 2025",
    category: "tech",
    content: `Navigating the intricacies of cloud native infrastructure can often feel like solving a complex puzzle with multiple hands in the mix. Different teams, various tools, and constant updates can lead to confusion, miscommunication, and the dreaded "finger-pointing" when issues arise. Layer5 Kanvas is changing this narrative by fostering seamless collaboration between developers and operations teams.

**The Collaboration Gap in Cloud Native**

Traditional infrastructure management often involves siloed teams working with disconnected tools. This can lead to:

*   **Misunderstandings:** Different interpretations of infrastructure configurations.
*   **Delayed troubleshooting:** Difficulty in pinpointing issues due to a lack of shared context.
*   **Inefficient workflows:** Redundant tasks and communication overhead.

Layer5 Kanvas addresses these challenges head-on by providing a centralized, visual platform designed for collaborative infrastructure management.

**How Layer5 Kanvas Facilitates Collaboration**

1.  **Real-time Collaboration:** Like Google Workspace or Figma, Kanvas enables real-time collaboration on infrastructure designs. Multiple team members can work on the same diagram simultaneously, seeing each other's changes live. This eliminates confusion and ensures everyone is on the same page.
2.  **Visual Interface:** Kanvas provides a user-friendly, drag-and-drop interface for designing and visualizing cloud native infrastructure. This graphical representation makes it easy for developers, operators, and other stakeholders to understand the relationships between different components.
3.  **Centralized Platform:** Kanvas acts as a centralized platform for infrastructure design and management. This eliminates the need for disparate tools and provides a single source of truth for all infrastructure configurations.
4.  **Version Control:** Kanvas includes collaborative editing and version control features, allowing teams to track changes, revert to previous versions, and avoid conflicts.
5.  **Easy Identification:** The visual nature of Kanvas makes it easy to identify and understand complex infrastructure components, which simplifies troubleshooting and onboarding of new team members.
6.  **Design Patterns:** A catalog of ready-made blueprints for common infrastructure and application architectures is available, promoting best practices and streamlining the design process.
7.  **Kanvas Spaces:** Similar to Google Shared Drive, Kanvas Spaces provides a collaborative environment tailored for cloud-native infrastructure management.
8.  **Design Reviews:** Kanvas allows teams to collaboratively review and provide feedback on designs and prototypes.

**Benefits of Layer5 Kanvas**

By fostering collaboration, [Layer5 Kanvas](https://kanvas.new) offers numerous benefits:

*   **Reduced misunderstandings:** Shared visual context ensures everyone is aligned.
*   **Faster troubleshooting:** Easy identification and shared understanding of issues.
*   **Improved efficiency:** Streamlined workflows and reduced communication overhead.
*   **Enhanced teamwork:** Collaborative editing and version control promote teamwork.
*   **Better onboarding:** Visual representation simplifies understanding of complex infrastructure.

Kanvas is a multi-modal collaboration suite built atop one of the Cloud Native Computing Foundation’s highest velocity open source projects: Meshery. Kanvas’s two modes, Designer and Operator, offer declarative and imperative DevOps workflows, respectively. Both modes provide a visual interface for creating and managing complex cloud native infrastructure, expediting collaborative problem-solving, brainstorming and innovation, engineer onboarding, and auto-documented infrastructure. Importantly, Kanvas helps teams avoid finger-pointing and the blame-game by allowing them to be on the same page - literally.



Layer5 Kanvas is revolutionizing how teams manage cloud native infrastructure. By facilitating collaboration, it eliminates finger-pointing, improves efficiency, and empowers developers to work together more effectively.

Try dragging and dropping your Kubernetes manifest into [https://kanvas.new](https://kanvas.new) today and experience the future of collaborative infrastructure management.`
  },
  {
    id: "solar-power-australia",
    title: "Solar Power Revolution in Australia: From Rooftops to Grid",
    date: "June 14, 2025",
    category: "general",
    content: `Australia has emerged as one of the world's leading adopters of solar power technology, transforming how the nation generates and consumes electricity. With some of the highest solar irradiation levels globally and increasingly affordable technology, the Australian solar boom represents both an environmental success story and an economic transformation.

**The Numbers Tell the Story**

As of 2024, Australia boasts over 3.7 million residential solar installations, with approximately one in three homes featuring rooftop solar panels. This penetration rate is among the highest globally, driven by a combination of excellent solar resources, government incentives, and falling technology costs.

**Why Australia is Perfect for Solar**

Australia's geographic advantages for solar power are undeniable:

- **High Solar Irradiation**: Most of the continent receives 4-6 kWh/m² of solar energy daily
- **Large Open Spaces**: Ideal for utility-scale solar farms
- **Stable Weather Patterns**: Predictable sunshine hours for energy planning
- **Low Population Density**: Minimal shading and space constraints in many areas

**Economic Impact and Grid Integration**

The rapid adoption of solar has created both opportunities and challenges. On the positive side, household electricity bills have decreased significantly for solar adopters, with many homes achieving net-zero or even negative electricity costs. However, the grid infrastructure has had to adapt to handle distributed generation and the duck curve phenomenon.

**The Future Outlook**

With battery storage technology improving and costs falling, Australia is poised to become a leader in renewable energy integration. Virtual power plants, community solar gardens, and smart grid technologies are set to further revolutionize the energy landscape.

The Australian solar story demonstrates how the right combination of natural resources, policy support, and community adoption can drive a clean energy transition at remarkable speed and scale.`
  },
  {
    id: "university-sydney-demographics",
    title: "The Changing Face of the University of Sydney: A Demographic Evolution",
    date: "June 13, 2025",
    category: "general",
    content: `The University of Sydney, Australia's first university founded in 1850, has undergone a remarkable demographic transformation over its 175-year history. From its origins as an institution primarily serving white, male, and affluent students, USyd has evolved into one of the most diverse universities in the Southern Hemisphere.

**The Early Years: 1850-1960**

The university's early decades were characterized by exclusivity. Initially, admission was limited to white males from wealthy families, reflecting the social norms of colonial Australia. Women were not admitted until 1881, and even then, faced significant barriers and separate facilities. Indigenous Australians and students from non-European backgrounds were virtually absent from the campus for the first century of operation.

**The Whitlam Era and Accessibility: 1960s-1980s**

The 1960s marked the beginning of significant change. The introduction of need-based scholarships and the Whitlam Government's free university education policy in the 1970s dramatically opened access to working-class students. This period also saw the gradual breakdown of the "White Australia Policy," leading to increased enrollment of students from Asian backgrounds.

**International Student Boom: 1990s-2000s**

The 1990s brought another seismic shift with the international student program expansion. The university actively recruited students from Asia, particularly China, India, and Southeast Asia. By 2000, international students comprised nearly 30% of the total enrollment, fundamentally changing the campus atmosphere and academic programs.

**Modern Diversity: 2010-Present**

Today's University of Sydney is unrecognizable from its 1850 incarnation:

- **Gender Balance**: Women now comprise approximately 60% of undergraduate students
- **Cultural Diversity**: Students represent over 140 countries, with significant populations from China (largest international cohort), India, Singapore, and Malaysia
- **Indigenous Representation**: While still underrepresented, Indigenous student numbers have grown significantly through targeted support programs
- **Socioeconomic Diversity**: Students from low-SES backgrounds now make up about 20% of domestic enrollment

**Challenges and Future Directions**

Despite these advances, challenges remain. The university continues working to increase Indigenous representation, support first-generation university students, and maintain accessibility amid rising costs. The goal is not just diversity in numbers, but creating an inclusive environment where all students can thrive.

The University of Sydney's demographic evolution reflects broader changes in Australian society and demonstrates how institutions can transform while maintaining academic excellence.`
  },
  {
    id: "female-kangaroo-life",
    title: "The Matriarchal World of Kangaroos: Understanding Female Kangaroo Life",
    date: "June 12, 2025",
    category: "general",
    content: `In the fascinating world of Australian marsupials, female kangaroos lead remarkably different lives compared to their male counterparts. Understanding these differences reveals the complex social structures and survival strategies that have evolved over millions of years.

**The Burden and Power of Motherhood**

Female kangaroos, known as does or flyers, carry the primary responsibility for species continuation. Their reproductive system is uniquely adapted for Australia's harsh and unpredictable environment through a process called diapause - the ability to pause embryonic development during unfavorable conditions.

A female kangaroo can simultaneously be pregnant, nursing a joey in her pouch, and caring for a young-at-foot (a joey that has left the pouch but still nurses). This remarkable feat allows for continuous reproduction when conditions permit, maximizing survival chances for their offspring.

**Social Hierarchy and Group Dynamics**

Unlike males who often live solitary lives or in bachelor groups, females typically remain within family groups called mobs. These matriarchal societies are led by the oldest, most experienced female who guides the group to water sources and safe feeding areas.

Female kangaroos demonstrate sophisticated social intelligence:
- They form alliances with other females for mutual protection
- Share information about food sources and dangers
- Collectively care for young, with "aunties" often helping distressed joeys
- Maintain complex hierarchies based on age, experience, and maternal status

**Physical Differences and Adaptations**

Female kangaroos are typically smaller than males, but this size difference serves important purposes:

- **Energy Efficiency**: Smaller body size means lower energy requirements for pregnancy and lactation
- **Agility**: Greater maneuverability helps in escaping predators while carrying young
- **Longevity**: Females often live longer than males, reaching 12-18 years compared to males' 8-12 years

**Territorial Behavior and Range**

While male kangaroos compete aggressively for mating rights and dominance, females focus on securing and defending resources essential for raising young. They establish smaller but more stable home ranges centered around:

- Reliable water sources
- Nutritious grazing areas
- Safe shelter for vulnerable young
- Escape routes from predators

**Communication and Intelligence**

Female kangaroos display remarkable communication skills, using a combination of vocalizations, body language, and even soft clicking sounds to communicate with their joeys. Mothers can recognize their offspring's calls among dozens of other young kangaroos.

**Survival Strategies**

In times of extreme drought or food scarcity, females make difficult survival decisions. They may abandon or reject joeys to preserve their own lives and future reproductive potential - a harsh but evolutionarily sound strategy that ensures the continuation of their genetic line.

The life of a female kangaroo showcases nature's incredible adaptability and the profound responsibilities that come with ensuring species survival in one of the world's most challenging environments.`
  },
  {
    id: "worst-pancake-methods",
    title: "Kitchen Disasters: The Absolute Worst Ways to Make Pancakes",
    date: "June 11, 2025",
    category: "general",
    content: `Making pancakes should be simple - flour, eggs, milk, and heat. Yet somehow, ambitious home cooks have discovered remarkably creative ways to turn this breakfast staple into a kitchen catastrophe. Here are the most spectacularly wrong approaches to pancake making that you should absolutely avoid.

**The "More Heat = Better" Disaster**

Nothing says "I don't understand cooking" like cranking your stovetop to maximum heat and expecting perfect pancakes. This approach guarantees:
- Charcoal-black exteriors with raw, gooey centers
- Smoke alarms providing the breakfast soundtrack
- Pancakes that could double as hockey pucks
- A kitchen that smells like burnt regret for days

The science is simple: pancakes need gentle, even heat to cook through properly. High heat creates a temperature gradient so extreme that the outside burns before the inside even begins to set.

**The Overmixing Marathon Method**

Some people treat pancake batter like bread dough, mixing it for minutes until it achieves the consistency of rubber cement. This vigorous approach activates gluten proteins excessively, resulting in:
- Pancakes with the texture of chewable erasers
- Dense, flat discs that could stop bullets
- A breakfast experience that requires jaw exercises

Professional tip: lumpy batter is actually good batter. A few gentle stirs and you're done.

**The "Flip Every 30 Seconds" Technique**

Impatient cooks who flip their pancakes repeatedly create a breakfast version of whack-a-mole. This nervous energy approach leads to:
- Pancakes that never properly set on either side
- Batter flying across the kitchen like abstract art
- Broken, fragmented pancakes that look like geological sediment layers
- A stovetop that resembles a crime scene

**The Substitution Spectacular**

Creative cooks who decide to "improve" basic pancake recipes often venture into dangerous territory:
- Replacing flour with protein powder (creating rubber discs)
- Using sparkling water instead of milk (for inexplicably flat fizzy pancakes)
- Adding unusual liquids like energy drinks or coffee creamer
- Substituting baking powder with random kitchen chemicals

**The Batter Storage Nightmare**

Making pancake batter the night before and storing it in the refrigerator seems efficient but creates several problems:
- Baking powder loses its effectiveness
- Ingredients separate into unappetizing layers
- Flavors become muted and stale
- The mixture develops an unsettling gray color

**The Wrong Tool Arsenal**

Using inappropriate kitchen equipment for pancake making:
- Spatulas designed for grilling burgers (too large and unwieldy)
- Forks for flipping (creating Jackson Pollock-inspired batter splatter)
- Ice cream scoops for portion control (creating volcano-shaped monstrosities)
- Whisks for flipping (because someone clearly never learned kitchen tool purposes)

**The Timing Catastrophe**

Perhaps the worst pancake mistake is attempting to make them when you're already late for work, hosting a dinner party, or dealing with crying children. Pancakes require attention and patience - two things that evaporate under pressure.

**The Silver Lining**

The beautiful thing about pancake disasters is that they're educational. Every burnt, rubbery, or exploded pancake teaches valuable lessons about heat control, ingredient chemistry, and the importance of reading recipes completely before starting.

Plus, even the worst pancakes usually taste better than no pancakes, and there's always syrup to cover the evidence of your culinary crimes.

Remember: the perfect pancake is simple, patient, and forgiving. Treat the process with respect, and it will reward you with fluffy, golden breakfast perfection.`
  }
];

export const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/blog/${post.id}`;

  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <Button 
        variant="ghost" 
        className="mb-8" 
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
            }}
          >
            Share Post
          </Button>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown 
              components={{
                a: ({ node, ...props }) => (
                  <a 
                    {...props} 
                    className="text-blue-600 hover:text-blue-800 underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { blogPosts };
