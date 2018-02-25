import { AsyncStorage, Platform } from 'react-native';
import feathers from '@feathersjs/client/dist/feathers.min';
import auth from '@feathersjs/client/dist/authentication.min';
import socketio from '@feathersjs/client/dist/socketio.min';
import io from 'socket.io-client';

const HOST = Platform.select({
  ios: "http://localhost:3030",
  android: "http://192.168.0.18:3030"
});

const socketOptions = { transports: ['websocket'], forceNew: true };
const socket = io(HOST, socketOptions);

const app = feathers()
  .configure(socketio(socket))
  .configure(auth({
      storage: AsyncStorage
  }));

app.io.on('connect_error', error => {
  console.log('Could not connect to server. Closing socket connection.');
  app.io.close();
})

export default app;