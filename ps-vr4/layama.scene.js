// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "RENDER0000", a: "CoronaCamera001", p: new BABYLON.Vector3(-224.063, 133.585, 248.803), l: new BABYLON.Vector3(-224.063, 133.585, 148.803)});
   layamaCameras.push({n: "RENDER0001", a: "CoronaCamera002", p: new BABYLON.Vector3(-227.819, 133.585, 154.483), l: new BABYLON.Vector3(-227.819, 133.585, 54.483)});
   layamaCameras.push({n: "RENDER0002", a: "CoronaCamera003", p: new BABYLON.Vector3(-137.073, 133.585, 96.2776), l: new BABYLON.Vector3(-137.073, 133.585, -3.72236)});
   layamaCameras.push({n: "RENDER0003", a: "CoronaCamera004", p: new BABYLON.Vector3(-66.4244, 133.585, 96.2776), l: new BABYLON.Vector3(-66.4244, 133.585, -3.72236)});
   layamaCameras.push({n: "RENDER0004", a: "CoronaCamera005", p: new BABYLON.Vector3(-66.4244, 133.585, 217.117), l: new BABYLON.Vector3(-66.4244, 133.585, 117.117)});
   layamaCameras.push({n: "RENDER0005", a: "CoronaCamera006", p: new BABYLON.Vector3(-142.404, 133.585, 217.117), l: new BABYLON.Vector3(-142.404, 133.585, 117.117)});
   layamaCameras.push({n: "RENDER0006", a: "CoronaCamera007", p: new BABYLON.Vector3(-228.646, 133.585, 93.288), l: new BABYLON.Vector3(-228.646, 133.585, -6.71202)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
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

