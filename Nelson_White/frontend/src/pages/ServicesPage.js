// src/pages/ServicesPage.js
import React from 'react';

const ServicesPage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '40px', marginTop: '70px' }}>
      <h1>Our Services</h1>
      <p>
        In today’s rapidly evolving digital economy, businesses face the challenge of integrating sustainability with technological advancement. Our services address this by offering strategies that embed sustainable practices into daily operations, ensuring environmental and economic benefits. Additionally, as blockchain and decentralized finance revolutionize financial transactions, our customized advisory services help businesses adopt these technologies, enhancing security and operational efficiency.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <div style={{ flex: 1, padding: '20px', backgroundColor: 'gray', margin: '10px' }}>
          <h2>Innovation Consulting for Digital Transformation</h2>
          <p>
            Unlock your business’s full potential by embracing cutting-edge digital transformation strategies. We offer tailored innovation consulting to help you modernize your operations, streamline processes, and harness emerging technologies. Whether it's through Design Thinking workshops, business model innovation, or the integration of AI, blockchain, and IoT, we’ll guide your team in building comprehensive roadmaps for the future.
          </p>
          <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}>Book Now</button>
        </div>

        <div style={{ flex: 1, padding: '20px', backgroundColor: 'gray', margin: '10px' }}>
          <h2>Cryptocurrency and Blockchain Advisory</h2>
          <p>
            Step into the decentralized future with our expert cryptocurrency and blockchain advisory services. We help businesses navigate the complexities of the evolving crypto ecosystem, from understanding blockchain’s transformative impact to incorporating digital assets into your financial strategies.
          </p>
          <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}>Book Now</button>
        </div>

        <div style={{ flex: 1, padding: '20px', backgroundColor: 'gray', margin: '10px' }}>
          <h2>Strategic Business Development and Market Insight</h2>
          <p>
            Gain a competitive edge with data-driven strategies designed to expand your market presence. Our business development services help companies identify and capitalize on growth opportunities through detailed market research, competitor analysis, and go-to-market planning.
          </p>
          <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
