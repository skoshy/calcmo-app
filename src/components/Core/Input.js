import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  border-radius: 3px;
  padding: 0.25px 1px;
  margin: 0 1px;
  background-color: ${props => props.theme.backgroundColor};
  alignItems: center;
  justifyContent: center;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.primary};
`;

export class TextInput extends React.Component {
  render = () => {
    const { style, children, ...props } = this.props;

    return (
      <RNTextInput
        style={{ ...style }}
        {...props}
      >
        {children}
      </RNTextInput>
    );
  }
}
