import { ElementType } from 'react';

export interface IRoutesBase {
  title: string;
  url: string;
  badge?: string;
  icon?: ElementType;
  content?: ElementType;
}

export interface IRoutesWithChildren extends IRoutesBase {
  routeChildren: IRoutes[];
}

export type IRoutes = IRoutesBase | IRoutesWithChildren;
