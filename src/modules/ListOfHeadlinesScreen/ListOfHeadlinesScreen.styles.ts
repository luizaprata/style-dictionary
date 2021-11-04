import * as variables from '@resources/variables';
import {PixelRatio} from 'react-native';
import styled from 'styled-components/native';

export const ScrollArea = styled.ScrollView`
  flex: 1;
  background-color: ${variables.brandColorPrimary1};
`;

export const Title = styled.Text`
  font-size: ${PixelRatio.getFontScale() * variables.fontSizeSm.number};
  color: ${variables.brandColorPrimary4};
  font-family: ${variables.fontFamilyHighlight};
`;

export const Description = styled.Text`
  font-size: ${PixelRatio.getFontScale() * variables.fontSizeXxs.number};
  color: ${variables.neutralColor4};
  font-family: ${variables.fontFamilyHighlight};
`;

export const HeadlineCard = styled.View`
  border-radius: ${variables.radiusSizeMd.number};
  padding: ${variables.spacingSizeXxxs.number}px;
  border-width: ${variables.borderSizeHairline.number};
  border-color: ${variables.brandColorPrimary4};
  background-color: ${variables.neutralColor1};
  margin: ${variables.spacingSizeNano.number}px ${variables.spacingSizeXxxs.number}px;
`;
