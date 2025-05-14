
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Stakeholder
 * 
 */
export type Stakeholder = $Result.DefaultSelection<Prisma.$StakeholderPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model ProjectMaterial
 * 
 */
export type ProjectMaterial = $Result.DefaultSelection<Prisma.$ProjectMaterialPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BUILDING_TYPOLOGY: {
  RESIDENTIAL: 'RESIDENTIAL',
  COMMERCIAL: 'COMMERCIAL',
  INDUSTRIAL: 'INDUSTRIAL',
  INSTITUTIONAL: 'INSTITUTIONAL'
};

export type BUILDING_TYPOLOGY = (typeof BUILDING_TYPOLOGY)[keyof typeof BUILDING_TYPOLOGY]


export const STAKEHOLDER_TYPE: {
  ARCHITECT: 'ARCHITECT',
  CONTRACTOR: 'CONTRACTOR',
  ENGINEER: 'ENGINEER'
};

export type STAKEHOLDER_TYPE = (typeof STAKEHOLDER_TYPE)[keyof typeof STAKEHOLDER_TYPE]

}

export type BUILDING_TYPOLOGY = $Enums.BUILDING_TYPOLOGY

export const BUILDING_TYPOLOGY: typeof $Enums.BUILDING_TYPOLOGY

export type STAKEHOLDER_TYPE = $Enums.STAKEHOLDER_TYPE

