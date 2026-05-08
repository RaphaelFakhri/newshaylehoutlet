const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1234';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/admin' || url.pathname.startsWith('/admin/')) {
      const auth = request.headers.get('Authorization');
      const expected = 'Basic ' + btoa(`${ADMIN_USERNAME}:${ADMIN_PASSWORD}`);
      if (auth !== expected) {
        return new Response('Authentication required', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="New Shayleh Outlet admin", charset="UTF-8"',
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-store',
          },
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
