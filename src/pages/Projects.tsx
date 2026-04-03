
const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Meshery</h2>
          <p className="text-muted-foreground">
            As a self-service engineering platform, Meshery enables collaborative design and operation of cloud and cloud native infrastructure.
          </p>
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Latest announcement
            </p>
            <h3 className="mt-2 text-lg font-semibold">Meshery v1.0 is generally available</h3>
            <p className="mt-2 text-muted-foreground">
              Announced at KubeCon + CloudNativeCon Europe 2026, Meshery v1.0 introduces
              Infrastructure as Design with Kanvas Designer in general availability and
              Kanvas Operator in beta, giving teams a visual governance layer for cloud
              native infrastructure.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Visual, collaborative reviews for infrastructure changes</li>
              <li>Multi-cluster design and operations from a shared workspace</li>
              <li>New Certified Meshery Contributor program for the community</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a
                href="https://meshery.io/blog/meshery-v1.0-general-availability/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 purple hover:underline"
              >
                Read the announcement
              </a>
              <a
                href="https://github.com/meshery/meshery/releases/tag/v1.0.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 purple hover:underline"
              >
                View release notes
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Computer Vision Research - University of Sydney</h2>
          <p className="text-muted-foreground">
          Graduate research project focusing on advanced computer vision techniques for real-time object detection and classification in complex environments, conducted at the University of Sydney's School of Computer Science.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Graphic Design & UX Impact Study</h2>
          <p className="text-muted-foreground">
          Comprehensive analysis of how graphic design principles influence user experience outcomes, examining the intersection of visual aesthetics and usability in digital interfaces.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Visual Topology Rendering Performance</h2>
          <p className="text-muted-foreground">
          Research and development of high-performance algorithms for rendering complex visual topologies, focusing on optimization techniques for large-scale network visualization and interactive graph displays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
