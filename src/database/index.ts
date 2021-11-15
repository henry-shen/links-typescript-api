import * as path from 'path'
import { config } from '../config'

import { createConnection } from 'typeorm'

export default createConnection({
  name: 'default',
  type: 'postgres',
  url: config.database.url,
  entities: [
    path.resolve(__dirname, 'entities', '*{.js,.ts}')
  ],
  synchronize: true,
  logging: false
}).then(() => {
  console.log('🚀 - PostgreSQL Database was successfully connected')
}).catch((error: any) => console.log(error))
