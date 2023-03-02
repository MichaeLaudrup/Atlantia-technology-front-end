import { linkStatus } from "../enums";

export interface VerticalMenuItem {
  name: string,
  description?: string,
  routerLink?: string,
  imgUrl?: string,
  status: linkStatus,
}