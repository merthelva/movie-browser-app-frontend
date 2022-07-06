import { Colors } from "lib/constants";

const getColor: (color: keyof typeof Colors) => string = (color) =>
  Colors[color];

export default getColor;
