import VButton from 'components/uiElements/button';
import VRow from 'components/uiElements/row';
import VText from 'components/uiElements/text';
import React from 'react';
import {VCounterProps} from 'types/components/counter';
import {wp} from 'utils/dimensions';
import {counterTextStyle} from './style';

const VCounter = (props: VCounterProps) => {
  return (
    <VRow minWidth={wp(40)} justifyContent="space-between" fullWidth={false}>
      <VButton
        mode="secondary"
        styled="CONTENT_SIZE"
        title="+"
        onPress={() => {}}
      />
      <VText
        marginTopRatio={0}
        style={counterTextStyle}
        typography="semiBold16">
        2
      </VText>
      <VButton
        mode="secondary"
        styled="CONTENT_SIZE"
        title="-"
        onPress={() => {}}
      />
    </VRow>
  );
};

export default VCounter;
