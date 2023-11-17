export type JustifyModes =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type FlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';

export interface RowProps {
  justifyContent?: JustifyModes;
  alignItems?: FlexAlignType;
  backgroundColor?: string;
  fullWidth?: boolean;
  marginTopRatio?: number;
  marginLeftRatio?: number;
  paddingHorizontalRatio?: number;
  paddingVerticalRatio?: number;
  marginRighRatio?: number;
}
