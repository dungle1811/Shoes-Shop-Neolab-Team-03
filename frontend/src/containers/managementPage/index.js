import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import styles from './styles';
import data from '../../data';

class ManagementPage extends Component {
  constructor(props) {
    super(props);
    this._renderModule = this._renderModule.bind(this);
  }

  _renderModule(module) {
    return (
      <GridTile
        key={module.image}
        title={module.text}
        cols={1}
        style={styles.gridTitle}
      >
        {module.icon}
      </GridTile>
    );
  }

  render() {
    return (
      <GridList cellHeight={180} cols={4} style={styles.gridList}>
        {data.managementModules.map(module => this._renderModule(module))}
      </GridList>
    );
  }
}

ManagementPage.propTypes = {};

export default ManagementPage;
