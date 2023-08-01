import express from 'express';

import monitRouter from './context/monit/infrastructure/controller/monit.router';

const app = express();

app.use('/monit', monitRouter);

export default app;
