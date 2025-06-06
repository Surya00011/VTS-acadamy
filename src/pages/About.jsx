import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <h2>About VTS Academy</h2>
      <p className="lead mt-3">
        VTS Academy is an innovative online learning platform designed to
        empower students, professionals, and lifelong learners with quality
        education from anywhere.
      </p>
      <p>
        We offer a wide variety of courses across different domains such as
        Programming, Design, Marketing, Business, and more. Our mission is to
        make quality education accessible and affordable to all.
      </p>
      <p>
        Whether you're looking to upskill for your job, prepare for a career
        switch, or simply explore new knowledge, VTS Academy has something for
        you. Our instructors are industry experts and passionate educators who
        make learning engaging and practical.
      </p>
      <h4 className="mt-4">Why Choose Us?</h4>
      <ul>
        <li>Expert Instructors</li>
        <li>Flexible Learning at Your Own Pace</li>
        <li>Affordable and Accessible Courses</li>
        <li>Hands-on Projects and Certifications</li>
        <li>Supportive Community of Learners</li>
      </ul>
    </Container>
  );
};

export default About;
