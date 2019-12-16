import createLogger from 'yandex-logger';
import cfg from '../configs';


export default createLogger({
    ...cfg.logger,
    streams: [
        {
            level: 'info',
            stream: require('yandex-logger/streams/qloud')()
        }
    ]
});
