import { ApolloClient, ApolloProvider, useApolloClient } from '@apollo/client';
import React from 'react';

interface IProps {
  client?: ApolloClient<object>;
  children: React.ReactNode;
}

const HaveWPApolloClientContext = React.createContext<boolean>(false);

export const WPApolloClientProvider = (props: IProps) => {
  if (!!props.client) {
    return (
      <HaveWPApolloClientContext.Provider value={true}>
        <ApolloProvider client={props.client}>{props.children}</ApolloProvider>
      </HaveWPApolloClientContext.Provider>
    );
  }
  return (
    <HaveWPApolloClientContext.Provider value={false}>
      {props.children}
    </HaveWPApolloClientContext.Provider>
  );
};

export const useWPApolloClient = (): ApolloClient<object> | undefined => {
  const haveWPApolloClient = React.useContext(HaveWPApolloClientContext);
  if (haveWPApolloClient) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useApolloClient();
  }
  return undefined;
};
