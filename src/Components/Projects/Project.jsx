import React from "react";
import "./Project.css";
import { Link } from "react-scroll";

const Project = () => {
  return (
    <div className="container section project">
      <h2 className="project-title">Projects</h2>
      <p className="project-desc">
        This versatile web project highlights my skills in crafting visually
        compelling, user-centric digital experiences. By blending design and
        functionality, I create impactful online solutions for my clients.
      </p>
      <div className="project-container">
        {/* project 1 */}
        <h3 className="project-project-title">Full Stack E-Commerce Website</h3>
        <div className="project-image-wrapper project-image1">
          <img className="project-image" src="/forever.JPG" alt="" />
        </div>
        <div className="project-project project-content1">
          <h3 className="project-project-sub">Full Stack E-Commerce Website</h3>
          <p className="project-project-desc1">
            The Full Stack E-Commerce Website is a comprehensive online shopping
            platform that allows users to browse, search, and purchase a wide
            range of clothing products. The project leverages modern web
            technologies to provide a responsive and user-friendly interface,
            ensuring a seamless shopping experience. It includes features like
            user authentication, product management, shopping cart
            functionality, payment integration, and an admin dashboard for
            managing orders and products.
          </p>
          <p className="project-project-desc2">
            This admin dashboard project showcases my expertise in modern
            frontend technologies, including React, Tailwind CSS, Context API,
            and Vite. and backend technologies like Node.js, Express.js, Mongo
            DB, Razor pay and Stripe. The result is a highly performant and
            scalable web application.
          </p>
          <Link
            onClick={() => {
              window.open(
                "https://full-stack-eccomerce-app.vercel.app/",
                "_blank"
              );
            }}
            className="project-btn btn"
          >
            Website
          </Link>
        </div>

        {/* project 2 */}
        <h3 className="project-project-title">Educity</h3>
        <div className="project-image-wrapper project-image2">
          <img className="project-image" src="/educity.JPG" alt="" />
        </div>
        <div className="project-project project-content2">
          <h3 className="project-project-sub">Educity</h3>
          <p className="project-project-desc1">
            Educity is a clean, modern university website using a tech stack of
            React, JavaScript, and Vite. The result is a visually appealing and
            highly interactive platform.
          </p>
          <p className="project-project-desc2">
            This university website project demonstrates my proficiency in
            crafting visually striking, user-friendly web experiences.
            Leveraging a technology stack of React, JavaScript, and Vite, I
            built a clean, modern, and highly interactive platform to showcase
            the institution's programs and resources.
          </p>
          <Link
            onClick={() => {
              window.open("https://educity-university.vercel.app/", "_blank");
            }}
            className="project-btn btn"
          >
            Website
          </Link>
        </div>

        {/* project 3 */}
        <h3 className="project-project-title">Food Delivery Website</h3>
        <div className="project-image-wrapper project-image3">
          <img
            className="project-image"
            src="/Food Delivery Website.png"
            alt=""
          />
        </div>
        <div className="project-project project-content3">
          <h3 className="project-project-sub">Food Delivery Website</h3>
          <p className="project-project-desc1">
            Tomato. is a clean, modern food delivery website using a tech stack
            of React, JavaScript, and Vite. The result is a visually appealing
            and highly interactive platform.
          </p>
          <p className="project-project-desc2">
            The website features a user-friendly interface that allows customers
            to easily browse a curated selection of local restaurants and
            eateries, place orders, and track their deliveries. Responsive
            design was a key focus, ensuring the platform is accessible across
            various devices.
          </p>
          <Link
            onClick={() => {
              window.open(
                "https://ecommerce-frontend-pi-two.vercel.app/",
                "_blank"
              );
            }}
            className="project-btn btn"
          >
            Website
          </Link>
        </div>

        {/* project 4 */}
        <h3 className="project-project-title">E-commerce Website</h3>
        <div className="project-image-wrapper project-image4">
          <img className="project-image" src="/ecommerce.png" alt="" />
        </div>
        <div className="project-project project-content4">
          <h3 className="project-project-sub">E-commerce Website</h3>
          <p className="project-project-desc1">
            Developed a clean, modern ecommerce website using a tech stack of
            React, JavaScript, and Vite. The result is a visually appealing and
            highly interactive platform.
          </p>
          <p className="project-project-desc2">
            Shoppify Ecommerce website project demonstrates my expertise in
            crafting visually appealing, user-friendly online shopping
            experiences. Leveraging a modern tech stack, I built a responsive,
            feature-rich platform that streamlines the customer journey from
            browsing to checkout.
          </p>
          <Link
            onClick={() => {
              window.open(
                "https://ecommerce-frontend-pi-two.vercel.app/",
                "_blank"
              );
            }}
            className="project-btn btn"
          >
            Website
          </Link>
        </div>

        {/* project 5 */}
        <h3 className="project-project-title">UniLag</h3>
        <div className="project-image-wrapper project-image5">
          <img className="project-image" src="/university-website.JPG" alt="" />
        </div>
        <div className="project-project project-content5">
          <h3 className="project-project-sub">UniLag</h3>
          <p className="project-project-desc1">
            The result is a visually appealing and highly interactive platform
            with multiple pages. Unilag is one of the websites built when i
            started coding.
          </p>
          <p className="project-project-desc2">
            This university website project demonstrates my proficiency in
            crafting visually striking, user-friendly web experiences.
            Leveraging a technology stack of HTML5, JavaScript, and CSS, I built
            a clean, modern, and highly interactive platform to showcase the
            institution's programs and resources.
          </p>
          <Link
            onClick={() => {
              window.open(
                "https://unilag-university-website.vercel.app/",
                "_blank"
              );
            }}
            className="project-btn btn"
          >
            Website
          </Link>
        </div>

        {/* project 6 */}
        <h3 className="project-project-title">YouTube Clone</h3>
        <div className="project-image-wrapper project-image6">
          <img className="project-image" src="/vidtube.png" alt="" />
        </div>
        <div className="project-project project-content6">
          <h3 className="project-project-sub">YouTube Clone</h3>
          <p className="project-project-desc1">
          This project focuses on creating an engaging video-sharing platform with an easy-to-use interface.
          </p>
          <p className="project-project-desc2">
            The YouTube Clone is a web application that replicates the
            functionalities of YouTube. The project focuses on creating an
            engaging video-sharing platform with a user-friendly interface,
            real-time interactions, using the YouTube API to handle video uploads
            and streaming.
          </p>
          <Link
            onClick={() => {
              window.open(
                "https://youtube-clone-indol-sigma.vercel.app/",
                "_blank"
              );
            }}
            className="project-btn btn"
          >
            Website
          </Link>
        </div>

        {/* project 7 */}
        <h3 className="project-project-title">Admin Dashboard</h3>
        <div className="project-image-wrapper project-image7">
          <img className="project-image" src="/admin-dashboard.png" alt="" />
        </div>
        <div className="project-project project-content7">
          <h3 className="project-project-sub">Admin Dashboard</h3>
          <p className="project-project-desc1">
            Designed and developed a robust admin dashboard that streamlines
            data visualization, user management, and reporting capabilities for
            seamless business operations.
          </p>
          <p className="project-project-desc2">
            
            This admin dashboard project showcases my expertise in modern
            frontend technologies, including React, TypeScript, SCSS, and Vite.
            The result is a highly performant and scalable web application.
          </p>
          <Link 
          onClick={()=>{
            window.open('https://educity-three.vercel.app/', '_blank')
          }}
          className="project-btn btn">Website</Link>
        </div>
        {/* project 8 */}
        <h3 className="project-project-title">Chat App</h3>
        <div className="project-image-wrapper project-image8">
          <img className="project-image" src="/chat-app.JPG" alt="" />
        </div>
        <div className="project-project project-content8">
          <h3 className="project-project-sub">Chat App</h3>
          <p className="project-project-desc1">
            This chat app project showcases my skills in building real-time,
            responsive communication platforms.
          </p>
          <p className="project-project-desc2">
            Designed and developed a real-time chat application that enables
            seamless communication. By utilizing a tech stack including React,
            Firebase, redux and Vite, I created a responsive and feature-rich
            platform for users to connect and collaborate.
          </p>
          <Link
            onClick={() => {
              window.open(
                "https://ecommerce-frontend-pi-two.vercel.app/",
                "_blank"
              );
            }}
            className="project-btn btn"
          >
            Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
