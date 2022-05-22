import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-slate-200 text-amber-500">
      <div>
        <span class="footer-title">Services</span>
        <Link to="/" class="link link-hover">
          Branding
        </Link>
        <Link to="/" class="link link-hover">
          Design
        </Link>
        <Link to="/" class="link link-hover">
          Marketing
        </Link>
        <Link to="/" class="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <Link to="/" class="link link-hover">
          About us
        </Link>
        <Link to="/" class="link link-hover">
          Contact
        </Link>
        <Link to="/" class="link link-hover">
          Jobs
        </Link>
        <Link to="/" class="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <Link to="/" class="link link-hover">
          Terms of use
        </Link>
        <Link to="/" class="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" class="link link-hover">
          Cookie policy
        </Link>
      </div>
      <div>
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16"
            />
            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
