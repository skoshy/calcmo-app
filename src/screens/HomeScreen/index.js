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
import { BackgroundView } from '../../components/Core/Containers';
import { BodyText } from '../../components/Core/Text';
import NumberPanel from './NumberPanel';
import { stateMapper, actionsMapper, nameSpaces } from '../../handlers';

const ThisComponent = ({ $state }) => {
  return (
    <BackgroundView>
      <View style={{ flex: 1 }}>
        <BodyText>
          {$state.currentExpression}
        </BodyText>
      </View>
      <NumberPanel />
    </BackgroundView>
  );
};

console.log(nameSpaces);

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({
    currentExpression: [nameSpaces.CALCULATOR],
  }),

  // actions -> maps to this.props.$actions.{SHADOW_NAME}
  actionsMapper([
    nameSpaces.APP,
  ]),
)(ThisComponent);
