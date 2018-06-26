import React from "react";
export default class Routes {

  apply(routeHandler) {

    const routes = [
      {
        path: "/",
        exact: true,
        component: () => <div>Hello World.</div>,
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}