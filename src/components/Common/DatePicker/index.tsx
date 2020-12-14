import {
  PickerDateProps,
  PickerProps,
  RangePickerProps as BaseRangePickerProps,
} from "antd/lib/date-picker/generatePicker";
import dynamic from "next/dynamic";
import { SharedTimeProps } from "rc-picker/lib/panels/TimePanel";

const DatePicker = dynamic(() => import("./DatePicker"), { ssr: true });

export type DatePickerProps = PickerProps<Date> & {
  showTime?: boolean | SharedTimeProps<Date>;
};
export type MonthPickerProps = Omit<PickerDateProps<Date>, "picker">;
export type WeekPickerProps = Omit<PickerDateProps<Date>, "picker">;
export type RangePickerProps = BaseRangePickerProps<Date>;

export default DatePicker;
