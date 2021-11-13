import * as path from 'path'

import { createConnection } from 'typeorm'

export default createConnection({
  name: 'default',
  type: 'postgres',
  url: 'postgres://@127.0.0.1:5432/links',
  // ssl: {
  //   rejectUnauthorized: false
  // },
  entities: [
    path.resolve(__dirname, 'entities', '*{.js,.ts}')
  ],
  synchronize: true,
  logging: false
}).then(() => {
  console.log('🚀 - PostgreSQL Database was successfully connected')
}).catch((error: any) => console.log(error))