export const STAKEHOLDER_TYPE: typeof $Enums.STAKEHOLDER_TYPE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stakeholder`: Exposes CRUD operations for the **Stakeholder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stakeholders
    * const stakeholders = await prisma.stakeholder.findMany()
    * ```
    */
  get stakeholder(): Prisma.StakeholderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMaterial`: Exposes CRUD operations for the **ProjectMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMaterials
    * const projectMaterials = await prisma.projectMaterial.findMany()
    * ```
    */
  get projectMaterial(): Prisma.ProjectMaterialDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    Image: 'Image',
    Stakeholder: 'Stakeholder',
    Supplier: 'Supplier',
    Material: 'Material',
    ProjectMaterial: 'ProjectMaterial'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "image" | "stakeholder" | "supplier" | "material" | "projectMaterial"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Stakeholder: {
        payload: Prisma.$StakeholderPayload<ExtArgs>
        fields: Prisma.StakeholderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StakeholderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StakeholderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          findFirst: {
            args: Prisma.StakeholderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StakeholderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          findMany: {
            args: Prisma.StakeholderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>[]
          }
          create: {
            args: Prisma.StakeholderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          createMany: {
            args: Prisma.StakeholderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StakeholderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>[]
          }
          delete: {
            args: Prisma.StakeholderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          update: {
            args: Prisma.StakeholderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          deleteMany: {
            args: Prisma.StakeholderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StakeholderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StakeholderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>[]
          }
          upsert: {
            args: Prisma.StakeholderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakeholderPayload>
          }
          aggregate: {
            args: Prisma.StakeholderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStakeholder>
          }
          groupBy: {
            args: Prisma.StakeholderGroupByArgs<ExtArgs>
            result: $Utils.Optional<StakeholderGroupByOutputType>[]
          }
          count: {
            args: Prisma.StakeholderCountArgs<ExtArgs>
            result: $Utils.Optional<StakeholderCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      ProjectMaterial: {
        payload: Prisma.$ProjectMaterialPayload<ExtArgs>
        fields: Prisma.ProjectMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          findFirst: {
            args: Prisma.ProjectMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          findMany: {
            args: Prisma.ProjectMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>[]
          }
          create: {
            args: Prisma.ProjectMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          createMany: {
            args: Prisma.ProjectMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>[]
          }
          delete: {
            args: Prisma.ProjectMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          update: {
            args: Prisma.ProjectMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMaterialPayload>
          }
          aggregate: {
            args: Prisma.ProjectMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMaterial>
          }
          groupBy: {
            args: Prisma.ProjectMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMaterialCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    image?: ImageOmit
    stakeholder?: StakeholderOmit
    supplier?: SupplierOmit
    material?: MaterialOmit
    projectMaterial?: ProjectMaterialOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    images: number
    projectMaterial: number
    materials: number
    stakeholders: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProjectCountOutputTypeCountImagesArgs
    projectMaterial?: boolean | ProjectCountOutputTypeCountProjectMaterialArgs
    materials?: boolean | ProjectCountOutputTypeCountMaterialsArgs
    stakeholders?: boolean | ProjectCountOutputTypeCountStakeholdersArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountStakeholdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StakeholderWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    materials: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | ImageCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }


  /**
   * Count Type StakeholderCountOutputType
   */

  export type StakeholderCountOutputType = {
    projects: number
  }

  export type StakeholderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | StakeholderCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * StakeholderCountOutputType without action
   */
  export type StakeholderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StakeholderCountOutputType
     */
    select?: StakeholderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StakeholderCountOutputType without action
   */
  export type StakeholderCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    materials: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | SupplierCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    projectMaterials: number
    projects: number
    images: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMaterials?: boolean | MaterialCountOutputTypeCountProjectMaterialsArgs
    projects?: boolean | MaterialCountOutputTypeCountProjectsArgs
    images?: boolean | MaterialCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProjectMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    yearCompleted: number | null
    area: number | null
  }

  export type ProjectSumAggregateOutputType = {
    yearCompleted: number | null
    area: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    description: string | null
    location: string | null
    yearCompleted: number | null
    typology: $Enums.BUILDING_TYPOLOGY | null
    authorEmail: string | null
    selectedForCompetition: boolean | null
    area: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    description: string | null
    location: string | null
    yearCompleted: number | null
    typology: $Enums.BUILDING_TYPOLOGY | null
    authorEmail: string | null
    selectedForCompetition: boolean | null
    area: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    description: number
    location: number
    yearCompleted: number
    typology: number
    authorEmail: number
    selectedForCompetition: number
    area: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    yearCompleted?: true
    area?: true
  }

  export type ProjectSumAggregateInputType = {
    yearCompleted?: true
    area?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    description?: true
    location?: true
    yearCompleted?: true
    typology?: true
    authorEmail?: true
    selectedForCompetition?: true
    area?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    description?: true
    location?: true
    yearCompleted?: true
    typology?: true
    authorEmail?: true
    selectedForCompetition?: true
    area?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    description?: true
    location?: true
    yearCompleted?: true
    typology?: true
    authorEmail?: true
    selectedForCompetition?: true
    area?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    description: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition: boolean
    area: number | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    yearCompleted?: boolean
    typology?: boolean
    authorEmail?: boolean
    selectedForCompetition?: boolean
    area?: boolean
    images?: boolean | Project$imagesArgs<ExtArgs>
    projectMaterial?: boolean | Project$projectMaterialArgs<ExtArgs>
    materials?: boolean | Project$materialsArgs<ExtArgs>
    stakeholders?: boolean | Project$stakeholdersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    yearCompleted?: boolean
    typology?: boolean
    authorEmail?: boolean
    selectedForCompetition?: boolean
    area?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    yearCompleted?: boolean
    typology?: boolean
    authorEmail?: boolean
    selectedForCompetition?: boolean
    area?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    yearCompleted?: boolean
    typology?: boolean
    authorEmail?: boolean
    selectedForCompetition?: boolean
    area?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "title" | "description" | "location" | "yearCompleted" | "typology" | "authorEmail" | "selectedForCompetition" | "area", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Project$imagesArgs<ExtArgs>
    projectMaterial?: boolean | Project$projectMaterialArgs<ExtArgs>
    materials?: boolean | Project$materialsArgs<ExtArgs>
    stakeholders?: boolean | Project$stakeholdersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      projectMaterial: Prisma.$ProjectMaterialPayload<ExtArgs>[]
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      stakeholders: Prisma.$StakeholderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      title: string
      description: string | null
      location: string
      yearCompleted: number
      typology: $Enums.BUILDING_TYPOLOGY
      authorEmail: string
      selectedForCompetition: boolean
      area: number | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Project$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectMaterial<T extends Project$projectMaterialArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materials<T extends Project$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Project$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stakeholders<T extends Project$stakeholdersArgs<ExtArgs> = {}>(args?: Subset<T, Project$stakeholdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly location: FieldRef<"Project", 'String'>
    readonly yearCompleted: FieldRef<"Project", 'Int'>
    readonly typology: FieldRef<"Project", 'BUILDING_TYPOLOGY'>
    readonly authorEmail: FieldRef<"Project", 'String'>
    readonly selectedForCompetition: FieldRef<"Project", 'Boolean'>
    readonly area: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.images
   */
  export type Project$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Project.projectMaterial
   */
  export type Project$projectMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    where?: ProjectMaterialWhereInput
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    cursor?: ProjectMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * Project.materials
   */
  export type Project$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Project.stakeholders
   */
  export type Project$stakeholdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    where?: StakeholderWhereInput
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    cursor?: StakeholderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    projectId: string | null
    credit: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    projectId: string | null
    credit: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    projectId: number
    aiTags: number
    credit: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    projectId?: true
    credit?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    projectId?: true
    credit?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    projectId?: true
    aiTags?: true
    credit?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    projectId: string
    aiTags: string[]
    credit: string | null
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    projectId?: boolean
    aiTags?: boolean
    credit?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    materials?: boolean | Image$materialsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    projectId?: boolean
    aiTags?: boolean
    credit?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    projectId?: boolean
    aiTags?: boolean
    credit?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    projectId?: boolean
    aiTags?: boolean
    credit?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "projectId" | "aiTags" | "credit", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    materials?: boolean | Image$materialsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      materials: Prisma.$MaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      projectId: string
      aiTags: string[]
      credit: string | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materials<T extends Image$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Image$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly projectId: FieldRef<"Image", 'String'>
    readonly aiTags: FieldRef<"Image", 'String[]'>
    readonly credit: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.materials
   */
  export type Image$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Stakeholder
   */

  export type AggregateStakeholder = {
    _count: StakeholderCountAggregateOutputType | null
    _min: StakeholderMinAggregateOutputType | null
    _max: StakeholderMaxAggregateOutputType | null
  }

  export type StakeholderMinAggregateOutputType = {
    id: string | null
    type: $Enums.STAKEHOLDER_TYPE | null
    name: string | null
  }

  export type StakeholderMaxAggregateOutputType = {
    id: string | null
    type: $Enums.STAKEHOLDER_TYPE | null
    name: string | null
  }

  export type StakeholderCountAggregateOutputType = {
    id: number
    type: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type StakeholderMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
  }

  export type StakeholderMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
  }

  export type StakeholderCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type StakeholderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stakeholder to aggregate.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stakeholders
    **/
    _count?: true | StakeholderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StakeholderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StakeholderMaxAggregateInputType
  }

  export type GetStakeholderAggregateType<T extends StakeholderAggregateArgs> = {
        [P in keyof T & keyof AggregateStakeholder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStakeholder[P]>
      : GetScalarType<T[P], AggregateStakeholder[P]>
  }




  export type StakeholderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StakeholderWhereInput
    orderBy?: StakeholderOrderByWithAggregationInput | StakeholderOrderByWithAggregationInput[]
    by: StakeholderScalarFieldEnum[] | StakeholderScalarFieldEnum
    having?: StakeholderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StakeholderCountAggregateInputType | true
    _min?: StakeholderMinAggregateInputType
    _max?: StakeholderMaxAggregateInputType
  }

  export type StakeholderGroupByOutputType = {
    id: string
    type: $Enums.STAKEHOLDER_TYPE
    name: string
    email: string[]
    phoneNumber: string[]
    _count: StakeholderCountAggregateOutputType | null
    _min: StakeholderMinAggregateOutputType | null
    _max: StakeholderMaxAggregateOutputType | null
  }

  type GetStakeholderGroupByPayload<T extends StakeholderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StakeholderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StakeholderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StakeholderGroupByOutputType[P]>
            : GetScalarType<T[P], StakeholderGroupByOutputType[P]>
        }
      >
    >


  export type StakeholderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    projects?: boolean | Stakeholder$projectsArgs<ExtArgs>
    _count?: boolean | StakeholderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stakeholder"]>

  export type StakeholderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["stakeholder"]>

  export type StakeholderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["stakeholder"]>

  export type StakeholderSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type StakeholderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "email" | "phoneNumber", ExtArgs["result"]["stakeholder"]>
  export type StakeholderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Stakeholder$projectsArgs<ExtArgs>
    _count?: boolean | StakeholderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StakeholderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StakeholderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StakeholderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stakeholder"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.STAKEHOLDER_TYPE
      name: string
      email: string[]
      phoneNumber: string[]
    }, ExtArgs["result"]["stakeholder"]>
    composites: {}
  }

  type StakeholderGetPayload<S extends boolean | null | undefined | StakeholderDefaultArgs> = $Result.GetResult<Prisma.$StakeholderPayload, S>

  type StakeholderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StakeholderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StakeholderCountAggregateInputType | true
    }

  export interface StakeholderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stakeholder'], meta: { name: 'Stakeholder' } }
    /**
     * Find zero or one Stakeholder that matches the filter.
     * @param {StakeholderFindUniqueArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StakeholderFindUniqueArgs>(args: SelectSubset<T, StakeholderFindUniqueArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stakeholder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StakeholderFindUniqueOrThrowArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StakeholderFindUniqueOrThrowArgs>(args: SelectSubset<T, StakeholderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stakeholder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderFindFirstArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StakeholderFindFirstArgs>(args?: SelectSubset<T, StakeholderFindFirstArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stakeholder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderFindFirstOrThrowArgs} args - Arguments to find a Stakeholder
     * @example
     * // Get one Stakeholder
     * const stakeholder = await prisma.stakeholder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StakeholderFindFirstOrThrowArgs>(args?: SelectSubset<T, StakeholderFindFirstOrThrowArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stakeholders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stakeholders
     * const stakeholders = await prisma.stakeholder.findMany()
     * 
     * // Get first 10 Stakeholders
     * const stakeholders = await prisma.stakeholder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stakeholderWithIdOnly = await prisma.stakeholder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StakeholderFindManyArgs>(args?: SelectSubset<T, StakeholderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stakeholder.
     * @param {StakeholderCreateArgs} args - Arguments to create a Stakeholder.
     * @example
     * // Create one Stakeholder
     * const Stakeholder = await prisma.stakeholder.create({
     *   data: {
     *     // ... data to create a Stakeholder
     *   }
     * })
     * 
     */
    create<T extends StakeholderCreateArgs>(args: SelectSubset<T, StakeholderCreateArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stakeholders.
     * @param {StakeholderCreateManyArgs} args - Arguments to create many Stakeholders.
     * @example
     * // Create many Stakeholders
     * const stakeholder = await prisma.stakeholder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StakeholderCreateManyArgs>(args?: SelectSubset<T, StakeholderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stakeholders and returns the data saved in the database.
     * @param {StakeholderCreateManyAndReturnArgs} args - Arguments to create many Stakeholders.
     * @example
     * // Create many Stakeholders
     * const stakeholder = await prisma.stakeholder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stakeholders and only return the `id`
     * const stakeholderWithIdOnly = await prisma.stakeholder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StakeholderCreateManyAndReturnArgs>(args?: SelectSubset<T, StakeholderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stakeholder.
     * @param {StakeholderDeleteArgs} args - Arguments to delete one Stakeholder.
     * @example
     * // Delete one Stakeholder
     * const Stakeholder = await prisma.stakeholder.delete({
     *   where: {
     *     // ... filter to delete one Stakeholder
     *   }
     * })
     * 
     */
    delete<T extends StakeholderDeleteArgs>(args: SelectSubset<T, StakeholderDeleteArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stakeholder.
     * @param {StakeholderUpdateArgs} args - Arguments to update one Stakeholder.
     * @example
     * // Update one Stakeholder
     * const stakeholder = await prisma.stakeholder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StakeholderUpdateArgs>(args: SelectSubset<T, StakeholderUpdateArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stakeholders.
     * @param {StakeholderDeleteManyArgs} args - Arguments to filter Stakeholders to delete.
     * @example
     * // Delete a few Stakeholders
     * const { count } = await prisma.stakeholder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StakeholderDeleteManyArgs>(args?: SelectSubset<T, StakeholderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakeholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stakeholders
     * const stakeholder = await prisma.stakeholder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StakeholderUpdateManyArgs>(args: SelectSubset<T, StakeholderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakeholders and returns the data updated in the database.
     * @param {StakeholderUpdateManyAndReturnArgs} args - Arguments to update many Stakeholders.
     * @example
     * // Update many Stakeholders
     * const stakeholder = await prisma.stakeholder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stakeholders and only return the `id`
     * const stakeholderWithIdOnly = await prisma.stakeholder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StakeholderUpdateManyAndReturnArgs>(args: SelectSubset<T, StakeholderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stakeholder.
     * @param {StakeholderUpsertArgs} args - Arguments to update or create a Stakeholder.
     * @example
     * // Update or create a Stakeholder
     * const stakeholder = await prisma.stakeholder.upsert({
     *   create: {
     *     // ... data to create a Stakeholder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stakeholder we want to update
     *   }
     * })
     */
    upsert<T extends StakeholderUpsertArgs>(args: SelectSubset<T, StakeholderUpsertArgs<ExtArgs>>): Prisma__StakeholderClient<$Result.GetResult<Prisma.$StakeholderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stakeholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderCountArgs} args - Arguments to filter Stakeholders to count.
     * @example
     * // Count the number of Stakeholders
     * const count = await prisma.stakeholder.count({
     *   where: {
     *     // ... the filter for the Stakeholders we want to count
     *   }
     * })
    **/
    count<T extends StakeholderCountArgs>(
      args?: Subset<T, StakeholderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StakeholderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stakeholder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StakeholderAggregateArgs>(args: Subset<T, StakeholderAggregateArgs>): Prisma.PrismaPromise<GetStakeholderAggregateType<T>>

    /**
     * Group by Stakeholder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeholderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StakeholderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StakeholderGroupByArgs['orderBy'] }
        : { orderBy?: StakeholderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StakeholderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeholderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stakeholder model
   */
  readonly fields: StakeholderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stakeholder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StakeholderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Stakeholder$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Stakeholder$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stakeholder model
   */
  interface StakeholderFieldRefs {
    readonly id: FieldRef<"Stakeholder", 'String'>
    readonly type: FieldRef<"Stakeholder", 'STAKEHOLDER_TYPE'>
    readonly name: FieldRef<"Stakeholder", 'String'>
    readonly email: FieldRef<"Stakeholder", 'String[]'>
    readonly phoneNumber: FieldRef<"Stakeholder", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Stakeholder findUnique
   */
  export type StakeholderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where: StakeholderWhereUniqueInput
  }

  /**
   * Stakeholder findUniqueOrThrow
   */
  export type StakeholderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where: StakeholderWhereUniqueInput
  }

  /**
   * Stakeholder findFirst
   */
  export type StakeholderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stakeholders.
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stakeholders.
     */
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }

  /**
   * Stakeholder findFirstOrThrow
   */
  export type StakeholderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholder to fetch.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stakeholders.
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stakeholders.
     */
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }

  /**
   * Stakeholder findMany
   */
  export type StakeholderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter, which Stakeholders to fetch.
     */
    where?: StakeholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakeholders to fetch.
     */
    orderBy?: StakeholderOrderByWithRelationInput | StakeholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stakeholders.
     */
    cursor?: StakeholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakeholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakeholders.
     */
    skip?: number
    distinct?: StakeholderScalarFieldEnum | StakeholderScalarFieldEnum[]
  }

  /**
   * Stakeholder create
   */
  export type StakeholderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * The data needed to create a Stakeholder.
     */
    data: XOR<StakeholderCreateInput, StakeholderUncheckedCreateInput>
  }

  /**
   * Stakeholder createMany
   */
  export type StakeholderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stakeholders.
     */
    data: StakeholderCreateManyInput | StakeholderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stakeholder createManyAndReturn
   */
  export type StakeholderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * The data used to create many Stakeholders.
     */
    data: StakeholderCreateManyInput | StakeholderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stakeholder update
   */
  export type StakeholderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * The data needed to update a Stakeholder.
     */
    data: XOR<StakeholderUpdateInput, StakeholderUncheckedUpdateInput>
    /**
     * Choose, which Stakeholder to update.
     */
    where: StakeholderWhereUniqueInput
  }

  /**
   * Stakeholder updateMany
   */
  export type StakeholderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stakeholders.
     */
    data: XOR<StakeholderUpdateManyMutationInput, StakeholderUncheckedUpdateManyInput>
    /**
     * Filter which Stakeholders to update
     */
    where?: StakeholderWhereInput
    /**
     * Limit how many Stakeholders to update.
     */
    limit?: number
  }

  /**
   * Stakeholder updateManyAndReturn
   */
  export type StakeholderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * The data used to update Stakeholders.
     */
    data: XOR<StakeholderUpdateManyMutationInput, StakeholderUncheckedUpdateManyInput>
    /**
     * Filter which Stakeholders to update
     */
    where?: StakeholderWhereInput
    /**
     * Limit how many Stakeholders to update.
     */
    limit?: number
  }

  /**
   * Stakeholder upsert
   */
  export type StakeholderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * The filter to search for the Stakeholder to update in case it exists.
     */
    where: StakeholderWhereUniqueInput
    /**
     * In case the Stakeholder found by the `where` argument doesn't exist, create a new Stakeholder with this data.
     */
    create: XOR<StakeholderCreateInput, StakeholderUncheckedCreateInput>
    /**
     * In case the Stakeholder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StakeholderUpdateInput, StakeholderUncheckedUpdateInput>
  }

  /**
   * Stakeholder delete
   */
  export type StakeholderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
    /**
     * Filter which Stakeholder to delete.
     */
    where: StakeholderWhereUniqueInput
  }

  /**
   * Stakeholder deleteMany
   */
  export type StakeholderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stakeholders to delete
     */
    where?: StakeholderWhereInput
    /**
     * Limit how many Stakeholders to delete.
     */
    limit?: number
  }

  /**
   * Stakeholder.projects
   */
  export type Stakeholder$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Stakeholder without action
   */
  export type StakeholderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stakeholder
     */
    select?: StakeholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stakeholder
     */
    omit?: StakeholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeholderInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    location: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    location: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    website: number
    location: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    website?: true
    location?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    website?: true
    location?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    website?: true
    location?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    website: string | null
    location: string | null
    email: string[]
    phoneNumber: string[]
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    location?: boolean
    email?: boolean
    phoneNumber?: boolean
    materials?: boolean | Supplier$materialsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    location?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    location?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    website?: boolean
    location?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "website" | "location" | "email" | "phoneNumber", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | Supplier$materialsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      materials: Prisma.$MaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      website: string | null
      location: string | null
      email: string[]
      phoneNumber: string[]
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends Supplier$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly website: FieldRef<"Supplier", 'String'>
    readonly location: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String[]'>
    readonly phoneNumber: FieldRef<"Supplier", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.materials
   */
  export type Supplier$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    url: string | null
    supplierId: string | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    url: string | null
    supplierId: string | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    description: number
    url: number
    supplierId: number
    tags: number
    certifications: number
    _all: number
  }


  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    supplierId?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    supplierId?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    supplierId?: true
    tags?: true
    certifications?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    name: string
    description: string
    url: string
    supplierId: string
    tags: string[]
    certifications: string[]
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    supplierId?: boolean
    tags?: boolean
    certifications?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    projectMaterials?: boolean | Material$projectMaterialsArgs<ExtArgs>
    projects?: boolean | Material$projectsArgs<ExtArgs>
    images?: boolean | Material$imagesArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    supplierId?: boolean
    tags?: boolean
    certifications?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    supplierId?: boolean
    tags?: boolean
    certifications?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    supplierId?: boolean
    tags?: boolean
    certifications?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "url" | "supplierId" | "tags" | "certifications", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    projectMaterials?: boolean | Material$projectMaterialsArgs<ExtArgs>
    projects?: boolean | Material$projectsArgs<ExtArgs>
    images?: boolean | Material$imagesArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      projectMaterials: Prisma.$ProjectMaterialPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      url: string
      supplierId: string
      tags: string[]
      certifications: string[]
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectMaterials<T extends Material$projectMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Material$projectMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Material$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Material$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Material$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Material$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly description: FieldRef<"Material", 'String'>
    readonly url: FieldRef<"Material", 'String'>
    readonly supplierId: FieldRef<"Material", 'String'>
    readonly tags: FieldRef<"Material", 'String[]'>
    readonly certifications: FieldRef<"Material", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.projectMaterials
   */
  export type Material$projectMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    where?: ProjectMaterialWhereInput
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    cursor?: ProjectMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * Material.projects
   */
  export type Material$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Material.images
   */
  export type Material$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMaterial
   */

  export type AggregateProjectMaterial = {
    _count: ProjectMaterialCountAggregateOutputType | null
    _min: ProjectMaterialMinAggregateOutputType | null
    _max: ProjectMaterialMaxAggregateOutputType | null
  }

  export type ProjectMaterialMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    projectId: string | null
    usedWhere: string | null
  }

  export type ProjectMaterialMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    projectId: string | null
    usedWhere: string | null
  }

  export type ProjectMaterialCountAggregateOutputType = {
    id: number
    materialId: number
    projectId: number
    usedWhere: number
    _all: number
  }


  export type ProjectMaterialMinAggregateInputType = {
    id?: true
    materialId?: true
    projectId?: true
    usedWhere?: true
  }

  export type ProjectMaterialMaxAggregateInputType = {
    id?: true
    materialId?: true
    projectId?: true
    usedWhere?: true
  }

  export type ProjectMaterialCountAggregateInputType = {
    id?: true
    materialId?: true
    projectId?: true
    usedWhere?: true
    _all?: true
  }

  export type ProjectMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMaterial to aggregate.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMaterials
    **/
    _count?: true | ProjectMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaterialMaxAggregateInputType
  }

  export type GetProjectMaterialAggregateType<T extends ProjectMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMaterial[P]>
      : GetScalarType<T[P], AggregateProjectMaterial[P]>
  }




  export type ProjectMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMaterialWhereInput
    orderBy?: ProjectMaterialOrderByWithAggregationInput | ProjectMaterialOrderByWithAggregationInput[]
    by: ProjectMaterialScalarFieldEnum[] | ProjectMaterialScalarFieldEnum
    having?: ProjectMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMaterialCountAggregateInputType | true
    _min?: ProjectMaterialMinAggregateInputType
    _max?: ProjectMaterialMaxAggregateInputType
  }

  export type ProjectMaterialGroupByOutputType = {
    id: string
    materialId: string
    projectId: string
    usedWhere: string
    _count: ProjectMaterialCountAggregateOutputType | null
    _min: ProjectMaterialMinAggregateOutputType | null
    _max: ProjectMaterialMaxAggregateOutputType | null
  }

  type GetProjectMaterialGroupByPayload<T extends ProjectMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMaterialGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    projectId?: boolean
    usedWhere?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterial"]>

  export type ProjectMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    projectId?: boolean
    usedWhere?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterial"]>

  export type ProjectMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    projectId?: boolean
    usedWhere?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMaterial"]>

  export type ProjectMaterialSelectScalar = {
    id?: boolean
    materialId?: boolean
    projectId?: boolean
    usedWhere?: boolean
  }

  export type ProjectMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materialId" | "projectId" | "usedWhere", ExtArgs["result"]["projectMaterial"]>
  export type ProjectMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMaterial"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      projectId: string
      usedWhere: string
    }, ExtArgs["result"]["projectMaterial"]>
    composites: {}
  }

  type ProjectMaterialGetPayload<S extends boolean | null | undefined | ProjectMaterialDefaultArgs> = $Result.GetResult<Prisma.$ProjectMaterialPayload, S>

  type ProjectMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMaterialCountAggregateInputType | true
    }

  export interface ProjectMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMaterial'], meta: { name: 'ProjectMaterial' } }
    /**
     * Find zero or one ProjectMaterial that matches the filter.
     * @param {ProjectMaterialFindUniqueArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMaterialFindUniqueArgs>(args: SelectSubset<T, ProjectMaterialFindUniqueArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMaterialFindUniqueOrThrowArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialFindFirstArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMaterialFindFirstArgs>(args?: SelectSubset<T, ProjectMaterialFindFirstArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialFindFirstOrThrowArgs} args - Arguments to find a ProjectMaterial
     * @example
     * // Get one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMaterials
     * const projectMaterials = await prisma.projectMaterial.findMany()
     * 
     * // Get first 10 ProjectMaterials
     * const projectMaterials = await prisma.projectMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMaterialWithIdOnly = await prisma.projectMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMaterialFindManyArgs>(args?: SelectSubset<T, ProjectMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMaterial.
     * @param {ProjectMaterialCreateArgs} args - Arguments to create a ProjectMaterial.
     * @example
     * // Create one ProjectMaterial
     * const ProjectMaterial = await prisma.projectMaterial.create({
     *   data: {
     *     // ... data to create a ProjectMaterial
     *   }
     * })
     * 
     */
    create<T extends ProjectMaterialCreateArgs>(args: SelectSubset<T, ProjectMaterialCreateArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMaterials.
     * @param {ProjectMaterialCreateManyArgs} args - Arguments to create many ProjectMaterials.
     * @example
     * // Create many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMaterialCreateManyArgs>(args?: SelectSubset<T, ProjectMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMaterials and returns the data saved in the database.
     * @param {ProjectMaterialCreateManyAndReturnArgs} args - Arguments to create many ProjectMaterials.
     * @example
     * // Create many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMaterials and only return the `id`
     * const projectMaterialWithIdOnly = await prisma.projectMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMaterial.
     * @param {ProjectMaterialDeleteArgs} args - Arguments to delete one ProjectMaterial.
     * @example
     * // Delete one ProjectMaterial
     * const ProjectMaterial = await prisma.projectMaterial.delete({
     *   where: {
     *     // ... filter to delete one ProjectMaterial
     *   }
     * })
     * 
     */
    delete<T extends ProjectMaterialDeleteArgs>(args: SelectSubset<T, ProjectMaterialDeleteArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMaterial.
     * @param {ProjectMaterialUpdateArgs} args - Arguments to update one ProjectMaterial.
     * @example
     * // Update one ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMaterialUpdateArgs>(args: SelectSubset<T, ProjectMaterialUpdateArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMaterials.
     * @param {ProjectMaterialDeleteManyArgs} args - Arguments to filter ProjectMaterials to delete.
     * @example
     * // Delete a few ProjectMaterials
     * const { count } = await prisma.projectMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMaterialDeleteManyArgs>(args?: SelectSubset<T, ProjectMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMaterialUpdateManyArgs>(args: SelectSubset<T, ProjectMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMaterials and returns the data updated in the database.
     * @param {ProjectMaterialUpdateManyAndReturnArgs} args - Arguments to update many ProjectMaterials.
     * @example
     * // Update many ProjectMaterials
     * const projectMaterial = await prisma.projectMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMaterials and only return the `id`
     * const projectMaterialWithIdOnly = await prisma.projectMaterial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMaterial.
     * @param {ProjectMaterialUpsertArgs} args - Arguments to update or create a ProjectMaterial.
     * @example
     * // Update or create a ProjectMaterial
     * const projectMaterial = await prisma.projectMaterial.upsert({
     *   create: {
     *     // ... data to create a ProjectMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMaterial we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMaterialUpsertArgs>(args: SelectSubset<T, ProjectMaterialUpsertArgs<ExtArgs>>): Prisma__ProjectMaterialClient<$Result.GetResult<Prisma.$ProjectMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialCountArgs} args - Arguments to filter ProjectMaterials to count.
     * @example
     * // Count the number of ProjectMaterials
     * const count = await prisma.projectMaterial.count({
     *   where: {
     *     // ... the filter for the ProjectMaterials we want to count
     *   }
     * })
    **/
    count<T extends ProjectMaterialCountArgs>(
      args?: Subset<T, ProjectMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMaterialAggregateArgs>(args: Subset<T, ProjectMaterialAggregateArgs>): Prisma.PrismaPromise<GetProjectMaterialAggregateType<T>>

    /**
     * Group by ProjectMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMaterialGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMaterial model
   */
  readonly fields: ProjectMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMaterial model
   */
  interface ProjectMaterialFieldRefs {
    readonly id: FieldRef<"ProjectMaterial", 'String'>
    readonly materialId: FieldRef<"ProjectMaterial", 'String'>
    readonly projectId: FieldRef<"ProjectMaterial", 'String'>
    readonly usedWhere: FieldRef<"ProjectMaterial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMaterial findUnique
   */
  export type ProjectMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial findUniqueOrThrow
   */
  export type ProjectMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial findFirst
   */
  export type ProjectMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMaterials.
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMaterials.
     */
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * ProjectMaterial findFirstOrThrow
   */
  export type ProjectMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterial to fetch.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMaterials.
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMaterials.
     */
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * ProjectMaterial findMany
   */
  export type ProjectMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMaterials to fetch.
     */
    where?: ProjectMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMaterials to fetch.
     */
    orderBy?: ProjectMaterialOrderByWithRelationInput | ProjectMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMaterials.
     */
    cursor?: ProjectMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMaterials.
     */
    skip?: number
    distinct?: ProjectMaterialScalarFieldEnum | ProjectMaterialScalarFieldEnum[]
  }

  /**
   * ProjectMaterial create
   */
  export type ProjectMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMaterial.
     */
    data: XOR<ProjectMaterialCreateInput, ProjectMaterialUncheckedCreateInput>
  }

  /**
   * ProjectMaterial createMany
   */
  export type ProjectMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMaterials.
     */
    data: ProjectMaterialCreateManyInput | ProjectMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMaterial createManyAndReturn
   */
  export type ProjectMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMaterials.
     */
    data: ProjectMaterialCreateManyInput | ProjectMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMaterial update
   */
  export type ProjectMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMaterial.
     */
    data: XOR<ProjectMaterialUpdateInput, ProjectMaterialUncheckedUpdateInput>
    /**
     * Choose, which ProjectMaterial to update.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial updateMany
   */
  export type ProjectMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMaterials.
     */
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMaterials to update
     */
    where?: ProjectMaterialWhereInput
    /**
     * Limit how many ProjectMaterials to update.
     */
    limit?: number
  }

  /**
   * ProjectMaterial updateManyAndReturn
   */
  export type ProjectMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMaterials.
     */
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMaterials to update
     */
    where?: ProjectMaterialWhereInput
    /**
     * Limit how many ProjectMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMaterial upsert
   */
  export type ProjectMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMaterial to update in case it exists.
     */
    where: ProjectMaterialWhereUniqueInput
    /**
     * In case the ProjectMaterial found by the `where` argument doesn't exist, create a new ProjectMaterial with this data.
     */
    create: XOR<ProjectMaterialCreateInput, ProjectMaterialUncheckedCreateInput>
    /**
     * In case the ProjectMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMaterialUpdateInput, ProjectMaterialUncheckedUpdateInput>
  }

  /**
   * ProjectMaterial delete
   */
  export type ProjectMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
    /**
     * Filter which ProjectMaterial to delete.
     */
    where: ProjectMaterialWhereUniqueInput
  }

  /**
   * ProjectMaterial deleteMany
   */
  export type ProjectMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMaterials to delete
     */
    where?: ProjectMaterialWhereInput
    /**
     * Limit how many ProjectMaterials to delete.
     */
    limit?: number
  }

  /**
   * ProjectMaterial without action
   */
  export type ProjectMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMaterial
     */
    select?: ProjectMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMaterial
     */
    omit?: ProjectMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMaterialInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    description: 'description',
    location: 'location',
    yearCompleted: 'yearCompleted',
    typology: 'typology',
    authorEmail: 'authorEmail',
    selectedForCompetition: 'selectedForCompetition',
    area: 'area'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    projectId: 'projectId',
    aiTags: 'aiTags',
    credit: 'credit'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const StakeholderScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type StakeholderScalarFieldEnum = (typeof StakeholderScalarFieldEnum)[keyof typeof StakeholderScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    website: 'website',
    location: 'location',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    url: 'url',
    supplierId: 'supplierId',
    tags: 'tags',
    certifications: 'certifications'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const ProjectMaterialScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    projectId: 'projectId',
    usedWhere: 'usedWhere'
  };

  export type ProjectMaterialScalarFieldEnum = (typeof ProjectMaterialScalarFieldEnum)[keyof typeof ProjectMaterialScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BUILDING_TYPOLOGY'
   */
  export type EnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BUILDING_TYPOLOGY'>
    


  /**
   * Reference to a field of type 'BUILDING_TYPOLOGY[]'
   */
  export type ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BUILDING_TYPOLOGY[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'STAKEHOLDER_TYPE'
   */
  export type EnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STAKEHOLDER_TYPE'>
    


  /**
   * Reference to a field of type 'STAKEHOLDER_TYPE[]'
   */
  export type ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STAKEHOLDER_TYPE[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    location?: StringFilter<"Project"> | string
    yearCompleted?: IntFilter<"Project"> | number
    typology?: EnumBUILDING_TYPOLOGYFilter<"Project"> | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFilter<"Project"> | string
    selectedForCompetition?: BoolFilter<"Project"> | boolean
    area?: IntNullableFilter<"Project"> | number | null
    images?: ImageListRelationFilter
    projectMaterial?: ProjectMaterialListRelationFilter
    materials?: MaterialListRelationFilter
    stakeholders?: StakeholderListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    yearCompleted?: SortOrder
    typology?: SortOrder
    authorEmail?: SortOrder
    selectedForCompetition?: SortOrder
    area?: SortOrderInput | SortOrder
    images?: ImageOrderByRelationAggregateInput
    projectMaterial?: ProjectMaterialOrderByRelationAggregateInput
    materials?: MaterialOrderByRelationAggregateInput
    stakeholders?: StakeholderOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    location?: StringFilter<"Project"> | string
    yearCompleted?: IntFilter<"Project"> | number
    typology?: EnumBUILDING_TYPOLOGYFilter<"Project"> | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFilter<"Project"> | string
    selectedForCompetition?: BoolFilter<"Project"> | boolean
    area?: IntNullableFilter<"Project"> | number | null
    images?: ImageListRelationFilter
    projectMaterial?: ProjectMaterialListRelationFilter
    materials?: MaterialListRelationFilter
    stakeholders?: StakeholderListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    yearCompleted?: SortOrder
    typology?: SortOrder
    authorEmail?: SortOrder
    selectedForCompetition?: SortOrder
    area?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    location?: StringWithAggregatesFilter<"Project"> | string
    yearCompleted?: IntWithAggregatesFilter<"Project"> | number
    typology?: EnumBUILDING_TYPOLOGYWithAggregatesFilter<"Project"> | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringWithAggregatesFilter<"Project"> | string
    selectedForCompetition?: BoolWithAggregatesFilter<"Project"> | boolean
    area?: IntNullableWithAggregatesFilter<"Project"> | number | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    projectId?: StringFilter<"Image"> | string
    aiTags?: StringNullableListFilter<"Image">
    credit?: StringNullableFilter<"Image"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    materials?: MaterialListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
    aiTags?: SortOrder
    credit?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    materials?: MaterialOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    projectId?: StringFilter<"Image"> | string
    aiTags?: StringNullableListFilter<"Image">
    credit?: StringNullableFilter<"Image"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    materials?: MaterialListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
    aiTags?: SortOrder
    credit?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    projectId?: StringWithAggregatesFilter<"Image"> | string
    aiTags?: StringNullableListFilter<"Image">
    credit?: StringNullableWithAggregatesFilter<"Image"> | string | null
  }

  export type StakeholderWhereInput = {
    AND?: StakeholderWhereInput | StakeholderWhereInput[]
    OR?: StakeholderWhereInput[]
    NOT?: StakeholderWhereInput | StakeholderWhereInput[]
    id?: StringFilter<"Stakeholder"> | string
    type?: EnumSTAKEHOLDER_TYPEFilter<"Stakeholder"> | $Enums.STAKEHOLDER_TYPE
    name?: StringFilter<"Stakeholder"> | string
    email?: StringNullableListFilter<"Stakeholder">
    phoneNumber?: StringNullableListFilter<"Stakeholder">
    projects?: ProjectListRelationFilter
  }

  export type StakeholderOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type StakeholderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StakeholderWhereInput | StakeholderWhereInput[]
    OR?: StakeholderWhereInput[]
    NOT?: StakeholderWhereInput | StakeholderWhereInput[]
    type?: EnumSTAKEHOLDER_TYPEFilter<"Stakeholder"> | $Enums.STAKEHOLDER_TYPE
    name?: StringFilter<"Stakeholder"> | string
    email?: StringNullableListFilter<"Stakeholder">
    phoneNumber?: StringNullableListFilter<"Stakeholder">
    projects?: ProjectListRelationFilter
  }, "id">

  export type StakeholderOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: StakeholderCountOrderByAggregateInput
    _max?: StakeholderMaxOrderByAggregateInput
    _min?: StakeholderMinOrderByAggregateInput
  }

  export type StakeholderScalarWhereWithAggregatesInput = {
    AND?: StakeholderScalarWhereWithAggregatesInput | StakeholderScalarWhereWithAggregatesInput[]
    OR?: StakeholderScalarWhereWithAggregatesInput[]
    NOT?: StakeholderScalarWhereWithAggregatesInput | StakeholderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stakeholder"> | string
    type?: EnumSTAKEHOLDER_TYPEWithAggregatesFilter<"Stakeholder"> | $Enums.STAKEHOLDER_TYPE
    name?: StringWithAggregatesFilter<"Stakeholder"> | string
    email?: StringNullableListFilter<"Stakeholder">
    phoneNumber?: StringNullableListFilter<"Stakeholder">
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    website?: StringNullableFilter<"Supplier"> | string | null
    location?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableListFilter<"Supplier">
    phoneNumber?: StringNullableListFilter<"Supplier">
    materials?: MaterialListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    materials?: MaterialOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    website?: StringNullableFilter<"Supplier"> | string | null
    location?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableListFilter<"Supplier">
    phoneNumber?: StringNullableListFilter<"Supplier">
    materials?: MaterialListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    website?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    location?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableListFilter<"Supplier">
    phoneNumber?: StringNullableListFilter<"Supplier">
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    description?: StringFilter<"Material"> | string
    url?: StringFilter<"Material"> | string
    supplierId?: StringFilter<"Material"> | string
    tags?: StringNullableListFilter<"Material">
    certifications?: StringNullableListFilter<"Material">
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    projectMaterials?: ProjectMaterialListRelationFilter
    projects?: ProjectListRelationFilter
    images?: ImageListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    supplierId?: SortOrder
    tags?: SortOrder
    certifications?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    projectMaterials?: ProjectMaterialOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    name?: StringFilter<"Material"> | string
    description?: StringFilter<"Material"> | string
    url?: StringFilter<"Material"> | string
    supplierId?: StringFilter<"Material"> | string
    tags?: StringNullableListFilter<"Material">
    certifications?: StringNullableListFilter<"Material">
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    projectMaterials?: ProjectMaterialListRelationFilter
    projects?: ProjectListRelationFilter
    images?: ImageListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    supplierId?: SortOrder
    tags?: SortOrder
    certifications?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    description?: StringWithAggregatesFilter<"Material"> | string
    url?: StringWithAggregatesFilter<"Material"> | string
    supplierId?: StringWithAggregatesFilter<"Material"> | string
    tags?: StringNullableListFilter<"Material">
    certifications?: StringNullableListFilter<"Material">
  }

  export type ProjectMaterialWhereInput = {
    AND?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    OR?: ProjectMaterialWhereInput[]
    NOT?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    id?: StringFilter<"ProjectMaterial"> | string
    materialId?: StringFilter<"ProjectMaterial"> | string
    projectId?: StringFilter<"ProjectMaterial"> | string
    usedWhere?: StringFilter<"ProjectMaterial"> | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectMaterialOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    projectId?: SortOrder
    usedWhere?: SortOrder
    material?: MaterialOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    OR?: ProjectMaterialWhereInput[]
    NOT?: ProjectMaterialWhereInput | ProjectMaterialWhereInput[]
    materialId?: StringFilter<"ProjectMaterial"> | string
    projectId?: StringFilter<"ProjectMaterial"> | string
    usedWhere?: StringFilter<"ProjectMaterial"> | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    projectId?: SortOrder
    usedWhere?: SortOrder
    _count?: ProjectMaterialCountOrderByAggregateInput
    _max?: ProjectMaterialMaxOrderByAggregateInput
    _min?: ProjectMaterialMinOrderByAggregateInput
  }

  export type ProjectMaterialScalarWhereWithAggregatesInput = {
    AND?: ProjectMaterialScalarWhereWithAggregatesInput | ProjectMaterialScalarWhereWithAggregatesInput[]
    OR?: ProjectMaterialScalarWhereWithAggregatesInput[]
    NOT?: ProjectMaterialScalarWhereWithAggregatesInput | ProjectMaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMaterial"> | string
    materialId?: StringWithAggregatesFilter<"ProjectMaterial"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMaterial"> | string
    usedWhere?: StringWithAggregatesFilter<"ProjectMaterial"> | string
  }

  export type ProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageCreateNestedManyWithoutProjectInput
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectsInput
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageUncheckedCreateNestedManyWithoutProjectInput
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectsInput
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUpdateManyWithoutProjectNestedInput
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectsNestedInput
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUncheckedUpdateManyWithoutProjectNestedInput
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectsNestedInput
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
    project: ProjectCreateNestedOneWithoutImagesInput
    materials?: MaterialCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    projectId: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutImagesNestedInput
    materials?: MaterialUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    projectId: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StakeholderCreateInput = {
    id?: string
    type: $Enums.STAKEHOLDER_TYPE
    name: string
    email?: StakeholderCreateemailInput | string[]
    phoneNumber?: StakeholderCreatephoneNumberInput | string[]
    projects?: ProjectCreateNestedManyWithoutStakeholdersInput
  }

  export type StakeholderUncheckedCreateInput = {
    id?: string
    type: $Enums.STAKEHOLDER_TYPE
    name: string
    email?: StakeholderCreateemailInput | string[]
    phoneNumber?: StakeholderCreatephoneNumberInput | string[]
    projects?: ProjectUncheckedCreateNestedManyWithoutStakeholdersInput
  }

  export type StakeholderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput | $Enums.STAKEHOLDER_TYPE
    name?: StringFieldUpdateOperationsInput | string
    email?: StakeholderUpdateemailInput | string[]
    phoneNumber?: StakeholderUpdatephoneNumberInput | string[]
    projects?: ProjectUpdateManyWithoutStakeholdersNestedInput
  }

  export type StakeholderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput | $Enums.STAKEHOLDER_TYPE
    name?: StringFieldUpdateOperationsInput | string
    email?: StakeholderUpdateemailInput | string[]
    phoneNumber?: StakeholderUpdatephoneNumberInput | string[]
    projects?: ProjectUncheckedUpdateManyWithoutStakeholdersNestedInput
  }

  export type StakeholderCreateManyInput = {
    id?: string
    type: $Enums.STAKEHOLDER_TYPE
    name: string
    email?: StakeholderCreateemailInput | string[]
    phoneNumber?: StakeholderCreatephoneNumberInput | string[]
  }

  export type StakeholderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput | $Enums.STAKEHOLDER_TYPE
    name?: StringFieldUpdateOperationsInput | string
    email?: StakeholderUpdateemailInput | string[]
    phoneNumber?: StakeholderUpdatephoneNumberInput | string[]
  }

  export type StakeholderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput | $Enums.STAKEHOLDER_TYPE
    name?: StringFieldUpdateOperationsInput | string
    email?: StakeholderUpdateemailInput | string[]
    phoneNumber?: StakeholderUpdatephoneNumberInput | string[]
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    website?: string | null
    location?: string | null
    email?: SupplierCreateemailInput | string[]
    phoneNumber?: SupplierCreatephoneNumberInput | string[]
    materials?: MaterialCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    website?: string | null
    location?: string | null
    email?: SupplierCreateemailInput | string[]
    phoneNumber?: SupplierCreatephoneNumberInput | string[]
    materials?: MaterialUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: SupplierUpdateemailInput | string[]
    phoneNumber?: SupplierUpdatephoneNumberInput | string[]
    materials?: MaterialUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: SupplierUpdateemailInput | string[]
    phoneNumber?: SupplierUpdatephoneNumberInput | string[]
    materials?: MaterialUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    website?: string | null
    location?: string | null
    email?: SupplierCreateemailInput | string[]
    phoneNumber?: SupplierCreatephoneNumberInput | string[]
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: SupplierUpdateemailInput | string[]
    phoneNumber?: SupplierUpdatephoneNumberInput | string[]
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: SupplierUpdateemailInput | string[]
    phoneNumber?: SupplierUpdatephoneNumberInput | string[]
  }

  export type MaterialCreateInput = {
    id?: string
    name: string
    description: string
    url: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    supplier: SupplierCreateNestedOneWithoutMaterialsInput
    projectMaterials?: ProjectMaterialCreateNestedManyWithoutMaterialInput
    projects?: ProjectCreateNestedManyWithoutMaterialsInput
    images?: ImageCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    url: string
    supplierId: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput
    projects?: ProjectUncheckedCreateNestedManyWithoutMaterialsInput
    images?: ImageUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    supplier?: SupplierUpdateOneRequiredWithoutMaterialsNestedInput
    projectMaterials?: ProjectMaterialUpdateManyWithoutMaterialNestedInput
    projects?: ProjectUpdateManyWithoutMaterialsNestedInput
    images?: ImageUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutMaterialsNestedInput
    images?: ImageUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: string
    name: string
    description: string
    url: string
    supplierId: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
  }

  export type ProjectMaterialCreateInput = {
    id?: string
    usedWhere: string
    material: MaterialCreateNestedOneWithoutProjectMaterialsInput
    project: ProjectCreateNestedOneWithoutProjectMaterialInput
  }

  export type ProjectMaterialUncheckedCreateInput = {
    id?: string
    materialId: string
    projectId: string
    usedWhere: string
  }

  export type ProjectMaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutProjectMaterialsNestedInput
    project?: ProjectUpdateOneRequiredWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMaterialCreateManyInput = {
    id?: string
    materialId: string
    projectId: string
    usedWhere: string
  }

  export type ProjectMaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumBUILDING_TYPOLOGYFilter<$PrismaModel = never> = {
    equals?: $Enums.BUILDING_TYPOLOGY | EnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    in?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    notIn?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    not?: NestedEnumBUILDING_TYPOLOGYFilter<$PrismaModel> | $Enums.BUILDING_TYPOLOGY
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ProjectMaterialListRelationFilter = {
    every?: ProjectMaterialWhereInput
    some?: ProjectMaterialWhereInput
    none?: ProjectMaterialWhereInput
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type StakeholderListRelationFilter = {
    every?: StakeholderWhereInput
    some?: StakeholderWhereInput
    none?: StakeholderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StakeholderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    yearCompleted?: SortOrder
    typology?: SortOrder
    authorEmail?: SortOrder
    selectedForCompetition?: SortOrder
    area?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    yearCompleted?: SortOrder
    area?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    yearCompleted?: SortOrder
    typology?: SortOrder
    authorEmail?: SortOrder
    selectedForCompetition?: SortOrder
    area?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    yearCompleted?: SortOrder
    typology?: SortOrder
    authorEmail?: SortOrder
    selectedForCompetition?: SortOrder
    area?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    yearCompleted?: SortOrder
    area?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBUILDING_TYPOLOGYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BUILDING_TYPOLOGY | EnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    in?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    notIn?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    not?: NestedEnumBUILDING_TYPOLOGYWithAggregatesFilter<$PrismaModel> | $Enums.BUILDING_TYPOLOGY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBUILDING_TYPOLOGYFilter<$PrismaModel>
    _max?: NestedEnumBUILDING_TYPOLOGYFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
    aiTags?: SortOrder
    credit?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
    credit?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
    credit?: SortOrder
  }

  export type EnumSTAKEHOLDER_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.STAKEHOLDER_TYPE | EnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSTAKEHOLDER_TYPEFilter<$PrismaModel> | $Enums.STAKEHOLDER_TYPE
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StakeholderCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type StakeholderMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type StakeholderMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type EnumSTAKEHOLDER_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STAKEHOLDER_TYPE | EnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSTAKEHOLDER_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.STAKEHOLDER_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTAKEHOLDER_TYPEFilter<$PrismaModel>
    _max?: NestedEnumSTAKEHOLDER_TYPEFilter<$PrismaModel>
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    location?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    location?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    location?: SortOrder
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    supplierId?: SortOrder
    tags?: SortOrder
    certifications?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    supplierId?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    supplierId?: SortOrder
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type ProjectMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    projectId?: SortOrder
    usedWhere?: SortOrder
  }

  export type ProjectMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    projectId?: SortOrder
    usedWhere?: SortOrder
  }

  export type ProjectMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    projectId?: SortOrder
    usedWhere?: SortOrder
  }

  export type ImageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProjectMaterialCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectInput, ProjectMaterialUncheckedCreateWithoutProjectInput> | ProjectMaterialCreateWithoutProjectInput[] | ProjectMaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectInput | ProjectMaterialCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMaterialCreateManyProjectInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type MaterialCreateNestedManyWithoutProjectsInput = {
    create?: XOR<MaterialCreateWithoutProjectsInput, MaterialUncheckedCreateWithoutProjectsInput> | MaterialCreateWithoutProjectsInput[] | MaterialUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectsInput | MaterialCreateOrConnectWithoutProjectsInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type StakeholderCreateNestedManyWithoutProjectsInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProjectMaterialUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectInput, ProjectMaterialUncheckedCreateWithoutProjectInput> | ProjectMaterialCreateWithoutProjectInput[] | ProjectMaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectInput | ProjectMaterialCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMaterialCreateManyProjectInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<MaterialCreateWithoutProjectsInput, MaterialUncheckedCreateWithoutProjectsInput> | MaterialCreateWithoutProjectsInput[] | MaterialUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectsInput | MaterialCreateOrConnectWithoutProjectsInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type StakeholderUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput = {
    set?: $Enums.BUILDING_TYPOLOGY
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProjectInput | ImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProjectInput | ImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProjectInput | ImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProjectMaterialUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectInput, ProjectMaterialUncheckedCreateWithoutProjectInput> | ProjectMaterialCreateWithoutProjectInput[] | ProjectMaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectInput | ProjectMaterialCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutProjectInput | ProjectMaterialUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMaterialCreateManyProjectInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutProjectInput | ProjectMaterialUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutProjectInput | ProjectMaterialUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type MaterialUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectsInput, MaterialUncheckedCreateWithoutProjectsInput> | MaterialCreateWithoutProjectsInput[] | MaterialUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectsInput | MaterialCreateOrConnectWithoutProjectsInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProjectsInput | MaterialUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProjectsInput | MaterialUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProjectsInput | MaterialUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type StakeholderUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    upsert?: StakeholderUpsertWithWhereUniqueWithoutProjectsInput | StakeholderUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    disconnect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    delete?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    update?: StakeholderUpdateWithWhereUniqueWithoutProjectsInput | StakeholderUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: StakeholderUpdateManyWithWhereWithoutProjectsInput | StakeholderUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput> | ImageCreateWithoutProjectInput[] | ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProjectInput | ImageCreateOrConnectWithoutProjectInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProjectInput | ImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ImageCreateManyProjectInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProjectInput | ImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProjectInput | ImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutProjectInput, ProjectMaterialUncheckedCreateWithoutProjectInput> | ProjectMaterialCreateWithoutProjectInput[] | ProjectMaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutProjectInput | ProjectMaterialCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutProjectInput | ProjectMaterialUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMaterialCreateManyProjectInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutProjectInput | ProjectMaterialUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutProjectInput | ProjectMaterialUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectsInput, MaterialUncheckedCreateWithoutProjectsInput> | MaterialCreateWithoutProjectsInput[] | MaterialUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectsInput | MaterialCreateOrConnectWithoutProjectsInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProjectsInput | MaterialUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProjectsInput | MaterialUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProjectsInput | MaterialUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type StakeholderUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput> | StakeholderCreateWithoutProjectsInput[] | StakeholderUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: StakeholderCreateOrConnectWithoutProjectsInput | StakeholderCreateOrConnectWithoutProjectsInput[]
    upsert?: StakeholderUpsertWithWhereUniqueWithoutProjectsInput | StakeholderUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    disconnect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    delete?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    connect?: StakeholderWhereUniqueInput | StakeholderWhereUniqueInput[]
    update?: StakeholderUpdateWithWhereUniqueWithoutProjectsInput | StakeholderUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: StakeholderUpdateManyWithWhereWithoutProjectsInput | StakeholderUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
  }

  export type ImageCreateaiTagsInput = {
    set: string[]
  }

  export type ProjectCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type MaterialCreateNestedManyWithoutImagesInput = {
    create?: XOR<MaterialCreateWithoutImagesInput, MaterialUncheckedCreateWithoutImagesInput> | MaterialCreateWithoutImagesInput[] | MaterialUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImagesInput | MaterialCreateOrConnectWithoutImagesInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<MaterialCreateWithoutImagesInput, MaterialUncheckedCreateWithoutImagesInput> | MaterialCreateWithoutImagesInput[] | MaterialUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImagesInput | MaterialCreateOrConnectWithoutImagesInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type ImageUpdateaiTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput
    upsert?: ProjectUpsertWithoutImagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutImagesInput, ProjectUpdateWithoutImagesInput>, ProjectUncheckedUpdateWithoutImagesInput>
  }

  export type MaterialUpdateManyWithoutImagesNestedInput = {
    create?: XOR<MaterialCreateWithoutImagesInput, MaterialUncheckedCreateWithoutImagesInput> | MaterialCreateWithoutImagesInput[] | MaterialUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImagesInput | MaterialCreateOrConnectWithoutImagesInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutImagesInput | MaterialUpsertWithWhereUniqueWithoutImagesInput[]
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutImagesInput | MaterialUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutImagesInput | MaterialUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<MaterialCreateWithoutImagesInput, MaterialUncheckedCreateWithoutImagesInput> | MaterialCreateWithoutImagesInput[] | MaterialUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutImagesInput | MaterialCreateOrConnectWithoutImagesInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutImagesInput | MaterialUpsertWithWhereUniqueWithoutImagesInput[]
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutImagesInput | MaterialUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutImagesInput | MaterialUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type StakeholderCreateemailInput = {
    set: string[]
  }

  export type StakeholderCreatephoneNumberInput = {
    set: string[]
  }

  export type ProjectCreateNestedManyWithoutStakeholdersInput = {
    create?: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput> | ProjectCreateWithoutStakeholdersInput[] | ProjectUncheckedCreateWithoutStakeholdersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStakeholdersInput | ProjectCreateOrConnectWithoutStakeholdersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutStakeholdersInput = {
    create?: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput> | ProjectCreateWithoutStakeholdersInput[] | ProjectUncheckedCreateWithoutStakeholdersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStakeholdersInput | ProjectCreateOrConnectWithoutStakeholdersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.STAKEHOLDER_TYPE
  }

  export type StakeholderUpdateemailInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StakeholderUpdatephoneNumberInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdateManyWithoutStakeholdersNestedInput = {
    create?: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput> | ProjectCreateWithoutStakeholdersInput[] | ProjectUncheckedCreateWithoutStakeholdersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStakeholdersInput | ProjectCreateOrConnectWithoutStakeholdersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutStakeholdersInput | ProjectUpsertWithWhereUniqueWithoutStakeholdersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutStakeholdersInput | ProjectUpdateWithWhereUniqueWithoutStakeholdersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutStakeholdersInput | ProjectUpdateManyWithWhereWithoutStakeholdersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutStakeholdersNestedInput = {
    create?: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput> | ProjectCreateWithoutStakeholdersInput[] | ProjectUncheckedCreateWithoutStakeholdersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStakeholdersInput | ProjectCreateOrConnectWithoutStakeholdersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutStakeholdersInput | ProjectUpsertWithWhereUniqueWithoutStakeholdersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutStakeholdersInput | ProjectUpdateWithWhereUniqueWithoutStakeholdersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutStakeholdersInput | ProjectUpdateManyWithWhereWithoutStakeholdersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SupplierCreateemailInput = {
    set: string[]
  }

  export type SupplierCreatephoneNumberInput = {
    set: string[]
  }

  export type MaterialCreateNestedManyWithoutSupplierInput = {
    create?: XOR<MaterialCreateWithoutSupplierInput, MaterialUncheckedCreateWithoutSupplierInput> | MaterialCreateWithoutSupplierInput[] | MaterialUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSupplierInput | MaterialCreateOrConnectWithoutSupplierInput[]
    createMany?: MaterialCreateManySupplierInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<MaterialCreateWithoutSupplierInput, MaterialUncheckedCreateWithoutSupplierInput> | MaterialCreateWithoutSupplierInput[] | MaterialUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSupplierInput | MaterialCreateOrConnectWithoutSupplierInput[]
    createMany?: MaterialCreateManySupplierInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type SupplierUpdateemailInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SupplierUpdatephoneNumberInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MaterialUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<MaterialCreateWithoutSupplierInput, MaterialUncheckedCreateWithoutSupplierInput> | MaterialCreateWithoutSupplierInput[] | MaterialUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSupplierInput | MaterialCreateOrConnectWithoutSupplierInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutSupplierInput | MaterialUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: MaterialCreateManySupplierInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutSupplierInput | MaterialUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutSupplierInput | MaterialUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<MaterialCreateWithoutSupplierInput, MaterialUncheckedCreateWithoutSupplierInput> | MaterialCreateWithoutSupplierInput[] | MaterialUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSupplierInput | MaterialCreateOrConnectWithoutSupplierInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutSupplierInput | MaterialUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: MaterialCreateManySupplierInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutSupplierInput | MaterialUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutSupplierInput | MaterialUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type MaterialCreatetagsInput = {
    set: string[]
  }

  export type MaterialCreatecertificationsInput = {
    set: string[]
  }

  export type SupplierCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutMaterialsInput
    connect?: SupplierWhereUniqueInput
  }

  export type ProjectMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput> | ProjectCreateWithoutMaterialsInput[] | ProjectUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput | ProjectCreateOrConnectWithoutMaterialsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput> | ImageCreateWithoutMaterialsInput[] | ImageUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialsInput | ImageCreateOrConnectWithoutMaterialsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput> | ProjectCreateWithoutMaterialsInput[] | ProjectUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput | ProjectCreateOrConnectWithoutMaterialsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput> | ImageCreateWithoutMaterialsInput[] | ImageUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialsInput | ImageCreateOrConnectWithoutMaterialsInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type MaterialUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MaterialUpdatecertificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SupplierUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutMaterialsInput
    upsert?: SupplierUpsertWithoutMaterialsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutMaterialsInput, SupplierUpdateWithoutMaterialsInput>, SupplierUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProjectMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutMaterialInput | ProjectMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput> | ProjectCreateWithoutMaterialsInput[] | ProjectUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput | ProjectCreateOrConnectWithoutMaterialsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutMaterialsInput | ProjectUpsertWithWhereUniqueWithoutMaterialsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutMaterialsInput | ProjectUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutMaterialsInput | ProjectUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput> | ImageCreateWithoutMaterialsInput[] | ImageUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialsInput | ImageCreateOrConnectWithoutMaterialsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMaterialsInput | ImageUpsertWithWhereUniqueWithoutMaterialsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMaterialsInput | ImageUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMaterialsInput | ImageUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput> | ProjectMaterialCreateWithoutMaterialInput[] | ProjectMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProjectMaterialCreateOrConnectWithoutMaterialInput | ProjectMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProjectMaterialCreateManyMaterialInputEnvelope
    set?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    disconnect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    delete?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    connect?: ProjectMaterialWhereUniqueInput | ProjectMaterialWhereUniqueInput[]
    update?: ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput | ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProjectMaterialUpdateManyWithWhereWithoutMaterialInput | ProjectMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput> | ProjectCreateWithoutMaterialsInput[] | ProjectUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput | ProjectCreateOrConnectWithoutMaterialsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutMaterialsInput | ProjectUpsertWithWhereUniqueWithoutMaterialsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutMaterialsInput | ProjectUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutMaterialsInput | ProjectUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput> | ImageCreateWithoutMaterialsInput[] | ImageUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialsInput | ImageCreateOrConnectWithoutMaterialsInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMaterialsInput | ImageUpsertWithWhereUniqueWithoutMaterialsInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMaterialsInput | ImageUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMaterialsInput | ImageUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutProjectMaterialsInput = {
    create?: XOR<MaterialCreateWithoutProjectMaterialsInput, MaterialUncheckedCreateWithoutProjectMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectMaterialsInput
    connect?: MaterialWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutProjectMaterialInput = {
    create?: XOR<ProjectCreateWithoutProjectMaterialInput, ProjectUncheckedCreateWithoutProjectMaterialInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMaterialInput
    connect?: ProjectWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutProjectMaterialsNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectMaterialsInput, MaterialUncheckedCreateWithoutProjectMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectMaterialsInput
    upsert?: MaterialUpsertWithoutProjectMaterialsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutProjectMaterialsInput, MaterialUpdateWithoutProjectMaterialsInput>, MaterialUncheckedUpdateWithoutProjectMaterialsInput>
  }

  export type ProjectUpdateOneRequiredWithoutProjectMaterialNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectMaterialInput, ProjectUncheckedCreateWithoutProjectMaterialInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMaterialInput
    upsert?: ProjectUpsertWithoutProjectMaterialInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectMaterialInput, ProjectUpdateWithoutProjectMaterialInput>, ProjectUncheckedUpdateWithoutProjectMaterialInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumBUILDING_TYPOLOGYFilter<$PrismaModel = never> = {
    equals?: $Enums.BUILDING_TYPOLOGY | EnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    in?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    notIn?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    not?: NestedEnumBUILDING_TYPOLOGYFilter<$PrismaModel> | $Enums.BUILDING_TYPOLOGY
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBUILDING_TYPOLOGYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BUILDING_TYPOLOGY | EnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    in?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    notIn?: $Enums.BUILDING_TYPOLOGY[] | ListEnumBUILDING_TYPOLOGYFieldRefInput<$PrismaModel>
    not?: NestedEnumBUILDING_TYPOLOGYWithAggregatesFilter<$PrismaModel> | $Enums.BUILDING_TYPOLOGY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBUILDING_TYPOLOGYFilter<$PrismaModel>
    _max?: NestedEnumBUILDING_TYPOLOGYFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSTAKEHOLDER_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.STAKEHOLDER_TYPE | EnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSTAKEHOLDER_TYPEFilter<$PrismaModel> | $Enums.STAKEHOLDER_TYPE
  }

  export type NestedEnumSTAKEHOLDER_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STAKEHOLDER_TYPE | EnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.STAKEHOLDER_TYPE[] | ListEnumSTAKEHOLDER_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSTAKEHOLDER_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.STAKEHOLDER_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTAKEHOLDER_TYPEFilter<$PrismaModel>
    _max?: NestedEnumSTAKEHOLDER_TYPEFilter<$PrismaModel>
  }

  export type ImageCreateWithoutProjectInput = {
    id?: string
    url: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
    materials?: MaterialCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutProjectInput = {
    id?: string
    url: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutProjectInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput>
  }

  export type ImageCreateManyProjectInputEnvelope = {
    data: ImageCreateManyProjectInput | ImageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMaterialCreateWithoutProjectInput = {
    id?: string
    usedWhere: string
    material: MaterialCreateNestedOneWithoutProjectMaterialsInput
  }

  export type ProjectMaterialUncheckedCreateWithoutProjectInput = {
    id?: string
    materialId: string
    usedWhere: string
  }

  export type ProjectMaterialCreateOrConnectWithoutProjectInput = {
    where: ProjectMaterialWhereUniqueInput
    create: XOR<ProjectMaterialCreateWithoutProjectInput, ProjectMaterialUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMaterialCreateManyProjectInputEnvelope = {
    data: ProjectMaterialCreateManyProjectInput | ProjectMaterialCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MaterialCreateWithoutProjectsInput = {
    id?: string
    name: string
    description: string
    url: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    supplier: SupplierCreateNestedOneWithoutMaterialsInput
    projectMaterials?: ProjectMaterialCreateNestedManyWithoutMaterialInput
    images?: ImageCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    description: string
    url: string
    supplierId: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput
    images?: ImageUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialCreateOrConnectWithoutProjectsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProjectsInput, MaterialUncheckedCreateWithoutProjectsInput>
  }

  export type StakeholderCreateWithoutProjectsInput = {
    id?: string
    type: $Enums.STAKEHOLDER_TYPE
    name: string
    email?: StakeholderCreateemailInput | string[]
    phoneNumber?: StakeholderCreatephoneNumberInput | string[]
  }

  export type StakeholderUncheckedCreateWithoutProjectsInput = {
    id?: string
    type: $Enums.STAKEHOLDER_TYPE
    name: string
    email?: StakeholderCreateemailInput | string[]
    phoneNumber?: StakeholderCreatephoneNumberInput | string[]
  }

  export type StakeholderCreateOrConnectWithoutProjectsInput = {
    where: StakeholderWhereUniqueInput
    create: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProjectInput, ImageUncheckedUpdateWithoutProjectInput>
    create: XOR<ImageCreateWithoutProjectInput, ImageUncheckedCreateWithoutProjectInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProjectInput, ImageUncheckedUpdateWithoutProjectInput>
  }

  export type ImageUpdateManyWithWhereWithoutProjectInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    projectId?: StringFilter<"Image"> | string
    aiTags?: StringNullableListFilter<"Image">
    credit?: StringNullableFilter<"Image"> | string | null
  }

  export type ProjectMaterialUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMaterialWhereUniqueInput
    update: XOR<ProjectMaterialUpdateWithoutProjectInput, ProjectMaterialUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMaterialCreateWithoutProjectInput, ProjectMaterialUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMaterialUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMaterialWhereUniqueInput
    data: XOR<ProjectMaterialUpdateWithoutProjectInput, ProjectMaterialUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMaterialUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMaterialScalarWhereInput
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectMaterialScalarWhereInput = {
    AND?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
    OR?: ProjectMaterialScalarWhereInput[]
    NOT?: ProjectMaterialScalarWhereInput | ProjectMaterialScalarWhereInput[]
    id?: StringFilter<"ProjectMaterial"> | string
    materialId?: StringFilter<"ProjectMaterial"> | string
    projectId?: StringFilter<"ProjectMaterial"> | string
    usedWhere?: StringFilter<"ProjectMaterial"> | string
  }

  export type MaterialUpsertWithWhereUniqueWithoutProjectsInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutProjectsInput, MaterialUncheckedUpdateWithoutProjectsInput>
    create: XOR<MaterialCreateWithoutProjectsInput, MaterialUncheckedCreateWithoutProjectsInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutProjectsInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutProjectsInput, MaterialUncheckedUpdateWithoutProjectsInput>
  }

  export type MaterialUpdateManyWithWhereWithoutProjectsInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutProjectsInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    description?: StringFilter<"Material"> | string
    url?: StringFilter<"Material"> | string
    supplierId?: StringFilter<"Material"> | string
    tags?: StringNullableListFilter<"Material">
    certifications?: StringNullableListFilter<"Material">
  }

  export type StakeholderUpsertWithWhereUniqueWithoutProjectsInput = {
    where: StakeholderWhereUniqueInput
    update: XOR<StakeholderUpdateWithoutProjectsInput, StakeholderUncheckedUpdateWithoutProjectsInput>
    create: XOR<StakeholderCreateWithoutProjectsInput, StakeholderUncheckedCreateWithoutProjectsInput>
  }

  export type StakeholderUpdateWithWhereUniqueWithoutProjectsInput = {
    where: StakeholderWhereUniqueInput
    data: XOR<StakeholderUpdateWithoutProjectsInput, StakeholderUncheckedUpdateWithoutProjectsInput>
  }

  export type StakeholderUpdateManyWithWhereWithoutProjectsInput = {
    where: StakeholderScalarWhereInput
    data: XOR<StakeholderUpdateManyMutationInput, StakeholderUncheckedUpdateManyWithoutProjectsInput>
  }

  export type StakeholderScalarWhereInput = {
    AND?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
    OR?: StakeholderScalarWhereInput[]
    NOT?: StakeholderScalarWhereInput | StakeholderScalarWhereInput[]
    id?: StringFilter<"Stakeholder"> | string
    type?: EnumSTAKEHOLDER_TYPEFilter<"Stakeholder"> | $Enums.STAKEHOLDER_TYPE
    name?: StringFilter<"Stakeholder"> | string
    email?: StringNullableListFilter<"Stakeholder">
    phoneNumber?: StringNullableListFilter<"Stakeholder">
  }

  export type ProjectCreateWithoutImagesInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectsInput
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutImagesInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectsInput
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutImagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
  }

  export type MaterialCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    url: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    supplier: SupplierCreateNestedOneWithoutMaterialsInput
    projectMaterials?: ProjectMaterialCreateNestedManyWithoutMaterialInput
    projects?: ProjectCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    url: string
    supplierId: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput
    projects?: ProjectUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialCreateOrConnectWithoutImagesInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutImagesInput, MaterialUncheckedCreateWithoutImagesInput>
  }

  export type ProjectUpsertWithoutImagesInput = {
    update: XOR<ProjectUpdateWithoutImagesInput, ProjectUncheckedUpdateWithoutImagesInput>
    create: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutImagesInput, ProjectUncheckedUpdateWithoutImagesInput>
  }

  export type ProjectUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectsNestedInput
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectsNestedInput
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type MaterialUpsertWithWhereUniqueWithoutImagesInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutImagesInput, MaterialUncheckedUpdateWithoutImagesInput>
    create: XOR<MaterialCreateWithoutImagesInput, MaterialUncheckedCreateWithoutImagesInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutImagesInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutImagesInput, MaterialUncheckedUpdateWithoutImagesInput>
  }

  export type MaterialUpdateManyWithWhereWithoutImagesInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutImagesInput>
  }

  export type ProjectCreateWithoutStakeholdersInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageCreateNestedManyWithoutProjectInput
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutStakeholdersInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageUncheckedCreateNestedManyWithoutProjectInput
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutStakeholdersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutStakeholdersInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutStakeholdersInput, ProjectUncheckedUpdateWithoutStakeholdersInput>
    create: XOR<ProjectCreateWithoutStakeholdersInput, ProjectUncheckedCreateWithoutStakeholdersInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutStakeholdersInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutStakeholdersInput, ProjectUncheckedUpdateWithoutStakeholdersInput>
  }

  export type ProjectUpdateManyWithWhereWithoutStakeholdersInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutStakeholdersInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    location?: StringFilter<"Project"> | string
    yearCompleted?: IntFilter<"Project"> | number
    typology?: EnumBUILDING_TYPOLOGYFilter<"Project"> | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFilter<"Project"> | string
    selectedForCompetition?: BoolFilter<"Project"> | boolean
    area?: IntNullableFilter<"Project"> | number | null
  }

  export type MaterialCreateWithoutSupplierInput = {
    id?: string
    name: string
    description: string
    url: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialCreateNestedManyWithoutMaterialInput
    projects?: ProjectCreateNestedManyWithoutMaterialsInput
    images?: ImageCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutSupplierInput = {
    id?: string
    name: string
    description: string
    url: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedCreateNestedManyWithoutMaterialInput
    projects?: ProjectUncheckedCreateNestedManyWithoutMaterialsInput
    images?: ImageUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialCreateOrConnectWithoutSupplierInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutSupplierInput, MaterialUncheckedCreateWithoutSupplierInput>
  }

  export type MaterialCreateManySupplierInputEnvelope = {
    data: MaterialCreateManySupplierInput | MaterialCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithWhereUniqueWithoutSupplierInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutSupplierInput, MaterialUncheckedUpdateWithoutSupplierInput>
    create: XOR<MaterialCreateWithoutSupplierInput, MaterialUncheckedCreateWithoutSupplierInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutSupplierInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutSupplierInput, MaterialUncheckedUpdateWithoutSupplierInput>
  }

  export type MaterialUpdateManyWithWhereWithoutSupplierInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierCreateWithoutMaterialsInput = {
    id?: string
    name: string
    website?: string | null
    location?: string | null
    email?: SupplierCreateemailInput | string[]
    phoneNumber?: SupplierCreatephoneNumberInput | string[]
  }

  export type SupplierUncheckedCreateWithoutMaterialsInput = {
    id?: string
    name: string
    website?: string | null
    location?: string | null
    email?: SupplierCreateemailInput | string[]
    phoneNumber?: SupplierCreatephoneNumberInput | string[]
  }

  export type SupplierCreateOrConnectWithoutMaterialsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
  }

  export type ProjectMaterialCreateWithoutMaterialInput = {
    id?: string
    usedWhere: string
    project: ProjectCreateNestedOneWithoutProjectMaterialInput
  }

  export type ProjectMaterialUncheckedCreateWithoutMaterialInput = {
    id?: string
    projectId: string
    usedWhere: string
  }

  export type ProjectMaterialCreateOrConnectWithoutMaterialInput = {
    where: ProjectMaterialWhereUniqueInput
    create: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ProjectMaterialCreateManyMaterialInputEnvelope = {
    data: ProjectMaterialCreateManyMaterialInput | ProjectMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutMaterialsInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageCreateNestedManyWithoutProjectInput
    projectMaterial?: ProjectMaterialCreateNestedManyWithoutProjectInput
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutMaterialsInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageUncheckedCreateNestedManyWithoutProjectInput
    projectMaterial?: ProjectMaterialUncheckedCreateNestedManyWithoutProjectInput
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutMaterialsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
  }

  export type ImageCreateWithoutMaterialsInput = {
    id?: string
    url: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
    project: ProjectCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutMaterialsInput = {
    id?: string
    url: string
    projectId: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
  }

  export type ImageCreateOrConnectWithoutMaterialsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput>
  }

  export type SupplierUpsertWithoutMaterialsInput = {
    update: XOR<SupplierUpdateWithoutMaterialsInput, SupplierUncheckedUpdateWithoutMaterialsInput>
    create: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutMaterialsInput, SupplierUncheckedUpdateWithoutMaterialsInput>
  }

  export type SupplierUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: SupplierUpdateemailInput | string[]
    phoneNumber?: SupplierUpdatephoneNumberInput | string[]
  }

  export type SupplierUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: SupplierUpdateemailInput | string[]
    phoneNumber?: SupplierUpdatephoneNumberInput | string[]
  }

  export type ProjectMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ProjectMaterialWhereUniqueInput
    update: XOR<ProjectMaterialUpdateWithoutMaterialInput, ProjectMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<ProjectMaterialCreateWithoutMaterialInput, ProjectMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ProjectMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ProjectMaterialWhereUniqueInput
    data: XOR<ProjectMaterialUpdateWithoutMaterialInput, ProjectMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type ProjectMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: ProjectMaterialScalarWhereInput
    data: XOR<ProjectMaterialUpdateManyMutationInput, ProjectMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutMaterialsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutMaterialsInput, ProjectUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutMaterialsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutMaterialsInput, ProjectUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutMaterialsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutMaterialsInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutMaterialsInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutMaterialsInput, ImageUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutMaterialsInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutMaterialsInput, ImageUncheckedUpdateWithoutMaterialsInput>
  }

  export type ImageUpdateManyWithWhereWithoutMaterialsInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutMaterialsInput>
  }

  export type MaterialCreateWithoutProjectMaterialsInput = {
    id?: string
    name: string
    description: string
    url: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    supplier: SupplierCreateNestedOneWithoutMaterialsInput
    projects?: ProjectCreateNestedManyWithoutMaterialsInput
    images?: ImageCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutProjectMaterialsInput = {
    id?: string
    name: string
    description: string
    url: string
    supplierId: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
    projects?: ProjectUncheckedCreateNestedManyWithoutMaterialsInput
    images?: ImageUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialCreateOrConnectWithoutProjectMaterialsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProjectMaterialsInput, MaterialUncheckedCreateWithoutProjectMaterialsInput>
  }

  export type ProjectCreateWithoutProjectMaterialInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectsInput
    stakeholders?: StakeholderCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutProjectMaterialInput = {
    id?: string
    createdAt?: Date | string
    title: string
    description?: string | null
    location: string
    yearCompleted: number
    typology: $Enums.BUILDING_TYPOLOGY
    authorEmail: string
    selectedForCompetition?: boolean
    area?: number | null
    images?: ImageUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectsInput
    stakeholders?: StakeholderUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutProjectMaterialInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectMaterialInput, ProjectUncheckedCreateWithoutProjectMaterialInput>
  }

  export type MaterialUpsertWithoutProjectMaterialsInput = {
    update: XOR<MaterialUpdateWithoutProjectMaterialsInput, MaterialUncheckedUpdateWithoutProjectMaterialsInput>
    create: XOR<MaterialCreateWithoutProjectMaterialsInput, MaterialUncheckedCreateWithoutProjectMaterialsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutProjectMaterialsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutProjectMaterialsInput, MaterialUncheckedUpdateWithoutProjectMaterialsInput>
  }

  export type MaterialUpdateWithoutProjectMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    supplier?: SupplierUpdateOneRequiredWithoutMaterialsNestedInput
    projects?: ProjectUpdateManyWithoutMaterialsNestedInput
    images?: ImageUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProjectMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    projects?: ProjectUncheckedUpdateManyWithoutMaterialsNestedInput
    images?: ImageUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type ProjectUpsertWithoutProjectMaterialInput = {
    update: XOR<ProjectUpdateWithoutProjectMaterialInput, ProjectUncheckedUpdateWithoutProjectMaterialInput>
    create: XOR<ProjectCreateWithoutProjectMaterialInput, ProjectUncheckedCreateWithoutProjectMaterialInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectMaterialInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectMaterialInput, ProjectUncheckedUpdateWithoutProjectMaterialInput>
  }

  export type ProjectUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectsNestedInput
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectsNestedInput
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ImageCreateManyProjectInput = {
    id?: string
    url: string
    aiTags?: ImageCreateaiTagsInput | string[]
    credit?: string | null
  }

  export type ProjectMaterialCreateManyProjectInput = {
    id?: string
    materialId: string
    usedWhere: string
  }

  export type ImageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectMaterialUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutProjectMaterialsNestedInput
  }

  export type ProjectMaterialUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    supplier?: SupplierUpdateOneRequiredWithoutMaterialsNestedInput
    projectMaterials?: ProjectMaterialUpdateManyWithoutMaterialNestedInput
    images?: ImageUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    images?: ImageUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
  }

  export type StakeholderUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput | $Enums.STAKEHOLDER_TYPE
    name?: StringFieldUpdateOperationsInput | string
    email?: StakeholderUpdateemailInput | string[]
    phoneNumber?: StakeholderUpdatephoneNumberInput | string[]
  }

  export type StakeholderUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput | $Enums.STAKEHOLDER_TYPE
    name?: StringFieldUpdateOperationsInput | string
    email?: StakeholderUpdateemailInput | string[]
    phoneNumber?: StakeholderUpdatephoneNumberInput | string[]
  }

  export type StakeholderUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSTAKEHOLDER_TYPEFieldUpdateOperationsInput | $Enums.STAKEHOLDER_TYPE
    name?: StringFieldUpdateOperationsInput | string
    email?: StakeholderUpdateemailInput | string[]
    phoneNumber?: StakeholderUpdatephoneNumberInput | string[]
  }

  export type MaterialUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    supplier?: SupplierUpdateOneRequiredWithoutMaterialsNestedInput
    projectMaterials?: ProjectMaterialUpdateManyWithoutMaterialNestedInput
    projects?: ProjectUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
  }

  export type ProjectUpdateWithoutStakeholdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUpdateManyWithoutProjectNestedInput
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStakeholdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUncheckedUpdateManyWithoutProjectNestedInput
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutStakeholdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaterialCreateManySupplierInput = {
    id?: string
    name: string
    description: string
    url: string
    tags?: MaterialCreatetagsInput | string[]
    certifications?: MaterialCreatecertificationsInput | string[]
  }

  export type MaterialUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUpdateManyWithoutMaterialNestedInput
    projects?: ProjectUpdateManyWithoutMaterialsNestedInput
    images?: ImageUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
    projectMaterials?: ProjectMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutMaterialsNestedInput
    images?: ImageUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tags?: MaterialUpdatetagsInput | string[]
    certifications?: MaterialUpdatecertificationsInput | string[]
  }

  export type ProjectMaterialCreateManyMaterialInput = {
    id?: string
    projectId: string
    usedWhere: string
  }

  export type ProjectMaterialUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutProjectMaterialNestedInput
  }

  export type ProjectMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    usedWhere?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUpdateManyWithoutProjectNestedInput
    projectMaterial?: ProjectMaterialUpdateManyWithoutProjectNestedInput
    stakeholders?: StakeholderUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUncheckedUpdateManyWithoutProjectNestedInput
    projectMaterial?: ProjectMaterialUncheckedUpdateManyWithoutProjectNestedInput
    stakeholders?: StakeholderUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    typology?: EnumBUILDING_TYPOLOGYFieldUpdateOperationsInput | $Enums.BUILDING_TYPOLOGY
    authorEmail?: StringFieldUpdateOperationsInput | string
    selectedForCompetition?: BoolFieldUpdateOperationsInput | boolean
    area?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    aiTags?: ImageUpdateaiTagsInput | string[]
    credit?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}