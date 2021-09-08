import { getTablesByProject } from "./datatable";
import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

const createApolloClient = ({
  endpoint = "http://localhost:4000/graphql",
}: {
  endpoint?: string;
}) => {
  return new ApolloClient({
    link: new HttpLink({ uri: endpoint, fetch }),
    cache: new InMemoryCache(),
  });
};

export class NanostackClient {
  private readonly apolloClient: any;
  private readonly projectId: string;

  constructor(config: { endpoint?: string; projectId: string }) {
    this.apolloClient = createApolloClient({
      endpoint: config.endpoint,
    });
    this.projectId = config.projectId;
  }

  public getTables() {
    return getTablesByProject({
      apolloClient: this.apolloClient,
      projectId: this.projectId,
    });
  }
}
