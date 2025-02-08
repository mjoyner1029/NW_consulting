import React from "react";

const services = [
  {
    title: "Innovation Consulting for Digital Transformation",
    price: "$TBD",
    description:
      "Unlock your business’s full potential by embracing cutting-edge digital transformation strategies. We offer tailored innovation consulting to help you modernize your operations, streamline processes, and harness emerging technologies. Whether it's through Design Thinking workshops, business model innovation, or the integration of AI, blockchain, and IoT, we’ll guide your team in building comprehensive roadmaps for the future.",
  },
  {
    title: "Cryptocurrency and Blockchain Advisory",
    price: "$TBD",
    description:
      "Step into the decentralized future with our expert cryptocurrency and blockchain advisory services. We help businesses navigate the complexities of the evolving crypto ecosystem, from understanding blockchain’s transformative impact to incorporating digital assets into your financial strategies. Our services cover everything from developing decentralized applications (dApps) to exploring cryptocurrency adoption.",
  },
  {
    title: "Strategic Business Development and Market Insight",
    price: "$TBD",
    description:
      "Gain a competitive edge with data-driven strategies designed to expand your market presence. Our business development services help companies identify and capitalize on growth opportunities through detailed market research, competitor analysis, and go-to-market planning. We specialize in creating partnerships, developing cross-industry strategies, and fostering customer engagement that drives revenue and builds brand reputation.",
  },
];

const ServicesPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <p>
        In today’s rapidly evolving digital economy, businesses face the challenge of integrating sustainability with technological advancement.
        Our services address this by offering strategies that embed sustainable practices into daily operations,
        ensuring environmental and economic benefits. Additionally, as blockchain and decentralized finance revolutionize financial transactions,
        our customized advisory services help businesses adopt these technologies, enhancing security and operational efficiency.
        Through data-led consulting practices, we facilitate the creation of innovative, user-focused solutions, enabling companies to meet changing market demands.
        Collectively, these services equip businesses to navigate the complexities of modern markets, fostering resilience and growth.
      </p>
      <div style={{ margin: "20px 0" }}>
        <img
          src="https://via.placeholder.com/800x300"
          alt="Our Services"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {services.map((service, index) => (
          <div key={index} style={{ flex: "1 1 300px", background: "#222", padding: "20px", borderRadius: "8px" }}>
            <h2>{service.title}</h2>
            <h3>{service.price}</h3>
            <p>{service.description}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
