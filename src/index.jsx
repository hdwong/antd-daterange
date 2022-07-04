import React, { useContext, useMemo } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import './style.css';
import zhCN from './locale/zh_CN';

/* 范围 */
const today = moment().endOf('day');
const yesterday = moment().subtract(1, 'day').endOf('day');
const defaultRanges = {
  'Today': [ today, today ],
  'Yesterday': [ yesterday, yesterday ],
  'Last 7 days': [ moment().startOf('day').subtract(6, 'days'), today ],
  'This week': [ moment().startOf('week'), today ],
  'Last week': [ moment().subtract(7, 'days').startOf('week'), moment().subtract(7, 'days').endOf('week') ],
  'Last 30 days': [ moment().startOf('day').subtract(29, 'days'), today ],
  'This month': [ moment().startOf('month'), today ],
  'Last month': [ moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month') ],
  'Year to date': [ moment().startOf('year'), today ],
  'Last year': [ moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year') ],
};

const AntdDateRange = props => {
  const { props: componentProps, className, style, value, onChange } = props;
  const context = useContext(ConfigProvider.ConfigContext);

  const ranges = useMemo(() => {
    if (context.locale && context.locale.locale === 'zh-cn') {
      // 中文
      const result = {};
      for (let label in defaultRanges) {
        const key = zhCN[label] || label;
        result[key] = defaultRanges[label];
      }
      return result;
    } else {
      // 英语
      return defaultRanges;
    }
  }, [ context.locale ]);

  return (
    <DatePicker.RangePicker
        className={className}
        style={style}
        {...componentProps}
        value={value}
        onChange={onChange}
        dropdownClassName="antd-daterange"
        disabledDate={current => current && current > today}
        ranges={ranges} />
  );
};

export default AntdDateRange;
