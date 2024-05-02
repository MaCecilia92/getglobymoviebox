export const orderComments = <T extends { id: string }>(a: T, b: T): number => {
  const dateA: Date = new Date(a.id);
  const dateB: Date = new Date(b.id);
  return dateB.getTime() - dateA.getTime();
};
