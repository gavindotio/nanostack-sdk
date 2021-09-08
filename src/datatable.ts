import { gql } from "@apollo/client/core";

export const getTablesByProject = async ({
  apolloClient,
  projectId,
}: {
  apolloClient: any;
  projectId: string;
}) => {
  const response = await apolloClient.query({
    query: gql`
      query dataTablesByProject($projectId: ID!) {
        dataTablesByProject(projectId: $projectId) {
          id
          name
          fields {
            fieldId
            name
          }
        }
      }
    `,
    variables: {
      projectId,
    },
  });
  return response.data;
};
