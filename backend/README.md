# To Do Planner - Backend

## Install Dependencies
**Node**: v20.11.1

**NPM**: 10.4.0
```bash
npm install
```

## DB Setup
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql
1. Create ._**venv**_ file under v1 folder
2. Copy in this text in .venv file: `DATABASE_URL="mysql://user:password@localhost:3306/db_name"`
3. Fill out user, password, and db_name fields.
4. Run: `npx prisma migrate resolve --applied 0_init`
5. Run: `prisma migrate dev`

## Running Tests
https://vitest.dev/guide/

Unit tests: `command here`
Integration Tests: `command here`
- Run unit and integration tests - Vitest Docs

## Running Server
