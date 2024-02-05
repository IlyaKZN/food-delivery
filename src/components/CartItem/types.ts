import { TMenuItem } from '@/types/api';

export type TCartItem = {
  id: string,
  imgSrc: string,
  name: string,
  price: number,
  count: number,
  emitData: TMenuItem,
}