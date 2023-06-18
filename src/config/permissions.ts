export const ALL_PERMISSIONS = [
  //users
  'users:roles:write',

  //posts
  'post:write',
  'post:read',
] as const;

export const PERMISSIONS = ALL_PERMISSIONS.reduce((acc, permission) => {
  acc[permission] = permission;
  // const obj = { 'users:roles:write': 'users:roles:write' };
  return acc;
}, {} as Record<(typeof ALL_PERMISSIONS)[number], (typeof ALL_PERMISSIONS)[number]>);

export const USER_ROLE = [PERMISSIONS['post:read'], PERMISSIONS['post:write']];
