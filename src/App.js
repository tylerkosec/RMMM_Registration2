import React from "react";
import { ChevronDown, Trophy, Heart, ExternalLink } from "lucide-react";

import "./styles.css";

import logo from "./assets/logo2.png";
import track from "./assets/gjtrack.png";

import s1 from "./assets/sponsors/s1.png";
import s2 from "./assets/sponsors/s2.png";
import s3 from "./assets/sponsors/s3.png";
import s4 from "./assets/sponsors/s4.png";
import s5 from "./assets/sponsors/s5.png";
import s6 from "./assets/sponsors/s6.png";
import s7 from "./assets/sponsors/s7.png";

// --- CONFIGURATION ---
const REGISTER_URL =
  "https://rmminimoto.redpodium.com/round-1-grand-junction-motor-speedway";
const DUES_URL = "https://rmminimoto.redpodium.com/2026-annual-membership";
const DONATION_URL = "https://YOUR-DONATION-LINK";
const CONTACT_EMAIL = "info@rmminimoto.com"; // change if needed

const SPONSORS = [
  { src: s1, alt: "Sponsor 1" },
  { src: s2, alt: "Sponsor 2" },
  { src: s3, alt: "Sponsor 3" },
  { src: s4, alt: "Sponsor 4" },
  { src: s5, alt: "Sponsor 5" },
  { src: s6, alt: "Sponsor 6" },
  { src: s7, alt: "Sponsor 7" },
];

export default function App() {
  const openRegister = () =>
    window.open(REGISTER_URL, "_blank", "noopener,noreferrer");

  const openDues = () => window.open(DUES_URL, "_blank", "noopener,noreferrer");

  const openDonation = () =>
    window.open(DONATION_URL, "_blank", "noopener,noreferrer");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rmmm-app">
      {/* HERO */}
      <header className="hero2">
        <div className="hero2Overlay" />

        <div className="hero2Inner">
          <div className="hero2LogoWrap" aria-label="RMMM logo">
            <img
              className="heroLogoImg"
              src={logo}
              alt="Rocky Mountain Mini Moto"
            />
          </div>

          <div
            className="hero2Arrow"
            onClick={() => scrollToSection("register")}
            role="button"
            tabIndex={0}
          >
            <div
              style={{
                fontSize: "0.9rem",
                letterSpacing: "2px",
                marginBottom: "0.5rem",
              }}
            >
              REGISTRATION NOW OPEN
            </div>
            <ChevronDown size={32} color="red" />
          </div>
        </div>
      </header>

      {/* REGISTER */}
      <section className="reg2" id="register">
        <div className="reg2Left">
          <div className="reg2Kicker">Round One</div>
          <h1 className="reg2Title">Grand Junction Motor Speedway</h1>
          <div className="reg2Meta">MAY 17TH • Grand Junction</div>

          <button className="btn2 btn2--primary" onClick={openRegister}>
            Register Now <ExternalLink size={18} />
          </button>

          <div className="notePill">Opens in Red Podium • New tab</div>
        </div>

        <div className="reg2Right">
          <div className="trackCard">
            <div className="trackCardTop">
              <div className="trackTag">GJ Motor Speedway Track</div>
            </div>

            <div className="trackOutline" aria-label="Track layout">
              <img
                className="trackImg"
                src={track}
                alt="Grand Junction track layout"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING BAR */}
      <div className="priceBar" aria-label="Pricing bar">
        <div className="priceBarInner">
          {/* Annual Dues */}
          <div className="priceNugget priceNugget--center">
            <div>
              <div className="priceLabel">Annual Dues</div>
              <div className="priceValue">$125</div>
              <div className="priceNote">Full Season</div>
            </div>

            <button className="priceBtn" onClick={openDues}>
              PAY DUES <ExternalLink size={16} />
            </button>
          </div>

          {/* Race Weeks */}
          <div className="priceNugget">
            <div>
              <div className="priceLabel">Race Weeks</div>

              <div className="priceStack">
                <div className="priceValue">
                  $125 <span className="priceSub">1 Class</span>
                </div>
                <div className="priceValue">
                  $140 <span className="priceSub">2+ Classes</span>
                </div>
                <div className="priceValue priceValue--late">
                  +$50 <span className="priceSub">Late Registration</span>
                </div>
              </div>
            </div>

            <div className="priceBadge">
              OUT OF STATE <span>50% OFF</span>
            </div>
          </div>

          {/* Transponder */}
          <div className="priceNugget priceNugget--center">
            <div>
              <div className="priceLabel">Transponder</div>
              <div className="priceValue">
                $30 <span className="priceSub">/ Race</span>
              </div>

              <div className="priceNote">
                Required for all scored classes.
                <br />
                Rentals available at the track.
              </div>
            </div>

            <div className="priceSpacer" />
          </div>
        </div>
      </div>

      {/* DONATIONS */}
      <div className="donation-section">
        <Trophy className="donation-bg-icon" />
        <div className="donation-content">
          <div className="donation-kicker">Support the Team</div>
          <h2 className="donation-title">Help Us Get To Nationals</h2>

          <p
            className="copy copy--dark copy--lead"
            style={{ marginBottom: "2rem" }}
          >
            <span className="hl">
              Every donation helps transport bikes, gear, and riders to the
              starting line. Join the team behind the team.
            </span>
          </p>

          <button className="btn2 btn2--accent" onClick={openDonation}>
            <Heart size={20} fill="white" /> Donate to the Fund
          </button>
        </div>
      </div>

      {/* SPONSORS */}
      <section className="sponsors-section">
        <div className="reg2Kicker">Our Partners</div>
        <h2 style={{ fontSize: "2rem" }}>Official Sponsors</h2>

        <div className="sponsors-row">
          {SPONSORS.map((s, i) => (
            <div key={i} className="sponsor-card">
              <img className="sponsor-img" src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="sticky2">
        <button
          className="btn2 btn2--primary btn2--sticky"
          onClick={openRegister}
        >
          Register Now →
        </button>
      </div>

      {/* FOOTER */}
      <footer className="siteFooter">
        <a
          className="footerLink"
          href="https://tylerkosec.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website created by Tyler Kosec
        </a>

        <div className="footerCtas">
          <a className="footerBtn" href={`mailto:${CONTACT_EMAIL}`}>
            Contact <ExternalLink size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
