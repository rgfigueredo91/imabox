// Created with Motiva Layama v1.6 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "layama0000", a: "VRayCam001", p: new BABYLON.Vector3(464.061, 124.192, -4072.74), l: new BABYLON.Vector3(463.925, 124.192, -3972.74)});
   layamaCameras.push({n: "layama0001", a: "VRayCam002", p: new BABYLON.Vector3(474.054, 124.192, -3383.09), l: new BABYLON.Vector3(473.917, 124.192, -3283.09)});
   layamaCameras.push({n: "layama0002", a: "VRayCam003", p: new BABYLON.Vector3(2605.08, 124.192, -3393.13), l: new BABYLON.Vector3(2604.94, 124.192, -3293.13)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
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

