import app from './app';
import { Config } from './configs';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        // eslint-disable-next-line no-console
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

startServer();
