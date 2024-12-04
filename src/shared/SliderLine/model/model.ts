export type SliderLineType = {
  min: number;
  max: number;
  labels: string[];
  step: number;
  caption: string;
  captionPosition: CaptionPosition;
  subSteps: boolean;
  handleSetMin: (min: number) => void;
  handleSetMax: (min: number) => void;
};

export enum CaptionPosition {
  before = 'before',
  after = 'after',
}
export type SliderEventType = {
  minValue: number;
  maxValue: number;
};
