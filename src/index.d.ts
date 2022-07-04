import { Moment } from 'moment';
import { CSSProperties, FC } from 'react';
import { RangePickerProps } from 'antd/lib/date-picker';

type TAntdDateRangeValue = [ Moment, Moment ];

export interface IAntdDateRangeProps {
  className?: string;
  style?: CSSProperties;
  props?: RangePickerProps;
  value?: TAntdDateRangeValue;
  onChange?: (value: TAntdDateRangeValue) => void;
}

const AntdDateRange: FC<IAntdDateRangeProps>;

export default AntdDateRange;
