import { arr } from '@/constants';
import { IArea } from '@/types';

export const getRooms = async (areaName: string): Promise<IArea | null> => {
  return arr.find((area) => area.slug === areaName) || null;
};
