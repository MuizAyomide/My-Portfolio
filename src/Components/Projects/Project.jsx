import React from "react";
import "./Project.css";
import { Link } from "react-scroll";

const Project = () => {
  return (
    <div className="container section project">
      <h2 className="project-title">Projects</h2>
      <p className="project-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
        assumenda sint, blanditiis illum quisquam voluptatem consectetur
        voluptate iste.
      </p>
      <div className="project-container">
    
        {/* project 1 */}
        <h3 className="project-project-title">Admin Dashboard</h3>
        <div className="project-image-wrapper project-image1">
          <img className="project-image" src="/admin-dashboard.png" alt="" />
        </div>
        <div className="project-project project-content1">
          <h3 className="project-project-sub">Admin Dashboard</h3>
          <p className="project-project-desc1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            enim ex sint animi dolorum dicta?
          </p>
          <p className="project-project-desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            laboriosam et nihil! Rerum recusandae, vel cumque blanditiis est cum
            magnam? Commodi nisi magnam, quam tempore consequuntur harum nulla
            praesentium expedita?
          </p>
          <Link className="project-btn btn">Website</Link>
        
      </div>
    
        {/* project 2 */}
        <h3 className="project-project-title">Educity</h3>
        <div className="project-image-wrapper project-image2">
          <img className="project-image" src="/educity.JPG" alt="" />
        </div>
        <div className="project-project project-content2">
          <h3 className="project-project-sub">Educity</h3>
          <p className="project-project-desc1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            enim ex sint animi dolorum dicta?
          </p>
          <p className="project-project-desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            laboriosam et nihil! Rerum recusandae, vel cumque blanditiis est cum
            magnam? Commodi nisi magnam, quam tempore consequuntur harum nulla
            praesentium expedita?
          </p>
          <Link className="project-btn btn">Website</Link>
        
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            enim ex sint animi dolorum dicta?
          </p>
          <p className="project-project-desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            laboriosam et nihil! Rerum recusandae, vel cumque blanditiis est cum
            magnam? Commodi nisi magnam, quam tempore consequuntur harum nulla
            praesentium expedita?
          </p>
          <Link className="project-btn btn">Website</Link>
        
      </div>
    
        {/* project 4 */}
        <h3 className="project-project-title">E-commerce Website</h3>
        <div className="project-image-wrapper project-image4">
          <img className="project-image" src="/ecommerce.png" alt="" />
        </div>
        <div className="project-project project-content4">
          <h3 className="project-project-sub">E-commerce Website</h3>
          <p className="project-project-desc1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            enim ex sint animi dolorum dicta?
          </p>
          <p className="project-project-desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            laboriosam et nihil! Rerum recusandae, vel cumque blanditiis est cum
            magnam? Commodi nisi magnam, quam tempore consequuntur harum nulla
            praesentium expedita?
          </p>
          <Link className="project-btn btn">Website</Link>
        
      </div>
    
        {/* project 5 */}
        <h3 className="project-project-title">UniLag</h3>
        <div className="project-image-wrapper project-image5">
          <img className="project-image" src="/university-website.JPG" alt="" />
        </div>
        <div className="project-project project-content5">
          <h3 className="project-project-sub">UniLag</h3>
          <p className="project-project-desc1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            enim ex sint animi dolorum dicta?
          </p>
          <p className="project-project-desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            laboriosam et nihil! Rerum recusandae, vel cumque blanditiis est cum
            magnam? Commodi nisi magnam, quam tempore consequuntur harum nulla
            praesentium expedita?
          </p>
          <Link className="project-btn btn">Website</Link>
        
      </div>
    
        {/* project 6 */}
        <h3 className="project-project-title">Chat App</h3>
        <div className="project-image-wrapper project-image6">
          <img className="project-image" src="/chat-app.JPG" alt="" />
        </div>
        <div className="project-project project-content6">
          <h3 className="project-project-sub">Chat App</h3>
          <p className="project-project-desc1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            enim ex sint animi dolorum dicta?
          </p>
          <p className="project-project-desc2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            laboriosam et nihil! Rerum recusandae, vel cumque blanditiis est cum
            magnam? Commodi nisi magnam, quam tempore consequuntur harum nulla
            praesentium expedita?
          </p>
          <Link className="project-btn btn">Website</Link>
        
      </div>
      </div>
    </div>
  );
};

export default Project;
