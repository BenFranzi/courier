// TODO: simplify
export default function matchRoute(route: string, pattern: string): { isMatch: boolean, params?: { [param: string]: string } } {
  const regexPattern = new RegExp(`^${  pattern.replace(/:[^\s/]+/g, '([^/]+)')  }$`);
  const match = route.match(regexPattern);
  if (!match) {
    return { isMatch: false };
  }
  const paramNames = (pattern.match(/:[^\s/]+/g) || []).map(param => param.substring(1));
  const params = paramNames.reduce((acc, paramName, index) => {
    acc[paramName] = match[index + 1];
    return acc;
  }, {});
  return { isMatch: true, params };
}