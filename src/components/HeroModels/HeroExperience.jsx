import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Earth } from "./Earth";
import HeroLights from "./HeroLights";
const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px" });
  const isMobile = useMediaQuery({ query: "(max-width:768px" });
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
      <group scale={isMobile ? 0.7 : 1}>
        <Earth />
      </group>
    </Canvas>
  );
};

export default HeroExperience;

//51 minutes in to this video https://www.youtube.com/watch?v=E-fdPfRxkzQ
