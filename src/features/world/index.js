import React       from 'react';
import { connect } from 'react-redux';

import Map      from '../map';
import Monsters from '../monsters';
import Player   from '../player';
import maps     from '../../data/maps';
import store    from '../../config/store';

class World extends React.Component {

  componentDidMount() {
    this.handleLoadMap();
    this.handleLoadMonsters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.world !== this.props.world){
      this.handleLoadMap();
      this.handleLoadMonsters();
    }
  }

  handleLoadMap() {
    const { world } = this.props;
    // set map tiles for current map
    store.dispatch({
      type: 'ADD_TILES',
      payload: { tiles: maps[world.currentMap].tiles }
    })
  }

  handleLoadMonsters() {
    const { world } = this.props;
    // load initial monsters
    store.dispatch({
      type: 'ADD_MONSTERS',
      payload: { monsters: maps[world.currentMap].monsters }
    })
  }

  render() {
    return (
      <div style={{
        position: 'relative',
        width: '800px',
        height: '600px',
        margin: '25px auto',
      }}>
        <Map />
        <Player />
        <Monsters />
      </div>
    );
  }
}

const mapStateToProps = ({ world }) => {
  return { world };
}

export default connect(mapStateToProps)(World);
