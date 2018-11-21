import React from 'react';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      {
        path: '/',
        exact: true,
        component: () => <div>Hello World.</div>,
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
