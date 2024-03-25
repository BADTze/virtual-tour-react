import { IArea } from "@/types";

export const Outer: IArea = {
  name: "",
  slug: "outer",
  rooms: [
    {
      url: "",
      label: "",
      slug: "20240301_140256_101",
      markers: [
        {
          markerType: "walk",
          arrowType: "left",
          id: "/",
          position: {
            yaw: 4.479,
            pitch: -0.078,
          },
          tooltip: {
            content: "Go <b>WTP</b>",
          },
        },
        {
          markerType: "enter",
          //   arrowType: "left",
          id: "ring-1/wtp-room-1",
          position: {
            yaw: 2.911,
            pitch: -0.03,
          },
          tooltip: {
            content: "Go To <b>WTP</b>",
          },
        },
      ],
    },
  ],
};
