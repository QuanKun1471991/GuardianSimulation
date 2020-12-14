type Ilerate<T> = (
  { key, value }: { key: keyof T; value: T[keyof T] },
  index: number
) => void;

export const forEach = <T>(
  e: { [key in keyof T]: T[key] },
  iterate: Ilerate<T>
) => {
  const keys = Object.keys(e) as Array<keyof T>;
  return keys.forEach((k, i) => iterate({ key: k, value: e[k] }, i));
};
