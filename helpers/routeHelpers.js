export default function isActiveRoute(req, route) {
  return req === route ? 'active' : '';
}
