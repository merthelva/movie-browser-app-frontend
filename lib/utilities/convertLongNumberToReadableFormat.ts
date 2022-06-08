interface IOptions {
  groupOf?: number;
  separator?: string;
}

const convertLongNumberToReadableFormat = (
  longNumber: string,
  { groupOf = 3, separator = "," }: IOptions
) => {
  const separatorRegex = `\\B(?=(\\d{${groupOf}})+(?!\\d))`;
  const seperatedLongNumber = new RegExp(separatorRegex, "g");

  return longNumber.toString().replace(seperatedLongNumber, `${separator}`);
};

export default convertLongNumberToReadableFormat;
