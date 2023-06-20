import React from 'react';

export interface BreadcrumbItem {
  title: string;
  link: string;
}

export interface PageNode {
  title: string;
  link: string;
  children: PageNode[];
  isvisible: true;
}

export interface IWPRoutesStore {
  getBreadcrumbs(): BreadcrumbItem[];
  getSiteMap(maxDeep?: number): PageNode[];
}

export const WPRoutesStoreContext = React.createContext<IWPRoutesStore | undefined>(undefined);
export const useWPRoutesStore = (): IWPRoutesStore => React.useContext(WPRoutesStoreContext)!;
