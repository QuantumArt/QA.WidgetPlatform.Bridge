import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IEventCallback = (...args: any[]) => void;
export interface IEventBusStore {
  on(eventName: string, callback: IEventCallback): void;
  once(eventName: string, callback: IEventCallback): void;
  exactly(number: number, eventName: string, callback: IEventCallback): void;
  die(eventName: string): void;
  off(eventName: string): void;
  detach(eventName: string, callback?: IEventCallback): boolean;
  detachAll(): void;
  emit<C = null>(eventName: string, context?: C, ...args: any[]): void;
}

export const EventBusStoreContext = React.createContext<IEventBusStore | undefined>(undefined);
export const useEventBusStore = (): IEventBusStore => React.useContext(EventBusStoreContext)!;
