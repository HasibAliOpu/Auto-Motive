import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-200 text-primary">
      <div>
        <span className="footer-title">Contacts</span>
        <Link to="/" className="link link-hover">
          CARiD.com 1 Corporate Drive Cranbury, NJ 08512
        </Link>
        <Link to="/" className="link link-hover">
          Toll Free: 800.505.3274 International: 1.609.642.4700 Fax:
          1.609.964.1983
        </Link>
        <Link to="/" className="link link-hover">
          Email: auto-motive.com
        </Link>
        <Link to="/" className="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          Contact
        </Link>
        <Link to="/" className="link link-hover">
          Jobs
        </Link>
        <Link to="/" className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" className="link link-hover">
          Cookie policy
        </Link>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
