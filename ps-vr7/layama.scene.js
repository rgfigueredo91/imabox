// Created with Motiva Layama v1.6 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "UNI0000", a: "PhysCamera007", p: new BABYLON.Vector3(434.026, 175.187, -4281.63), l: new BABYLON.Vector3(434.026, 175.187, -4181.63)});
   layamaCameras.push({n: "UNI0001", a: "PhysCamera008", p: new BABYLON.Vector3(436.584, 175.187, -3406.72), l: new BABYLON.Vector3(436.584, 175.187, -3306.72)});
   layamaCameras.push({n: "UNI0002", a: "PhysCamera009", p: new BABYLON.Vector3(1474.21, 175.187, -3406.72), l: new BABYLON.Vector3(1474.21, 175.187, -3306.72)});
   layamaCameras.push({n: "UNI0003", a: "PhysCamera010", p: new BABYLON.Vector3(2574.92, 175.187, -3406.72), l: new BABYLON.Vector3(2574.92, 175.187, -3306.72)});
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

