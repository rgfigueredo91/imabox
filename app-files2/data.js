var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.5535861049369544,
        "pitch": 0.008429052671610648,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.578069736209228,
          "pitch": 0.073081243895178,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": -1.8419900663071456,
          "pitch": 0.05648512150190399,
          "rotation": 0,
          "target": "3-dormitorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5205082325533077,
          "pitch": 0.049816318229165546,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 2.0091236319335604,
          "pitch": -0.02127866896691266,
          "rotation": 0,
          "target": "2-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
      "name": "baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3334659100071722,
          "pitch": 0.0698021661115007,
          "rotation": 0,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormitorio",
      "name": "dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7178954554400985,
          "pitch": 0.08422784026279473,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
