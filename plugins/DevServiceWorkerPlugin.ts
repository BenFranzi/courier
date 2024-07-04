import type { Plugin, ViteDevServer } from 'vite';


// TASK: get hot reloading function
export default function DevServiceWorkerPlugin() {
  return <Plugin>{
    name: 'dev-service-worker-plugin',
    apply: 'serve',
    configureServer(server: ViteDevServer) {
      server.ws.send({
        type: 'custom',
        event: 'dev-register-service-worker'
      });
    }
  };
}
