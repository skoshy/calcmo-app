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
import { TextInput } from '../../components/Core/Input';
import NumberPanel from './NumberPanel';
import { stateMapper, actionsMapper, nameSpaces } from '../../handlers';

class ThisComponent extends React.Component {
  MainInput = null;

  render = () => {
    const { $state, $actions } = this.props;

    return (
      <BackgroundView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            ref={(input) => { this.MainInput = input; }}
            style={{ fontSize: 40 }}
            value={$state.currentExpression}
            onChangeText={(text) => {
              $actions.CALCULATOR.setCurrentExpression(text);
            }}
            onFocus={(event) => {
              console.log('focus', event);
            }}
            onBlur={(event) => {
              console.log('blur', event);
            }}
            onSelectionChange={(event) => {
              console.log('newSelection', event.nativeEvent.selection);
            }}
          />
        </View>
        <NumberPanel
          mainInput={this.MainInput}
        />
      </BackgroundView>
    );
  };
}

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({
    currentExpression: [nameSpaces.CALCULATOR],
  }),

  // actions -> maps to this.props.$actions.{SHADOW_NAME}
  actionsMapper([
    nameSpaces.APP, nameSpaces.CALCULATOR,
  ]),
)(ThisComponent);
