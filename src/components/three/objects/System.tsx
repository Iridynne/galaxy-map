import { PlanetSize } from "../../../helpers/Constants";
import AtmospherePlanet from "./AtmospherePlanet";
import Planet from "./Planet";
import Sun from "./Sun";

export default function System() {
  return (
    <>
      <Sun
        size={109}
        mass={100}
        velocity={[0, 0, 0]}
        textureName="sun.jpg"
      />
      <Planet
        size={PlanetSize.Mercury}
        mass={25}
        position={[120, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="mercury.jpg"
      />
      <AtmospherePlanet
        size={PlanetSize.Venus}
        mass={0.815}
        position={[130, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="venus.jpg"
        atmosphereFile="venus_atmosphere.jpg"
      />
      <AtmospherePlanet
        size={PlanetSize.Earth}
        mass={1}
        position={[140, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="earth_day.jpg"
        atmosphereFile="earth_clouds.jpg"
      />
    </>
  );
}