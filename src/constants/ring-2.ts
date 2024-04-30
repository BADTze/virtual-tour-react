import { IArea } from '@/types';

export const ring2Area: IArea = {
  name: 'Ring 2',
  slug: 'ring-2',
  rooms: [
    {
      url: "ring-2/20240301_140256_101",
      label: "Ring 2",
      slug: "20240304_132430_068",
      markers: [
        {
          markerType: "pin",
          id: "outer/20240301_140256_101",
          position: {
            yaw: 0.151,
            pitch: 0.005,
          },
          tooltip: {
            content: "Menuju Ring 1",
          },
        },
        {
          markerType: "enter",
          id: "ring-2/wtp-room-2",
          position: {
            yaw: 4.58,
            pitch: -0.026,
          },
          tooltip: {
            content: "<b>WTP Room</b>",
          },
        },
        {
          markerType: "pin",
          id: "outer/20240304_132445_909",
          position: {
            yaw: 3.316,
            pitch: -0.06,
          },
          tooltip: {
            content: "Menuju",
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/755766a603ad49408572fbedb27b9e4c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'WTP Room',
      slug: 'wtp-room-2',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_132430_068',
          position: {
            "yaw": 0.644,
            "pitch": -0.041
          },
          tooltip: {
            content: 'Keluar',
          },
        },
        {
          markerType: 'pin',
          id: 'ring-2/wtp-room-2',
          position:{
            "yaw": 4.733,
            "pitch": -0.089
          },
          tooltip: {
            content: 'Masuk',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/e1378ee4505a4afb89628bfc3c9d5e18?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Cooling Tower',
      slug: 'cooling-twr',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_105045_706',
          position: {
            "yaw": 3.731,
            "pitch": -0.079
          },
          tooltip: {
            content: 'Keluar',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/9fd318e4ef9144e4945faebbfe105725?utm_campaign=embed&utm_source=other&heading=-3.88&pitch=-8.31&field-of-view=75&size=medium&display-plan=true',
      label: 'Compressor Low Pressure',
      slug: 'comp-low',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_105045_706',
          position: {
            "yaw": 0.111,
            "pitch": -0.049
          },
          tooltip: {
            content: 'Keluar',
          },
        },
        {
          markerType: 'pin',
          id: 'ring-2/t',
          position: {
            "yaw": 2.625,
            "pitch": -0.024
          },
          tooltip: {
            content: '',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/fd7bb06dd65946e783f72857133e5ecd?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Substation OC3',
      slug: 'substation-oc3',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240226_104430_347',
          position: {
            "yaw": 2.291,
            "pitch": -0.04
          },
          tooltip: {
            content: 'Keluar',
          },
        },
        {
          markerType: 'pin',
          id: 'ring-2/h',
          position: {
            "yaw": 6.27,
            "pitch": -0.108
          },
          tooltip: {
            content: '',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/6ff4bd3e2630436f94cee87bd7630782?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Genset 1500 kVA',
      slug: 'genset-1500',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_105134_046',
          position: {
            "yaw": 6.104,
            "pitch": -0.044
          },
          tooltip: {
            content: 'Keluar',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/825fb50131f04fdab555c7291af9b154?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Genset Chiller',
      slug: 'genset-chiller',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_105134_046',
          position: {
            "yaw": 0.4,
            "pitch": 0.001
          },
          tooltip: {
            content: 'Keluar',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/354bf899d4694efa80e8ee8f17ef50be?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Compressor High Pressure',
      slug: 'comp-high',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_105213_691',
          position: {
            "yaw": 1.947,
            "pitch": -0.024
          },
          tooltip: {
            content: 'Keluar',
          },
        },
        {
          markerType: 'pin',
          id: 'ring-2/a',
          position: {
            "yaw": 3.158,
            "pitch": -0.168
          },
          tooltip: {
            content: '',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/be5c49f20a6b499a9f11f9dfa2d5f285?utm_campaign=embed&utm_source=other&heading=141.17&pitch=-8.88&field-of-view=100&size=medium&display-plan=true',
      label: 'Genset Mgs',
      slug: 'genset-mgs',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_105332_109',
          position: {
            "yaw": 2.612,
            "pitch": -0.042
          },
          tooltip: {
            content: 'Keluar',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/1fb2e2b7d63c4f9b8b12238bbfcb76cd?utm_campaign=embed&utm_source=other&heading=160.7&pitch=-6.25&field-of-view=100&size=medium&display-plan=true',
      label: 'Substation PET',
      slug: 'substation-pet',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240304_105332_109',
          position: {
            "yaw": 2.801,
            "pitch": -0.022
          },
          tooltip: {
            content: 'Keluar',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/da513648579e4a9ca2b3fd4c90c6f23a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Boiler 12 TPH',
      slug: 'boiler-12tph',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240321_084528_239',
          position: {
            "yaw": 2.301,
            "pitch": -0.119
          },
          tooltip: {
            content: 'Keluar',
          },
        },
        {
          markerType: 'pin',
          id: 'ring-2/boiler-12tph',
          position: {
            "yaw": 0.932,
            "pitch": -0.123
          },
          tooltip: {
            content: 'Menuju',
          },
        },
        {
          markerType: 'pin',
          id: 'outer/20240327_135707_697',
          position: {
            "yaw": 5.468,
            "pitch": -0.039
          },
          tooltip: {
            content: 'Menuju',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/3fca28fbc45840cebcb634ac73c0b24a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Chiller',
      slug: 'chiller-2',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240327_135707_697',
          position: {
            "yaw": 1.758,
            "pitch": 0.019
          },
          tooltip: {
            content: 'Keluar',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/848544aa48884c3cabfe50bd68ec2748?utm_campaign=embed&utm_source=other&size=medium&display-plan=true',
      label: 'Deep Well 4',
      slug: 'dw-4',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240305_082550_025',
          position: {
            "yaw": 3.3,
            "pitch": 0.47
          },
          tooltip: {
            content: 'Keluar',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/016489bccd5f470cb6832c544145e387?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Water Storage',
      slug: 'water-storage',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240305_082550_025',
          position: {
            "yaw": 0.643,
            "pitch": -0.111
          },
          tooltip: {
            content: 'Keluar',
          },
        },
        {
          markerType: 'pin',
          id: 'ring-2/test',
          position: {
            "yaw": 4.399,
            "pitch": -0.092
          },
          tooltip: {
            content: '',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/56b352636c0444429f7b6768e3394288?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
      label: 'Deep Well 6',
      slug: 'dw-6',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240305_082728_515',
          position: {
            "yaw": 3.142,
            "pitch": -0.211
          },
          tooltip: {
            content: '',
          },
        },
      ],
    },
    {
      url: 'https://momento360.com/e/u/c2e34b2c07d7468b827cd059d89dcfed?utm_campaign=embed&utm_source=other&size=medium&display-plan=true',
      label: 'Deep Well 7',
      slug: 'dw-7',
      markers: [
        {
          markerType: 'pin',
          id: 'outer/20240305_082728_515',
          position: {
            "yaw": 3.663,
            "pitch": -0.086
          },
          tooltip: {
            content: '',
          },
        },
      ],
    },
  ],
};
