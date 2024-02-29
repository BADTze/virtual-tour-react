export interface IRoom {
  url: string;
  label: string;
}

export interface IArea {
  name: string;
  slug: string;
  rooms: IRoom[];
}
