import pkg from 'pg'
import { Pool } from 'pg'

export const pool = new pool({
    connectionString: process.env.DATABASE_URL
})