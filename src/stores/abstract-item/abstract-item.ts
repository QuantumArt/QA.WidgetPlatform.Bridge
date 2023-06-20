import React from 'react';

export interface IAbstractItem {
  readonly id: number;
  readonly alias: string;
  readonly nodeType: string;
  readonly children: IAbstractItem[];
}

export const AbstractItemContext = React.createContext<IAbstractItem | undefined>(undefined);
export const useAbstractItem = (): IAbstractItem => React.useContext(AbstractItemContext)!;
