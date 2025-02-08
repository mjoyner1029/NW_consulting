import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const portfolios = [
  {
    title: "Nurture Nest : Conservative Portfolio",
    description:
      "This portfolio is designed for those who seek stability in the volatile world of cryptocurrencies. It focuses on well-established and less volatile digital assets, offering a balanced approach to secure value while participating in crypto growth.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Nurture Nest : Moderate Portfolio",
    description:
      "This portfolio offers a blend of stability and growth, ideal for investors who want more exposure to innovative and emerging blockchain platforms while still maintaining some security with established assets.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Nurture Nest : Aggressive Portfolio",
    description:
      "This portfolio targets high-risk, high-reward assets. It’s designed for investors with a strong risk tolerance, who are looking to capitalize on the rapid growth of speculative and meme-based cryptocurrencies.",
    image: "https://via.placeholder.com/300x200",
  },
];

const PortfolioPage = () => {
  const [apiKey, setApiKey] = useState("");
  const [portfolioData, setPortfolioData] = useState(null);
  const [socketData, setSocketData] = useState(null);

  const handleFetchPortfolio = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/portfolio-data", {
        headers: { "x-api-key": apiKey },
      });
      setPortfolioData(response.data);
    } catch (error) {
      console.error("Error fetching portfolio data", error);
    }
  };

  // Setup WebSocket connection for live updates
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("portfolio_update", (data) => {
      setSocketData(data);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {portfolios.map((portfolio, index) => (
        <div key={index} style={{ marginBottom: "40px" }}>
          <h2>{portfolio.title}</h2>
          <p>{portfolio.description}</p>
          <img src={portfolio.image} alt={portfolio.title} style={{ width: "300px" }} />
        </div>
      ))}

      <div style={{ marginTop: "40px" }}>
        <h3>Embed CEO's Portfolio Graph</h3>
        <input
          type="text"
          placeholder="Enter API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
        <button onClick={handleFetchPortfolio} style={{ marginLeft: "10px" }}>
          Load Graph (via REST)
        </button>
        {portfolioData && (
          <div style={{ marginTop: "20px", background: "#222", padding: "20px" }}>
            <pre style={{ color: "white" }}>{JSON.stringify(portfolioData, null, 2)}</pre>
          </div>
        )}
        {socketData && (
          <div style={{ marginTop: "20px", background: "#333", padding: "20px" }}>
            <h4>Live Portfolio Update (WebSocket):</h4>
            <pre style={{ color: "white" }}>{JSON.stringify(socketData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
