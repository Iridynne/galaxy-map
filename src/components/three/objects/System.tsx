import AtmospherePlanet from "./AtmospherePlanet";
import Sun from "./Sun";

export default function System() {
  return (
    <>
      <Sun
        mass={100}
        velocity={[0, 0, 0]}
        textureName="sun.jpg"
      />
      <AtmospherePlanet
        mass={25}
        position={[5, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="earth_day.jpg"
        atmosphereFile="earth_clouds.jpg"
      />
      <AtmospherePlanet
        mass={25}
        position={[-5, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="venus.jpg"
        atmosphereFile="venus_atmosphere.jpg"
      />
    </>
  );
}