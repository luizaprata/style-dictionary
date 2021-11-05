/* eslint-disable prettier/prettier */

import * as variables from '@resources/variables';
import {PixelRatio} from 'react-native';
import styled from 'styled-components/native';


export const ScrollArea = styled.ScrollView`
  flex: 1;
  background-color: ${variables.brandColorPrimary1};
`;


export const ButtonPrimary = styled.Text`
  font-size: ${PixelRatio.getFontScale() * variables.fontSizeSm.number}px;
  line-height: ${PixelRatio.getFontScale() * variables.fontSizeSm.number * variables.lineHeightTight}px;
  padding: ${variables.spacingSquishSizeXsV.number}px;
  font-family: ${variables.fontFamilyHighlight};
  font-weight: ${variables.fontWeightBold};
  color: ${variables.neutralColor5};
  background-color: ${variables.brandColorPrimary3};
  
`;

export const HeadingSmall = styled.Text`
  font-size: ${PixelRatio.getFontScale() * variables.fontSizeLg.number}px;
  line-height: ${PixelRatio.getFontScale() * variables.fontSizeLg.number * variables.lineHeightDistant}px;
  font-family: ${variables.fontFamilyHighlight};
  font-weight: ${variables.fontWeightBold};
  color: ${variables.neutralColor1};
  
  margin-bottom: ${variables.spacingSizeXxxs.number}px;

`;

export const SubtitleSmall = styled.Text`
  font-size: ${PixelRatio.getFontScale() * variables.fontSizeMd.number}px;
  line-height: ${PixelRatio.getFontScale() * variables.fontSizeMd.number * variables.lineHeightMedium}px;
  font-family: ${variables.fontFamilyHighlight};
  font-weight: ${variables.fontWeightMedium};
  color: ${variables.neutralColor2};

  margin-bottom: ${variables.spacingSizeXxs.number}px;

`;

export const Paragraph = styled.Text`
  font-size: ${PixelRatio.getFontScale() * variables.fontSizeXs.number}px;
  line-height: ${PixelRatio.getFontScale() * variables.fontSizeXs.number * variables.lineHeightDistant}px;
  font-family: ${variables.fontFamilyHighlight};
  font-weight: ${variables.fontWeightRegular};
  color: ${variables.neutralColor2};

  margin-bottom: ${variables.spacingSizeSm.number}px;

`;

export const Shape = styled.View`
  border-radius: ${variables.radiusSizeNone.number};
  padding: ${variables.spacingSizeLg.number}px;
  border-width: ${variables.borderSizeThin.number}px;
  border-color: ${variables.neutralColor4};
  background-color: ${variables.neutralColor5};
`;


export const CardContent = styled(Shape)`
  margin-bottom: ${variables.spacingSizeSm.number}px;
`;
