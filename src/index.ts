import config from './config/config';
import app from './app';
import './database';

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
