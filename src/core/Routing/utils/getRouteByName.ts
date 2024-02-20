export const getRouteByName = (
  name: string,
  routes: { [key: typeof name]: string },
): string => routes[name];
