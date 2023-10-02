import { ApolloClient, gql } from "@apollo/client";
import { Repository } from "../interfaces/repository";
import { REPOSITORIY_SEARCH_LIMIT } from "../constants";

export const getRepositories = (client: ApolloClient<object>, queryString: string): Promise<Array<Repository>> => {
  return client
    .query({
        query: gql`
            query myOrgRepos($queryString: String!) {
                search(query: $queryString, type: REPOSITORY, first: ${REPOSITORIY_SEARCH_LIMIT}) {
                    repositoryCount
                    edges {
                    node {
                        ... on Repository {
                        name
                        description
                        }
                    }
                    }
                }
            }
        `,
        variables: {
            queryString
        },
    })
    .then((result) => {
       return result.data.search.edges.map((e: { node: Repository; }) => { 
            return { 
                name: e.node.name, 
                description: e.node.description
            }
        });
    })
    .catch((error) => console.log(error));
}