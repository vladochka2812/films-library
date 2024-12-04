export type SliderLineType = {
  min: number;
  max: number;
  labels: string[];
  step: number;
  caption: string;
  captionPosition: CaptionPosition;
  subSteps: boolean;
  setMin: (min: number) => void;
  setMax: (min: number) => void;
};

export enum CaptionPosition {
  before = 'before',
  after = 'after',
}
export type SliderEventType = {
  minValue: number;
  maxValue: number;
};
