import React from 'react';

// You may create such components in src/components and organize it
// as per your preference
const HelloWorld = () => (
  <h1>Hello, World!</h1>
);

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      {
        path: '/',
        exact: true,
        component: () => HelloWorld,
        seo: {
          title: 'Barebone ReactPWA Application',
          description: 'A developer friendly framework'
        }
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
