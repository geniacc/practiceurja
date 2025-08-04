import React, { useState } from "react";
import "./Media.css";
import mediaImage1 from "../assets/media1.jpg";
import mediaImage2 from "../assets/media2.jpg";
import mediaImage3 from "../assets/media3.jpg";
import mediaImage4 from "../assets/media4.jpg";
import mediaImage5 from "../assets/media5.jpg";
import mediaImage6 from "../assets/media6.jpg";
import mediaImage7 from "../assets/media7.jpg";
import mediaImage8 from "../assets/media8.jpg";
import mediaImage9 from "../assets/media9.jpg";
import mediaB2CLaunch from "../assets/media-b2c-launch.jpg";

const mediaData = {
  news: [
    {
      title: "Urja Mobility launches B2C battery leasing programme in 10 cities",
      date: "January 20, 2025",
      image: mediaB2CLaunch,
      description:
        "Urja Mobility announced the launch of its B2C 'Smart Opex Model', targeting e-rickshaw drivers across 10 cities. The program converts high upfront battery costs into affordable monthly payments with an ownership transfer at the end of the lease.",
      link: "https://www.business-standard.com/companies/start-ups/urja-mobility-launches-b2c-battery-leasing-programme-in-10-cities-125012000707_1.html"
    },
    {
      title: "Urja Mobility Partners with Sieger Technologies to Revolutionize EV Battery Leasing",
      date: "January 9, 2025",
      image: mediaImage2,
      description:
        "In a strategic partnership, Urja Mobility announced a $1 million investment to deploy 2,500 advanced Lithium-Ion batteries from Sieger Technologies, enhancing their leasing model.",
      link: "https://emobilityplus.com/2025/01/09/urja-mobility-partners-with-sieger-technologies-to-revolutionize-ev-battery-leasing-with-1-million-investment/"
    },
    {
      title: "Urja Mobility Bags INR 100 Cr In A Mix Of Debt & Equity",
      date: "October 9, 2024",
      image: mediaImage3,
      description:
        "The EV battery leasing startup has raised INR 100 Cr in its pre-Series A funding round, led by Mufin Green Finance. The capital will be used to scale operations and expand its pay-per-use model.",
      link: "https://inc42.com/buzz/urja-mobility-bags-inr-100-cr-in-a-mix-of-debt-equity-to-lease-ev-batteries/"
    }
  ],
  announcements: [
    {
      title: "₹80 Cr Series B Funding Secured",
      date: "May 25, 2025",
      image: mediaImage4,
      description:
        "We’re thrilled to announce our ₹80 Cr Series B raise led by BluePeak Ventures. The funding will expand our network into 30+ cities, launch real-time grid balancing AI, and enable strategic hires to lead our technology and operations growth."
    },
    {
      title: "India’s Largest EV Swap Hub Opens in Pune",
      date: "May 10, 2025",
      image: mediaImage5,
      description:
        "Urja opened its largest swap station in Pune with 50+ smart bays and capacity for 1200 swaps/day. Fully solar-powered and equipped with automated scheduling, it will serve 1000+ active drivers daily."
    },
    {
      title: "Urja OS for Fleet Operators Launched",
      date: "April 28, 2025",
      image: mediaImage6,
      description:
        "We’ve launched Urja OS — an intelligent dashboard for fleet managers to monitor swap history, battery health, rider performance, and carbon savings in real time."
    }
  ],
  events: [
    {
      title: "EVCon 2025 – Bengaluru",
      date: "August 15, 2025",
      image: mediaImage7,
      description:
        "Urja Mobility unveiled its modular station and predictive battery health engine at EVCon. Our team led a panel on Battery-as-a-Service, with over 500 EV partners attending."
    },
    {
      title: "Smart Mobility Expo – Mumbai",
      date: "July 10, 2025",
      image: mediaImage8,
      description:
        "At the Urban Mobility Expo, Urja showcased its swap pods and announced new city partnerships. Over 3,000 industry attendees interacted with our team and explored our pilot vehicles and dashboard systems."
    },
    {
      title: "Webinar: Swapping Tech Roadmap",
      date: "June 30, 2025",
      image: mediaImage9,
      description:
        "We’re hosting a live session on the future of swapping — covering battery reuse, grid integration, and analytics. Open to all fleet operators and EV OEMs."
    }
  ]
};

const Card = ({ item, isExpanded, onToggleExpand, isFeatured = false }) => {
  const text = isExpanded
    ? item.description
    : item.description.slice(0, isFeatured ? 200 : 100) + (item.description.length > (isFeatured ? 200 : 100) ? "…" : "");

  return (
    <article className={`media-card ${isFeatured ? 'featured' : ''}`}>
      <div className="media-card-image-wrapper">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="media-card-content">
        <h4>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h4>
        <time>{item.date}</time>
        <p>
          {text}
          {item.description.length > (isFeatured ? 200 : 100) && (
            <button className="read-more" onClick={() => onToggleExpand(item.title)}>
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </article>
  );
};

export default function Media() {
  const [active, setActive] = useState("news");
  const [expandedTitle, setExpandedTitle] = useState(null);
  const sections = [
    { key: "news", label: "📰 News" },
    { key: "announcements", label: "📣 Announcements" },
    { key: "events", label: "📆 Events" }
  ];

  const toggleExpand = (title) => {
    setExpandedTitle((prev) => (prev === title ? null : title));
  };
  
  const activeData = mediaData[active] || [];
  const featuredItem = activeData[0];
  const subItems = activeData.slice(1);

  return (
    <section id="media" className="media-section">
      
      <div className="aurora-bg">
        <div className="aurora-shape shape-1"></div>
        <div className="aurora-shape shape-2"></div>
        <div className="aurora-shape shape-3"></div>
      </div>
      
      <div className="media-wrapper">
        <h2>In the Media</h2>
        <div className="tabs-list">
          {sections.map((sec) => (
            <button
              key={sec.key}
              className={`tab-btn ${active === sec.key ? "active" : ""}`}
              onClick={() => { setActive(sec.key); setExpandedTitle(null); }}
            >
              {sec.label}
            </button>
          ))}
        </div>

        <div className="media-layout" key={active}>
          {featuredItem && (
            <div className="featured-container">
              <Card item={featuredItem} isExpanded={expandedTitle === featuredItem.title} onToggleExpand={toggleExpand} isFeatured={true} />
            </div>
          )}
          <div className="sub-cards-container">
            {subItems.map((item) => (
              <Card item={item} key={item.title} isExpanded={expandedTitle === item.title} onToggleExpand={toggleExpand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}