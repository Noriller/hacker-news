export function unixToYYYYMMDD(time: number) {
  const UNIXToUTCConversionValue = 1000;
  const utcDateValue = time * UNIXToUTCConversionValue;
  const YYYYMMDDFormatDate = new Date(utcDateValue).toISOString().slice(0, 10);
  return YYYYMMDDFormatDate;
}
