import dotenv from 'dotenv';
import app from "./app";
import Logger from './logger';

dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    Logger.info(`APP STARTED ON PORT ${PORT}`);
});
