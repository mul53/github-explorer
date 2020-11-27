import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const { createSliderWithTooltip } = Slider;
const CustomRangeSlider = createSliderWithTooltip(Slider.Range);

type RangeSliderProps = {
  min: number;
  max: number;
  onChange: (event: any) => void;
  marks?: any;
  defaultValues?: number[];
};

export default function RangeSlider({
  min,
  max,
  onChange,
  marks,
  defaultValues,
}: RangeSliderProps) {
  return (
    <CustomRangeSlider
      min={min}
      max={max}
      onChange={onChange}
      marks={marks}
      defaultValue={defaultValues}
    />
  );
}
