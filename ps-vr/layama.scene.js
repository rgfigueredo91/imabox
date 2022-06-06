// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "barbacoa_final0000", a: "VRayCam001", p: new BABYLON.Vector3(185.901, 140, -689.799), l: new BABYLON.Vector3(185.901, 140, -687.259)});
   layamaCameras.push({n: "barbacoa_final0001", a: "VRayCam002", p: new BABYLON.Vector3(185.901, 140, -395.387), l: new BABYLON.Vector3(185.901, 140, -392.847)});
   layamaCameras.push({n: "barbacoa_final0002", a: "VRayCam003", p: new BABYLON.Vector3(185.901, 140, -45.7287), l: new BABYLON.Vector3(185.901, 140, -43.1887)});
   layamaCameras.push({n: "barbacoa_final0003", a: "VRayCam004", p: new BABYLON.Vector3(434.326, 140, -45.7287), l: new BABYLON.Vector3(434.326, 140, -43.1887)});
   layamaCameras.push({n: "barbacoa_final0004", a: "VRayCam005", p: new BABYLON.Vector3(614.227, 140, -45.7287), l: new BABYLON.Vector3(614.227, 140, -43.1887)});
   layamaCameras.push({n: "barbacoa_final0005", a: "VRayCam006", p: new BABYLON.Vector3(-62.664, 140, -45.7287), l: new BABYLON.Vector3(-62.664, 140, -43.1887)});
   layamaCameras.push({n: "barbacoa_final0006", a: "VRayCam007", p: new BABYLON.Vector3(-276.708, 140.207, -45.7287), l: new BABYLON.Vector3(-276.708, 140.207, -43.1887)});
   layamaCameras.push({n: "barbacoa_final0007", a: "VRayCam008", p: new BABYLON.Vector3(-507.523, 140, -45.7287), l: new BABYLON.Vector3(-507.523, 140, -43.1887)});
   layamaCameras.push({n: "barbacoa_final0008", a: "VRayCam009", p: new BABYLON.Vector3(-571.308, 140, 70.332), l: new BABYLON.Vector3(-571.308, 140, 72.872)});
   layamaCameras.push({n: "barbacoa_final0009", a: "VRayCam010", p: new BABYLON.Vector3(-426.482, 140, 70.332), l: new BABYLON.Vector3(-426.482, 140, 72.872)});
   layamaCameras.push({n: "barbacoa_final0010", a: "VRayCam011", p: new BABYLON.Vector3(-462.936, 139.852, 319.274), l: new BABYLON.Vector3(-462.936, 139.852, 316.734)});
   layamaCameras.push({n: "barbacoa_final0011", a: "VRayCam012", p: new BABYLON.Vector3(-596.883, 140, 319.058), l: new BABYLON.Vector3(-596.883, 140, 321.598)});
   layamaCameras.push({n: "barbacoa_final0012", a: "VRayCam013", p: new BABYLON.Vector3(-247.698, 140, 326.754), l: new BABYLON.Vector3(-247.698, 140, 329.294)});
   layamaCameras.push({n: "barbacoa_final0013", a: "VRayCam014", p: new BABYLON.Vector3(-247.698, 140, 229.747), l: new BABYLON.Vector3(-247.698, 140, 232.287)});
   layamaCameras.push({n: "barbacoa_final0014", a: "VRayCam015", p: new BABYLON.Vector3(-247.321, 140, 129.786), l: new BABYLON.Vector3(-247.321, 140, 132.326)});
   layamaCameras.push({n: "barbacoa_final0015", a: "VRayCam016", p: new BABYLON.Vector3(-68.7694, 140, 326.754), l: new BABYLON.Vector3(-68.7694, 140, 329.294)});
   layamaCameras.push({n: "barbacoa_final0016", a: "VRayCam017", p: new BABYLON.Vector3(170.968, 140, 326.754), l: new BABYLON.Vector3(168.428, 140, 326.754)});
   layamaCameras.push({n: "barbacoa_final0017", a: "VRayCam018", p: new BABYLON.Vector3(170.968, 140, 161.457), l: new BABYLON.Vector3(170.968, 140, 163.997)});
   layamaCameras.push({n: "barbacoa_final0018", a: "VRayCam019", p: new BABYLON.Vector3(364.272, 140, 320.627), l: new BABYLON.Vector3(364.272, 140, 323.167)});
   layamaCameras.push({n: "barbacoa_final0019", a: "VRayCam020", p: new BABYLON.Vector3(487.153, 140, 182.918), l: new BABYLON.Vector3(487.153, 140, 185.458)});
   layamaCameras.push({n: "barbacoa_final0020", a: "VRayCam021", p: new BABYLON.Vector3(158.19, 140, 57.6863), l: new BABYLON.Vector3(158.19, 140, 60.2263)});
   layamaCameras.push({n: "barbacoa_final0021", a: "VRayCam022", p: new BABYLON.Vector3(353.731, 140, 100.233), l: new BABYLON.Vector3(353.731, 140, 102.773)});
   layamaCameras.push({n: "barbacoa_final0022", a: "VRayCam023", p: new BABYLON.Vector3(528.308, 140, 320.627), l: new BABYLON.Vector3(528.308, 140, 323.167)});
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

function getLayamaAlternatives()
{
   var layamaAlternatives = new BABYLON.SmartArray(0);
   layamaAlternatives.push({n: "base", u: "./jpg/base/", i:"./jpg/alternative.png"});
   layamaAlternatives.push({n: "Alternative_1", u: "./jpg/Alternative_1/", i:"./jpg/alternative.png"});
   layamaAlternatives.push({n: "Alternative_2", u: "./jpg/Alternative_2/", i:"./jpg/alternative.png"});
   layamaAlternatives.push({n: "Alternative_3", u: "./jpg/Alternative_3/", i:"./jpg/alternative.png"});
   layamaAlternatives.push({n: "Alternative_4", u: "./jpg/Alternative_4/", i:"./jpg/alternative.png"});
   return layamaAlternatives;
}

