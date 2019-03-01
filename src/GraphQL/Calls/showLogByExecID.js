import gql from 'graphql-tag';

const LOGS_LOG = gql`
  query Logs_Loglinkid($seedID: ID) {
    logs_Loglinkid( seedID: $seedID ) {
      value
    }
  }
`;

export default {
  LOGS_LOG,
};
