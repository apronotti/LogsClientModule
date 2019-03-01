import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//import { MuiPickersUtilsProvider } from 'material-ui-pickers'
//import LuxonUtils from 'material-ui-pickers/utils/luxon-utils'

//import Home from './views/Home'
import ShowLogByExecID from './Components/Log/Show/index';


const App = () => (
<div className='logsModule'>
 <Switch>
    <Route path='/logs/show/:seedID' component={ShowLogByExecID} />
  </Switch>
</div>
);


export default App;
