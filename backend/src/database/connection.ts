import { createConnection } from 'typeorm';
import ormConfig from '../../ormconfig.json';

createConnection(ormConfig);
