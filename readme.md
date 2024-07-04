# Courier - Offline-first secure chat application

Implement an offline first secure chat application using the powers of service workers!

## Tasks
### 1. Project Setup and Initialization - 10%
- [ ] Proper setup of the project with a clear directory structure.
- [ ] Installation and configuration of necessary libraries and tools (Service Workers, WebAuthn, Auth0, Jest, encryption library).

### 2. Service Worker Implementation - 25%
- [ ] **Sync**: Implement background sync to update data when the user is back online.
- [ ] **Push**: Enable push notifications that support replying directly on mobile.
- [ ] **Fetch**: Use service workers to handle network requests and caching for offline access.
- [ ] **Caching**: Efficiently cache UI and essential assets for offline use.

### 3. Offline-First Functionality - 15%
- [ ] Ensure the application functions correctly without an internet connection.
- [ ] Handle data synchronization when the connection is reestablished.
- [ ] Provide a seamless user experience regardless of connectivity.

### 4. Push Notifications with Reply Support - 15%
- [ ] Implement push notifications.
- [ ] Allow users to reply to notifications directly from the notification interface.
- [ ] Ensure notifications are received even when the application is not open.

### 5. WebAuthn and Auth0 Integration - 10%
- [ ] Integrate WebAuthn for secure, passwordless authentication.
- [ ] Configure and implement Auth0 for managing authentication and user sessions.
- [ ] Ensure secure login and authentication flows.

### 6. End-to-End Encryption - 15%
- [ ] Implement end-to-end encryption for messages.
- [ ] Ensure messages are encrypted on the client side before sending and decrypted after receiving.
- [ ] Use a reliable encryption library and follow best practices for secure communication.

### 7. Testing - 10%
- [ ] Write unit tests for individual components and functions using Jest.
- [ ] Develop integration tests to ensure all parts of the application work together.
- [ ] Achieve high test coverage, focusing on critical functionalities.

### 8. Code Quality and Best Practices - 10%
- [ ] Maintain clean, readable, and well-documented code.
- [ ] Follow best practices for JavaScript/TypeScript, Service Workers, and authentication.
- [ ] Ensure code is modular and reusable.