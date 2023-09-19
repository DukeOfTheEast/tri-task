import React from "react";
import Girl from "../images/girl.png";
import classes from "../pages/Home.module.css";
import Webdev from "../images/webdev.png";
import Science from "../images/science.png";
import Uiux from "../images/uiux.png";
import Robotics from "../images/robotics.png";
import { Link } from "react-router-dom";
import Best from "../images/best.png";
import Live from "../images/live.png";
import One from "../images/one.png";

const Home = () => {
  return (
    <div>
      <div className={classes.empower}>
        <div className={classes.empowertext}>
          <h1>Empowering Your Child Through Our Learning Management System</h1>
          <p>
            Unlock a kid`s world of wonders and empowering children through
            interactive learning.
          </p>
          <div className={classes.empowerbtns}>
            <button>Get Started</button>
            <button>Explore Courses</button>
          </div>
        </div>
        <img src={Girl} alt="" />
      </div>
      <div className={classes.courses}>
        <h1>Our Courses</h1>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img src={Webdev} alt="" />
            <h3>Web Development</h3>
            <p>Kids can build digital worlds through web development</p>
          </div>
          <div className={classes.card}>
            <img src={Robotics} alt="" />
            <h3>Robotics</h3>
            <p>Let your kids dive into the world of robotics</p>
          </div>
          <div className={classes.card}>
            <img src={Science} alt="" />
            <h3>Science</h3>
            <p>Your child can unleash the power of science</p>
          </div>
          <div className={classes.card}>
            <img src={Uiux} alt="" />
            <h3>UI/UX</h3>
            <p>Unleash your child`s creativity through UIUX</p>
          </div>
        </div>
      </div>
      <div className={classes.unlock}>
        <h1>Unlock your Teaching Potentials</h1>
        <p>
          Easily upload and manage your courses for free, engage with students
          and track your progress. Join our community of tutors today for free
          and start sharing your expertise with the world!
        </p>
        <div className={classes.unlockbtn}>
          <button>Submit</button>
          <Link to="" className={classes.view}>
            View All Plans
          </Link>
        </div>
      </div>
      <div className={classes.provide}>
        <h1>We Provide</h1>
        <div className={classes.provideCards}>
          <div className={classes.provideCard}>
            <img src={Best} alt="" />
            <div>
              <h4>Best Instructors</h4>
              <p>
                Beyond the classroom, we have the best instructors that serve as
                mentors and role models.
              </p>
            </div>
          </div>
          <div className={classes.provideCard}>
            <img src={Live} alt="" />
            <div>
              <h4>Live Classes</h4>
              <p>
                We offer vibrant and dynamic classes where learning comes to
                life.
              </p>
            </div>
          </div>
          <div className={classes.provideCard}>
            <img src={One} alt="" />
            <div>
              <h4>One on One Support</h4>
              <p>
                Our one-on-one support is not for academic matters alone. We
                provide holistic development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.stay}>
        <div>
          <h1>Stay Connected</h1>
          <p className={classes.stayp}>
            Never miss out on the latest updates, educational tips and exclusive
            offers! Subscribe to our newsletter and stay connected with our
            child learning community.
          </p>
          <p>Enter your email</p>
          <div className={classes.input}>
            <input type="text" placeholder="hello@example.com" />
            <button>Submit</button>
          </div>
          <p>
            By submitting your email address, you agree to our Terms of Use and
            Policy.
          </p>
        </div>
        <div className={classes.about}>
          <h5>About Us</h5>
          <p>Our Mission</p>
          <p>Meet the Team</p>
          <p>Testimonials</p>
          <p>Privacy Policy</p>
        </div>
        <div className={classes.support}>
          <h5>Support</h5>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Terms of Service</p>
          <p>Help Center</p>
        </div>
      </div>
      <div className={classes.footer}>
        <p>Copyright 2023 KidsTot co. Ltd. All rights reserved</p>
      </div>
    </div>
  );
};

export default Home;
