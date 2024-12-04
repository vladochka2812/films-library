import { useState } from 'react';
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
  handleSetMin,
  handleSetMax,
}: SliderLineType) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleInput = (e: SliderEventType) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
    handleSetMax(e.maxValue);
    handleSetMin(e.minValue);
  };
  const captionText =
    captionPosition === CaptionPosition.after
      ? `${minValue} ${caption} - ${maxValue} ${caption}`
      : `${caption} ${minValue} - ${maxValue}`;

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
