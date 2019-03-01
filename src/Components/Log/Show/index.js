import React from 'react';
import { Query } from 'react-apollo';

import { Typography, Paper, List, ListItem,
  ListItemText, Avatar, IconButton, Link } from '@material-ui/core'

import TopBar from '../../../views/nav'

import ActivityIcon from '@material-ui/icons/LibraryBooks'
import AssingIcon from '@material-ui/icons/CompareArrows'
import StoreIcon from '@material-ui/icons/SaveAlt'
import ManageIcon from '@material-ui/icons/VerticalSplit'

import BrowseIcon from '@material-ui/icons/ImportContacts'

//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

import { showLogByExecIDCalls } from '../../../GraphQL/Calls/index';

class ShowLogByExecID extends React.Component {
  render() {
    return (
      <React.Fragment>
      <TopBar
        size='big'
        title='Logs Module'
        text='Responsible for show your execution log.'
      />
      <div className='homePage container'>
        <Typography variant='h1' align='center' className='title'>
          Welcome to the Logs Module!
        </Typography>
        <Typography variant='h2' align='center' className='subtitle'>
          View your execution log {this.props.match.params.seedID}
        </Typography>
        <Query
          query={showLogByExecIDCalls.LOGS_LOG}
          variables={{ seedID: this.props.match.params.seedID }}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
              [<p>
              </p>,
              <iframe src={data.logs_Loglinkid.value} width="100%" height="780">
              </iframe>
            ]
            );
          }}
        </Query>
        <div className='column'>

        </div>
        <div className='column'>

        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ShowLogByExecID);
