let modifiedData = {
  AlcohalArray: [],
  CarbonMonoxideArray: [],
  HumidityArray: [],
  HydrogenArray: [],
  LPGArray: [],
  MethaneArray: [],
  SmokeArray: [],
  TempArray: [],
};

async function modifySensorData(data) {
  const {
    Alcohal,
    CarbonMonoxide,
    Temp,
    LPG,
    Methane,
    Smoke,
    Humidity,
    Hydrogen,
  } = data.f2kQzGErtFZtE0DVGM7DMr6no2P2.SensorData;

  if (
    modifiedData.AlcohalArray.length === 0 ||
    Alcohal !== modifiedData.AlcohalArray[modifiedData.AlcohalArray.length - 1]
  ) {
    modifiedData.AlcohalArray.push(Alcohal);
  }

  if (
    modifiedData.CarbonMonoxideArray.length === 0 ||
    CarbonMonoxide !==
      modifiedData.CarbonMonoxideArray[
        modifiedData.CarbonMonoxideArray.length - 1
      ]
  ) {
    modifiedData.CarbonMonoxideArray.push(CarbonMonoxide);
  }

  if (
    modifiedData.TempArray.length === 0 ||
    Temp !== modifiedData.TempArray[modifiedData.TempArray.length - 1]
  ) {
    modifiedData.TempArray.push(Temp);
  }

  if (
    modifiedData.LPGArray.length === 0 ||
    LPG !== modifiedData.LPGArray[modifiedData.LPGArray.length - 1]
  ) {
    modifiedData.LPGArray.push(LPG);
  }

  if (
    modifiedData.MethaneArray.length === 0 ||
    Methane !== modifiedData.MethaneArray[modifiedData.MethaneArray.length - 1]
  ) {
    modifiedData.MethaneArray.push(Methane);
  }

  if (
    modifiedData.SmokeArray.length === 0 ||
    Smoke !== modifiedData.SmokeArray[modifiedData.SmokeArray.length - 1]
  ) {
    modifiedData.SmokeArray.push(Smoke);
  }

  if (
    modifiedData.HumidityArray.length === 0 ||
    Humidity !==
      modifiedData.HumidityArray[modifiedData.HumidityArray.length - 1]
  ) {
    modifiedData.HumidityArray.push(Humidity);
  }

  if (
    modifiedData.HydrogenArray.length === 0 ||
    Hydrogen !==
      modifiedData.HydrogenArray[modifiedData.HydrogenArray.length - 1]
  ) {
    modifiedData.HydrogenArray.push(Hydrogen);
  }

  return modifiedData;
}

module.exports = modifySensorData;
