const db = [
  [
    // =========================

    // GIP CAMERAS

    // =========================

    {
      camera: "ST-GIP2VFB-LPR",

      megapixels: "2",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: true,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["Junction Box Included", "ST-GPMA-C (Requires Junction Box)"],
    },

    {
      camera: "ST-GIP4FB-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-GJB05-A", "ST-GPMA-C (Requires ST-GJB05-A)"],
    },

    {
      camera: "ST-GIP4FD",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (Requires ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP4FD-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (Requires ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP4MFD-2.8",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (Requires ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP4FTD-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (Requires ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP4FTD-2.8-AD",

      megapixels: "4",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-E",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    {
      camera: "ST-GIP4VFB-MZ",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GJB07-C",
        "ST-GPMA-A (Requires ST-GJB07-C)",
        "ST-GPMA-C (Requires ST-GJB07-C)",
      ],
    },

    {
      camera: "ST-GIP4VFB-MZ-LPR",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: true,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["Junction Box Included", "ST-GPMA-C (Requires Junction Box)"],
    },

    {
      camera: "ST-GIP4VFD-MZ",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GWM04-B",
        "ST-GJB04-D",
        "ST-GPMA-A (Requires ST-GWM04-B)",
        "ST-GPMA-C (Requires ST-GWM04-B)",
      ],
    },

    {
      camera: "ST-GIP4VFTD-MZ",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-E",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    {
      camera: "ST-GIP5FTD-2.8",

      megapixels: "5",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (Requires ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP5FTD-2.8-AD",

      megapixels: "5",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-E",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    {
      camera: "ST-GIP5FE",

      megapixels: "5",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-GJB03-E"],
    },

    {
      camera: "ST-GIP8FB-2.8",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-GJB05-A", "ST-GPMA-C (Requires ST-GJB05-A)"],
    },

    {
      camera: "ST-GIP8FD-2.8",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (Requires ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP8FTD-2.8",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-I",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (Requires ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP8FTD-2.8-AD",

      megapixels: "8",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-E",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    {
      camera: "ST-GIP8VFB-MZ",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GJB07-C",
        "ST-GPMA-A (Requires ST-GJB07-C)",
        "ST-GPMA-C (Requires ST-GJB07-C)",
      ],
    },

    {
      camera: "ST-GIP8VFD-MZ",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GWM04-B",
        "ST-GJB04-D",
        "ST-GPMA-A (Requires ST-GWM04-B)",
        "ST-GPMA-C (Requires ST-GWM04-B)",
      ],
    },

    {
      camera: "ST-GIP8VFTD-MZ",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-E",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    {
      camera: "ST-GIP12FE",

      megapixels: "12",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-GJB04-G"],
    },

    // GIP CNV

    {
      camera: "ST-GIP4FB-CNV",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GJB07-C",
        "ST-GPMA-A (Requires ST-GJB07-C)",
        "ST-GPMA-C (Requires ST-GJB07-C)",
      ],
    },

    {
      camera: "ST-GIP4FB-CNV-AI-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-GJB05-A", "ST-GPMA-C (Requires ST-GJB05-A)"],
    },

    {
      camera: "ST-GIP4PVB-CNV",

      megapixels: "4",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GJB07-C",
        "ST-GPMA-A (Requires ST-GJB07-C)",
        "ST-GPMA-C (Requires ST-GJB07-C)",
      ],
    },

    {
      camera: "ST-GIP4FTD-CNV-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-E",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    {
      camera: "ST-GIP4FTD-CNV-AI-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-I",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    {
      camera: "ST-GIP5FTD-CNV",

      megapixels: "5",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP5FTD-CNV-2.8",

      megapixels: "5",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-A",
        "ST-GJB03-B",
        "ST-GPMA-A (Requires ST-GWM03-A)",
        "ST-GPMA-C (ST-GWM03-A)",
      ],
    },

    {
      camera: "ST-GIP8FB-CNV",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: [
        "ST-GJB07-C",
        "ST-GPMA-A (Requires ST-GJB07-C)",
        "ST-GPMA-C (Requires ST-GJB07-C)",
      ],
    },

    {
      camera: "ST-GIP8FTD-CNV-2.8",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "ST-GWM03-C",
        "ST-GJB03-E",
        "ST-GPMA-A (Requires ST-GWM03-C)",
        "ST-GPMA-C (Requires ST-GWM03-C)",
      ],
    },

    // GIP PTZ

    {
      camera: "ST-GIP4PTZ-25X",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: [
        "ST-GWMPTZ-A",
        "ST-GWMPTZ-B",
        "ST-GJB12-F (Requires ST-GWMPTZ-A)",
        "ST-GPTZ-PM",
        "ST-GPMA-B (Requires ST-GWMPTZ-A & ST-GJB12-F)",
      ],
    },

    {
      camera: "ST-GIP4PTZ-33X",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: [
        "ST-GWMPTZ-A",
        "ST-GWMPTZ-B",
        "ST-GJB12-F (Requires ST-GWMPTZ-A)",
        "ST-GPTZ-PM",
        "ST-GPMA-B (Requires ST-GWMPTZ-A & ST-GJB12-F)",
      ],
    },

    {
      camera: "ST-GIP4PTZ-DL-25X",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: [
        "ST-GWMPTZ-A",
        "ST-GWMPTZ-B",
        "ST-GJB12-F (Requires ST-GWMPTZ-A)",
        "ST-GPTZ-PM",
        "ST-GPMA-B (Requires ST-GWMPTZ-A & ST-GJB12-F)",
      ],
    },

    {
      camera: "ST-GIP4PTZMINI-16X",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: [
        "ST-GWMPTZ-A",
        "ST-GJB12-F",
        "ST-GPTZ-CM",
        "ST-GPTZ-PM",
        "ST-GPTZ-PMA",
      ],
    },

    {
      camera: "ST-GIP5PTZ-4X-AD",

      megapixels: "5",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: ["ST-GJB07-C", "ST-GPMA-C (Requires ST-GJB07-C)"],
    },

    // =========================

    // IP CAMERAS

    // =========================

    {
      camera: "ST-IP2VFB-LPR",

      megapixels: "2",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: true,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["Junction Box Included w/ Weather conduit access"],
    },

    {
      camera: "ST-IP4FB",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP4FB-2.8",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP4FB-6",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP4FB-8",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP4FD",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP4FD-2.8",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP4FD-2.8-BLK",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP4FD-6",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP4FD-8",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP4FD-BLK",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP4FWD-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-WM1"],
    },

    {
      camera: "ST-IP4FTD",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP4FTD-2.8",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP4FTD-BLK",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP4FTD-2.8-BLK",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP4VFB-MZ",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: [
        "Junction Box included",
        "ST-JB4",
        "ST-JB5",
        "ST-PTZPMPS",
        "ST-PTZCRMS",
      ],
    },

    {
      camera: "ST-IP4VFB-LPR",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: true,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["Junction Box included", "ST-JB5", "ST-PTZPMPS", "ST-PTZCRMS"],
    },

    {
      camera: "ST-IP4VFD-MZ",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "New: ST-JB7",
        "ST-WM6",
        "ST-WM6B",
        "Old: ST-JB3",
        "ST-WM2",
        "ST-WM2B",
        "ST-WM3",
        "ST-WM3B",
        "ST-WM4",
        "ST-WM4B",
        "ST-WM6",
        "ST-WM6B",
        "ST-WM7",
        "ST-WM7B",
      ],
    },

    {
      camera: "ST-IP4VFD-MZ-BLK",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "New: ST-JB7",
        "ST-WM6",
        "ST-WM6B",
        "Old: ST-JB3",
        "ST-WM2",
        "ST-WM2B",
        "ST-WM3",
        "ST-WM3B",
        "ST-WM4",
        "ST-WM4B",
        "ST-WM6",
        "ST-WM6B",
        "ST-WM7",
        "ST-WM7B",
      ],
    },

    {
      camera: "ST-IP4VFTD-MZ",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "New: ST-JB3",
        "ST-WM4",
        "ST-WM4B",
        "Old: ST-JB3",
        "ST-WM2",
        "ST-WM2B",
        "ST-WM3",
        "ST-WM3B",
        "ST-WM4",
        "ST-WM4B",
        "ST-WM6",
        "ST-WM6B",
        "ST-WM7",
        "ST-WM7B",
      ],
    },

    {
      camera: "ST-IP6VFTD-MZ",

      megapixels: "6",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-WM4", "ST-WM4B"],
    },

    {
      camera: "ST-IP6FE",

      megapixels: "6",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-IP6FE-ICM"],
    },

    {
      camera: "ST-IP8FB",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP8FB-2.8",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP8FBL",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB5", "ST-PTZCRMS", "ST-PTZPMPS"],
    },

    {
      camera: "ST-IP8FBL-2.8",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB5", "ST-PTZCRMS", "ST-PTZPMPS"],
    },

    {
      camera: "ST-IP8FD",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP8FD-2.8",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-IP8FTD",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP8FTD-2.8",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP8FTD-BLK",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP8FTD-2.8-BLK",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP8VFB-MZ",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["Junction Box included", "ST-JB5", "ST-PTZPMPS", "ST-PTZCRMS"],
    },

    {
      camera: "ST-IP8VFD-MZ",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: [
        "New: ST-JB7",
        "ST-WM6",
        "ST-WM6B",
        "Old: ST-JB3",
        "ST-WM2",
        "ST-WM2B",
        "ST-WM3",
        "ST-WM3B",
        "ST-WM4",
        "ST-WM4B",
        "ST-WM6",
        "ST-WM6B",
        "ST-WM7",
        "ST-WM7B",
      ],
    },

    {
      camera: "ST-IP8VFTD-MZ",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "New: ST-JB3",
        "ST-WM4",
        "ST-WM4B",
        "Old: ST-JB3",
        "ST-WM2",
        "ST-WM2B",
        "ST-WM3",
        "ST-WM3B",
        "ST-WM4",
        "ST-WM4B",
        "ST-WM6",
        "ST-WM6B",
        "ST-WM7",
        "ST-WM7B",
      ],
    },

    // =========================

    // IP LIGHT SERIES

    // =========================

    {
      camera: "ST-IP4FB-LS-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP4FB-LS-4",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP4FB-LS-6",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-IP4FD-LS-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["Old: ST-JB1", "ST-WM1", "ST-WM1B", "New: N/A In house"],
    },

    {
      camera: "ST-IP4FD-LS-4",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["Old: ST-JB1", "ST-WM1", "ST-WM1B", "New: N/A In house"],
    },

    {
      camera: "ST-IP4FD-LS-6",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["Old: ST-JB1", "ST-WM1", "ST-WM1B", "New: N/A In house"],
    },

    {
      camera: "ST-IP4FTD-LS-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST/JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP4FTD-LS-4",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST/JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-IP4VFB-MZ-LS",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4", "ST-JB5"],
    },

    {
      camera: "ST-IP4VFD-MZ-LS",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB3", "ST-WM3", "ST-WM3B"],
    },

    {
      camera: "ST-IP4VFTD-MZ-LS",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-WM2", "ST-WM2B"],
    },

    // =========================

    // IP CHROMA SERIES

    // =========================

    {
      camera: "ST-IP4FB-CNV",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4", "ST-JB5"],
    },

    {
      camera: "ST-IP4FB-CNV-2.8",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4", "ST-JB5"],
    },

    {
      camera: "ST-IP4FTD-CNV",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "Old: ST-JB3",
        "ST-WM4",
        "ST-WM4B",
        "New: ST-JB2",
        "ST-WM2",
        "ST-WM2B",
      ],
    },

    {
      camera: "ST-IP4FTD-CNV-2.8",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "Old: ST-JB3",
        "ST-WM4",
        "ST-WM4B",
        "New: ST-JB2",
        "ST-WM2",
        "ST-WM2B",
      ],
    },

    {
      camera: "ST-IP4FTD-CNV-B",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB3", "ST-WM3", "ST-WM3B", "ST-WM4", "ST-WM4B"],
    },

    {
      camera: "ST-IP4FTD-CNV-2.8B",

      megapixels: "4",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB3", "ST-WM3", "ST-WM3B", "ST-WM4", "ST-WM4B"],
    },

    {
      camera: "ST-IP6PVT-CNV-2.8",

      megapixels: "6",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-WM4", "ST-WM4B"],
    },

    {
      camera: "ST-IP8FTD-CNV-2.8",

      megapixels: "8",

      twoWay: false,

      mic: true,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB3", "ST-WM4", "ST-WM4B"],
    },

    {
      camera: "ST-IP8PVT-CNV-4",

      megapixels: "8",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-WM6", "ST-WM6B", "ST-JB7"],
    },

    {
      camera: "ST-IP8FB-CNV",

      megapixels: "8",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4", "ST-JB5"],
    },

    {
      camera: "ST-IP8FB-CNV-2.8",

      megapixels: "8",

      twoWay: true,

      mic: true,

      speaker: true,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4", "ST-JB5"],
    },

    // =========================

    // HDoC CHROMA SERIES

    // =========================

    {
      camera: "ST-HDC5FB-CNV",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4", "ST-JBMB"],
    },

    {
      camera: "ST-HDC5FB-CNV-2.8",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4", "ST-JBMB"],
    },

    {
      camera: "ST-HDC5FTD-CNV",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "Platsic Housing: ST-JB4",
        "ST-JB6",
        "ST-WM5",
        "Metal Housing: ST-JB2",
        "ST-JB2B",
        "ST-WM2",
        "ST-WM2B",
      ],
    },

    {
      camera: "ST-HDC5FTD-CNV-2.8",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: [
        "Platsic Housing: ST-JB4",
        "ST-JB6",
        "ST-WM5",
        "Metal Housing: ST-JB2",
        "ST-JB2B",
        "ST-WM2",
        "ST-WM2B",
      ],
    },

    {
      camera: "ST-HDC8FTD-CNV-2.8",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: true,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB4", "ST-WM5"],
    },

    // =========================

    // HDoC CAMERAS

    // =========================

    {
      camera: "ST-HDC5FB",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-HDC5FB-2.8",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-HDC5FD",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-HDC5FD-2.8",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB1", "ST-WM1", "ST-WM1B"],
    },

    {
      camera: "ST-HDC5FTD",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JBMB", "ST-WM5"],
    },

    {
      camera: "ST-HDC5FTD-2.8",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JBMB", "ST-WM5"],
    },

    {
      camera: "ST-HDC5FTDL-2.8",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JBMB", "ST-WM5"],
    },

    {
      camera: "ST-HDC5VFB-MZ",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JBMB", "ST-JB4"],
    },

    {
      camera: "ST-HDC5VFD-MZ",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: true,

      bullet: false,

      turretDome: false,

      ptz: false,

      mounts: ["ST-WM4", "ST-WM4B"],
    },

    {
      camera: "ST-HDC5VFTD-MZ",

      megapixels: "5",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: true,

      ptz: false,

      mounts: ["ST-JB2", "ST-JB2B", "ST-WM2", "ST-WM2B"],
    },

    {
      camera: "ST-HDC8VFB-MZ",

      megapixels: "8",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: true,

      lpr: false,

      dome: false,

      bullet: true,

      turretDome: false,

      ptz: false,

      mounts: ["ST-JB4"],
    },

    // =========================

    // IP PTZ

    // =========================

    {
      camera: "ST-IP4PTZ-4X",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: ["ST-IP4PTZ-4X-WMB"],
    },

    {
      camera: "ST-IP4IRPTZ-25X",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: [
        "ST-PTZCML",

        "ST-PTZCMS",

        "ST-PTZCRML",

        "ST-PTZCRMS",

        "ST-PTZPMPL",

        "ST-PTZPMPS",

        "ST-PTZWML",

        "ST-PTZWMS",

        "ST-PTZJBPW",

        "ST-PTZPMPS-KIT",
      ],
    },

    {
      camera: "ST-IP4PTZ-DL-25X",

      megapixels: "4",

      twoWay: false,

      mic: false,

      speaker: false,

      cnv: false,

      mz: false,

      lpr: false,

      dome: false,

      bullet: false,

      turretDome: false,

      ptz: true,

      mounts: [
        "ST-PTZCML",

        "ST-PTZCMS",

        "ST-PTZCRML",

        "ST-PTZCRMS",

        "ST-PTZPMPL",

        "ST-PTZPMPS",

        "ST-PTZWML",

        "ST-PTZWMS",

        "ST-PTZJBPW",

        "ST-PTZPMPS-KIT",
      ],
    },
  ],
];

export default db;
