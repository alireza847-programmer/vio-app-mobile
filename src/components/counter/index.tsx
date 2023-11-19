import VButton from 'components/uiElements/button';
import VRow from 'components/uiElements/row';
import VText from 'components/uiElements/text';
import React, {useEffect, useState} from 'react';
import {VCounterProps} from 'types/components/counter';
import {counterTextStyle} from './style';
import {MinusSvg, PlusSvg} from 'assets/svgs';

const VCounter = (props: VCounterProps) => {
  const {initialNumber = 0, onChange} = props;
  const [count, setCount] = useState(initialNumber);
  const onAction = (action: '-' | '+') => {
    if (action === '-') {
      count && setCount(value => value - 1);
    } else {
      setCount(value => value + 1);
    }
  };
  useEffect(() => {
    onChange(count);
  }, [count]);
  return (
    <VRow
      testID="v-counter"
      minWidth={'50%'}
      justifyContent="space-between"
      fullWidth={false}>
      <VButton
        testID="decrement-button"
        mode="secondary"
        styled="CONTENT_SIZE"
        icon={fill => <MinusSvg fill={fill} />}
        onPress={() => onAction('-')}
      />
      <VText
        testID="count-text"
        marginTopRatio={0}
        style={counterTextStyle}
        typography="semiBold16">
        {count}
      </VText>
      <VButton
        testID="increment-button"
        mode="secondary"
        styled="CONTENT_SIZE"
        icon={fill => <PlusSvg fill={fill} />}
        onPress={() => onAction('+')}
      />
    </VRow>
  );
};

export default VCounter;
