import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero-section-second">
        <div className="overlay"></div>
        <div className="content">
          <h1>About Us</h1>
          <Link href="/">Home</Link>
          <Link href="/about-us">{" > "}About Us</Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="intro-card">
            <div className="intro-header">
              <h2 className="intro-title">Aegis Gate International</h2>
              <p className="intro-tagline">Parts • Power • Industrial Solutions</p>
            </div>
            <div className="intro-content">
              <p className="intro-text">
                Aegis Gate International is a multinational sourcing and supply company focused on heavy equipment ecosystems and industrial components, not on selling complete vehicles.
              </p>
              <p className="intro-text">
                We support construction fleets, industrial operators, railway projects, and civil aviation by providing:
              </p>
              <div className="services-grid">
                <div className="service-item">
                  <span>Specialized spare parts and accessories</span>
                </div>
                <div className="service-item">
                  <span>Diesel engines for vehicles and machinery</span>
                </div>
                <div className="service-item">
                  <span>Diesel generators and power units</span>
                </div>
                <div className="service-item">
                  <span>Railway, industrial, and civil-use aviation components</span>
                </div>
              </div>
              <p className="intro-text">
                Aegis Gate International is structured through international hubs across key markets, enabling us to serve clients in the Middle East, Africa, Europe, and Asia. We work with vetted manufacturers and production partners, and we manage the entire journey from technical specification and supplier selection to inspection, packing, and delivery.
              </p>
              <div className="mission-statement">
                <p>Our role is simple: We connect serious projects with serious suppliers — reliably, quietly, and professionally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="about-section-alt">
        <div className="about-container">
          <h2 className="section-title-modern">Company Overview</h2>
          <div className="overview-cards">
            <div className="overview-card">
              <h3>Global Reach</h3>
              <p>Aegis Gate International (AGI) is a multinational sourcing and supply company focused on heavy equipment ecosystems and industrial components. We support construction fleets, industrial operators, railway projects, and civil aviation through the supply of spare parts, accessories, diesel engines, and diesel generators.</p>
            </div>
            <div className="overview-card">
              <h3>Trusted Partnerships</h3>
              <p>Working with vetted manufacturers and partners across key regions, we manage the full journey from technical specification and sourcing to quality control and delivery, giving clients a single, reliable point of contact for complex, multi-category requirements.</p>
            </div>
            <div className="overview-card">
              <h3>International Operations</h3>
              <p>We operate through an international structure serving the Middle East, Africa, Europe, and Asia, coordinating multi-origin shipments and project-based deliveries to match our clients' timelines and standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title-modern">Competitive Advantages</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <h3>Heavy Equipment & Powertrain Focus</h3>
              <p>Specialization in supporting construction trucks, off-highway machinery, and industrial vehicles with critical parts, accessories, engines, and power solutions.</p>
            </div>
            <div className="advantage-card">
              <h3>Specification-Driven Sourcing</h3>
              <p>All supplies are matched to defined technical standards, operating conditions, and project requirements to ensure compatibility and reliability.</p>
            </div>
            <div className="advantage-card">
              <h3>Multi-Sector Coverage</h3>
              <p>Integrated offering across heavy equipment support, railway systems, industrial manufacturing & aluminum systems, and civil-use aviation parts.</p>
            </div>
            <div className="advantage-card">
              <h3>Vetted Global Network</h3>
              <p>Access to audited manufacturers and logistics partners, enabling competitive pricing, consistent quality, and flexible lead times.</p>
            </div>
            <div className="advantage-card">
              <h3>End-to-End Supply Support</h3>
              <p>From RFQ and technical matching to inspection, packing, and shipment coordination, with a strong focus on documentation and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Divisions Section */}
      <section className="about-section-alt">
        <div className="about-container">
          <h2 className="section-title-modern">Core Business Divisions</h2>
          <div className="divisions-container">
            <div className="division-card">
              <div className="division-number">01</div>
              <h3>Heavy Equipment Parts & Power Solutions</h3>
              <p className="division-subtitle">We support construction fleets and industrial operations with:</p>
              <ul className="division-list">
                <li>Specialized spare parts and accessories for construction trucks, off-highway machinery, and industrial vehicles</li>
                <li>Diesel engines for commercial vehicles, construction equipment, and heavy-duty applications</li>
                <li>Diesel generators and power units matched to required power output and duty cycle</li>
                <li>Guidance on critical spares and maintenance planning to improve uptime and control lifecycle cost</li>
              </ul>
            </div>

            <div className="division-card">
              <div className="division-number">02</div>
              <h3>Heavy Machinery Tools, Attachments & Accessories</h3>
              <ul className="division-list">
                <li>Workshop and service tools for maintaining construction and industrial machinery</li>
                <li>Attachments and working tools (such as buckets, breakers, rippers, forks, and grapples) to maximize fleet productivity</li>
                <li>Hydraulic components, protection, and wear parts for harsh operating environments</li>
                <li>Storage, shutters, and enclosure systems for tools and parts on service trucks and sites</li>
              </ul>
            </div>

            <div className="division-card">
              <div className="division-number">03</div>
              <h3>Railway Systems & Track Materials</h3>
              <ul className="division-list">
                <li>Rails and grooved rails manufactured to international standards</li>
                <li>Turnouts, crossings, and track hardware designed for defined axle loads and speeds</li>
                <li>Project-based supply including inspection, packing, and mill-to-site logistics</li>
              </ul>
            </div>

            <div className="division-card">
              <div className="division-number">04</div>
              <h3>Industrial Manufacturing & Aluminum Systems</h3>
              <ul className="division-list">
                <li>Aluminum profiles, shutters, and enclosures for commercial and residential applications</li>
                <li>Torsion springs and related hardware for shutters, doors, and industrial mechanisms</li>
                <li>Custom metal components and assemblies for integration into client products and projects</li>
              </ul>
            </div>

            <div className="division-card">
              <div className="division-number">05</div>
              <h3>Civil Aviation Spare Parts (Civil-Use)</h3>
              <ul className="division-list">
                <li>Certified spare parts and LRUs for civil and commercial aircraft</li>
                <li>Rotables, expendables, and consumables aligned with operator part-number requirements</li>
                <li>Consolidated supply for Maintenance, Repair, and Overhaul (MRO) activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="partnership-card">
            <h2 className="section-title-modern">Partnership Approach</h2>
            <p className="partnership-text">
              Aegis Gate International positions itself as a long-term technical and commercial partner, not just a supplier. Our goal is to help clients reduce downtime, protect assets, and optimize lifecycle cost through the right combination of parts, engines, tools, and project-based supply solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Execution Plan Section */}
      <section className="about-section-alt">
        <div className="about-container">
          <h2 className="section-title-modern">Our Plan of Execution</h2>
          <p className="execution-intro">
            To translate our vision and mission into reality, Aegis Gate International follows a clear, practical execution plan built around four pillars:
          </p>
          <div className="execution-block">
            <div className="execution-step">
              <div className="execution-step-header">
                <div className="execution-number">1</div>
                <h3>Client-Focused, Specification-Driven Approach</h3>
              </div>
              <ul className="execution-list">
                <li>Start with understanding the application, operating conditions, and technical requirements – not just the part number</li>
                <li>Work closely with clients to clarify specifications, standards, and constraints (performance, environment, budget, lead time)</li>
                <li>Propose options and scenarios where needed (OEM, OEM-equivalent, or high-quality alternatives) so the client can choose the most suitable solution</li>
              </ul>
            </div>

            <div className="execution-step">
              <div className="execution-step-header">
                <div className="execution-number">2</div>
                <h3>Vetted Supplier Network & Quality Control</h3>
              </div>
              <ul className="execution-list">
                <li>Maintain a vetted network of manufacturers and industrial partners for heavy equipment, rail, industrial, and aviation components</li>
                <li>Prioritize suppliers with proven quality, documentation, and export experience</li>
                <li>Ensure standards compliance and traceability where applicable, especially for safety-critical components</li>
              </ul>
            </div>

            <div className="execution-step">
              <div className="execution-step-header">
                <div className="execution-number">3</div>
                <h3>End-to-End Sourcing & Logistics Management</h3>
              </div>
              <ul className="execution-list">
                <li>Handle the full flow from RFQ → quotation → order → production → inspection → packing → shipment</li>
                <li>Coordinate multi-origin shipments and project-based deliveries aligned with site requirements and timelines</li>
                <li>Provide clear documentation, including packing lists, certificates, test reports (when applicable), and shipping documents</li>
              </ul>
            </div>

            <div className="execution-step">
              <div className="execution-step-header">
                <div className="execution-number">4</div>
                <h3>Long-Term Partnership & Continuous Improvement</h3>
              </div>
              <ul className="execution-list">
                <li>Treat every project as the foundation of a long-term relationship, not a one-off transaction</li>
                <li>Track feedback on performance, delivery, and product quality to refine our supplier base and offerings</li>
                <li>Work with clients to optimize critical spares, maintenance planning, and power solutions over time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
