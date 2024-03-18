import React from 'react';

export interface IOnScreenArticleComponentProps {
  id: number;
  title: string;
  contentId: number;
  published: boolean;
  children: React.ReactNode;
}

type OnScreenArticleComponent = (props: IOnScreenArticleComponentProps) => JSX.Element;
export const OnScreenArticleContext = React.createContext<OnScreenArticleComponent>(undefined);
export const useOnScreenArticle = (): OnScreenArticleComponent =>
  React.useContext(OnScreenArticleContext)!;

export function OnScreenArticle(props: IOnScreenArticleComponentProps): JSX.Element {
  const store = useOnScreenArticle();
  return store(props);
}
