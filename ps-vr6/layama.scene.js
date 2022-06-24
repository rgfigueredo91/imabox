// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "render0000", a: "VRayCam001", p: new BABYLON.Vector3(4483.06, 160.306, -909.787), l: new BABYLON.Vector3(4483.06, 160.306, -907.247)});
   layamaCameras.push({n: "render0001", a: "VRayCam006", p: new BABYLON.Vector3(4592.96, 173.13, -207.066), l: new BABYLON.Vector3(4592.96, 173.13, -204.526)});
   layamaCameras.push({n: "render0002", a: "VRayCam040", p: new BABYLON.Vector3(4586.08, 199.848, -37.9855), l: new BABYLON.Vector3(4586.08, 199.848, -35.4455)});
   layamaCameras.push({n: "render0003", a: "VRayCam041", p: new BABYLON.Vector3(4417.42, 199.848, -69.035), l: new BABYLON.Vector3(4417.42, 199.848, -66.495)});
   layamaCameras.push({n: "render0004", a: "VRayCam042", p: new BABYLON.Vector3(4217.78, 199.848, -69.035), l: new BABYLON.Vector3(4217.78, 199.848, -66.495)});
   layamaCameras.push({n: "render0005", a: "VRayCam043", p: new BABYLON.Vector3(4097.33, 199.848, -69.035), l: new BABYLON.Vector3(4097.33, 199.848, -66.495)});
   layamaCameras.push({n: "render0006", a: "VRayCam044", p: new BABYLON.Vector3(3941.94, 199.848, -69.035), l: new BABYLON.Vector3(3941.94, 199.848, -66.495)});
   layamaCameras.push({n: "render0007", a: "VRayCam045", p: new BABYLON.Vector3(3915.01, 199.848, 119.082), l: new BABYLON.Vector3(3915.01, 199.848, 121.622)});
   layamaCameras.push({n: "render0008", a: "VRayCam046", p: new BABYLON.Vector3(4099.44, 199.848, 119.082), l: new BABYLON.Vector3(4099.44, 199.848, 121.622)});
   layamaCameras.push({n: "render0009", a: "VRayCam047", p: new BABYLON.Vector3(4201.88, 199.848, 130.89), l: new BABYLON.Vector3(4201.88, 199.848, 133.43)});
   layamaCameras.push({n: "render0010", a: "VRayCam048", p: new BABYLON.Vector3(4217.53, 199.848, 39.1694), l: new BABYLON.Vector3(4217.53, 199.848, 41.7094)});
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

