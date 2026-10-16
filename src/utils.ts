// Prefix an internal path with the configured base, e.g. url('/work/') → '/personal_site/work/'.
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
