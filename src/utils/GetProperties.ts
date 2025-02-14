export const GetProperties = <T, K extends keyof T>(properties: T[], key: K): {property:K, value: T[K]} => {
   const result: {property:  K, value: T[K]}[] = []
   properties.map(prop => result.push({property: key, value: prop[key]}))
   return result[0];
}