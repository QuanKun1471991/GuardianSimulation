import moment from "moment";

export const YYYY_MM_DD_HH_MM = "YYYY/MM/DD HH:mm";
export const MM_DD = "MMMM DD";
export const YYYY_MM_DD = "YYYY-MM-DD";
export const YYYY_MM_DD_HH = "YYYY-MM-DD-HH";
export const DEFAULT_TIMEZONE = "Greenwich";
export const YYYY_MM_DD_HH_MM_Z = "YYYY/MM/DD HH:mmZ";
export const MM_DD_YYYY = "MM-DD-YYYY";
export const YYYY_MM_DD_HH_MM_SS = "YYYY-MM-DDTHH:mm:ss";

export function formatDateTimeUTC(data: string, format = YYYY_MM_DD_HH_MM) {
  const momentData = moment(data);
  return momentData.isValid() ? moment(data).utc().format(format) : null;
}
