import React from "react";
import { NavLink,Link } from "react-router-dom";
import styles from './footer.module.css';

const footer = () => {
  return (  
  
  <footer className={styles.footer}>  
    <div>Made by Sanskar Aggarwal</div>
    <div style={{marginTop:'2rem'}}>
    <Link to="https://github.com/sanskaraggarwal2025"><img src="https://img.icons8.com/material-outlined/50/000000/github.png"/></Link>
        <Link to="https://www.linkedin.com/in/sanskar-aggarwal-5b4a781ba/"><img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png"/></Link>
    <Link to="mailto:aggarwalsanskar992@gmail.com"><img src="https://img.icons8.com/material-rounded/48/000000/gmail-login.png"/></Link>
    </div>
  </footer>

  );
};
export default footer;
