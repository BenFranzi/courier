import { ReactNode, useState } from 'react';
import styles from './styles.module.css';

type Props = {
  value: string;
}

async function syncMessagesLater() {
  const registration: ServiceWorkerRegistration = await navigator.serviceWorker.ready;
  try {
    registration.sync.getTags().then((tags) => {
      if (tags.includes('sync-messages')) {
        console.log('Messages sync already requested');
      }
    });
    await registration.sync.register('sync-messages');
  } catch {
    console.log('Background Sync could not be registered!');
  }
}

export default function Title({ value }: Props): ReactNode {
  return (
    <div>
      <h1 className={ styles.title }>{value}</h1>
      <button data-testid='counter' onClick={ () => syncMessagesLater() }>Hello</button>
    </div>
  );
}