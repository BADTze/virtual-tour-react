export interface Position {
  yaw: number;
  pitch: number;
}

export interface Tooltip {
  content?: string;
  trigger?: string;
}

export interface IMarker {
  id: string;
  image: string;
  position: Position;
  size: {
    width: number;
    height: number;
  };
  tooltip: Tooltip;
  anchor: string;
  visible: boolean;
  zIndex: number;
  opacity: number;
  rotation: number;
  hoverScale?: any;
}

export type MarkerType =
  | {
      markerType: 'walk';
      arrowType: 'up' | 'down' | 'left' | 'right';
    }
  | {
      markerType: 'pin';
    }
  | {
      markerType: 'enter';
    }
  | {
      markerType: 'exit';
    };

export type IMarkerCustom = {
  /** the format should be `[slugArea]/[slugRoom]`. Example: `ring-1/wtp-room-1` */
  id: string;
  tooltip: Tooltip;
  position: Position;
} & MarkerType;

export interface IRoom {
  url: string;
  label: string;
  slug: string;
  markers: IMarkerCustom[];
}

export interface IArea {
  name: string;
  slug: string;
  rooms: IRoom[];
}
