'use client';

import { useState } from "react";

const arr = [
  {
    name: "Ruangan 1",
    rooms: [
      {
        url: "https://momento360.com/e/u/e4b16f1137f04cd18af6d8a6586b2a72?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
        label: "Ruangan 1.1",
      },
      {
        url: "https://momento360.com/e/u/95e46dae2f6748fcae65a942656af37b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
        label: "Ruangan 1.2",
      },
      {
        url: "https://momento360.com/e/u/7574bc1982b94bdda7070a847b4de577?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
        label: "Ruangan 1.3",
      },
    ],
  },
  {
    name: "Ruangan 2",
    rooms: [
      {
        url: "https://momento360.com/e/u/e4b16f1137f04cd18af6d8a6586b2a72?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
        label: "Ruangan 2.1",
      },
      {
        url: "https://momento360.com/e/u/95e46dae2f6748fcae65a942656af37b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
        label: "Ruangan 2.2",
      },
      {
        url: "https://momento360.com/e/u/7574bc1982b94bdda7070a847b4de577?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
        label: "Ruangan 2.3",
      },
    ],
  },
];

const Tour = (props: {
  changer: (url: string) => void;
  currentUrl: string;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-[85vh] relative">
      <div
        className={`bg-sky-600 absolute left-0 right-0 w-60 p-3 h-full ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="bg-slate-700 p-3 text-white border-2 top-0 -right-8 absolute rotate-180"
          onClick={() => setOpen(!open)}
        >
          &laquo;
        </button>

        {/* <ul className="flex flex-col gap-4 text-white">
          {arr.map((item) => {
            return (
              <li
                className="text-center cursor-pointer text-xl"
                key={item.url}
                onClick={() => props.changer(item.url)}
              >
                {item.label}
              </li>
            );
          })}
        </ul> */}
        <ul>
          {arr.map((item, i) => {
            return (
              <li key={item.name}>
                <p>
                  {i + 1}. {item.name}
                </p>
                <ul className="pl-3">
                  {item.rooms.map((room) => (
                    <li key={room.url}>{room.label}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      <iframe width="100%" height="100%" src={props.currentUrl} />
    </div>
  );
};

export default Tour;
