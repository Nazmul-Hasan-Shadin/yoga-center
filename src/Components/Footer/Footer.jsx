import React from 'react';

const Footer = () => {
    return (
        <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content rounded-xl">
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Yoga Festival </a> 
          <a className="link link-hover">Yoga Event Coordination</a> 
          <a className="link link-hover"> Retreat Planning</a> 
          <a className="link link-hover">Private Yoga Event</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav> 
        <nav>
          <header className="footer-title">Social</header> 
          <a className="link link-hover">Twitter</a> 
          <a className="link link-hover">Instagram</a> 
          <a className="link link-hover">Facebook</a> 
          <a className="link link-hover">Github</a>
        </nav> 
        <nav>
          <header className="footer-title">Explore</header> 
          <a className="link link-hover">Features</a> 
          <a className="link link-hover">Enterprise</a> 
          <a className="link link-hover">Security</a> 
          <a className="link link-hover">Pricing</a>
        </nav> 
        <nav>
          <header className="footer-title">Apps</header> 
          <a className="link link-hover">Mac</a> 
          <a className="link link-hover">Windows</a> 
          <a className="link link-hover">iPhone</a> 
          <a className="link link-hover">Android</a>
        </nav>
      </footer>
    );
};

export default Footer;