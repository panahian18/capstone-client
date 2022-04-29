import React from "react";
import Particles from "react-tsparticles";
import { particlesConfig } from "./particlesConfig";
import "./ParticlesBackground.scss";

export default function ParticlesBackground() {
  return <Particles params={particlesConfig}></Particles>;
}