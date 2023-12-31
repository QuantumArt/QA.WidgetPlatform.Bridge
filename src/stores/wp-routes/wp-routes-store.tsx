import React from 'react';

export interface BreadcrumbItem {
  title: string;
  link: string;
}

export interface PageNode {
  title: string;
  link: string;
  additionalData: unknown;
  children: PageNode[];
}

export interface IWPRoutesStore {
  getBreadcrumbs(): BreadcrumbItem[];
  getSiteMap(maxDeep?: number): PageNode[];
  getTailUrl(): string;
}

export const WPRoutesStoreContext = React.createContext<IWPRoutesStore | undefined>(undefined);
export const useWPRoutesStore = (): IWPRoutesStore => React.useContext(WPRoutesStoreContext)!;
