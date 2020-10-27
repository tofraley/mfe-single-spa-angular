- I had issues with using an Route Guard in my angular app when I tried to guard the top level/empty path,
  and the app was registered 'activeWhen: ["/"]' in the root-config

- This seems to work as expected if I guarded a path like "home" inside the angular app, and set 
  'activeWhen: ["/home"]' inside root-config

TODO:
- [ ] Import and use auth code from outside angular app as a webpack external
- [ ] Figure out how to use a component for unauthorized users
        - The EmptyRouteComponent is needed by Single Spa, and uses the '**' wildcard/catchall path
        - may have to redirect from inside the auth guard