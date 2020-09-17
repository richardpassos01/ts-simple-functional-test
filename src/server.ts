const PORT = process.env.port || 3000;
import App from './App';

const server = new App(+PORT);

export default server;