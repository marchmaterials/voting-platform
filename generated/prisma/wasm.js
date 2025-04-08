
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  location: 'location',
  yearCompleted: 'yearCompleted',
  typology: 'typology',
  creationDate: 'creationDate',
  authorId: 'authorId',
  selectedForCompetition: 'selectedForCompetition'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  projectId: 'projectId'
};

exports.Prisma.SupplierScalarFieldEnum = {
  id: 'id',
  website: 'website'
};

exports.Prisma.MaterialScalarFieldEnum = {
  id: 'id',
  supplierId: 'supplierId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.BUILDING_TYPOLOGY = exports.$Enums.BUILDING_TYPOLOGY = {
  RESIDENTIAL: 'RESIDENTIAL',
  COMMERCIAL: 'COMMERCIAL',
  INDUSTRIAL: 'INDUSTRIAL',
  INSTITUTIONAL: 'INSTITUTIONAL'
};

exports.Prisma.ModelName = {
  User: 'User',
  Project: 'Project',
  Image: 'Image',
  Supplier: 'Supplier',
  Material: 'Material'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/alexservie/tech-stuff/March/march-app/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/Users/alexservie/tech-stuff/March/march-app/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"POSTGRES_PRISMA_URL\")\n  directUrl = env(\"POSTGRES_URL_NON_POOLING\")\n}\n\nenum BUILDING_TYPOLOGY {\n  RESIDENTIAL\n  COMMERCIAL\n  INDUSTRIAL\n  INSTITUTIONAL\n}\n\nmodel User {\n  id          String    @id @default(cuid())\n  email       String    @unique\n  submissions Project[]\n}\n\nmodel Project {\n  id                     String            @id @default(cuid())\n  title                  String\n  description            String?\n  location               String\n  yearCompleted          Int\n  typology               BUILDING_TYPOLOGY\n  creationDate           DateTime          @default(now()) @db.Timestamp\n  author                 User              @relation(fields: [authorId], references: [id])\n  authorId               String\n  images                 Image[]\n  materials              Material[]\n  selectedForCompetition Boolean           @default(false)\n}\n\nmodel Image {\n  id        String  @id @default(cuid())\n  url       String\n  project   Project @relation(fields: [projectId], references: [id])\n  projectId String\n}\n\nmodel Supplier {\n  id        String     @id @default(cuid())\n  materials Material[]\n  website   String\n}\n\nmodel Material {\n  id         String    @id @default(cuid())\n  supplier   Supplier  @relation(fields: [supplierId], references: [id])\n  supplierId String\n  projects   Project[]\n}\n",
  "inlineSchemaHash": "62be1f3d7a874628d4cb01adbf743c721643e76556580ded181a3f42e241757b",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"submissions\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToUser\"}],\"dbName\":null},\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"yearCompleted\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"typology\",\"kind\":\"enum\",\"type\":\"BUILDING_TYPOLOGY\"},{\"name\":\"creationDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProjectToUser\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"images\",\"kind\":\"object\",\"type\":\"Image\",\"relationName\":\"ImageToProject\"},{\"name\":\"materials\",\"kind\":\"object\",\"type\":\"Material\",\"relationName\":\"MaterialToProject\"},{\"name\":\"selectedForCompetition\",\"kind\":\"scalar\",\"type\":\"Boolean\"}],\"dbName\":null},\"Image\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ImageToProject\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Supplier\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"materials\",\"kind\":\"object\",\"type\":\"Material\",\"relationName\":\"MaterialToSupplier\"},{\"name\":\"website\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Material\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"supplier\",\"kind\":\"object\",\"type\":\"Supplier\",\"relationName\":\"MaterialToSupplier\"},{\"name\":\"supplierId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projects\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"MaterialToProject\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

