import React from "react";
import {
  ChevronDown,
  Trophy,
  Heart,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./styles.css";

import logo from "./assets/logo2.png";

// track images
import track from "./assets/gjtrack.png";
import imiTrack from "./assets/imitrack.png";
import sbrTrack from "./assets/sbrtrack.png";

// sponsors
import s1 from "./assets/sponsors/s1.png";
import s1_5 from "./assets/sponsors/s1_5.png";
import s2 from "./assets/sponsors/s2.png";
import s3 from "./assets/sponsors/s3.png";
import s4 from "./assets/sponsors/s4.png";
import s5 from "./assets/sponsors/s5.png";
import s6 from "./assets/sponsors/s6.png";
import s7 from "./assets/sponsors/s7.png";

// --- CONFIGURATION ---
const DUES_URL = "https://rmminimoto.redpodium.com/2026-annual-membership";
const DONATION_URL = "https://rmminimoto.redpodium.com/donations-for-nationals";
const CONTACT_EMAIL = "info@rmminimoto.com";

// Gmail compose fallback (works even if mailto handler is weird)
const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@rmminimoto.com&su=RMMM%20Inquiry&body=Name%3A%0AEvent%3A%0AQuestion%3A%0A";

const EVENTS = [
  {
    id: "round-1",
    kicker: "Round One",
    title: "Grand Junction Motor Speedway",
    meta: "MAY 17TH • Grand Junction",
    url: "https://rmminimoto.redpodium.com/round-1-grand-junction-motor-speedway",
    trackSrc: track,
  },
  {
    id: "round-2",
    kicker: "Round Two",
    title: "SBR Motorsports Park",
    meta: "OPENS • April 1st",
    url: "https://rmminimoto.redpodium.com/round-2-sbr-motorsports-park-2026",
    trackSrc: sbrTrack,
  },
  {
    id: "round-3",
    kicker: "Round Three",
    title: "IMI Motorsports Park",
    meta: "July 21st • Dacono",
    // NOTE: this is the URL you provided earlier; replace if Round 3 has a different link.
    url: "https://rmminimoto.redpodium.com/round-3-imi-motorsports-park-2026",
    trackSrc: imiTrack,
  },
  {
    id: "round-4",
    kicker: "Round Four",
    title: "SBR Motorsports Park",
    meta: "August 30th • Calhan",
    url: "https://rmminimoto.redpodium.com/round-4-sbr-motorsports-park-2026",
    trackSrc: sbrTrack,
  },
  {
    id: "round-5",
    kicker: "Finals",
    title: "Grand Junction Motor Speedway",
    meta: "2026 • ALTITUDE INVITATIONAL",
    url: "https://rmminimoto.redpodium.com/round-5-grand-junction-motor-speedway-2026-altitude-invitational",
    trackSrc: track,
  },
];

const SPONSORS = [
  { src: s1, alt: "Sponsor 1" },
  { src: s1_5, alt: "Sponsor 1.5" },
  { src: s2, alt: "Sponsor 2" },
  { src: s3, alt: "Sponsor 3" },
  { src: s4, alt: "Sponsor 4" },
  { src: s5, alt: "Sponsor 5" },
  { src: s6, alt: "Sponsor 6" },
  { src: s7, alt: "Sponsor 7" },
];

export default function App() {
  const openUrl = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollSliderBy = (dir) => {
    const slider = document.getElementById("reg-slider");
    if (!slider) return;
    slider.scrollBy({ left: dir * slider.clientWidth, behavior: "smooth" });
  };

  // Mailto that works even if anchor click gets weird:
  const openEmail = () => {
    const mailto =
      "mailto:" +
      CONTACT_EMAIL +
      "?subject=RMMM%20Inquiry&body=Name%3A%0AEvent%3A%0AQuestion%3A%0A";
    window.location.href = mailto;
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
      {/* REGISTER (Swipe/Click Slider) */}
      <section className="reg2" id="register">
        <div className="reg2SliderWrap">
          <div className="reg2Slider" id="reg-slider" aria-label="Event slides">
            {EVENTS.map((ev) => (
              <div className="reg2Slide" id={ev.id} key={ev.id}>
                <div className="reg2Left">
                  <div className="reg2Kicker">{ev.kicker}</div>
                  <h1 className="reg2Title">{ev.title}</h1>
                  <div className="reg2Meta">{ev.meta}</div>

                  <button
                    className="btn2 btn2--primary"
                    onClick={() => openUrl(ev.url)}
                  >
                    Register Now <ExternalLink size={18} />
                  </button>

                  <div className="notePill">Enter For Your Chance To Win</div>
                </div>

                <div className="reg2Right">
                  <div className="trackCard">
                    <div className="trackCardTop">
                      <div className="trackTag">Track Layout</div>
                    </div>

                    <div className="trackOutline" aria-label="Track layout">
                      <img
                        className="trackImg"
                        src={ev.trackSrc || track}
                        alt="Track layout"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reg2SwipeHint">
            Swipe / Click arrows
            <span className="reg2Dots" aria-hidden="true">
              <span className="reg2Dot isActive" />
              <span className="reg2Dot" />
              <span className="reg2Dot" />
              <span className="reg2Dot" />
              <span className="reg2Dot" />
            </span>
          </div>

          <button
            type="button"
            className="regNavBtn isLeft"
            aria-label="Previous event"
            onClick={() => scrollSliderBy(-1)}
            style={{ left: "14px" }}
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            className="regNavBtn isRight"
            aria-label="Next event"
            onClick={() => scrollSliderBy(1)}
            style={{ right: "14px" }}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </section>
      {/* PRICING BAR */}
      <div className="priceBar" aria-label="Pricing bar">
        <div className="priceBarInner">
          <div className="priceNugget priceNugget--center">
            <div>
              <div className="priceLabel">Annual Dues</div>
              <div className="priceValue">$125</div>
              <div className="priceNote">Full Season</div>
            </div>

            <button className="priceBtn" onClick={() => openUrl(DUES_URL)}>
              PAY DUES <ExternalLink size={16} />
            </button>
          </div>

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

          <a
            className="btn2 btn2--accent"
            href={DONATION_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Heart size={20} fill="white" /> Donate to the Fund
          </a>
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

      <section className="contactSection" id="contact">
        <div className="contactInner">
          <div className="reg2Kicker">Contact</div>
          <h2 style={{ margin: 0 }}>Questions? Email Us</h2>

          {/* Single button: opens Gmail compose */}
          <a
            className="btn2 btn2--primary"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@rmminimoto.com&su=RMMM%20Inquiry&body=Name%3A%0AEvent%3A%0AQuestion%3A%0A"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: "1.25rem" }}
          >
            admin@rmminimoto.com <ExternalLink size={18} />
          </a>
        </div>
      </section>
      {/* Sticky mobile CTA */}
      <div className="sticky2">
        <button
          className="btn2 btn2--primary btn2--sticky"
          onClick={() => openUrl(EVENTS[0].url)}
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
      </footer>
    </div>
  );
}
