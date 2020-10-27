import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@tayfray/home-ng",
  app: () => System.import("@tayfray/home-ng"),
  activeWhen: ["/home"]
});

start({
  urlRerouteOnly: true,
});
