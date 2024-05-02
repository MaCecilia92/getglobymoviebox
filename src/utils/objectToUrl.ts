export const objectToUrlParams = (obj: { [key: string]: string }): string => {
  const params = new URLSearchParams();
  for (const key in obj) {
    params.append(key, obj[key]);
  }
  return params.toString();
};
