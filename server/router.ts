import { getMessages, sendMessage } from './controller/chat';

type route = {
  path: string;
  method: 'GET' | 'POST';
  fn: () => void;
}

export default function router(): route[] {
  const routes = [];

  routes.push({ path: '/chats/:id', method: 'GET', route: getMessages });
  routes.push({ path: '/chats/:id', method: 'POST', route: sendMessage });

  return routes;
}