import { IArea } from "@/types";

export const ring1Area: IArea = {
  name: "Ring 1",
  slug: "ring-1",
  rooms: [
    {
      url: "ring-1/20240301_140256_101",
      label: "Ring 1",
      slug: "20240301_140256_101",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_140318_290",
          position: {
            yaw: 4.479,
            pitch: -0.078,
          },
          tooltip: {
            content: "Menuju",
          },
        },
        {
          markerType: "enter",
          id: "ring-1/wtp-room-1",
          position: {
            yaw: 2.911,
            pitch: -0.03,
          },
          tooltip: {
            content: "<b>WTP Room</b>",
          },
        },
        {
          markerType: "enter",
          id: "ring-1/compressor-room",
          position: {
            yaw: 2.227,
            pitch: 0.014,
          },
          tooltip: {
            content: "<b>Compressor Room</b>",
          },
        },
        {
          markerType: "pin",
          id: "outer/20240304_132430_068",
          position: {
            yaw: 1.504,
            pitch: 0.018,
          },
          tooltip: {
            content: "Menuju ke Ring 2",
          },
        },
        {
          markerType: "pin",
          id: "outer/20240304_144159_596",
          position: {
            yaw: 5.889,
            pitch: -0.089,
          },
          tooltip: {
            content: "Kembali",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/49bace9b03c745aab78bc07dc1eba5c5?utm_campaign=embed&utm_source=other&heading=151.12&pitch=-4.31&field-of-view=75&size=medium&display-plan=true",
      label: "WTP Room 1",
      slug: "wtp-room-1",
      markers: [
        {
          markerType: "exit",
          id: "outer/20240301_140256_101",
          position: {
            yaw: 4.772,
            pitch: -0.114,
          },
          tooltip: {
            content: "Keluar",
          },
        },
        {
          markerType: "pin",
          id: "ring-1/compressor-room",
          position: {
            yaw: 0.99,
            pitch: -0.019,
          },
          tooltip: {
            content: "Go to <b>Compressor Room</b>",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/fb9186cac6854e2683bc0a15196466dd?utm_campaign=embed&utm_source=other&heading=-200.06&pitch=0.44&field-of-view=100&size=medium&display-plan=true",
      label: "Compressor Room",
      slug: "compressor-room",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_140256_101",
          position: {
            yaw: 0.313,
            pitch: -0.121,
          },
          tooltip: {
            content: "Keluar",
          },
        },
        {
          markerType: "pin",
          id: "ring-1/w",
          position: {
            yaw: 4.563,
            pitch: -0.114,
          },
          tooltip: {
            content: "Masuk",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/fb9186cac6854e2683bc0a15196466dd?utm_campaign=embed&utm_source=other&heading=-200.06&pitch=0.44&field-of-view=100&size=medium&display-plan=true",
      label: "Genset Room",
      slug: "genset-1",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_140318_290",
          position: {
            yaw: 3.606,
            pitch: -0.059,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/fb9186cac6854e2683bc0a15196466dd?utm_campaign=embed&utm_source=other&heading=-200.06&pitch=0.44&field-of-view=100&size=medium&display-plan=true",
      label: "Substation Room",
      slug: "sub-station1.2",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_140318_290",
          position: {
            yaw: 3.176,
            pitch: -0.071,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/f05e6454ac684437aa3ae78038b541a4?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      label: "Solar Tank",
      slug: "solar-tank",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240305_142027_547",
          position: {
            yaw: 3.252,
            pitch: 0.036,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/f05e6454ac684437aa3ae78038b541a4?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      label: "Recycle Water",
      slug: "recycle-water-room",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240305_142027_547",
          position: {
            yaw: 3.721,
            pitch: -0.107,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/44f411fb15b54100b4c006d39a8aaad2?utm_campaign=embed&utm_source=other&heading=-39.5&pitch=-2.05&field-of-view=100&size=medium&display-plan=true",
      label: "Boiler Room",
      slug: "boiler-1",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240305_142027_547",
          position: {
            yaw: 2.386,
            pitch: -0.298,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/9d13a1a41c2f4d059cf112585247e00e?utm_campaign=embed&utm_source=other&heading=-41.82&pitch=-4.37&field-of-view=100&size=medium&display-plan=true",
      label: "Pump Room",
      slug: "pump-room-1",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_140645_472",
          position: {
            yaw: 4.834,
            pitch: -0.137,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/f68a0e9421e14668b1de2f5eef21ecd2?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      label: "Deep Well 2",
      slug: "dw-2",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_154427_324",
          position: {
            yaw: 0.317,
            pitch: -0.113,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/729693e08c764b9eb9cda09781cef464?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      label: "WWTP Area",
      slug: "wwtp-area-1",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_154427_324",
          position: {
            yaw: 0.518,
            pitch: -0.187,
          },
          tooltip: {
            content: "Keluar",
          },
        },
        {
          markerType: "pin",
          id: "ring-1/water-storage",
          position: {
            yaw: 4.957,
            pitch: -0.191,
          },
          tooltip: {
            content: "<b>Water Storage</b>",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/d376aaf2a2b34709a6dccf81b18e7799?utm_campaign=embed&utm_source=other&heading=-86.85&pitch=-0.19&field-of-view=75&size=medium&display-plan=true",
      label: "Water Storage",
      slug: "water-storage",
      markers: [
        {
          markerType: "pin",
          id: "ring-1/wwtp-area-1",
          position: {
            yaw: 4.086,
            pitch: -0.208,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/d376aaf2a2b34709a6dccf81b18e7799?utm_campaign=embed&utm_source=other&heading=-86.85&pitch=-0.19&field-of-view=75&size=medium&display-plan=true",
      label: "WWTP Office",
      slug: "wwtp-office",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_140732_269",
          position: {
            yaw: 1.793,
            pitch: -0.125,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/377fd915dd8043008d5549f39e5da1b6?utm_campaign=embed&utm_source=other&heading=-149.42&pitch=-4.65&field-of-view=75&size=medium&display-plan=true",
      label: "Substation Room",
      slug: "sub-station1.1",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_154741_359",
          position: {
            yaw: 6.064,
            pitch: -0.108,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/2ed29b0ef740450daa0e8a8025153dd7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      label: "Chiller GBL",
      slug: "chiller-gbl",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_154741_359",
          position: {
            yaw: 3.431,
            pitch: -0.119,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/15c499b4a0fc4f04a43d5cf217a42a76?utm_campaign=embed&utm_source=other&heading=35.8&pitch=-3.6&field-of-view=100&size=medium&display-plan=true",
      label: "Deep Well 1",
      slug: "dw-1",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240304_085609_640",
          position: {
            yaw: 4.62,
            pitch: -0.126,
          },
          tooltip: {
            content: "Menuju",
          },
        },
        {
          markerType: "pin",
          id: "/outer/20240301_154741_359",
          position: {
            yaw: 1.868,
            pitch: -0.061,
          },
          tooltip: {
            content: "Kembali",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/581b48a465de426988a8384340fe20ab?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      label: "Deep Well 5",
      slug: "dw-5",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240305_105807_457",
          position: {
            yaw: 5.826,
            pitch: -0.612,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
    {
      url: "https://momento360.com/e/u/894529582f374eeca39248bf50c766b1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      label: "Deep Well 3",
      slug: "dw-3",
      markers: [
        {
          markerType: "pin",
          id: "ring-1/",
          position: {
            yaw: 4.492,
            pitch: 0.316,
          },
          tooltip: {
            content: "Keluar",
          },
        },
      ],
    },
  ],
};
