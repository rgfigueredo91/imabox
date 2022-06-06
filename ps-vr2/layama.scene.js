// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "LAKEHOUSETEST0000", a: "CoronaCamera001", p: new BABYLON.Vector3(4611.1, 179.625, -367.457), l: new BABYLON.Vector3(4611.07, 179.625, -364.917)});
   layamaCameras.push({n: "LAKEHOUSETEST0001", a: "CoronaCamera002", p: new BABYLON.Vector3(4739.22, 247.581, -21.8272), l: new BABYLON.Vector3(4739.19, 247.581, -19.2873)});
   layamaCameras.push({n: "LAKEHOUSETEST0002", a: "CoronaCamera003", p: new BABYLON.Vector3(4739.22, 247.581, 413.642), l: new BABYLON.Vector3(4739.19, 247.581, 416.182)});
   layamaCameras.push({n: "LAKEHOUSETEST0003", a: "CoronaCamera004", p: new BABYLON.Vector3(4012.8, 247.581, 420.526), l: new BABYLON.Vector3(4012.78, 247.581, 423.066)});
   layamaCameras.push({n: "LAKEHOUSETEST0004", a: "CoronaCamera005", p: new BABYLON.Vector3(4007.87, 247.581, -58.8583), l: new BABYLON.Vector3(4007.85, 247.581, -56.3183)});
   layamaCameras.push({n: "LAKEHOUSETEST0005", a: "CoronaCamera006", p: new BABYLON.Vector3(4441.48, 247.581, -58.5126), l: new BABYLON.Vector3(4441.48, 247.581, -55.9726)});
   layamaCameras.push({n: "LAKEHOUSETEST0006", a: "CoronaCamera007", p: new BABYLON.Vector3(4441.48, 247.581, 178.407), l: new BABYLON.Vector3(4441.48, 247.581, 180.947)});
   layamaCameras.push({n: "LAKEHOUSETEST0007", a: "CoronaCamera008", p: new BABYLON.Vector3(4441.48, 247.581, 423.345), l: new BABYLON.Vector3(4441.48, 247.581, 425.885)});
   layamaCameras.push({n: "LAKEHOUSETEST0008", a: "CoronaCamera009", p: new BABYLON.Vector3(4611.13, 179.528, 717.267), l: new BABYLON.Vector3(4611.1, 179.528, 719.807)});
   layamaCameras.push({n: "LAKEHOUSETEST0009", a: "CoronaCamera010", p: new BABYLON.Vector3(4232.31, 247.581, 135.873), l: new BABYLON.Vector3(4232.31, 247.581, 138.413)});
   layamaCameras.push({n: "LAKEHOUSETEST0010", a: "CoronaCamera011", p: new BABYLON.Vector3(4217.55, 247.581, -58.5126), l: new BABYLON.Vector3(4217.55, 247.581, -55.9726)});
   layamaCameras.push({n: "LAKEHOUSETEST0011", a: "CoronaCamera012", p: new BABYLON.Vector3(4825.5, 247.581, 185.967), l: new BABYLON.Vector3(4825.48, 247.581, 188.507)});
   layamaCameras.push({n: "LAKEHOUSETEST0012", a: "CoronaCamera013", p: new BABYLON.Vector3(4961.21, 247.581, 22.6654), l: new BABYLON.Vector3(4961.19, 247.581, 25.2053)});
   layamaCameras.push({n: "LAKEHOUSETEST0013", a: "CoronaCamera014", p: new BABYLON.Vector3(4961.21, 247.581, 337.981), l: new BABYLON.Vector3(4961.19, 247.581, 340.521)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("512");
   layamaResolutions.push("512");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

