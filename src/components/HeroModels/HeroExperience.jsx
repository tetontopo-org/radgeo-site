import React, { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Earth } from "./Earth";
import HeroLights from "./HeroLights";
function ScrollEarth({ scale = 1 }) {
  const ref = useRef();
  const target = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      target.current = progress * Math.PI * 10; // full rotation over full page
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    // smooth interpolation toward target rotation
    ref.current.rotation.y += (target.current - ref.current.rotation.y) * 0.1;
    ref.current.position.y += (-target.current / 10 - ref.current.position.y) * 0.5;
  });

  return (
    <group ref={ref} position={[0, 0, 0]} scale={scale}>
      <Earth />
    </group>
  );
}

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={10}
        minDistance={3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <ScrollEarth scale={isMobile ? 0.7 : 1} />
    </Canvas>
  );
};

export default HeroExperience;
