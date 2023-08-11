/* eslint-disable @typescript-eslint/no-explicit-any */
import { DocumentNode, GraphQLError, GraphQLErrorExtensions } from 'graphql';
import React from 'react';

export declare enum NetworkStatus {
  loading = 1,
  setVariables = 2,
  fetchMore = 3,
  refetch = 4,
  poll = 6,
  ready = 7,
  error = 8,
}

export type ErrorPolicy = 'none' | 'ignore' | 'all';
export type FetchPolicy = 'cache-first' | 'network-only' | 'cache-only' | 'no-cache' | 'standby';

export type OperationVariables = Record<string, any>;
export type DefaultContext = Record<string, any>;

export interface IDocumentTypeDecoration<TResult, TVariables> {
  __apiType?: (variables: TVariables) => TResult;
}

export interface ITypedDocumentNode<
  TResult = {
    [key: string]: any;
  },
  TVariables = {
    [key: string]: any;
  },
> extends DocumentNode,
    IDocumentTypeDecoration<TResult, TVariables> {}

export interface IQueryOptions<TVariables = OperationVariables, TData = any> {
  query: DocumentNode | ITypedDocumentNode<TData, TVariables>;
  variables?: TVariables;
  errorPolicy?: ErrorPolicy;
  context?: DefaultContext;
  fetchPolicy?: FetchPolicy;
  pollInterval?: number;
  notifyOnNetworkStatusChange?: boolean;
  returnPartialData?: boolean;
  partialRefetch?: boolean;
  canonizeResults?: boolean;
}

export type IGraphQLErrors = ReadonlyArray<GraphQLError>;

export type ServerError = Error & {
  response: Response;
  result: Record<string, any> | string;
  statusCode: number;
};

export type IServerParseError = Error & {
  response: Response;
  statusCode: number;
  bodyText: string;
};

export declare class IWPGraphqlResultError extends Error {
  name: string;
  message: string;
  graphQLErrors: IGraphQLErrors;
  protocolErrors: ReadonlyArray<{
    message: string;
    extensions?: GraphQLErrorExtensions[];
  }>;
  clientErrors: ReadonlyArray<Error>;
  networkError: Error | IServerParseError | ServerError | null;
  extraInfo: any;
}

export type IWPGraphqlQueryResult<T> = {
  data: T;
  errors?: ReadonlyArray<GraphQLError>;
  error?: IWPGraphqlResultError;
  loading: boolean;
  networkStatus: NetworkStatus;
  partial?: boolean;
};

export interface IGraphQLClient {
  hasGraphQL: boolean;
  query<T = any, TVariables extends OperationVariables = OperationVariables>(
    options: IQueryOptions<TVariables, T>,
  ): Promise<IWPGraphqlQueryResult<T>>;
}

export const WPGraphQLClientContext = React.createContext<IGraphQLClient>(undefined);
export const useWPGraphQLClient = (): IGraphQLClient => React.useContext(WPGraphQLClientContext)!;
