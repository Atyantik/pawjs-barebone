import RouteHandler from '@pawjs/pawjs/src/router/handler';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler: RouteHandler) {
    const routes = [
      {
        path: '/',
        component: () => import('./components/hello-world'),
        seo: {
          title: 'Barebone ReactPWA Application',
          description: 'A developer friendly framework',
        },
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
