import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./style";

const Header = () => {
  return (
    <Wrapper>
    <section>
      <h1>Quizzie</h1>
      <header>
        <Link to="/student">Dashboard</Link>
        <Link to="/teacher">Teacher</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        
      </header>
    </section>
    </Wrapper>
  );
};

export default Header;
