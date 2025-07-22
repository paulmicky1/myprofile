"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function DynamicNetworkBG() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="pointer-events-none fixed inset-0 z-0 blur-sm opacity-70"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 30, density: { enable: true, area: 1200 } },
          color: { value: ["#1de9b6", "#2196f3", "#00bcd4"] },
          links: {
            enable: true,
            color: "#2196f3",
            distance: 180,
            opacity: 0.18,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: 2.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: false, mode: "repulse" },
            onClick: { enable: false, mode: "push" },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
} 