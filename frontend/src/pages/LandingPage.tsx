/**
 * LandingPage Component
 * Premium, high-converting product landing page for Presenova
 * Inspired by modern AI SaaS aesthetics (Canva, Linear, Vercel).
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<'analyzer' | 'speech' | 'vision' | 'rewriter'>('analyzer');

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Background Decorative Ambient Aurora Glows */}
      <div className="aurora-glow aurora-1" aria-hidden="true" />
      <div className="aurora-glow aurora-2" aria-hidden="true" />
      <div className="aurora-glow aurora-3" aria-hidden="true" />

      {/* ===== HEADER NAVIGATION ===== */}
      <header className="landing-header">
        <div className="landing-header-container">
          <Link to="/" className="landing-brand">
            <span className="brand-icon">✦</span>
            <span className="brand-name">Presenova</span>
            <span className="brand-badge">AI</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="landing-nav-links">
            <button onClick={() => scrollToSection('features')} className="landing-nav-link">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="landing-nav-link">How It Works</button>
            <button onClick={() => scrollToSection('preview')} className="landing-nav-link">Live Preview</button>
            <button onClick={() => scrollToSection('testimonials')} className="landing-nav-link">Testimonials</button>
            <Link to="/download" className="landing-nav-link">Download App</Link>
          </nav>

          {/* Desktop Auth CTAs */}
          <div className="landing-auth-actions">
            {isAuthenticated ? (
              <div className="authenticated-user-pill">
                <Link to="/analytics" className="dashboard-cta-btn">
                  <span>Dashboard</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login" className="login-link-btn">Log In</Link>
                <Link to="/login" className="get-started-btn">
                  <span>Get Started Free</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`landing-hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </button>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="landing-mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
        )}
        <div className={`landing-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-top">
            <div className="landing-brand">
              <span className="brand-icon">✦</span>
              <span className="brand-name">Presenova</span>
            </div>
            <button className="close-drawer-btn" onClick={() => setMobileMenuOpen(false)}>✕</button>
          </div>

          <div className="mobile-drawer-links">
            <button onClick={() => scrollToSection('features')} className="mobile-link-item">
              <span className="icon">✨</span> Features & Tools
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="mobile-link-item">
              <span className="icon">⚡</span> How It Works
            </button>
            <button onClick={() => scrollToSection('preview')} className="mobile-link-item">
              <span className="icon">📊</span> Interactive Preview
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="mobile-link-item">
              <span className="icon">💬</span> Testimonials
            </button>
            <Link to="/download" className="mobile-link-item" onClick={() => setMobileMenuOpen(false)}>
              <span className="icon">📱</span> Download Apps (Desktop/APK)
            </Link>
          </div>

          <div className="mobile-drawer-bottom">
            {isAuthenticated ? (
              <Link to="/analytics" className="mobile-cta-btn" onClick={() => setMobileMenuOpen(false)}>
                Go to Dashboard →
              </Link>
            ) : (
              <div className="mobile-auth-stack">
                <Link to="/login" className="mobile-login-btn" onClick={() => setMobileMenuOpen(false)}>
                  Log In
                </Link>
                <Link to="/login" className="mobile-cta-btn" onClick={() => setMobileMenuOpen(false)}>
                  Get Started Free →
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Next-Gen Presentation Intelligence Ecosystem</span>
          </div>

          <h1 className="hero-title">
            Master Every Presentation with <span className="gradient-text">Real-Time AI Coaching</span>
          </h1>

          <p className="hero-subtitle">
            Presenova audits your slide decks, coaches your speech delivery live, analyzes body posture and eye contact via computer vision, and rewrites slides into executive-ready masterpieces.
          </p>

          <div className="hero-cta-group">
            {isAuthenticated ? (
              <Link to="/analytics" className="cta-primary-btn">
                <span>Enter Your Dashboard</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ) : (
              <Link to="/login" className="cta-primary-btn">
                <span>Start Coaching For Free</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            )}

            <button onClick={() => scrollToSection('preview')} className="cta-secondary-btn">
              <span className="play-icon">▶</span>
              <span>Watch Interactive Demo</span>
            </button>
          </div>

          {/* Social Proof & Metrics Bar */}
          <div className="hero-metrics-bar">
            <div className="metric-item">
              <span className="metric-value">98.4%</span>
              <span className="metric-label">Speaker Confidence Gain</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-item">
              <span className="metric-value">6-in-1</span>
              <span className="metric-label">Integrated AI Tools</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-item">
              <span className="metric-value">&lt; 150ms</span>
              <span className="metric-label">Live Telemetry Latency</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-item">
              <span className="metric-value">100%</span>
              <span className="metric-label">Free &amp; Open Ecosystem</span>
            </div>
          </div>
        </div>

        {/* ===== HERO INTERACTIVE PRODUCT MOCKUP ===== */}
        <div className="hero-mockup-wrapper">
          <div className="mockup-frame">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="mockup-search-bar">
                <span className="lock-icon">🔒</span>
                <span>presenova.ai/live-session/presentation-defense</span>
              </div>
              <div className="mockup-live-indicator">
                <span className="live-dot"></span>
                <span>LIVE TELEMETRY</span>
              </div>
            </div>

            <div className="mockup-body">
              <div className="mockup-grid">
                {/* Left: Live Feedback Panel */}
                <div className="mockup-panel mockup-vision-panel">
                  <div className="video-simulation">
                    <div className="vision-overlay-box">
                      <span className="vision-tag">Head &amp; Posture Tracking: Centered (97%)</span>
                      <span className="vision-eye">Eye Contact: Direct (94%)</span>
                    </div>
                    <div className="camera-avatar">
                      <span className="avatar-icon">👤</span>
                      <span className="avatar-caption">Live Camera Stream Simulation</span>
                    </div>
                    <div className="vision-hud">
                      <div className="hud-badge success">Posture: Confident &amp; Upright</div>
                      <div className="hud-badge pulse">Voice Stability: Optimal</div>
                    </div>
                  </div>
                </div>

                {/* Right: Live Telemetry Metrics */}
                <div className="mockup-panel mockup-metrics-panel">
                  <div className="metric-card-mini score-card">
                    <span className="card-label">Overall Delivery Score</span>
                    <div className="score-flex">
                      <span className="big-score">94</span>
                      <span className="score-total">/ 100</span>
                      <span className="score-chip">+8% vs last rehearsal</span>
                    </div>
                  </div>

                  <div className="metric-card-mini">
                    <div className="metric-row">
                      <span className="card-label">Speaking Pace</span>
                      <span className="metric-val highlight-green">138 WPM (Optimal)</span>
                    </div>
                    <div className="pace-meter-bar">
                      <div className="pace-fill" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  <div className="metric-card-mini">
                    <div className="metric-row">
                      <span className="card-label">Filler Words Detected</span>
                      <span className="metric-val highlight-cyan">0 &quot;um&quot; / &quot;ah&quot;</span>
                    </div>
                  </div>

                  <div className="metric-card-mini live-coach-tip">
                    <span className="tip-spark">💡</span>
                    <div className="tip-text">
                      <strong>Coach Insight:</strong> &quot;Great vocal modulation in the problem statement. Maintain this steady pause before advancing to slide 4.&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENTO GRID FEATURES SECTION ===== */}
      <section id="features" className="features-section">
        <div className="section-header">
          <div className="section-badge">Everything You Need</div>
          <h2 className="section-title">An Entire Speech &amp; Presentation Studio</h2>
          <p className="section-subtitle">
            From slide decks to live keynote delivery, Presenova combines computer vision, speech analytics, and LLM reasoning to make you an unforgettable speaker.
          </p>
        </div>

        <div className="bento-grid">
          {/* Bento Card 1: Document Analyzer (Span 2) */}
          <div className="bento-card bento-wide card-analyzer">
            <div className="bento-glow" />
            <div className="bento-badge">Multi-Format Audit</div>
            <div className="bento-icon-wrapper">
              <span className="bento-icon">📄</span>
            </div>
            <h3 className="bento-title">Document &amp; Slide Deck Analyzer</h3>
            <p className="bento-desc">
              Upload your PPTX, PDF, or Word slides. Our multi-agent AI audits structural flow, persuasion hierarchy, slide cognitive load, and grammar in seconds.
            </p>
            <div className="bento-visual-preview">
              <div className="mini-stat-pill">✓ Structure: 95%</div>
              <div className="mini-stat-pill">✓ Audience Clarity: 92%</div>
              <div className="mini-stat-pill">✓ Persuasive Flow: 90%</div>
            </div>
          </div>

          {/* Bento Card 2: Speech Analyzer */}
          <div className="bento-card card-speech">
            <div className="bento-glow" />
            <div className="bento-badge">Vocal Telemetry</div>
            <div className="bento-icon-wrapper">
              <span className="bento-icon">🎙️</span>
            </div>
            <h3 className="bento-title">Audio &amp; Speech Analyzer</h3>
            <p className="bento-desc">
              Detect every filler word (&quot;um&quot;, &quot;like&quot;, &quot;basically&quot;), track words per minute (WPM), analyze cadence, and view interactive pitch waveforms.
            </p>
          </div>

          {/* Bento Card 3: Live Vision Coach */}
          <div className="bento-card card-vision">
            <div className="bento-glow" />
            <div className="bento-badge">Computer Vision</div>
            <div className="bento-icon-wrapper">
              <span className="bento-icon">📡</span>
            </div>
            <h3 className="bento-title">Real-Time Live Vision Coach</h3>
            <p className="bento-desc">
              Practice in front of your camera. Instant real-time feedback on slouching, eye contact with the audience, smile duration, and nervousness fidgets.
            </p>
          </div>

          {/* Bento Card 4: AI Conversational Practice */}
          <div className="bento-card card-practice">
            <div className="bento-glow" />
            <div className="bento-badge">Roleplay Simulator</div>
            <div className="bento-icon-wrapper">
              <span className="bento-icon">🤖</span>
            </div>
            <h3 className="bento-title">Conversational AI Practice Partner</h3>
            <p className="bento-desc">
              Rehearse Q&amp;A sessions with a virtual AI panel. The AI asks tough defense questions based on your slide context and evaluates your extemporaneous answers.
            </p>
          </div>

          {/* Bento Card 5: Presentation Rewriter & Generator (Span 2) */}
          <div className="bento-card bento-wide card-generator">
            <div className="bento-glow" />
            <div className="bento-badge">Generative Engine</div>
            <div className="bento-icon-wrapper">
              <span className="bento-icon">⚡</span>
            </div>
            <h3 className="bento-title">AI Slide Rewriter &amp; Deck Generator</h3>
            <p className="bento-desc">
              Transform cluttered bullet points into persuasive, high-impact storytelling. Need to start from scratch? Give a prompt and generate a complete multi-slide presentation structure instantly.
            </p>
            <div className="bento-visual-preview">
              <div className="mini-stat-pill">✨ Executive Polish</div>
              <div className="mini-stat-pill">🎯 Bullet Optimization</div>
              <div className="mini-stat-pill">⚡ 1-Click Generation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE FEATURE PREVIEW TABS ===== */}
      <section id="preview" className="preview-section">
        <div className="section-header">
          <div className="section-badge">Interactive Exploration</div>
          <h2 className="section-title">See How Presenova Elevates Your Skills</h2>
          <p className="section-subtitle">
            Switch between modes to see how each tool provides deep, actionable coaching.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="preview-tabs">
          <button
            className={`preview-tab-btn ${activePreviewTab === 'analyzer' ? 'active' : ''}`}
            onClick={() => setActivePreviewTab('analyzer')}
          >
            📄 Slide Deck Audit
          </button>
          <button
            className={`preview-tab-btn ${activePreviewTab === 'speech' ? 'active' : ''}`}
            onClick={() => setActivePreviewTab('speech')}
          >
            🎙️ Speech Telemetry
          </button>
          <button
            className={`preview-tab-btn ${activePreviewTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActivePreviewTab('vision')}
          >
            📡 Computer Vision
          </button>
          <button
            className={`preview-tab-btn ${activePreviewTab === 'rewriter' ? 'active' : ''}`}
            onClick={() => setActivePreviewTab('rewriter')}
          >
            ✍️ Slide Rewriter
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="preview-display-card">
          {activePreviewTab === 'analyzer' && (
            <div className="preview-pane fadeIn">
              <div className="pane-info">
                <h3>Slide Deck Quality &amp; Structure Audit</h3>
                <p>
                  Upload your slide deck. Presenova assesses topic cohesion, storytelling arc, sentence complexity, and generates a detailed rubric.
                </p>
                <ul className="pane-check-list">
                  <li>✓ Category breakdown (Structure, Clarity, Persuasion, Content)</li>
                  <li>✓ Automated LanguageTool grammar &amp; readability checks</li>
                  <li>✓ Instant actionable improvements per slide</li>
                </ul>
                <Link to="/analyzer" className="pane-cta-btn">Test Document Analyzer →</Link>
              </div>
              <div className="pane-graphic">
                <div className="interactive-card-sample">
                  <div className="sample-score-ring">
                    <span className="ring-val">91</span>
                    <span className="ring-lbl">Grade A</span>
                  </div>
                  <div className="sample-bars">
                    <div className="sample-bar-row">
                      <span>Structure Flow</span>
                      <div className="bar-track"><div className="bar-progress" style={{ width: '92%' }}></div></div>
                    </div>
                    <div className="sample-bar-row">
                      <span>Clarity &amp; Readability</span>
                      <div className="bar-track"><div className="bar-progress" style={{ width: '88%' }}></div></div>
                    </div>
                    <div className="sample-bar-row">
                      <span>Call to Action Impact</span>
                      <div className="bar-track"><div className="bar-progress" style={{ width: '94%' }}></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePreviewTab === 'speech' && (
            <div className="preview-pane fadeIn">
              <div className="pane-info">
                <h3>Acoustic &amp; Vocal Telemetry Engine</h3>
                <p>
                  Upload your recorded audio or speak live into your mic. The engine transcribes your speech via Whisper/Groq and counts filler words in real-time.
                </p>
                <ul className="pane-check-list">
                  <li>✓ Microsecond filler word timestamping (&quot;um&quot;, &quot;uh&quot;, &quot;you know&quot;)</li>
                  <li>✓ Average WPM gauge with ideal speaking window</li>
                  <li>✓ Pauses and cadence distribution histogram</li>
                </ul>
                <Link to="/speech" className="pane-cta-btn">Try Speech Analyzer →</Link>
              </div>
              <div className="pane-graphic">
                <div className="interactive-card-sample">
                  <div className="waveform-display">
                    <div className="waveform-bar h-1"></div>
                    <div className="waveform-bar h-3"></div>
                    <div className="waveform-bar h-5"></div>
                    <div className="waveform-bar h-2"></div>
                    <div className="waveform-bar h-6"></div>
                    <div className="waveform-bar h-4"></div>
                    <div className="waveform-bar h-7"></div>
                    <div className="waveform-bar h-3"></div>
                    <div className="waveform-bar h-5"></div>
                  </div>
                  <div className="pacing-status">
                    <span className="status-label">Pacing:</span>
                    <span className="status-text good">132 WPM — Crisp &amp; Engaging</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePreviewTab === 'vision' && (
            <div className="preview-pane fadeIn">
              <div className="pane-info">
                <h3>Real-Time Posture &amp; Eye Contact Tracking</h3>
                <p>
                  Our client-side vision pipeline tracks head pose angles, shoulder symmetry, and camera gaze without uploading your video to any server — 100% private.
                </p>
                <ul className="pane-check-list">
                  <li>✓ Instant gentle alerts when slouching is detected</li>
                  <li>✓ Eye contact percentage with the virtual audience</li>
                  <li>✓ 60 FPS real-time feedback overlay</li>
                </ul>
                <Link to="/live-coach" className="pane-cta-btn">Launch Live Coach →</Link>
              </div>
              <div className="pane-graphic">
                <div className="interactive-card-sample vision-sample">
                  <div className="target-reticle"></div>
                  <div className="hud-metric">Gaze Alignment: 96%</div>
                  <div className="hud-metric">Head Tilt: Level (1.2°)</div>
                </div>
              </div>
            </div>
          )}

          {activePreviewTab === 'rewriter' && (
            <div className="preview-pane fadeIn">
              <div className="pane-info">
                <h3>Executive Narrative AI Rewriter</h3>
                <p>
                  Paste any slide text or presentation notes. Select your tone: &quot;Executive C-Suite&quot;, &quot;Academic Defense&quot;, or &quot;Inspiring Keynote&quot;.
                </p>
                <ul className="pane-check-list">
                  <li>✓ Concise, punchy bullet formulation</li>
                  <li>✓ Dynamic slide generator with instant structure outline</li>
                  <li>✓ Multi-language tone adjustments</li>
                </ul>
                <Link to="/presentation-rewriter" className="pane-cta-btn">Use Presentation Rewriter →</Link>
              </div>
              <div className="pane-graphic">
                <div className="interactive-card-sample">
                  <div className="rewrite-diff">
                    <div className="diff-before">
                      <span className="diff-tag">Original:</span>
                      <p>&quot;Our project had a lot of challenges with speed and models took long to load.&quot;</p>
                    </div>
                    <div className="diff-arrow">↓</div>
                    <div className="diff-after">
                      <span className="diff-tag success">AI Polished:</span>
                      <p>&quot;Engineered lazy-loading pipeline, mitigating boot latency and optimizing inference throughput by 42%.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section id="how-it-works" className="steps-section">
        <div className="section-header">
          <div className="section-badge">Simple 3-Step Process</div>
          <h2 className="section-title">How Presenova Elevates Your Skills</h2>
          <p className="section-subtitle">
            Get comprehensive coaching feedback in under two minutes.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3 className="step-heading">Upload or Connect</h3>
            <p className="step-text">
              Upload your presentation deck (PPTX/PDF) or turn on your camera and microphone for live rehearsal.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3 className="step-heading">Multi-Modal AI Analysis</h3>
            <p className="step-text">
              Our engines analyze text readability, vocal telemetry, and visual posture simultaneously in real-time.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3 className="step-heading">Deliver With Confidence</h3>
            <p className="step-text">
              Review rubric scores, practice with interactive AI Q&amp;A, and track your progress trends on the dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <div className="section-badge">Trusted by Speakers</div>
          <h2 className="section-title">What Presenters Are Saying</h2>
          <p className="section-subtitle">
            From final year university defenses to executive pitches, see how Presenova delivers results.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">
              &quot;Presenova helped me eliminate filler words before my Final Year Project defense. The live WPM pacing meter and posture alerts made a noticeable difference in my confidence!&quot;
            </p>
            <div className="author-info">
              <div className="author-avatar">MA</div>
              <div>
                <p className="author-name">Muhammad Ameer</p>
                <p className="author-role">CS Graduate &amp; Presenter</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">
              &quot;The slide deck structural audit caught 3 critical narrative gaps in our startup pitch deck. The AI Rewriter turned our dense technical slides into punchy executive points.&quot;
            </p>
            <div className="author-info">
              <div className="author-avatar">TH</div>
              <div>
                <p className="author-name">Taha Hussain</p>
                <p className="author-role">Tech Lead &amp; Co-Founder</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">
              &quot;Being able to practice on both the Web dashboard and the Android APK offline during transit makes rehearsal completely effortless. Truly a full-stack coaching platform.&quot;
            </p>
            <div className="author-info">
              <div className="author-avatar">SK</div>
              <div>
                <p className="author-name">Sara Khan</p>
                <p className="author-role">Public Speaking Coach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BIG CALL TO ACTION ===== */}
      <section className="cta-banner-section">
        <div className="cta-banner-card">
          <div className="cta-glow" />
          <h2 className="cta-heading">Ready to Deliver Your Best Presentation Ever?</h2>
          <p className="cta-subheading">
            Join speakers, researchers, and students using Presenova&apos;s AI coaching ecosystem today.
          </p>
          <div className="cta-actions">
            {isAuthenticated ? (
              <Link to="/analytics" className="cta-banner-btn">
                <span>Go to Dashboard</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ) : (
              <Link to="/login" className="cta-banner-btn">
                <span>Create Free Account</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            )}
            <Link to="/download" className="cta-download-btn">
              Download Desktop &amp; Mobile Apps
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-brand-block">
            <div className="landing-brand">
              <span className="brand-icon">✦</span>
              <span className="brand-name">Presenova</span>
            </div>
            <p className="footer-tagline">
              AI Presentation Coaching, Slide Analysis, and Real-Time Telemetry Ecosystem.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Core Tools</h4>
              <Link to="/analyzer">Document Analyzer</Link>
              <Link to="/speech">Speech Analyzer</Link>
              <Link to="/live-coach">Live Vision Coach</Link>
              <Link to="/practice">AI Practice Partner</Link>
            </div>
            <div className="footer-col">
              <h4>Features</h4>
              <Link to="/presentation-rewriter">Slide Rewriter</Link>
              <Link to="/presentation-generator">Deck Generator</Link>
              <Link to="/analytics">Analytics Dashboard</Link>
              <Link to="/download">Desktop &amp; APK Apps</Link>
            </div>
            <div className="footer-col">
              <h4>Account</h4>
              <Link to="/login">Log In</Link>
              <Link to="/login">Sign Up</Link>
              <Link to="/analytics">User Profile</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Presenova AI. Built for FYP Final Defense &amp; Global Speakers.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
