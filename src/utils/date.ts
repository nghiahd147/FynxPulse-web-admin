import moment from "moment";

export const convertYearMonthDay = (date: string) => {
  return moment(date).utc().format("YYYY-MM-DD");
};

export const convertDayMonthYear = (date: string) => {
  return moment(date).utc().format("DD-MM-YYYY");
};
