import React from "react";
import "./Featured.css";
import { Link } from "react-scroll";
const Featured = () => {
  return (
    <div className="featured section container">
      <h3 className="featured-sub">Featured Project</h3>
      <h2 className="featured-title">
        Food Delivery Application{" "}
        <Link className="featured-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </Link>
      </h2>
      <p className="featured-desc">
        The website features a user-friendly interface that allows customers to
        easily browse a curated selection of local restaurants and eateries,
        place orders, and track their deliveries. Responsive design was a key
        focus, ensuring the platform is accessible across various devices.
      </p>
      <div className="featured-info-container">
        <div>
          <h3 className="featured-label">Tech Stack</h3>
          <ul className="featured-tech-stack">
            <li className="featured-info">CSS</li>
            <li className="featured-info">ReactJs</li>
            <li className="featured-info">React-Hook-Form</li>
            <li className="featured-info">JavaScript</li>
            <li className="featured-info">Axios</li>
          </ul>
        </div>
        <div>
          <h3 className="featured-label">Project type</h3>
          <p className="featured-info">Fullstack-Janstack</p>
        </div>
        <div>
          <h3 className="featured-label">Timeline</h3>
          <p className="featured-info">December 2022 - present</p>
        </div>
      </div>
      <div className="featured-img-container">
        <div className="featured-image-wrapper">
          <img src="/tomato-home.JPG" alt="Food Delivery Website Image" />
        </div>
        <div className="featured-image-wrapper">
          <img src="/tomato-login.JPG" alt="Food Delivery Website Image" />
        </div>
        <div className="featured-image-wrapper">
          <img src="/tomato-signup.JPG" alt="Food Delivery Website Image" />
        </div>
        <div className="featured-image-wrapper">
          <img src="/tomato-menu-page.JPG" alt="Food Delivery Website Image" />
        </div>
        <div className="featured-image-wrapper">
          <img src="/tomato-food-items.JPG" alt="Food Delivery Website Image" />
        </div>
        <div className="featured-image-wrapper">
          <img src="/tomato-cart-page.JPG" alt="Food Delivery Website Image" />
        </div>
        <div className="featured-image-wrapper">
          <img
            src="/tomato-delivery-page.JPG"
            alt="Food Delivery Website Image"
          />
        </div>
        <div className="featured-image-wrapper">
          <img
            src="/tomato-contact-page.JPG"
            alt="Food Delivery Website Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
