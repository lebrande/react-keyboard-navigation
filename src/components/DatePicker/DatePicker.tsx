import * as React from 'react';
import { FC } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

type Props = {};

const DatePicker: FC<Props> = () => {
  return (
    <DayPicker />
  );
};

export default DatePicker;