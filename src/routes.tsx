import RouteHandler from '@pawjs/pawjs/src/router/handler';

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

export default class Routes {
  #routes = [...routes]

  apply(routeHandler: RouteHandler) {
    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(this.#routes);
    });
  }
}
