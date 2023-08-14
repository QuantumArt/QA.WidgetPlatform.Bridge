import React from 'react';

export interface IZoneStore {
  currentZoneName?: string;
  getZoneComponent(zoneName: string): JSX.Element;
  DynamicZone(prop: { html: string }): JSX.Element;
}

export const ZoneStoreContext = React.createContext<IZoneStore | undefined>(undefined);
export const useZoneStore = (): IZoneStore => React.useContext(ZoneStoreContext)!;
