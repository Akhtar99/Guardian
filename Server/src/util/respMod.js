async function modifyResponse(data) {
  let modifiedData = { ...data };

  const arraysToProcess = [
    { key: "CarbonMonoxide", array: data.CarbonMonoxideArray },
    { key: "Humidity", array: data.HumidityArray },
    { key: "Temp", array: data.TempArray },
    { key: "Methane", array: data.MethaneArray },
    { key: "Smoke", array: data.SmokeArray },
    { key: "LPG", array: data.LPGArray },
    { key: "Hydrogen", array: data.HydrogenArray },
    { key: "Alcohal", array: data.AlcohalArray },
  ];

  arraysToProcess.forEach(({ key, array }) => {
    if (array && array.length > 0) {
      modifiedData[key] = {
        min: Math.min(...array),
        max: Math.max(...array),
        avg: calculateAverage(array),
      };
    } else {
      // Handle case where array is empty or undefined
      modifiedData[key] = {
        min: undefined,
        values: [],
      };
    }

    // Delete the original array property from modifiedData
    delete modifiedData[`${key}Array`];
  });

  return modifiedData;
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 for an empty array (or handle as needed)
  }

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const average = sum / numbers.length;
  return average;
}

module.exports = modifyResponse;
