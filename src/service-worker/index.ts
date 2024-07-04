/// <reference lib="WebWorker" />


self.addEventListener('install', (event) => {
  console.log('install');
});

self.addEventListener('fetch', (event) => {
  console.log('fetch', event);
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    console.log('Doing a sync.');
  }
});

self.addEventListener('push', (event) => {
  console.log('push');
});