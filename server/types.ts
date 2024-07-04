import { IncomingMessage, ServerResponse } from 'http';

export type Request = {
  params: { [param: string]: string };
  body?: { [param: string]: any };
  base: IncomingMessage;
}

export type Response = {
  base: ServerResponse;
}