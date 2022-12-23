import { PlanetMass, PlanetSize, SunMass, SunSize } from "../../../helpers/Constants";
import AtmospherePlanet from "./planets/AtmospherePlanet";
import Planet from "./planets/Planet";
import RingedPlanet from "./planets/RingedPlanet";
import Sun from "./Sun";

export default function System() {
  return (
    <>
      <Sun
        size={SunSize}
        mass={SunMass}
        velocity={[0, 0, 0]}
        textureName="sun.jpg"
      />
      <Planet
        size={PlanetSize.Mercury}
        mass={PlanetMass.Mercury}
        position={[120, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="mercury.jpg"
      />
      <AtmospherePlanet
        size={PlanetSize.Venus}
        mass={PlanetMass.Venus}
        position={[130, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="venus.jpg"
        atmosphereFile="venus_atmosphere.jpg"
      />
      <AtmospherePlanet
        size={PlanetSize.Earth}
        mass={PlanetMass.Earth}
        position={[140, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="earth_day.jpg"
        atmosphereFile="earth_clouds.jpg"
      />
      <Planet
        size={PlanetSize.Mars}
        mass={PlanetMass.Mars}
        position={[150, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="mars.jpg"
      />
      <Planet
        size={PlanetSize.Jupiter}
        mass={PlanetMass.Jupiter}
        position={[170, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="jupiter.jpg"
      />
      <RingedPlanet
        size={PlanetSize.Saturn}
        mass={PlanetMass.Saturn}
        position={[200, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="saturn.jpg"
        ringFile="saturn_ring.png"
      />
      <Planet
        size={PlanetSize.Uranus}
        mass={PlanetMass.Uranus}
        position={[220, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="uranus.jpg"
      />
      <Planet
        size={PlanetSize.Neptune}
        mass={PlanetMass.Neptune}
        position={[230, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="neptune.jpg"
      />
    </>
  );
}