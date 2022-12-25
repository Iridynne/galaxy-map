import { PlanetMass, PlanetRotationPeriod, PlanetSize, SunMass, SunRotationPeriod, SunSize } from "../../../helpers/Constants";
import AtmospherePlanet from "./planets/AtmospherePlanet";
import Planet from "./planets/Planet";
import RingedPlanet from "./planets/RingedPlanet";
import Star from "./Star";

export default function System() {
  return (
    <>
      <Star
        name="Sun"
        size={SunSize}
        mass={SunMass}
        rotationPeriod={SunRotationPeriod}
        position={[0, 0, 0]}
        velocity={[0, 0, 0]}
        textureName="sun.jpg" />
      <Planet
        name="Mercury"
        size={PlanetSize.Mercury}
        mass={PlanetMass.Mercury}
        rotationPeriod={PlanetRotationPeriod.Mercury}
        position={[120, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="mercury.jpg" />
      <AtmospherePlanet
        name="Venus"
        size={PlanetSize.Venus}
        mass={PlanetMass.Venus}
        rotationPeriod={PlanetRotationPeriod.Venus}
        position={[130, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="venus.jpg"
        atmosphereFile="venus_atmosphere.jpg" />
      <AtmospherePlanet
        name="Earth"
        size={PlanetSize.Earth}
        mass={PlanetMass.Earth}
        rotationPeriod={PlanetRotationPeriod.Earth}
        position={[140, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="earth_day.jpg"
        atmosphereFile="earth_clouds.jpg" />
      <Planet
        name="Mars"
        size={PlanetSize.Mars}
        mass={PlanetMass.Mars}
        rotationPeriod={PlanetRotationPeriod.Mars}
        position={[150, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="mars.jpg" />
      <Planet
        name="Jupiter"
        size={PlanetSize.Jupiter}
        mass={PlanetMass.Jupiter}
        rotationPeriod={PlanetRotationPeriod.Jupiter}
        position={[170, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="jupiter.jpg" />
      <RingedPlanet
        name="Saturn"
        size={PlanetSize.Saturn}
        mass={PlanetMass.Saturn}
        rotationPeriod={PlanetRotationPeriod.Saturn}
        position={[200, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="saturn.jpg"
        ringFile="saturn_ring.png" />
      <Planet
        name="Uranus"
        size={PlanetSize.Uranus}
        mass={PlanetMass.Uranus}
        rotationPeriod={PlanetRotationPeriod.Uranus}
        position={[220, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="uranus.jpg" />
      <Planet
        name="Neptune"
        size={PlanetSize.Neptune}
        mass={PlanetMass.Neptune}
        rotationPeriod={PlanetRotationPeriod.Neptune}
        position={[230, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="neptune.jpg" />
      <Planet
        name="Pluto"
        size={PlanetSize.Pluto}
        mass={PlanetMass.Pluto}
        rotationPeriod={PlanetRotationPeriod.Pluto}
        position={[240, 0, 0]}
        velocity={[1, 0, 0]}
        textureFile="pluto.jpg" />
    </>
  );
}