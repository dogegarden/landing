import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/App.css";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -20 },
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/docs">
          <Docs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <Navbar />
      <div className="vcenter">
        <img
          src="https://gblobscdn.gitbook.com/orgs%2F-MVs8IgwjhdWAKl3BEcR%2Favatar-1615849813475.png?alt=media"
          className="logo"
        ></img>
        <motion.div initial="hidden" animate="visible" variants={list}>
          <motion.h1 variants={item}>DogeGarden</motion.h1>
          <motion.div variants={item} className="subtitle">
            View, manage and explore statistics and historical data from{" "}
            <a target="_blank" href="https://dogehouse.tv">
              dogehouse.tv
            </a>
            <br />
            Made possible by{" "}
            <a
              href="https://github.com/dogegarden/dogehouse-js"
              target="_blank"
            >
              dogehouse-js
            </a>{" "}
            &{" "}
            <a
              href="https://github.com/dogegarden/dogehouse-api"
              target="_blank"
            >
              dogehouse-api
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Docs() {
  return (
    <section>
      <Navbar />
      <div className="vcenter">
        <img
          src="https://gblobscdn.gitbook.com/orgs%2F-MVs8IgwjhdWAKl3BEcR%2Favatar-1615849813475.png?alt=media"
          className="logo"
        ></img>
        <motion.div initial="hidden" animate="visible" variants={list}>
          <motion.h1 style={{ marginBottom: "auto" }} variants={item}>Documentation</motion.h1>
          <motion.p className="subtitle" variants={item}>
            We are working on it. For updates please visit our{" "}
            <a
              href="https://discord.gg/FKzV27CNPJ"
              target="_blank"
              title="Our Discord"
            >
              Discord
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default App;
