import VButton from 'components/uiElements/button';
import VRow from 'components/uiElements/row';
import VText from 'components/uiElements/text';
import React, {useEffect, useState} from 'react';
import {VCounterProps} from 'types/components/counter';
import {counterTextStyle} from './style';
import {MinusSvg, PlusSvg} from 'assets/svgs';

const VCounter = (props: VCounterProps) => {
  const {
    initialNumber = 0,
    onChange,
    sumRule = true,
    minusRule = true,
    minusButtonTestID = 'decrement-button',
    plusButtonTestID = 'increment-button',
    testID = 'v-counter',
  } = props;
  const [count, setCount] = useState(0);
  const onAction = (action: '-' | '+') => {
    let value = count;
    if (action === '-') {
      if (count && minusRule) {
        value = value - 1;
      }
    } else {
      if (sumRule) {
        value = value + 1;
      }
    }
    setCount(value);
    value !== count && onChange(value);
  };
  useEffect(() => {
    setCount(initialNumber);
  }, [initialNumber]);
  return (
    <VRow
      testID={testID}
      minWidth={'38%'}
      justifyContent="space-between"
      fullWidth={false}>
      <VButton
        testID={minusButtonTestID}
        mode="secondary"
        styled="CONTENT_SIZE"
        icon={fill => <MinusSvg fill={fill} />}
        onPress={() => onAction('-')}
        disabled={!minusRule}
      />
      <VText
        testID="count-text"
        marginTopRatio={0}
        style={counterTextStyle}
        typography="semiBold16">
        {count}
      </VText>
      <VButton
        testID={plusButtonTestID}
        mode="secondary"
        styled="CONTENT_SIZE"
        icon={fill => <PlusSvg fill={fill} />}
        onPress={() => onAction('+')}
        disabled={!sumRule}
      />
    </VRow>
  );
};

export default VCounter;
