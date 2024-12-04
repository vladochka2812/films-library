import { useState, useMemo } from 'react';
import './ui/style.css';
import MultiRangeSlider from 'multi-range-slider-react';
import {
  CaptionPosition,
  SliderEventType,
  SliderLineType,
} from './model/model';

export const SliderLine = ({
  labels,
  caption,
  captionPosition,
  step,
  min,
  max,
  subSteps,
  setMin,
  setMax,
}: SliderLineType) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleInput = (e: SliderEventType) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
    setMax(e.maxValue);
    setMin(e.minValue);
  };
  const captionText = useMemo(() => {
    return captionPosition === CaptionPosition.after
      ? `${minValue} ${caption} - ${maxValue} ${caption}`
      : `${caption} ${minValue} - ${maxValue}`;
  }, [caption, minValue, maxValue]);

  return (
    <div className="">
      <MultiRangeSlider
        stepOnly={true}
        subSteps={subSteps}
        labels={labels}
        min={min}
        max={max}
        step={step}
        minValue={minValue}
        maxValue={maxValue}
        minCaption={captionText}
        maxCaption={captionText}
        onInput={(e) => handleInput(e)}
      />
    </div>
  );
};
