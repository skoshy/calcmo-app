import React from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { withTheme } from 'styled-components';
import {
  BodyText,
} from './Core/Text';
import { stateMapper, actionsMapper, nameSpaces } from '../handlers';


const ThisComponent = withTheme(withNavigation(
  (
    {
      theme,
      text,
      $actions,
    },
  ) => {
    const componentStyle = {
      backgroundColor: theme.postBackgroundColor,
      padding: 20,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 1,
      borderRadius: 5,
      shadowColor: theme.postShadowColor,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <TouchableOpacity
        style={componentStyle}
        onPress={() => $actions.CALCULATOR.setCurrentExpression(text)}
      >
        <View>
          <BodyText>
            {text}
          </BodyText>
        </View>
      </TouchableOpacity>
    );
  },
));

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({}),

  // actions -> maps to this.props.$actions.{SHADOW_NAME}
  actionsMapper([
    nameSpaces.CALCULATOR,
  ]),
)(ThisComponent);
