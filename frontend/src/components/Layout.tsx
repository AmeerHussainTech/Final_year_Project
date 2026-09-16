/**
 * Layout Component
 * Global wrapper containing Navigation Bar and main content area.
 * Features a modern, responsive mobile drawer navigation and glassmorphic topbar.
 */

import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

const Layout: React.FC = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="spinner"></div>
        <p>Loading user session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <div className="layout">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Brand Logo */}
          <Link to="/analytics" className="navbar-logo">
            <span className="logo-spark">✦</span>
            <span className="logo-text">Presenova</span>
          </Link>

          {/* Desktop Navigation Links (>= 1024px) */}
          <ul className="nav-links desktop-nav">
            <li className="nav-item">
              <NavLink to="/analytics" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/analyzer" className="nav-link">
                Doc Analyzer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/speech" className="nav-link">
                Speech
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live-coach" className="nav-link">
                Live Coach
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/practice" className="nav-link">
                AI Coach
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/presentation-rewriter" className="nav-link">
                Rewriter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/presentation-generator" className="nav-link">
                Generator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/download" className="nav-link">
                Apps
              </NavLink>
            </li>

            <li className="nav-item user-info-item">
              <Link to="/analytics" className="user-name" title={user?.email}>
                <span className="user-avatar-mini">{userInitial}</span>
                <span className="user-name-text">{user?.name?.split(' ')[0] || 'User'}</span>
              </Link>
              <button onClick={logout} className="nav-logout-btn" title="Logout">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"></path>
                </svg>
              </button>
            </li>
          </ul>

          {/* Mobile Action Controls (< 1024px) */}
          <div className="mobile-nav-controls">
            <Link to="/analytics" className="mobile-user-pill" title={user?.name}>
              <span className="user-avatar-mini">{userInitial}</span>
            </Link>

            {/* Hamburger Toggle Button */}
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Backdrop */}
        {mobileMenuOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-header">
            <div className="drawer-user-info">
              <div className="drawer-avatar">{userInitial}</div>
              <div className="drawer-user-details">
                <p className="drawer-user-name">{user?.name || 'User'}</p>
                <p className="drawer-user-email">{user?.email || ''}</p>
              </div>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="mobile-drawer-body">
            <p className="drawer-section-title">Navigation</p>
            <ul className="mobile-nav-list">
              <li>
                <NavLink to="/analytics" className="mobile-nav-link">
                  <span className="mobile-nav-icon">📊</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">Dashboard</span>
                    <span className="mobile-nav-desc">Progress overview & reports history</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/analyzer" className="mobile-nav-link">
                  <span className="mobile-nav-icon">📄</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">Document Analyzer</span>
                    <span className="mobile-nav-desc">Audit slides & document quality</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/speech" className="mobile-nav-link">
                  <span className="mobile-nav-icon">🎙️</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">Speech Analyzer</span>
                    <span className="mobile-nav-desc">Pacing, clarity & filler word detection</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/live-coach" className="mobile-nav-link">
                  <span className="mobile-nav-icon">📡</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">Live Coach</span>
                    <span className="mobile-nav-desc">Real-time telemetry and posture feedback</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/practice" className="mobile-nav-link">
                  <span className="mobile-nav-icon">🤖</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">AI Coach</span>
                    <span className="mobile-nav-desc">Interactive conversational practice</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/presentation-rewriter" className="mobile-nav-link">
                  <span className="mobile-nav-icon">✍️</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">Presentation Rewriter</span>
                    <span className="mobile-nav-desc">AI slide narrative polish</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/presentation-generator" className="mobile-nav-link">
                  <span className="mobile-nav-icon">⚡</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">Presentation Generator</span>
                    <span className="mobile-nav-desc">Auto-generate slide decks from prompt</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/download" className="mobile-nav-link">
                  <span className="mobile-nav-icon">📱</span>
                  <div className="mobile-nav-text">
                    <span className="mobile-nav-title">Download Apps</span>
                    <span className="mobile-nav-desc">Desktop (Windows/Mac) & Android APK</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mobile-drawer-footer">
            <button onClick={logout} className="mobile-logout-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"></path>
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Presenova AI | Presentation Coaching &amp; Analysis Ecosystem | <Link to="/download" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Desktop &amp; Mobile Apps</Link></p>
      </footer>
    </div>
  );
};

export default Layout;