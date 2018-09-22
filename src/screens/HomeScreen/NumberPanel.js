/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Chiclet from '../../components/Chiclet';
import { stateMapper, actionsMapper, nameSpaces } from '../../handlers';

const ThisComponent = ({ $state }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Chiclet
          text="7"
        />
        <Chiclet
          text="4"
        />
        <Chiclet
          text="1"
        />
        <Chiclet
          text="ANS"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Chiclet
          text="8"
        />
        <Chiclet
          text="5"
        />
        <Chiclet
          text="2"
        />
        <Chiclet
          text="0"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Chiclet
          text="9"
        />
        <Chiclet
          text="6"
        />
        <Chiclet
          text="3"
        />
        <Chiclet
          text="."
        />
      </View>
      <View style={{ flex: 1 }}>
        <Chiclet
          text="/"
        />
        <Chiclet
          text="*"
        />
        <Chiclet
          text="+"
        />
        <Chiclet
          text="-"
        />
        <Chiclet
          text="="
        />
      </View>
    </View>
  );
};

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({
    theme: [nameSpaces.APP],
  }),

  // actions -> maps to this.props.$actions.{SHADOW_NAME}
  actionsMapper([
    nameSpaces.APP,
  ]),
)(ThisComponent);
