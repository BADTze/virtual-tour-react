export interface IRoom {
  url: string;
  label: string;
  slug:string;
}

export interface IArea {
  name: string;
  slug: string;
  rooms: IRoom[];
}
