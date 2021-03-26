import React from "react";
import { motion } from "framer-motion";

export default function Navbar(props) {
  return (
    <nav>
      <ul className="brand">
        <li>
          <a href="/" title="Landing page">
            DogeGarden
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/docs" title="Documentation">Docs</a>
        </li>
        <li>
          <a href="//stats.dogehouse.xyz/" title="DogeHouse Statistics">
            DogeTracker
          </a>
        </li>
        <li>
          <a href="https://discord.gg/FKzV27CNPJ" target="_blank" title="Our Discord">Discord</a>
        </li>
        <li>
          <a href="https://github.com/dogegarden" target="_blank" title="Our GitHub">GitHub</a>
        </li>
      </ul>
    </nav>
  );
}
