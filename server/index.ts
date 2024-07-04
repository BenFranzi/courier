import http, { IncomingMessage, ServerResponse } from 'http';
import router from './router';
import headers from './utilities/headers';
import matchRoute from './utilities/matchRoute';
import { Request, Response } from './types';

const routes = router();

http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    return res.end();
  }

  for (const route of routes) {
    const { isMatch, params } = matchRoute(req.url, route.path);
    if (!isMatch || req.method !== route.method) {
      continue;
    }

    let body = undefined;
    if (['POST', 'PUT'].includes(req.method)) {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      body = JSON.stringify(Buffer.concat(buffers).toString());
    }

    return route.fn({
      req: {
        params,
        body,
        base: req
      } as Request,
      res: {
        base: res,
      } as Response,
    });
  }

  res.writeHead(404, headers);
  res.end({ message: 'Not found.' });
});