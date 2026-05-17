
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ActiveSession
 * 
 */
export type ActiveSession = $Result.DefaultSelection<Prisma.$ActiveSessionPayload>
/**
 * Model SavedAccountCount
 * 
 */
export type SavedAccountCount = $Result.DefaultSelection<Prisma.$SavedAccountCountPayload>
/**
 * Model RedeemStatistic
 * 
 */
export type RedeemStatistic = $Result.DefaultSelection<Prisma.$RedeemStatisticPayload>
/**
 * Model SavedAccount
 * 
 */
export type SavedAccount = $Result.DefaultSelection<Prisma.$SavedAccountPayload>
/**
 * Model Giftcode
 * 
 */
export type Giftcode = $Result.DefaultSelection<Prisma.$GiftcodePayload>
/**
 * Model SystemNotice
 * 
 */
export type SystemNotice = $Result.DefaultSelection<Prisma.$SystemNoticePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ActiveSessions
 * const activeSessions = await prisma.activeSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ActiveSessions
   * const activeSessions = await prisma.activeSession.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.activeSession`: Exposes CRUD operations for the **ActiveSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActiveSessions
    * const activeSessions = await prisma.activeSession.findMany()
    * ```
    */
  get activeSession(): Prisma.ActiveSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedAccountCount`: Exposes CRUD operations for the **SavedAccountCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedAccountCounts
    * const savedAccountCounts = await prisma.savedAccountCount.findMany()
    * ```
    */
  get savedAccountCount(): Prisma.SavedAccountCountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.redeemStatistic`: Exposes CRUD operations for the **RedeemStatistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RedeemStatistics
    * const redeemStatistics = await prisma.redeemStatistic.findMany()
    * ```
    */
  get redeemStatistic(): Prisma.RedeemStatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedAccount`: Exposes CRUD operations for the **SavedAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedAccounts
    * const savedAccounts = await prisma.savedAccount.findMany()
    * ```
    */
  get savedAccount(): Prisma.SavedAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giftcode`: Exposes CRUD operations for the **Giftcode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Giftcodes
    * const giftcodes = await prisma.giftcode.findMany()
    * ```
    */
  get giftcode(): Prisma.GiftcodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemNotice`: Exposes CRUD operations for the **SystemNotice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemNotices
    * const systemNotices = await prisma.systemNotice.findMany()
    * ```
    */
  get systemNotice(): Prisma.SystemNoticeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    ActiveSession: 'ActiveSession',
    SavedAccountCount: 'SavedAccountCount',
    RedeemStatistic: 'RedeemStatistic',
    SavedAccount: 'SavedAccount',
    Giftcode: 'Giftcode',
    SystemNotice: 'SystemNotice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "activeSession" | "savedAccountCount" | "redeemStatistic" | "savedAccount" | "giftcode" | "systemNotice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ActiveSession: {
        payload: Prisma.$ActiveSessionPayload<ExtArgs>
        fields: Prisma.ActiveSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiveSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiveSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          findFirst: {
            args: Prisma.ActiveSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiveSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          findMany: {
            args: Prisma.ActiveSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          create: {
            args: Prisma.ActiveSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          createMany: {
            args: Prisma.ActiveSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActiveSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          delete: {
            args: Prisma.ActiveSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          update: {
            args: Prisma.ActiveSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          deleteMany: {
            args: Prisma.ActiveSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiveSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActiveSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          upsert: {
            args: Prisma.ActiveSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          aggregate: {
            args: Prisma.ActiveSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActiveSession>
          }
          groupBy: {
            args: Prisma.ActiveSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiveSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActiveSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ActiveSessionCountAggregateOutputType> | number
          }
        }
      }
      SavedAccountCount: {
        payload: Prisma.$SavedAccountCountPayload<ExtArgs>
        fields: Prisma.SavedAccountCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedAccountCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedAccountCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>
          }
          findFirst: {
            args: Prisma.SavedAccountCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedAccountCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>
          }
          findMany: {
            args: Prisma.SavedAccountCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>[]
          }
          create: {
            args: Prisma.SavedAccountCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>
          }
          createMany: {
            args: Prisma.SavedAccountCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedAccountCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>[]
          }
          delete: {
            args: Prisma.SavedAccountCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>
          }
          update: {
            args: Prisma.SavedAccountCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>
          }
          deleteMany: {
            args: Prisma.SavedAccountCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedAccountCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedAccountCountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>[]
          }
          upsert: {
            args: Prisma.SavedAccountCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountCountPayload>
          }
          aggregate: {
            args: Prisma.SavedAccountCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedAccountCount>
          }
          groupBy: {
            args: Prisma.SavedAccountCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedAccountCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedAccountCountCountArgs<ExtArgs>
            result: $Utils.Optional<SavedAccountCountCountAggregateOutputType> | number
          }
        }
      }
      RedeemStatistic: {
        payload: Prisma.$RedeemStatisticPayload<ExtArgs>
        fields: Prisma.RedeemStatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedeemStatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedeemStatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>
          }
          findFirst: {
            args: Prisma.RedeemStatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedeemStatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>
          }
          findMany: {
            args: Prisma.RedeemStatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>[]
          }
          create: {
            args: Prisma.RedeemStatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>
          }
          createMany: {
            args: Prisma.RedeemStatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedeemStatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>[]
          }
          delete: {
            args: Prisma.RedeemStatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>
          }
          update: {
            args: Prisma.RedeemStatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>
          }
          deleteMany: {
            args: Prisma.RedeemStatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedeemStatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RedeemStatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>[]
          }
          upsert: {
            args: Prisma.RedeemStatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemStatisticPayload>
          }
          aggregate: {
            args: Prisma.RedeemStatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedeemStatistic>
          }
          groupBy: {
            args: Prisma.RedeemStatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedeemStatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedeemStatisticCountArgs<ExtArgs>
            result: $Utils.Optional<RedeemStatisticCountAggregateOutputType> | number
          }
        }
      }
      SavedAccount: {
        payload: Prisma.$SavedAccountPayload<ExtArgs>
        fields: Prisma.SavedAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>
          }
          findFirst: {
            args: Prisma.SavedAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>
          }
          findMany: {
            args: Prisma.SavedAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>[]
          }
          create: {
            args: Prisma.SavedAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>
          }
          createMany: {
            args: Prisma.SavedAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>[]
          }
          delete: {
            args: Prisma.SavedAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>
          }
          update: {
            args: Prisma.SavedAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>
          }
          deleteMany: {
            args: Prisma.SavedAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>[]
          }
          upsert: {
            args: Prisma.SavedAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedAccountPayload>
          }
          aggregate: {
            args: Prisma.SavedAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedAccount>
          }
          groupBy: {
            args: Prisma.SavedAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SavedAccountCountAggregateOutputType> | number
          }
        }
      }
      Giftcode: {
        payload: Prisma.$GiftcodePayload<ExtArgs>
        fields: Prisma.GiftcodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftcodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftcodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>
          }
          findFirst: {
            args: Prisma.GiftcodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftcodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>
          }
          findMany: {
            args: Prisma.GiftcodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>[]
          }
          create: {
            args: Prisma.GiftcodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>
          }
          createMany: {
            args: Prisma.GiftcodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GiftcodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>[]
          }
          delete: {
            args: Prisma.GiftcodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>
          }
          update: {
            args: Prisma.GiftcodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>
          }
          deleteMany: {
            args: Prisma.GiftcodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiftcodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GiftcodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>[]
          }
          upsert: {
            args: Prisma.GiftcodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftcodePayload>
          }
          aggregate: {
            args: Prisma.GiftcodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiftcode>
          }
          groupBy: {
            args: Prisma.GiftcodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiftcodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftcodeCountArgs<ExtArgs>
            result: $Utils.Optional<GiftcodeCountAggregateOutputType> | number
          }
        }
      }
      SystemNotice: {
        payload: Prisma.$SystemNoticePayload<ExtArgs>
        fields: Prisma.SystemNoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemNoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemNoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>
          }
          findFirst: {
            args: Prisma.SystemNoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemNoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>
          }
          findMany: {
            args: Prisma.SystemNoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>[]
          }
          create: {
            args: Prisma.SystemNoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>
          }
          createMany: {
            args: Prisma.SystemNoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemNoticeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>[]
          }
          delete: {
            args: Prisma.SystemNoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>
          }
          update: {
            args: Prisma.SystemNoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>
          }
          deleteMany: {
            args: Prisma.SystemNoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemNoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemNoticeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>[]
          }
          upsert: {
            args: Prisma.SystemNoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemNoticePayload>
          }
          aggregate: {
            args: Prisma.SystemNoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemNotice>
          }
          groupBy: {
            args: Prisma.SystemNoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemNoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemNoticeCountArgs<ExtArgs>
            result: $Utils.Optional<SystemNoticeCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    activeSession?: ActiveSessionOmit
    savedAccountCount?: SavedAccountCountOmit
    redeemStatistic?: RedeemStatisticOmit
    savedAccount?: SavedAccountOmit
    giftcode?: GiftcodeOmit
    systemNotice?: SystemNoticeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model ActiveSession
   */

  export type AggregateActiveSession = {
    _count: ActiveSessionCountAggregateOutputType | null
    _min: ActiveSessionMinAggregateOutputType | null
    _max: ActiveSessionMaxAggregateOutputType | null
  }

  export type ActiveSessionMinAggregateOutputType = {
    id: string | null
    ip: string | null
    updatedAt: Date | null
  }

  export type ActiveSessionMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    updatedAt: Date | null
  }

  export type ActiveSessionCountAggregateOutputType = {
    id: number
    ip: number
    updatedAt: number
    _all: number
  }


  export type ActiveSessionMinAggregateInputType = {
    id?: true
    ip?: true
    updatedAt?: true
  }

  export type ActiveSessionMaxAggregateInputType = {
    id?: true
    ip?: true
    updatedAt?: true
  }

  export type ActiveSessionCountAggregateInputType = {
    id?: true
    ip?: true
    updatedAt?: true
    _all?: true
  }

  export type ActiveSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSession to aggregate.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActiveSessions
    **/
    _count?: true | ActiveSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiveSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiveSessionMaxAggregateInputType
  }

  export type GetActiveSessionAggregateType<T extends ActiveSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateActiveSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActiveSession[P]>
      : GetScalarType<T[P], AggregateActiveSession[P]>
  }




  export type ActiveSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSessionWhereInput
    orderBy?: ActiveSessionOrderByWithAggregationInput | ActiveSessionOrderByWithAggregationInput[]
    by: ActiveSessionScalarFieldEnum[] | ActiveSessionScalarFieldEnum
    having?: ActiveSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiveSessionCountAggregateInputType | true
    _min?: ActiveSessionMinAggregateInputType
    _max?: ActiveSessionMaxAggregateInputType
  }

  export type ActiveSessionGroupByOutputType = {
    id: string
    ip: string
    updatedAt: Date
    _count: ActiveSessionCountAggregateOutputType | null
    _min: ActiveSessionMinAggregateOutputType | null
    _max: ActiveSessionMaxAggregateOutputType | null
  }

  type GetActiveSessionGroupByPayload<T extends ActiveSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiveSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiveSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiveSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ActiveSessionGroupByOutputType[P]>
        }
      >
    >


  export type ActiveSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectScalar = {
    id?: boolean
    ip?: boolean
    updatedAt?: boolean
  }

  export type ActiveSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "updatedAt", ExtArgs["result"]["activeSession"]>

  export type $ActiveSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActiveSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      updatedAt: Date
    }, ExtArgs["result"]["activeSession"]>
    composites: {}
  }

  type ActiveSessionGetPayload<S extends boolean | null | undefined | ActiveSessionDefaultArgs> = $Result.GetResult<Prisma.$ActiveSessionPayload, S>

  type ActiveSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActiveSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActiveSessionCountAggregateInputType | true
    }

  export interface ActiveSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActiveSession'], meta: { name: 'ActiveSession' } }
    /**
     * Find zero or one ActiveSession that matches the filter.
     * @param {ActiveSessionFindUniqueArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiveSessionFindUniqueArgs>(args: SelectSubset<T, ActiveSessionFindUniqueArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActiveSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiveSessionFindUniqueOrThrowArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiveSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiveSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindFirstArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiveSessionFindFirstArgs>(args?: SelectSubset<T, ActiveSessionFindFirstArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindFirstOrThrowArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiveSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiveSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActiveSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActiveSessions
     * const activeSessions = await prisma.activeSession.findMany()
     * 
     * // Get first 10 ActiveSessions
     * const activeSessions = await prisma.activeSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActiveSessionFindManyArgs>(args?: SelectSubset<T, ActiveSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActiveSession.
     * @param {ActiveSessionCreateArgs} args - Arguments to create a ActiveSession.
     * @example
     * // Create one ActiveSession
     * const ActiveSession = await prisma.activeSession.create({
     *   data: {
     *     // ... data to create a ActiveSession
     *   }
     * })
     * 
     */
    create<T extends ActiveSessionCreateArgs>(args: SelectSubset<T, ActiveSessionCreateArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActiveSessions.
     * @param {ActiveSessionCreateManyArgs} args - Arguments to create many ActiveSessions.
     * @example
     * // Create many ActiveSessions
     * const activeSession = await prisma.activeSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiveSessionCreateManyArgs>(args?: SelectSubset<T, ActiveSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActiveSessions and returns the data saved in the database.
     * @param {ActiveSessionCreateManyAndReturnArgs} args - Arguments to create many ActiveSessions.
     * @example
     * // Create many ActiveSessions
     * const activeSession = await prisma.activeSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActiveSessions and only return the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActiveSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActiveSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActiveSession.
     * @param {ActiveSessionDeleteArgs} args - Arguments to delete one ActiveSession.
     * @example
     * // Delete one ActiveSession
     * const ActiveSession = await prisma.activeSession.delete({
     *   where: {
     *     // ... filter to delete one ActiveSession
     *   }
     * })
     * 
     */
    delete<T extends ActiveSessionDeleteArgs>(args: SelectSubset<T, ActiveSessionDeleteArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActiveSession.
     * @param {ActiveSessionUpdateArgs} args - Arguments to update one ActiveSession.
     * @example
     * // Update one ActiveSession
     * const activeSession = await prisma.activeSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiveSessionUpdateArgs>(args: SelectSubset<T, ActiveSessionUpdateArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActiveSessions.
     * @param {ActiveSessionDeleteManyArgs} args - Arguments to filter ActiveSessions to delete.
     * @example
     * // Delete a few ActiveSessions
     * const { count } = await prisma.activeSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiveSessionDeleteManyArgs>(args?: SelectSubset<T, ActiveSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActiveSessions
     * const activeSession = await prisma.activeSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiveSessionUpdateManyArgs>(args: SelectSubset<T, ActiveSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveSessions and returns the data updated in the database.
     * @param {ActiveSessionUpdateManyAndReturnArgs} args - Arguments to update many ActiveSessions.
     * @example
     * // Update many ActiveSessions
     * const activeSession = await prisma.activeSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActiveSessions and only return the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActiveSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActiveSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActiveSession.
     * @param {ActiveSessionUpsertArgs} args - Arguments to update or create a ActiveSession.
     * @example
     * // Update or create a ActiveSession
     * const activeSession = await prisma.activeSession.upsert({
     *   create: {
     *     // ... data to create a ActiveSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActiveSession we want to update
     *   }
     * })
     */
    upsert<T extends ActiveSessionUpsertArgs>(args: SelectSubset<T, ActiveSessionUpsertArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionCountArgs} args - Arguments to filter ActiveSessions to count.
     * @example
     * // Count the number of ActiveSessions
     * const count = await prisma.activeSession.count({
     *   where: {
     *     // ... the filter for the ActiveSessions we want to count
     *   }
     * })
    **/
    count<T extends ActiveSessionCountArgs>(
      args?: Subset<T, ActiveSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiveSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActiveSessionAggregateArgs>(args: Subset<T, ActiveSessionAggregateArgs>): Prisma.PrismaPromise<GetActiveSessionAggregateType<T>>

    /**
     * Group by ActiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionGroupByArgs} args - Group by arguments.
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
      T extends ActiveSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiveSessionGroupByArgs['orderBy'] }
        : { orderBy?: ActiveSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActiveSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiveSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActiveSession model
   */
  readonly fields: ActiveSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActiveSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiveSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ActiveSession model
   */
  interface ActiveSessionFieldRefs {
    readonly id: FieldRef<"ActiveSession", 'String'>
    readonly ip: FieldRef<"ActiveSession", 'String'>
    readonly updatedAt: FieldRef<"ActiveSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActiveSession findUnique
   */
  export type ActiveSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession findUniqueOrThrow
   */
  export type ActiveSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession findFirst
   */
  export type ActiveSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSessions.
     */
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession findFirstOrThrow
   */
  export type ActiveSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSessions.
     */
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession findMany
   */
  export type ActiveSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Filter, which ActiveSessions to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSessions.
     */
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession create
   */
  export type ActiveSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a ActiveSession.
     */
    data: XOR<ActiveSessionCreateInput, ActiveSessionUncheckedCreateInput>
  }

  /**
   * ActiveSession createMany
   */
  export type ActiveSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActiveSessions.
     */
    data: ActiveSessionCreateManyInput | ActiveSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActiveSession createManyAndReturn
   */
  export type ActiveSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ActiveSessions.
     */
    data: ActiveSessionCreateManyInput | ActiveSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActiveSession update
   */
  export type ActiveSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a ActiveSession.
     */
    data: XOR<ActiveSessionUpdateInput, ActiveSessionUncheckedUpdateInput>
    /**
     * Choose, which ActiveSession to update.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession updateMany
   */
  export type ActiveSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActiveSessions.
     */
    data: XOR<ActiveSessionUpdateManyMutationInput, ActiveSessionUncheckedUpdateManyInput>
    /**
     * Filter which ActiveSessions to update
     */
    where?: ActiveSessionWhereInput
    /**
     * Limit how many ActiveSessions to update.
     */
    limit?: number
  }

  /**
   * ActiveSession updateManyAndReturn
   */
  export type ActiveSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * The data used to update ActiveSessions.
     */
    data: XOR<ActiveSessionUpdateManyMutationInput, ActiveSessionUncheckedUpdateManyInput>
    /**
     * Filter which ActiveSessions to update
     */
    where?: ActiveSessionWhereInput
    /**
     * Limit how many ActiveSessions to update.
     */
    limit?: number
  }

  /**
   * ActiveSession upsert
   */
  export type ActiveSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the ActiveSession to update in case it exists.
     */
    where: ActiveSessionWhereUniqueInput
    /**
     * In case the ActiveSession found by the `where` argument doesn't exist, create a new ActiveSession with this data.
     */
    create: XOR<ActiveSessionCreateInput, ActiveSessionUncheckedCreateInput>
    /**
     * In case the ActiveSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiveSessionUpdateInput, ActiveSessionUncheckedUpdateInput>
  }

  /**
   * ActiveSession delete
   */
  export type ActiveSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
    /**
     * Filter which ActiveSession to delete.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession deleteMany
   */
  export type ActiveSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSessions to delete
     */
    where?: ActiveSessionWhereInput
    /**
     * Limit how many ActiveSessions to delete.
     */
    limit?: number
  }

  /**
   * ActiveSession without action
   */
  export type ActiveSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSession
     */
    omit?: ActiveSessionOmit<ExtArgs> | null
  }


  /**
   * Model SavedAccountCount
   */

  export type AggregateSavedAccountCount = {
    _count: SavedAccountCountCountAggregateOutputType | null
    _avg: SavedAccountCountAvgAggregateOutputType | null
    _sum: SavedAccountCountSumAggregateOutputType | null
    _min: SavedAccountCountMinAggregateOutputType | null
    _max: SavedAccountCountMaxAggregateOutputType | null
  }

  export type SavedAccountCountAvgAggregateOutputType = {
    count: number | null
  }

  export type SavedAccountCountSumAggregateOutputType = {
    count: number | null
  }

  export type SavedAccountCountMinAggregateOutputType = {
    id: string | null
    ip: string | null
    count: number | null
    updatedAt: Date | null
  }

  export type SavedAccountCountMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    count: number | null
    updatedAt: Date | null
  }

  export type SavedAccountCountCountAggregateOutputType = {
    id: number
    ip: number
    count: number
    updatedAt: number
    _all: number
  }


  export type SavedAccountCountAvgAggregateInputType = {
    count?: true
  }

  export type SavedAccountCountSumAggregateInputType = {
    count?: true
  }

  export type SavedAccountCountMinAggregateInputType = {
    id?: true
    ip?: true
    count?: true
    updatedAt?: true
  }

  export type SavedAccountCountMaxAggregateInputType = {
    id?: true
    ip?: true
    count?: true
    updatedAt?: true
  }

  export type SavedAccountCountCountAggregateInputType = {
    id?: true
    ip?: true
    count?: true
    updatedAt?: true
    _all?: true
  }

  export type SavedAccountCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedAccountCount to aggregate.
     */
    where?: SavedAccountCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccountCounts to fetch.
     */
    orderBy?: SavedAccountCountOrderByWithRelationInput | SavedAccountCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedAccountCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccountCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccountCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedAccountCounts
    **/
    _count?: true | SavedAccountCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedAccountCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedAccountCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedAccountCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedAccountCountMaxAggregateInputType
  }

  export type GetSavedAccountCountAggregateType<T extends SavedAccountCountAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedAccountCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedAccountCount[P]>
      : GetScalarType<T[P], AggregateSavedAccountCount[P]>
  }




  export type SavedAccountCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedAccountCountWhereInput
    orderBy?: SavedAccountCountOrderByWithAggregationInput | SavedAccountCountOrderByWithAggregationInput[]
    by: SavedAccountCountScalarFieldEnum[] | SavedAccountCountScalarFieldEnum
    having?: SavedAccountCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedAccountCountCountAggregateInputType | true
    _avg?: SavedAccountCountAvgAggregateInputType
    _sum?: SavedAccountCountSumAggregateInputType
    _min?: SavedAccountCountMinAggregateInputType
    _max?: SavedAccountCountMaxAggregateInputType
  }

  export type SavedAccountCountGroupByOutputType = {
    id: string
    ip: string
    count: number
    updatedAt: Date
    _count: SavedAccountCountCountAggregateOutputType | null
    _avg: SavedAccountCountAvgAggregateOutputType | null
    _sum: SavedAccountCountSumAggregateOutputType | null
    _min: SavedAccountCountMinAggregateOutputType | null
    _max: SavedAccountCountMaxAggregateOutputType | null
  }

  type GetSavedAccountCountGroupByPayload<T extends SavedAccountCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedAccountCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedAccountCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedAccountCountGroupByOutputType[P]>
            : GetScalarType<T[P], SavedAccountCountGroupByOutputType[P]>
        }
      >
    >


  export type SavedAccountCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    count?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedAccountCount"]>

  export type SavedAccountCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    count?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedAccountCount"]>

  export type SavedAccountCountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    count?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedAccountCount"]>

  export type SavedAccountCountSelectScalar = {
    id?: boolean
    ip?: boolean
    count?: boolean
    updatedAt?: boolean
  }

  export type SavedAccountCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "count" | "updatedAt", ExtArgs["result"]["savedAccountCount"]>

  export type $SavedAccountCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedAccountCount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      count: number
      updatedAt: Date
    }, ExtArgs["result"]["savedAccountCount"]>
    composites: {}
  }

  type SavedAccountCountGetPayload<S extends boolean | null | undefined | SavedAccountCountDefaultArgs> = $Result.GetResult<Prisma.$SavedAccountCountPayload, S>

  type SavedAccountCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedAccountCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedAccountCountCountAggregateInputType | true
    }

  export interface SavedAccountCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedAccountCount'], meta: { name: 'SavedAccountCount' } }
    /**
     * Find zero or one SavedAccountCount that matches the filter.
     * @param {SavedAccountCountFindUniqueArgs} args - Arguments to find a SavedAccountCount
     * @example
     * // Get one SavedAccountCount
     * const savedAccountCount = await prisma.savedAccountCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedAccountCountFindUniqueArgs>(args: SelectSubset<T, SavedAccountCountFindUniqueArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedAccountCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedAccountCountFindUniqueOrThrowArgs} args - Arguments to find a SavedAccountCount
     * @example
     * // Get one SavedAccountCount
     * const savedAccountCount = await prisma.savedAccountCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedAccountCountFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedAccountCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedAccountCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountFindFirstArgs} args - Arguments to find a SavedAccountCount
     * @example
     * // Get one SavedAccountCount
     * const savedAccountCount = await prisma.savedAccountCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedAccountCountFindFirstArgs>(args?: SelectSubset<T, SavedAccountCountFindFirstArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedAccountCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountFindFirstOrThrowArgs} args - Arguments to find a SavedAccountCount
     * @example
     * // Get one SavedAccountCount
     * const savedAccountCount = await prisma.savedAccountCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedAccountCountFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedAccountCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedAccountCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedAccountCounts
     * const savedAccountCounts = await prisma.savedAccountCount.findMany()
     * 
     * // Get first 10 SavedAccountCounts
     * const savedAccountCounts = await prisma.savedAccountCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedAccountCountWithIdOnly = await prisma.savedAccountCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedAccountCountFindManyArgs>(args?: SelectSubset<T, SavedAccountCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedAccountCount.
     * @param {SavedAccountCountCreateArgs} args - Arguments to create a SavedAccountCount.
     * @example
     * // Create one SavedAccountCount
     * const SavedAccountCount = await prisma.savedAccountCount.create({
     *   data: {
     *     // ... data to create a SavedAccountCount
     *   }
     * })
     * 
     */
    create<T extends SavedAccountCountCreateArgs>(args: SelectSubset<T, SavedAccountCountCreateArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedAccountCounts.
     * @param {SavedAccountCountCreateManyArgs} args - Arguments to create many SavedAccountCounts.
     * @example
     * // Create many SavedAccountCounts
     * const savedAccountCount = await prisma.savedAccountCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedAccountCountCreateManyArgs>(args?: SelectSubset<T, SavedAccountCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedAccountCounts and returns the data saved in the database.
     * @param {SavedAccountCountCreateManyAndReturnArgs} args - Arguments to create many SavedAccountCounts.
     * @example
     * // Create many SavedAccountCounts
     * const savedAccountCount = await prisma.savedAccountCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedAccountCounts and only return the `id`
     * const savedAccountCountWithIdOnly = await prisma.savedAccountCount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedAccountCountCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedAccountCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedAccountCount.
     * @param {SavedAccountCountDeleteArgs} args - Arguments to delete one SavedAccountCount.
     * @example
     * // Delete one SavedAccountCount
     * const SavedAccountCount = await prisma.savedAccountCount.delete({
     *   where: {
     *     // ... filter to delete one SavedAccountCount
     *   }
     * })
     * 
     */
    delete<T extends SavedAccountCountDeleteArgs>(args: SelectSubset<T, SavedAccountCountDeleteArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedAccountCount.
     * @param {SavedAccountCountUpdateArgs} args - Arguments to update one SavedAccountCount.
     * @example
     * // Update one SavedAccountCount
     * const savedAccountCount = await prisma.savedAccountCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedAccountCountUpdateArgs>(args: SelectSubset<T, SavedAccountCountUpdateArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedAccountCounts.
     * @param {SavedAccountCountDeleteManyArgs} args - Arguments to filter SavedAccountCounts to delete.
     * @example
     * // Delete a few SavedAccountCounts
     * const { count } = await prisma.savedAccountCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedAccountCountDeleteManyArgs>(args?: SelectSubset<T, SavedAccountCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedAccountCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedAccountCounts
     * const savedAccountCount = await prisma.savedAccountCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedAccountCountUpdateManyArgs>(args: SelectSubset<T, SavedAccountCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedAccountCounts and returns the data updated in the database.
     * @param {SavedAccountCountUpdateManyAndReturnArgs} args - Arguments to update many SavedAccountCounts.
     * @example
     * // Update many SavedAccountCounts
     * const savedAccountCount = await prisma.savedAccountCount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedAccountCounts and only return the `id`
     * const savedAccountCountWithIdOnly = await prisma.savedAccountCount.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedAccountCountUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedAccountCountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedAccountCount.
     * @param {SavedAccountCountUpsertArgs} args - Arguments to update or create a SavedAccountCount.
     * @example
     * // Update or create a SavedAccountCount
     * const savedAccountCount = await prisma.savedAccountCount.upsert({
     *   create: {
     *     // ... data to create a SavedAccountCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedAccountCount we want to update
     *   }
     * })
     */
    upsert<T extends SavedAccountCountUpsertArgs>(args: SelectSubset<T, SavedAccountCountUpsertArgs<ExtArgs>>): Prisma__SavedAccountCountClient<$Result.GetResult<Prisma.$SavedAccountCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedAccountCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountCountArgs} args - Arguments to filter SavedAccountCounts to count.
     * @example
     * // Count the number of SavedAccountCounts
     * const count = await prisma.savedAccountCount.count({
     *   where: {
     *     // ... the filter for the SavedAccountCounts we want to count
     *   }
     * })
    **/
    count<T extends SavedAccountCountCountArgs>(
      args?: Subset<T, SavedAccountCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedAccountCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedAccountCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedAccountCountAggregateArgs>(args: Subset<T, SavedAccountCountAggregateArgs>): Prisma.PrismaPromise<GetSavedAccountCountAggregateType<T>>

    /**
     * Group by SavedAccountCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountGroupByArgs} args - Group by arguments.
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
      T extends SavedAccountCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedAccountCountGroupByArgs['orderBy'] }
        : { orderBy?: SavedAccountCountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedAccountCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedAccountCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedAccountCount model
   */
  readonly fields: SavedAccountCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedAccountCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedAccountCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SavedAccountCount model
   */
  interface SavedAccountCountFieldRefs {
    readonly id: FieldRef<"SavedAccountCount", 'String'>
    readonly ip: FieldRef<"SavedAccountCount", 'String'>
    readonly count: FieldRef<"SavedAccountCount", 'Int'>
    readonly updatedAt: FieldRef<"SavedAccountCount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedAccountCount findUnique
   */
  export type SavedAccountCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccountCount to fetch.
     */
    where: SavedAccountCountWhereUniqueInput
  }

  /**
   * SavedAccountCount findUniqueOrThrow
   */
  export type SavedAccountCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccountCount to fetch.
     */
    where: SavedAccountCountWhereUniqueInput
  }

  /**
   * SavedAccountCount findFirst
   */
  export type SavedAccountCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccountCount to fetch.
     */
    where?: SavedAccountCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccountCounts to fetch.
     */
    orderBy?: SavedAccountCountOrderByWithRelationInput | SavedAccountCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedAccountCounts.
     */
    cursor?: SavedAccountCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccountCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccountCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedAccountCounts.
     */
    distinct?: SavedAccountCountScalarFieldEnum | SavedAccountCountScalarFieldEnum[]
  }

  /**
   * SavedAccountCount findFirstOrThrow
   */
  export type SavedAccountCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccountCount to fetch.
     */
    where?: SavedAccountCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccountCounts to fetch.
     */
    orderBy?: SavedAccountCountOrderByWithRelationInput | SavedAccountCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedAccountCounts.
     */
    cursor?: SavedAccountCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccountCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccountCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedAccountCounts.
     */
    distinct?: SavedAccountCountScalarFieldEnum | SavedAccountCountScalarFieldEnum[]
  }

  /**
   * SavedAccountCount findMany
   */
  export type SavedAccountCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccountCounts to fetch.
     */
    where?: SavedAccountCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccountCounts to fetch.
     */
    orderBy?: SavedAccountCountOrderByWithRelationInput | SavedAccountCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedAccountCounts.
     */
    cursor?: SavedAccountCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccountCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccountCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedAccountCounts.
     */
    distinct?: SavedAccountCountScalarFieldEnum | SavedAccountCountScalarFieldEnum[]
  }

  /**
   * SavedAccountCount create
   */
  export type SavedAccountCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * The data needed to create a SavedAccountCount.
     */
    data: XOR<SavedAccountCountCreateInput, SavedAccountCountUncheckedCreateInput>
  }

  /**
   * SavedAccountCount createMany
   */
  export type SavedAccountCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedAccountCounts.
     */
    data: SavedAccountCountCreateManyInput | SavedAccountCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedAccountCount createManyAndReturn
   */
  export type SavedAccountCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * The data used to create many SavedAccountCounts.
     */
    data: SavedAccountCountCreateManyInput | SavedAccountCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedAccountCount update
   */
  export type SavedAccountCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * The data needed to update a SavedAccountCount.
     */
    data: XOR<SavedAccountCountUpdateInput, SavedAccountCountUncheckedUpdateInput>
    /**
     * Choose, which SavedAccountCount to update.
     */
    where: SavedAccountCountWhereUniqueInput
  }

  /**
   * SavedAccountCount updateMany
   */
  export type SavedAccountCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedAccountCounts.
     */
    data: XOR<SavedAccountCountUpdateManyMutationInput, SavedAccountCountUncheckedUpdateManyInput>
    /**
     * Filter which SavedAccountCounts to update
     */
    where?: SavedAccountCountWhereInput
    /**
     * Limit how many SavedAccountCounts to update.
     */
    limit?: number
  }

  /**
   * SavedAccountCount updateManyAndReturn
   */
  export type SavedAccountCountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * The data used to update SavedAccountCounts.
     */
    data: XOR<SavedAccountCountUpdateManyMutationInput, SavedAccountCountUncheckedUpdateManyInput>
    /**
     * Filter which SavedAccountCounts to update
     */
    where?: SavedAccountCountWhereInput
    /**
     * Limit how many SavedAccountCounts to update.
     */
    limit?: number
  }

  /**
   * SavedAccountCount upsert
   */
  export type SavedAccountCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * The filter to search for the SavedAccountCount to update in case it exists.
     */
    where: SavedAccountCountWhereUniqueInput
    /**
     * In case the SavedAccountCount found by the `where` argument doesn't exist, create a new SavedAccountCount with this data.
     */
    create: XOR<SavedAccountCountCreateInput, SavedAccountCountUncheckedCreateInput>
    /**
     * In case the SavedAccountCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedAccountCountUpdateInput, SavedAccountCountUncheckedUpdateInput>
  }

  /**
   * SavedAccountCount delete
   */
  export type SavedAccountCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
    /**
     * Filter which SavedAccountCount to delete.
     */
    where: SavedAccountCountWhereUniqueInput
  }

  /**
   * SavedAccountCount deleteMany
   */
  export type SavedAccountCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedAccountCounts to delete
     */
    where?: SavedAccountCountWhereInput
    /**
     * Limit how many SavedAccountCounts to delete.
     */
    limit?: number
  }

  /**
   * SavedAccountCount without action
   */
  export type SavedAccountCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccountCount
     */
    select?: SavedAccountCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccountCount
     */
    omit?: SavedAccountCountOmit<ExtArgs> | null
  }


  /**
   * Model RedeemStatistic
   */

  export type AggregateRedeemStatistic = {
    _count: RedeemStatisticCountAggregateOutputType | null
    _avg: RedeemStatisticAvgAggregateOutputType | null
    _sum: RedeemStatisticSumAggregateOutputType | null
    _min: RedeemStatisticMinAggregateOutputType | null
    _max: RedeemStatisticMaxAggregateOutputType | null
  }

  export type RedeemStatisticAvgAggregateOutputType = {
    count: number | null
  }

  export type RedeemStatisticSumAggregateOutputType = {
    count: number | null
  }

  export type RedeemStatisticMinAggregateOutputType = {
    id: string | null
    count: number | null
  }

  export type RedeemStatisticMaxAggregateOutputType = {
    id: string | null
    count: number | null
  }

  export type RedeemStatisticCountAggregateOutputType = {
    id: number
    count: number
    _all: number
  }


  export type RedeemStatisticAvgAggregateInputType = {
    count?: true
  }

  export type RedeemStatisticSumAggregateInputType = {
    count?: true
  }

  export type RedeemStatisticMinAggregateInputType = {
    id?: true
    count?: true
  }

  export type RedeemStatisticMaxAggregateInputType = {
    id?: true
    count?: true
  }

  export type RedeemStatisticCountAggregateInputType = {
    id?: true
    count?: true
    _all?: true
  }

  export type RedeemStatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedeemStatistic to aggregate.
     */
    where?: RedeemStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemStatistics to fetch.
     */
    orderBy?: RedeemStatisticOrderByWithRelationInput | RedeemStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedeemStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RedeemStatistics
    **/
    _count?: true | RedeemStatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedeemStatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedeemStatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedeemStatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedeemStatisticMaxAggregateInputType
  }

  export type GetRedeemStatisticAggregateType<T extends RedeemStatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateRedeemStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedeemStatistic[P]>
      : GetScalarType<T[P], AggregateRedeemStatistic[P]>
  }




  export type RedeemStatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedeemStatisticWhereInput
    orderBy?: RedeemStatisticOrderByWithAggregationInput | RedeemStatisticOrderByWithAggregationInput[]
    by: RedeemStatisticScalarFieldEnum[] | RedeemStatisticScalarFieldEnum
    having?: RedeemStatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedeemStatisticCountAggregateInputType | true
    _avg?: RedeemStatisticAvgAggregateInputType
    _sum?: RedeemStatisticSumAggregateInputType
    _min?: RedeemStatisticMinAggregateInputType
    _max?: RedeemStatisticMaxAggregateInputType
  }

  export type RedeemStatisticGroupByOutputType = {
    id: string
    count: number
    _count: RedeemStatisticCountAggregateOutputType | null
    _avg: RedeemStatisticAvgAggregateOutputType | null
    _sum: RedeemStatisticSumAggregateOutputType | null
    _min: RedeemStatisticMinAggregateOutputType | null
    _max: RedeemStatisticMaxAggregateOutputType | null
  }

  type GetRedeemStatisticGroupByPayload<T extends RedeemStatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedeemStatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedeemStatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedeemStatisticGroupByOutputType[P]>
            : GetScalarType<T[P], RedeemStatisticGroupByOutputType[P]>
        }
      >
    >


  export type RedeemStatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
  }, ExtArgs["result"]["redeemStatistic"]>

  export type RedeemStatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
  }, ExtArgs["result"]["redeemStatistic"]>

  export type RedeemStatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
  }, ExtArgs["result"]["redeemStatistic"]>

  export type RedeemStatisticSelectScalar = {
    id?: boolean
    count?: boolean
  }

  export type RedeemStatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "count", ExtArgs["result"]["redeemStatistic"]>

  export type $RedeemStatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RedeemStatistic"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      count: number
    }, ExtArgs["result"]["redeemStatistic"]>
    composites: {}
  }

  type RedeemStatisticGetPayload<S extends boolean | null | undefined | RedeemStatisticDefaultArgs> = $Result.GetResult<Prisma.$RedeemStatisticPayload, S>

  type RedeemStatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RedeemStatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RedeemStatisticCountAggregateInputType | true
    }

  export interface RedeemStatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RedeemStatistic'], meta: { name: 'RedeemStatistic' } }
    /**
     * Find zero or one RedeemStatistic that matches the filter.
     * @param {RedeemStatisticFindUniqueArgs} args - Arguments to find a RedeemStatistic
     * @example
     * // Get one RedeemStatistic
     * const redeemStatistic = await prisma.redeemStatistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedeemStatisticFindUniqueArgs>(args: SelectSubset<T, RedeemStatisticFindUniqueArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RedeemStatistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RedeemStatisticFindUniqueOrThrowArgs} args - Arguments to find a RedeemStatistic
     * @example
     * // Get one RedeemStatistic
     * const redeemStatistic = await prisma.redeemStatistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedeemStatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, RedeemStatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedeemStatistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemStatisticFindFirstArgs} args - Arguments to find a RedeemStatistic
     * @example
     * // Get one RedeemStatistic
     * const redeemStatistic = await prisma.redeemStatistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedeemStatisticFindFirstArgs>(args?: SelectSubset<T, RedeemStatisticFindFirstArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedeemStatistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemStatisticFindFirstOrThrowArgs} args - Arguments to find a RedeemStatistic
     * @example
     * // Get one RedeemStatistic
     * const redeemStatistic = await prisma.redeemStatistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedeemStatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, RedeemStatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RedeemStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemStatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RedeemStatistics
     * const redeemStatistics = await prisma.redeemStatistic.findMany()
     * 
     * // Get first 10 RedeemStatistics
     * const redeemStatistics = await prisma.redeemStatistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redeemStatisticWithIdOnly = await prisma.redeemStatistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RedeemStatisticFindManyArgs>(args?: SelectSubset<T, RedeemStatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RedeemStatistic.
     * @param {RedeemStatisticCreateArgs} args - Arguments to create a RedeemStatistic.
     * @example
     * // Create one RedeemStatistic
     * const RedeemStatistic = await prisma.redeemStatistic.create({
     *   data: {
     *     // ... data to create a RedeemStatistic
     *   }
     * })
     * 
     */
    create<T extends RedeemStatisticCreateArgs>(args: SelectSubset<T, RedeemStatisticCreateArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RedeemStatistics.
     * @param {RedeemStatisticCreateManyArgs} args - Arguments to create many RedeemStatistics.
     * @example
     * // Create many RedeemStatistics
     * const redeemStatistic = await prisma.redeemStatistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedeemStatisticCreateManyArgs>(args?: SelectSubset<T, RedeemStatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RedeemStatistics and returns the data saved in the database.
     * @param {RedeemStatisticCreateManyAndReturnArgs} args - Arguments to create many RedeemStatistics.
     * @example
     * // Create many RedeemStatistics
     * const redeemStatistic = await prisma.redeemStatistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RedeemStatistics and only return the `id`
     * const redeemStatisticWithIdOnly = await prisma.redeemStatistic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedeemStatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, RedeemStatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RedeemStatistic.
     * @param {RedeemStatisticDeleteArgs} args - Arguments to delete one RedeemStatistic.
     * @example
     * // Delete one RedeemStatistic
     * const RedeemStatistic = await prisma.redeemStatistic.delete({
     *   where: {
     *     // ... filter to delete one RedeemStatistic
     *   }
     * })
     * 
     */
    delete<T extends RedeemStatisticDeleteArgs>(args: SelectSubset<T, RedeemStatisticDeleteArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RedeemStatistic.
     * @param {RedeemStatisticUpdateArgs} args - Arguments to update one RedeemStatistic.
     * @example
     * // Update one RedeemStatistic
     * const redeemStatistic = await prisma.redeemStatistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedeemStatisticUpdateArgs>(args: SelectSubset<T, RedeemStatisticUpdateArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RedeemStatistics.
     * @param {RedeemStatisticDeleteManyArgs} args - Arguments to filter RedeemStatistics to delete.
     * @example
     * // Delete a few RedeemStatistics
     * const { count } = await prisma.redeemStatistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedeemStatisticDeleteManyArgs>(args?: SelectSubset<T, RedeemStatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedeemStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemStatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RedeemStatistics
     * const redeemStatistic = await prisma.redeemStatistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedeemStatisticUpdateManyArgs>(args: SelectSubset<T, RedeemStatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedeemStatistics and returns the data updated in the database.
     * @param {RedeemStatisticUpdateManyAndReturnArgs} args - Arguments to update many RedeemStatistics.
     * @example
     * // Update many RedeemStatistics
     * const redeemStatistic = await prisma.redeemStatistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RedeemStatistics and only return the `id`
     * const redeemStatisticWithIdOnly = await prisma.redeemStatistic.updateManyAndReturn({
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
    updateManyAndReturn<T extends RedeemStatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, RedeemStatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RedeemStatistic.
     * @param {RedeemStatisticUpsertArgs} args - Arguments to update or create a RedeemStatistic.
     * @example
     * // Update or create a RedeemStatistic
     * const redeemStatistic = await prisma.redeemStatistic.upsert({
     *   create: {
     *     // ... data to create a RedeemStatistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RedeemStatistic we want to update
     *   }
     * })
     */
    upsert<T extends RedeemStatisticUpsertArgs>(args: SelectSubset<T, RedeemStatisticUpsertArgs<ExtArgs>>): Prisma__RedeemStatisticClient<$Result.GetResult<Prisma.$RedeemStatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RedeemStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemStatisticCountArgs} args - Arguments to filter RedeemStatistics to count.
     * @example
     * // Count the number of RedeemStatistics
     * const count = await prisma.redeemStatistic.count({
     *   where: {
     *     // ... the filter for the RedeemStatistics we want to count
     *   }
     * })
    **/
    count<T extends RedeemStatisticCountArgs>(
      args?: Subset<T, RedeemStatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedeemStatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RedeemStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemStatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RedeemStatisticAggregateArgs>(args: Subset<T, RedeemStatisticAggregateArgs>): Prisma.PrismaPromise<GetRedeemStatisticAggregateType<T>>

    /**
     * Group by RedeemStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemStatisticGroupByArgs} args - Group by arguments.
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
      T extends RedeemStatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedeemStatisticGroupByArgs['orderBy'] }
        : { orderBy?: RedeemStatisticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RedeemStatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedeemStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RedeemStatistic model
   */
  readonly fields: RedeemStatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RedeemStatistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedeemStatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RedeemStatistic model
   */
  interface RedeemStatisticFieldRefs {
    readonly id: FieldRef<"RedeemStatistic", 'String'>
    readonly count: FieldRef<"RedeemStatistic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RedeemStatistic findUnique
   */
  export type RedeemStatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * Filter, which RedeemStatistic to fetch.
     */
    where: RedeemStatisticWhereUniqueInput
  }

  /**
   * RedeemStatistic findUniqueOrThrow
   */
  export type RedeemStatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * Filter, which RedeemStatistic to fetch.
     */
    where: RedeemStatisticWhereUniqueInput
  }

  /**
   * RedeemStatistic findFirst
   */
  export type RedeemStatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * Filter, which RedeemStatistic to fetch.
     */
    where?: RedeemStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemStatistics to fetch.
     */
    orderBy?: RedeemStatisticOrderByWithRelationInput | RedeemStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedeemStatistics.
     */
    cursor?: RedeemStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedeemStatistics.
     */
    distinct?: RedeemStatisticScalarFieldEnum | RedeemStatisticScalarFieldEnum[]
  }

  /**
   * RedeemStatistic findFirstOrThrow
   */
  export type RedeemStatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * Filter, which RedeemStatistic to fetch.
     */
    where?: RedeemStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemStatistics to fetch.
     */
    orderBy?: RedeemStatisticOrderByWithRelationInput | RedeemStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedeemStatistics.
     */
    cursor?: RedeemStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedeemStatistics.
     */
    distinct?: RedeemStatisticScalarFieldEnum | RedeemStatisticScalarFieldEnum[]
  }

  /**
   * RedeemStatistic findMany
   */
  export type RedeemStatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * Filter, which RedeemStatistics to fetch.
     */
    where?: RedeemStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemStatistics to fetch.
     */
    orderBy?: RedeemStatisticOrderByWithRelationInput | RedeemStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RedeemStatistics.
     */
    cursor?: RedeemStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedeemStatistics.
     */
    distinct?: RedeemStatisticScalarFieldEnum | RedeemStatisticScalarFieldEnum[]
  }

  /**
   * RedeemStatistic create
   */
  export type RedeemStatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * The data needed to create a RedeemStatistic.
     */
    data: XOR<RedeemStatisticCreateInput, RedeemStatisticUncheckedCreateInput>
  }

  /**
   * RedeemStatistic createMany
   */
  export type RedeemStatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RedeemStatistics.
     */
    data: RedeemStatisticCreateManyInput | RedeemStatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedeemStatistic createManyAndReturn
   */
  export type RedeemStatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * The data used to create many RedeemStatistics.
     */
    data: RedeemStatisticCreateManyInput | RedeemStatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedeemStatistic update
   */
  export type RedeemStatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * The data needed to update a RedeemStatistic.
     */
    data: XOR<RedeemStatisticUpdateInput, RedeemStatisticUncheckedUpdateInput>
    /**
     * Choose, which RedeemStatistic to update.
     */
    where: RedeemStatisticWhereUniqueInput
  }

  /**
   * RedeemStatistic updateMany
   */
  export type RedeemStatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RedeemStatistics.
     */
    data: XOR<RedeemStatisticUpdateManyMutationInput, RedeemStatisticUncheckedUpdateManyInput>
    /**
     * Filter which RedeemStatistics to update
     */
    where?: RedeemStatisticWhereInput
    /**
     * Limit how many RedeemStatistics to update.
     */
    limit?: number
  }

  /**
   * RedeemStatistic updateManyAndReturn
   */
  export type RedeemStatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * The data used to update RedeemStatistics.
     */
    data: XOR<RedeemStatisticUpdateManyMutationInput, RedeemStatisticUncheckedUpdateManyInput>
    /**
     * Filter which RedeemStatistics to update
     */
    where?: RedeemStatisticWhereInput
    /**
     * Limit how many RedeemStatistics to update.
     */
    limit?: number
  }

  /**
   * RedeemStatistic upsert
   */
  export type RedeemStatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * The filter to search for the RedeemStatistic to update in case it exists.
     */
    where: RedeemStatisticWhereUniqueInput
    /**
     * In case the RedeemStatistic found by the `where` argument doesn't exist, create a new RedeemStatistic with this data.
     */
    create: XOR<RedeemStatisticCreateInput, RedeemStatisticUncheckedCreateInput>
    /**
     * In case the RedeemStatistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedeemStatisticUpdateInput, RedeemStatisticUncheckedUpdateInput>
  }

  /**
   * RedeemStatistic delete
   */
  export type RedeemStatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
    /**
     * Filter which RedeemStatistic to delete.
     */
    where: RedeemStatisticWhereUniqueInput
  }

  /**
   * RedeemStatistic deleteMany
   */
  export type RedeemStatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedeemStatistics to delete
     */
    where?: RedeemStatisticWhereInput
    /**
     * Limit how many RedeemStatistics to delete.
     */
    limit?: number
  }

  /**
   * RedeemStatistic without action
   */
  export type RedeemStatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemStatistic
     */
    select?: RedeemStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemStatistic
     */
    omit?: RedeemStatisticOmit<ExtArgs> | null
  }


  /**
   * Model SavedAccount
   */

  export type AggregateSavedAccount = {
    _count: SavedAccountCountAggregateOutputType | null
    _min: SavedAccountMinAggregateOutputType | null
    _max: SavedAccountMaxAggregateOutputType | null
  }

  export type SavedAccountMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    serverID: string | null
    roleName: string | null
    level: string | null
    createdAt: Date | null
  }

  export type SavedAccountMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    serverID: string | null
    roleName: string | null
    level: string | null
    createdAt: Date | null
  }

  export type SavedAccountCountAggregateOutputType = {
    id: number
    roleId: number
    serverID: number
    roleName: number
    level: number
    createdAt: number
    _all: number
  }


  export type SavedAccountMinAggregateInputType = {
    id?: true
    roleId?: true
    serverID?: true
    roleName?: true
    level?: true
    createdAt?: true
  }

  export type SavedAccountMaxAggregateInputType = {
    id?: true
    roleId?: true
    serverID?: true
    roleName?: true
    level?: true
    createdAt?: true
  }

  export type SavedAccountCountAggregateInputType = {
    id?: true
    roleId?: true
    serverID?: true
    roleName?: true
    level?: true
    createdAt?: true
    _all?: true
  }

  export type SavedAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedAccount to aggregate.
     */
    where?: SavedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccounts to fetch.
     */
    orderBy?: SavedAccountOrderByWithRelationInput | SavedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedAccounts
    **/
    _count?: true | SavedAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedAccountMaxAggregateInputType
  }

  export type GetSavedAccountAggregateType<T extends SavedAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedAccount[P]>
      : GetScalarType<T[P], AggregateSavedAccount[P]>
  }




  export type SavedAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedAccountWhereInput
    orderBy?: SavedAccountOrderByWithAggregationInput | SavedAccountOrderByWithAggregationInput[]
    by: SavedAccountScalarFieldEnum[] | SavedAccountScalarFieldEnum
    having?: SavedAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedAccountCountAggregateInputType | true
    _min?: SavedAccountMinAggregateInputType
    _max?: SavedAccountMaxAggregateInputType
  }

  export type SavedAccountGroupByOutputType = {
    id: string
    roleId: string
    serverID: string
    roleName: string
    level: string
    createdAt: Date
    _count: SavedAccountCountAggregateOutputType | null
    _min: SavedAccountMinAggregateOutputType | null
    _max: SavedAccountMaxAggregateOutputType | null
  }

  type GetSavedAccountGroupByPayload<T extends SavedAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SavedAccountGroupByOutputType[P]>
        }
      >
    >


  export type SavedAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    serverID?: boolean
    roleName?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedAccount"]>

  export type SavedAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    serverID?: boolean
    roleName?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedAccount"]>

  export type SavedAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    serverID?: boolean
    roleName?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedAccount"]>

  export type SavedAccountSelectScalar = {
    id?: boolean
    roleId?: boolean
    serverID?: boolean
    roleName?: boolean
    level?: boolean
    createdAt?: boolean
  }

  export type SavedAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "serverID" | "roleName" | "level" | "createdAt", ExtArgs["result"]["savedAccount"]>

  export type $SavedAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      serverID: string
      roleName: string
      level: string
      createdAt: Date
    }, ExtArgs["result"]["savedAccount"]>
    composites: {}
  }

  type SavedAccountGetPayload<S extends boolean | null | undefined | SavedAccountDefaultArgs> = $Result.GetResult<Prisma.$SavedAccountPayload, S>

  type SavedAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedAccountCountAggregateInputType | true
    }

  export interface SavedAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedAccount'], meta: { name: 'SavedAccount' } }
    /**
     * Find zero or one SavedAccount that matches the filter.
     * @param {SavedAccountFindUniqueArgs} args - Arguments to find a SavedAccount
     * @example
     * // Get one SavedAccount
     * const savedAccount = await prisma.savedAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedAccountFindUniqueArgs>(args: SelectSubset<T, SavedAccountFindUniqueArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedAccountFindUniqueOrThrowArgs} args - Arguments to find a SavedAccount
     * @example
     * // Get one SavedAccount
     * const savedAccount = await prisma.savedAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountFindFirstArgs} args - Arguments to find a SavedAccount
     * @example
     * // Get one SavedAccount
     * const savedAccount = await prisma.savedAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedAccountFindFirstArgs>(args?: SelectSubset<T, SavedAccountFindFirstArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountFindFirstOrThrowArgs} args - Arguments to find a SavedAccount
     * @example
     * // Get one SavedAccount
     * const savedAccount = await prisma.savedAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedAccounts
     * const savedAccounts = await prisma.savedAccount.findMany()
     * 
     * // Get first 10 SavedAccounts
     * const savedAccounts = await prisma.savedAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedAccountWithIdOnly = await prisma.savedAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedAccountFindManyArgs>(args?: SelectSubset<T, SavedAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedAccount.
     * @param {SavedAccountCreateArgs} args - Arguments to create a SavedAccount.
     * @example
     * // Create one SavedAccount
     * const SavedAccount = await prisma.savedAccount.create({
     *   data: {
     *     // ... data to create a SavedAccount
     *   }
     * })
     * 
     */
    create<T extends SavedAccountCreateArgs>(args: SelectSubset<T, SavedAccountCreateArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedAccounts.
     * @param {SavedAccountCreateManyArgs} args - Arguments to create many SavedAccounts.
     * @example
     * // Create many SavedAccounts
     * const savedAccount = await prisma.savedAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedAccountCreateManyArgs>(args?: SelectSubset<T, SavedAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedAccounts and returns the data saved in the database.
     * @param {SavedAccountCreateManyAndReturnArgs} args - Arguments to create many SavedAccounts.
     * @example
     * // Create many SavedAccounts
     * const savedAccount = await prisma.savedAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedAccounts and only return the `id`
     * const savedAccountWithIdOnly = await prisma.savedAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedAccount.
     * @param {SavedAccountDeleteArgs} args - Arguments to delete one SavedAccount.
     * @example
     * // Delete one SavedAccount
     * const SavedAccount = await prisma.savedAccount.delete({
     *   where: {
     *     // ... filter to delete one SavedAccount
     *   }
     * })
     * 
     */
    delete<T extends SavedAccountDeleteArgs>(args: SelectSubset<T, SavedAccountDeleteArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedAccount.
     * @param {SavedAccountUpdateArgs} args - Arguments to update one SavedAccount.
     * @example
     * // Update one SavedAccount
     * const savedAccount = await prisma.savedAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedAccountUpdateArgs>(args: SelectSubset<T, SavedAccountUpdateArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedAccounts.
     * @param {SavedAccountDeleteManyArgs} args - Arguments to filter SavedAccounts to delete.
     * @example
     * // Delete a few SavedAccounts
     * const { count } = await prisma.savedAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedAccountDeleteManyArgs>(args?: SelectSubset<T, SavedAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedAccounts
     * const savedAccount = await prisma.savedAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedAccountUpdateManyArgs>(args: SelectSubset<T, SavedAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedAccounts and returns the data updated in the database.
     * @param {SavedAccountUpdateManyAndReturnArgs} args - Arguments to update many SavedAccounts.
     * @example
     * // Update many SavedAccounts
     * const savedAccount = await prisma.savedAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedAccounts and only return the `id`
     * const savedAccountWithIdOnly = await prisma.savedAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedAccount.
     * @param {SavedAccountUpsertArgs} args - Arguments to update or create a SavedAccount.
     * @example
     * // Update or create a SavedAccount
     * const savedAccount = await prisma.savedAccount.upsert({
     *   create: {
     *     // ... data to create a SavedAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedAccount we want to update
     *   }
     * })
     */
    upsert<T extends SavedAccountUpsertArgs>(args: SelectSubset<T, SavedAccountUpsertArgs<ExtArgs>>): Prisma__SavedAccountClient<$Result.GetResult<Prisma.$SavedAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountCountArgs} args - Arguments to filter SavedAccounts to count.
     * @example
     * // Count the number of SavedAccounts
     * const count = await prisma.savedAccount.count({
     *   where: {
     *     // ... the filter for the SavedAccounts we want to count
     *   }
     * })
    **/
    count<T extends SavedAccountCountArgs>(
      args?: Subset<T, SavedAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedAccountAggregateArgs>(args: Subset<T, SavedAccountAggregateArgs>): Prisma.PrismaPromise<GetSavedAccountAggregateType<T>>

    /**
     * Group by SavedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedAccountGroupByArgs} args - Group by arguments.
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
      T extends SavedAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedAccountGroupByArgs['orderBy'] }
        : { orderBy?: SavedAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedAccount model
   */
  readonly fields: SavedAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SavedAccount model
   */
  interface SavedAccountFieldRefs {
    readonly id: FieldRef<"SavedAccount", 'String'>
    readonly roleId: FieldRef<"SavedAccount", 'String'>
    readonly serverID: FieldRef<"SavedAccount", 'String'>
    readonly roleName: FieldRef<"SavedAccount", 'String'>
    readonly level: FieldRef<"SavedAccount", 'String'>
    readonly createdAt: FieldRef<"SavedAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedAccount findUnique
   */
  export type SavedAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccount to fetch.
     */
    where: SavedAccountWhereUniqueInput
  }

  /**
   * SavedAccount findUniqueOrThrow
   */
  export type SavedAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccount to fetch.
     */
    where: SavedAccountWhereUniqueInput
  }

  /**
   * SavedAccount findFirst
   */
  export type SavedAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccount to fetch.
     */
    where?: SavedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccounts to fetch.
     */
    orderBy?: SavedAccountOrderByWithRelationInput | SavedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedAccounts.
     */
    cursor?: SavedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedAccounts.
     */
    distinct?: SavedAccountScalarFieldEnum | SavedAccountScalarFieldEnum[]
  }

  /**
   * SavedAccount findFirstOrThrow
   */
  export type SavedAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccount to fetch.
     */
    where?: SavedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccounts to fetch.
     */
    orderBy?: SavedAccountOrderByWithRelationInput | SavedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedAccounts.
     */
    cursor?: SavedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedAccounts.
     */
    distinct?: SavedAccountScalarFieldEnum | SavedAccountScalarFieldEnum[]
  }

  /**
   * SavedAccount findMany
   */
  export type SavedAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * Filter, which SavedAccounts to fetch.
     */
    where?: SavedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedAccounts to fetch.
     */
    orderBy?: SavedAccountOrderByWithRelationInput | SavedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedAccounts.
     */
    cursor?: SavedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedAccounts.
     */
    distinct?: SavedAccountScalarFieldEnum | SavedAccountScalarFieldEnum[]
  }

  /**
   * SavedAccount create
   */
  export type SavedAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a SavedAccount.
     */
    data: XOR<SavedAccountCreateInput, SavedAccountUncheckedCreateInput>
  }

  /**
   * SavedAccount createMany
   */
  export type SavedAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedAccounts.
     */
    data: SavedAccountCreateManyInput | SavedAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedAccount createManyAndReturn
   */
  export type SavedAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * The data used to create many SavedAccounts.
     */
    data: SavedAccountCreateManyInput | SavedAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedAccount update
   */
  export type SavedAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a SavedAccount.
     */
    data: XOR<SavedAccountUpdateInput, SavedAccountUncheckedUpdateInput>
    /**
     * Choose, which SavedAccount to update.
     */
    where: SavedAccountWhereUniqueInput
  }

  /**
   * SavedAccount updateMany
   */
  export type SavedAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedAccounts.
     */
    data: XOR<SavedAccountUpdateManyMutationInput, SavedAccountUncheckedUpdateManyInput>
    /**
     * Filter which SavedAccounts to update
     */
    where?: SavedAccountWhereInput
    /**
     * Limit how many SavedAccounts to update.
     */
    limit?: number
  }

  /**
   * SavedAccount updateManyAndReturn
   */
  export type SavedAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * The data used to update SavedAccounts.
     */
    data: XOR<SavedAccountUpdateManyMutationInput, SavedAccountUncheckedUpdateManyInput>
    /**
     * Filter which SavedAccounts to update
     */
    where?: SavedAccountWhereInput
    /**
     * Limit how many SavedAccounts to update.
     */
    limit?: number
  }

  /**
   * SavedAccount upsert
   */
  export type SavedAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the SavedAccount to update in case it exists.
     */
    where: SavedAccountWhereUniqueInput
    /**
     * In case the SavedAccount found by the `where` argument doesn't exist, create a new SavedAccount with this data.
     */
    create: XOR<SavedAccountCreateInput, SavedAccountUncheckedCreateInput>
    /**
     * In case the SavedAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedAccountUpdateInput, SavedAccountUncheckedUpdateInput>
  }

  /**
   * SavedAccount delete
   */
  export type SavedAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
    /**
     * Filter which SavedAccount to delete.
     */
    where: SavedAccountWhereUniqueInput
  }

  /**
   * SavedAccount deleteMany
   */
  export type SavedAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedAccounts to delete
     */
    where?: SavedAccountWhereInput
    /**
     * Limit how many SavedAccounts to delete.
     */
    limit?: number
  }

  /**
   * SavedAccount without action
   */
  export type SavedAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedAccount
     */
    select?: SavedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedAccount
     */
    omit?: SavedAccountOmit<ExtArgs> | null
  }


  /**
   * Model Giftcode
   */

  export type AggregateGiftcode = {
    _count: GiftcodeCountAggregateOutputType | null
    _min: GiftcodeMinAggregateOutputType | null
    _max: GiftcodeMaxAggregateOutputType | null
  }

  export type GiftcodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
  }

  export type GiftcodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
  }

  export type GiftcodeCountAggregateOutputType = {
    id: number
    code: number
    createdAt: number
    _all: number
  }


  export type GiftcodeMinAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
  }

  export type GiftcodeMaxAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
  }

  export type GiftcodeCountAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type GiftcodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Giftcode to aggregate.
     */
    where?: GiftcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Giftcodes to fetch.
     */
    orderBy?: GiftcodeOrderByWithRelationInput | GiftcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Giftcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Giftcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Giftcodes
    **/
    _count?: true | GiftcodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftcodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftcodeMaxAggregateInputType
  }

  export type GetGiftcodeAggregateType<T extends GiftcodeAggregateArgs> = {
        [P in keyof T & keyof AggregateGiftcode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiftcode[P]>
      : GetScalarType<T[P], AggregateGiftcode[P]>
  }




  export type GiftcodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftcodeWhereInput
    orderBy?: GiftcodeOrderByWithAggregationInput | GiftcodeOrderByWithAggregationInput[]
    by: GiftcodeScalarFieldEnum[] | GiftcodeScalarFieldEnum
    having?: GiftcodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftcodeCountAggregateInputType | true
    _min?: GiftcodeMinAggregateInputType
    _max?: GiftcodeMaxAggregateInputType
  }

  export type GiftcodeGroupByOutputType = {
    id: string
    code: string
    createdAt: Date
    _count: GiftcodeCountAggregateOutputType | null
    _min: GiftcodeMinAggregateOutputType | null
    _max: GiftcodeMaxAggregateOutputType | null
  }

  type GetGiftcodeGroupByPayload<T extends GiftcodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftcodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftcodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftcodeGroupByOutputType[P]>
            : GetScalarType<T[P], GiftcodeGroupByOutputType[P]>
        }
      >
    >


  export type GiftcodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["giftcode"]>

  export type GiftcodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["giftcode"]>

  export type GiftcodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["giftcode"]>

  export type GiftcodeSelectScalar = {
    id?: boolean
    code?: boolean
    createdAt?: boolean
  }

  export type GiftcodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "createdAt", ExtArgs["result"]["giftcode"]>

  export type $GiftcodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Giftcode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      createdAt: Date
    }, ExtArgs["result"]["giftcode"]>
    composites: {}
  }

  type GiftcodeGetPayload<S extends boolean | null | undefined | GiftcodeDefaultArgs> = $Result.GetResult<Prisma.$GiftcodePayload, S>

  type GiftcodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiftcodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiftcodeCountAggregateInputType | true
    }

  export interface GiftcodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Giftcode'], meta: { name: 'Giftcode' } }
    /**
     * Find zero or one Giftcode that matches the filter.
     * @param {GiftcodeFindUniqueArgs} args - Arguments to find a Giftcode
     * @example
     * // Get one Giftcode
     * const giftcode = await prisma.giftcode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiftcodeFindUniqueArgs>(args: SelectSubset<T, GiftcodeFindUniqueArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Giftcode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiftcodeFindUniqueOrThrowArgs} args - Arguments to find a Giftcode
     * @example
     * // Get one Giftcode
     * const giftcode = await prisma.giftcode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiftcodeFindUniqueOrThrowArgs>(args: SelectSubset<T, GiftcodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Giftcode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftcodeFindFirstArgs} args - Arguments to find a Giftcode
     * @example
     * // Get one Giftcode
     * const giftcode = await prisma.giftcode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiftcodeFindFirstArgs>(args?: SelectSubset<T, GiftcodeFindFirstArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Giftcode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftcodeFindFirstOrThrowArgs} args - Arguments to find a Giftcode
     * @example
     * // Get one Giftcode
     * const giftcode = await prisma.giftcode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiftcodeFindFirstOrThrowArgs>(args?: SelectSubset<T, GiftcodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Giftcodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftcodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Giftcodes
     * const giftcodes = await prisma.giftcode.findMany()
     * 
     * // Get first 10 Giftcodes
     * const giftcodes = await prisma.giftcode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giftcodeWithIdOnly = await prisma.giftcode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GiftcodeFindManyArgs>(args?: SelectSubset<T, GiftcodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Giftcode.
     * @param {GiftcodeCreateArgs} args - Arguments to create a Giftcode.
     * @example
     * // Create one Giftcode
     * const Giftcode = await prisma.giftcode.create({
     *   data: {
     *     // ... data to create a Giftcode
     *   }
     * })
     * 
     */
    create<T extends GiftcodeCreateArgs>(args: SelectSubset<T, GiftcodeCreateArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Giftcodes.
     * @param {GiftcodeCreateManyArgs} args - Arguments to create many Giftcodes.
     * @example
     * // Create many Giftcodes
     * const giftcode = await prisma.giftcode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiftcodeCreateManyArgs>(args?: SelectSubset<T, GiftcodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Giftcodes and returns the data saved in the database.
     * @param {GiftcodeCreateManyAndReturnArgs} args - Arguments to create many Giftcodes.
     * @example
     * // Create many Giftcodes
     * const giftcode = await prisma.giftcode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Giftcodes and only return the `id`
     * const giftcodeWithIdOnly = await prisma.giftcode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GiftcodeCreateManyAndReturnArgs>(args?: SelectSubset<T, GiftcodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Giftcode.
     * @param {GiftcodeDeleteArgs} args - Arguments to delete one Giftcode.
     * @example
     * // Delete one Giftcode
     * const Giftcode = await prisma.giftcode.delete({
     *   where: {
     *     // ... filter to delete one Giftcode
     *   }
     * })
     * 
     */
    delete<T extends GiftcodeDeleteArgs>(args: SelectSubset<T, GiftcodeDeleteArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Giftcode.
     * @param {GiftcodeUpdateArgs} args - Arguments to update one Giftcode.
     * @example
     * // Update one Giftcode
     * const giftcode = await prisma.giftcode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiftcodeUpdateArgs>(args: SelectSubset<T, GiftcodeUpdateArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Giftcodes.
     * @param {GiftcodeDeleteManyArgs} args - Arguments to filter Giftcodes to delete.
     * @example
     * // Delete a few Giftcodes
     * const { count } = await prisma.giftcode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiftcodeDeleteManyArgs>(args?: SelectSubset<T, GiftcodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Giftcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftcodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Giftcodes
     * const giftcode = await prisma.giftcode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiftcodeUpdateManyArgs>(args: SelectSubset<T, GiftcodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Giftcodes and returns the data updated in the database.
     * @param {GiftcodeUpdateManyAndReturnArgs} args - Arguments to update many Giftcodes.
     * @example
     * // Update many Giftcodes
     * const giftcode = await prisma.giftcode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Giftcodes and only return the `id`
     * const giftcodeWithIdOnly = await prisma.giftcode.updateManyAndReturn({
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
    updateManyAndReturn<T extends GiftcodeUpdateManyAndReturnArgs>(args: SelectSubset<T, GiftcodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Giftcode.
     * @param {GiftcodeUpsertArgs} args - Arguments to update or create a Giftcode.
     * @example
     * // Update or create a Giftcode
     * const giftcode = await prisma.giftcode.upsert({
     *   create: {
     *     // ... data to create a Giftcode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Giftcode we want to update
     *   }
     * })
     */
    upsert<T extends GiftcodeUpsertArgs>(args: SelectSubset<T, GiftcodeUpsertArgs<ExtArgs>>): Prisma__GiftcodeClient<$Result.GetResult<Prisma.$GiftcodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Giftcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftcodeCountArgs} args - Arguments to filter Giftcodes to count.
     * @example
     * // Count the number of Giftcodes
     * const count = await prisma.giftcode.count({
     *   where: {
     *     // ... the filter for the Giftcodes we want to count
     *   }
     * })
    **/
    count<T extends GiftcodeCountArgs>(
      args?: Subset<T, GiftcodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftcodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Giftcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftcodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiftcodeAggregateArgs>(args: Subset<T, GiftcodeAggregateArgs>): Prisma.PrismaPromise<GetGiftcodeAggregateType<T>>

    /**
     * Group by Giftcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftcodeGroupByArgs} args - Group by arguments.
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
      T extends GiftcodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftcodeGroupByArgs['orderBy'] }
        : { orderBy?: GiftcodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GiftcodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftcodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Giftcode model
   */
  readonly fields: GiftcodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Giftcode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftcodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Giftcode model
   */
  interface GiftcodeFieldRefs {
    readonly id: FieldRef<"Giftcode", 'String'>
    readonly code: FieldRef<"Giftcode", 'String'>
    readonly createdAt: FieldRef<"Giftcode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Giftcode findUnique
   */
  export type GiftcodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * Filter, which Giftcode to fetch.
     */
    where: GiftcodeWhereUniqueInput
  }

  /**
   * Giftcode findUniqueOrThrow
   */
  export type GiftcodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * Filter, which Giftcode to fetch.
     */
    where: GiftcodeWhereUniqueInput
  }

  /**
   * Giftcode findFirst
   */
  export type GiftcodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * Filter, which Giftcode to fetch.
     */
    where?: GiftcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Giftcodes to fetch.
     */
    orderBy?: GiftcodeOrderByWithRelationInput | GiftcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Giftcodes.
     */
    cursor?: GiftcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Giftcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Giftcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Giftcodes.
     */
    distinct?: GiftcodeScalarFieldEnum | GiftcodeScalarFieldEnum[]
  }

  /**
   * Giftcode findFirstOrThrow
   */
  export type GiftcodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * Filter, which Giftcode to fetch.
     */
    where?: GiftcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Giftcodes to fetch.
     */
    orderBy?: GiftcodeOrderByWithRelationInput | GiftcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Giftcodes.
     */
    cursor?: GiftcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Giftcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Giftcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Giftcodes.
     */
    distinct?: GiftcodeScalarFieldEnum | GiftcodeScalarFieldEnum[]
  }

  /**
   * Giftcode findMany
   */
  export type GiftcodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * Filter, which Giftcodes to fetch.
     */
    where?: GiftcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Giftcodes to fetch.
     */
    orderBy?: GiftcodeOrderByWithRelationInput | GiftcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Giftcodes.
     */
    cursor?: GiftcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Giftcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Giftcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Giftcodes.
     */
    distinct?: GiftcodeScalarFieldEnum | GiftcodeScalarFieldEnum[]
  }

  /**
   * Giftcode create
   */
  export type GiftcodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * The data needed to create a Giftcode.
     */
    data: XOR<GiftcodeCreateInput, GiftcodeUncheckedCreateInput>
  }

  /**
   * Giftcode createMany
   */
  export type GiftcodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Giftcodes.
     */
    data: GiftcodeCreateManyInput | GiftcodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Giftcode createManyAndReturn
   */
  export type GiftcodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * The data used to create many Giftcodes.
     */
    data: GiftcodeCreateManyInput | GiftcodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Giftcode update
   */
  export type GiftcodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * The data needed to update a Giftcode.
     */
    data: XOR<GiftcodeUpdateInput, GiftcodeUncheckedUpdateInput>
    /**
     * Choose, which Giftcode to update.
     */
    where: GiftcodeWhereUniqueInput
  }

  /**
   * Giftcode updateMany
   */
  export type GiftcodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Giftcodes.
     */
    data: XOR<GiftcodeUpdateManyMutationInput, GiftcodeUncheckedUpdateManyInput>
    /**
     * Filter which Giftcodes to update
     */
    where?: GiftcodeWhereInput
    /**
     * Limit how many Giftcodes to update.
     */
    limit?: number
  }

  /**
   * Giftcode updateManyAndReturn
   */
  export type GiftcodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * The data used to update Giftcodes.
     */
    data: XOR<GiftcodeUpdateManyMutationInput, GiftcodeUncheckedUpdateManyInput>
    /**
     * Filter which Giftcodes to update
     */
    where?: GiftcodeWhereInput
    /**
     * Limit how many Giftcodes to update.
     */
    limit?: number
  }

  /**
   * Giftcode upsert
   */
  export type GiftcodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * The filter to search for the Giftcode to update in case it exists.
     */
    where: GiftcodeWhereUniqueInput
    /**
     * In case the Giftcode found by the `where` argument doesn't exist, create a new Giftcode with this data.
     */
    create: XOR<GiftcodeCreateInput, GiftcodeUncheckedCreateInput>
    /**
     * In case the Giftcode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftcodeUpdateInput, GiftcodeUncheckedUpdateInput>
  }

  /**
   * Giftcode delete
   */
  export type GiftcodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
    /**
     * Filter which Giftcode to delete.
     */
    where: GiftcodeWhereUniqueInput
  }

  /**
   * Giftcode deleteMany
   */
  export type GiftcodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Giftcodes to delete
     */
    where?: GiftcodeWhereInput
    /**
     * Limit how many Giftcodes to delete.
     */
    limit?: number
  }

  /**
   * Giftcode without action
   */
  export type GiftcodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giftcode
     */
    select?: GiftcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Giftcode
     */
    omit?: GiftcodeOmit<ExtArgs> | null
  }


  /**
   * Model SystemNotice
   */

  export type AggregateSystemNotice = {
    _count: SystemNoticeCountAggregateOutputType | null
    _min: SystemNoticeMinAggregateOutputType | null
    _max: SystemNoticeMaxAggregateOutputType | null
  }

  export type SystemNoticeMinAggregateOutputType = {
    id: string | null
    content: string | null
    isActive: boolean | null
    updatedAt: Date | null
  }

  export type SystemNoticeMaxAggregateOutputType = {
    id: string | null
    content: string | null
    isActive: boolean | null
    updatedAt: Date | null
  }

  export type SystemNoticeCountAggregateOutputType = {
    id: number
    content: number
    isActive: number
    updatedAt: number
    _all: number
  }


  export type SystemNoticeMinAggregateInputType = {
    id?: true
    content?: true
    isActive?: true
    updatedAt?: true
  }

  export type SystemNoticeMaxAggregateInputType = {
    id?: true
    content?: true
    isActive?: true
    updatedAt?: true
  }

  export type SystemNoticeCountAggregateInputType = {
    id?: true
    content?: true
    isActive?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemNoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemNotice to aggregate.
     */
    where?: SystemNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotices to fetch.
     */
    orderBy?: SystemNoticeOrderByWithRelationInput | SystemNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemNotices
    **/
    _count?: true | SystemNoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemNoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemNoticeMaxAggregateInputType
  }

  export type GetSystemNoticeAggregateType<T extends SystemNoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemNotice[P]>
      : GetScalarType<T[P], AggregateSystemNotice[P]>
  }




  export type SystemNoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemNoticeWhereInput
    orderBy?: SystemNoticeOrderByWithAggregationInput | SystemNoticeOrderByWithAggregationInput[]
    by: SystemNoticeScalarFieldEnum[] | SystemNoticeScalarFieldEnum
    having?: SystemNoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemNoticeCountAggregateInputType | true
    _min?: SystemNoticeMinAggregateInputType
    _max?: SystemNoticeMaxAggregateInputType
  }

  export type SystemNoticeGroupByOutputType = {
    id: string
    content: string
    isActive: boolean
    updatedAt: Date
    _count: SystemNoticeCountAggregateOutputType | null
    _min: SystemNoticeMinAggregateOutputType | null
    _max: SystemNoticeMaxAggregateOutputType | null
  }

  type GetSystemNoticeGroupByPayload<T extends SystemNoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemNoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemNoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemNoticeGroupByOutputType[P]>
            : GetScalarType<T[P], SystemNoticeGroupByOutputType[P]>
        }
      >
    >


  export type SystemNoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isActive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemNotice"]>

  export type SystemNoticeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isActive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemNotice"]>

  export type SystemNoticeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isActive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemNotice"]>

  export type SystemNoticeSelectScalar = {
    id?: boolean
    content?: boolean
    isActive?: boolean
    updatedAt?: boolean
  }

  export type SystemNoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "isActive" | "updatedAt", ExtArgs["result"]["systemNotice"]>

  export type $SystemNoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemNotice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      isActive: boolean
      updatedAt: Date
    }, ExtArgs["result"]["systemNotice"]>
    composites: {}
  }

  type SystemNoticeGetPayload<S extends boolean | null | undefined | SystemNoticeDefaultArgs> = $Result.GetResult<Prisma.$SystemNoticePayload, S>

  type SystemNoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemNoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemNoticeCountAggregateInputType | true
    }

  export interface SystemNoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemNotice'], meta: { name: 'SystemNotice' } }
    /**
     * Find zero or one SystemNotice that matches the filter.
     * @param {SystemNoticeFindUniqueArgs} args - Arguments to find a SystemNotice
     * @example
     * // Get one SystemNotice
     * const systemNotice = await prisma.systemNotice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemNoticeFindUniqueArgs>(args: SelectSubset<T, SystemNoticeFindUniqueArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemNotice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemNoticeFindUniqueOrThrowArgs} args - Arguments to find a SystemNotice
     * @example
     * // Get one SystemNotice
     * const systemNotice = await prisma.systemNotice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemNoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemNoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemNotice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNoticeFindFirstArgs} args - Arguments to find a SystemNotice
     * @example
     * // Get one SystemNotice
     * const systemNotice = await prisma.systemNotice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemNoticeFindFirstArgs>(args?: SelectSubset<T, SystemNoticeFindFirstArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemNotice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNoticeFindFirstOrThrowArgs} args - Arguments to find a SystemNotice
     * @example
     * // Get one SystemNotice
     * const systemNotice = await prisma.systemNotice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemNoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemNoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemNotices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemNotices
     * const systemNotices = await prisma.systemNotice.findMany()
     * 
     * // Get first 10 SystemNotices
     * const systemNotices = await prisma.systemNotice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemNoticeWithIdOnly = await prisma.systemNotice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemNoticeFindManyArgs>(args?: SelectSubset<T, SystemNoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemNotice.
     * @param {SystemNoticeCreateArgs} args - Arguments to create a SystemNotice.
     * @example
     * // Create one SystemNotice
     * const SystemNotice = await prisma.systemNotice.create({
     *   data: {
     *     // ... data to create a SystemNotice
     *   }
     * })
     * 
     */
    create<T extends SystemNoticeCreateArgs>(args: SelectSubset<T, SystemNoticeCreateArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemNotices.
     * @param {SystemNoticeCreateManyArgs} args - Arguments to create many SystemNotices.
     * @example
     * // Create many SystemNotices
     * const systemNotice = await prisma.systemNotice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemNoticeCreateManyArgs>(args?: SelectSubset<T, SystemNoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemNotices and returns the data saved in the database.
     * @param {SystemNoticeCreateManyAndReturnArgs} args - Arguments to create many SystemNotices.
     * @example
     * // Create many SystemNotices
     * const systemNotice = await prisma.systemNotice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemNotices and only return the `id`
     * const systemNoticeWithIdOnly = await prisma.systemNotice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemNoticeCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemNoticeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemNotice.
     * @param {SystemNoticeDeleteArgs} args - Arguments to delete one SystemNotice.
     * @example
     * // Delete one SystemNotice
     * const SystemNotice = await prisma.systemNotice.delete({
     *   where: {
     *     // ... filter to delete one SystemNotice
     *   }
     * })
     * 
     */
    delete<T extends SystemNoticeDeleteArgs>(args: SelectSubset<T, SystemNoticeDeleteArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemNotice.
     * @param {SystemNoticeUpdateArgs} args - Arguments to update one SystemNotice.
     * @example
     * // Update one SystemNotice
     * const systemNotice = await prisma.systemNotice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemNoticeUpdateArgs>(args: SelectSubset<T, SystemNoticeUpdateArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemNotices.
     * @param {SystemNoticeDeleteManyArgs} args - Arguments to filter SystemNotices to delete.
     * @example
     * // Delete a few SystemNotices
     * const { count } = await prisma.systemNotice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemNoticeDeleteManyArgs>(args?: SelectSubset<T, SystemNoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemNotices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemNotices
     * const systemNotice = await prisma.systemNotice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemNoticeUpdateManyArgs>(args: SelectSubset<T, SystemNoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemNotices and returns the data updated in the database.
     * @param {SystemNoticeUpdateManyAndReturnArgs} args - Arguments to update many SystemNotices.
     * @example
     * // Update many SystemNotices
     * const systemNotice = await prisma.systemNotice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemNotices and only return the `id`
     * const systemNoticeWithIdOnly = await prisma.systemNotice.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemNoticeUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemNoticeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemNotice.
     * @param {SystemNoticeUpsertArgs} args - Arguments to update or create a SystemNotice.
     * @example
     * // Update or create a SystemNotice
     * const systemNotice = await prisma.systemNotice.upsert({
     *   create: {
     *     // ... data to create a SystemNotice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemNotice we want to update
     *   }
     * })
     */
    upsert<T extends SystemNoticeUpsertArgs>(args: SelectSubset<T, SystemNoticeUpsertArgs<ExtArgs>>): Prisma__SystemNoticeClient<$Result.GetResult<Prisma.$SystemNoticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemNotices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNoticeCountArgs} args - Arguments to filter SystemNotices to count.
     * @example
     * // Count the number of SystemNotices
     * const count = await prisma.systemNotice.count({
     *   where: {
     *     // ... the filter for the SystemNotices we want to count
     *   }
     * })
    **/
    count<T extends SystemNoticeCountArgs>(
      args?: Subset<T, SystemNoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemNoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemNotice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemNoticeAggregateArgs>(args: Subset<T, SystemNoticeAggregateArgs>): Prisma.PrismaPromise<GetSystemNoticeAggregateType<T>>

    /**
     * Group by SystemNotice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemNoticeGroupByArgs} args - Group by arguments.
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
      T extends SystemNoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemNoticeGroupByArgs['orderBy'] }
        : { orderBy?: SystemNoticeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemNoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemNotice model
   */
  readonly fields: SystemNoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemNotice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemNoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SystemNotice model
   */
  interface SystemNoticeFieldRefs {
    readonly id: FieldRef<"SystemNotice", 'String'>
    readonly content: FieldRef<"SystemNotice", 'String'>
    readonly isActive: FieldRef<"SystemNotice", 'Boolean'>
    readonly updatedAt: FieldRef<"SystemNotice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemNotice findUnique
   */
  export type SystemNoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotice to fetch.
     */
    where: SystemNoticeWhereUniqueInput
  }

  /**
   * SystemNotice findUniqueOrThrow
   */
  export type SystemNoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotice to fetch.
     */
    where: SystemNoticeWhereUniqueInput
  }

  /**
   * SystemNotice findFirst
   */
  export type SystemNoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotice to fetch.
     */
    where?: SystemNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotices to fetch.
     */
    orderBy?: SystemNoticeOrderByWithRelationInput | SystemNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemNotices.
     */
    cursor?: SystemNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemNotices.
     */
    distinct?: SystemNoticeScalarFieldEnum | SystemNoticeScalarFieldEnum[]
  }

  /**
   * SystemNotice findFirstOrThrow
   */
  export type SystemNoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotice to fetch.
     */
    where?: SystemNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotices to fetch.
     */
    orderBy?: SystemNoticeOrderByWithRelationInput | SystemNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemNotices.
     */
    cursor?: SystemNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemNotices.
     */
    distinct?: SystemNoticeScalarFieldEnum | SystemNoticeScalarFieldEnum[]
  }

  /**
   * SystemNotice findMany
   */
  export type SystemNoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SystemNotices to fetch.
     */
    where?: SystemNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemNotices to fetch.
     */
    orderBy?: SystemNoticeOrderByWithRelationInput | SystemNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemNotices.
     */
    cursor?: SystemNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemNotices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemNotices.
     */
    distinct?: SystemNoticeScalarFieldEnum | SystemNoticeScalarFieldEnum[]
  }

  /**
   * SystemNotice create
   */
  export type SystemNoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemNotice.
     */
    data: XOR<SystemNoticeCreateInput, SystemNoticeUncheckedCreateInput>
  }

  /**
   * SystemNotice createMany
   */
  export type SystemNoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemNotices.
     */
    data: SystemNoticeCreateManyInput | SystemNoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemNotice createManyAndReturn
   */
  export type SystemNoticeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * The data used to create many SystemNotices.
     */
    data: SystemNoticeCreateManyInput | SystemNoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemNotice update
   */
  export type SystemNoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemNotice.
     */
    data: XOR<SystemNoticeUpdateInput, SystemNoticeUncheckedUpdateInput>
    /**
     * Choose, which SystemNotice to update.
     */
    where: SystemNoticeWhereUniqueInput
  }

  /**
   * SystemNotice updateMany
   */
  export type SystemNoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemNotices.
     */
    data: XOR<SystemNoticeUpdateManyMutationInput, SystemNoticeUncheckedUpdateManyInput>
    /**
     * Filter which SystemNotices to update
     */
    where?: SystemNoticeWhereInput
    /**
     * Limit how many SystemNotices to update.
     */
    limit?: number
  }

  /**
   * SystemNotice updateManyAndReturn
   */
  export type SystemNoticeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * The data used to update SystemNotices.
     */
    data: XOR<SystemNoticeUpdateManyMutationInput, SystemNoticeUncheckedUpdateManyInput>
    /**
     * Filter which SystemNotices to update
     */
    where?: SystemNoticeWhereInput
    /**
     * Limit how many SystemNotices to update.
     */
    limit?: number
  }

  /**
   * SystemNotice upsert
   */
  export type SystemNoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemNotice to update in case it exists.
     */
    where: SystemNoticeWhereUniqueInput
    /**
     * In case the SystemNotice found by the `where` argument doesn't exist, create a new SystemNotice with this data.
     */
    create: XOR<SystemNoticeCreateInput, SystemNoticeUncheckedCreateInput>
    /**
     * In case the SystemNotice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemNoticeUpdateInput, SystemNoticeUncheckedUpdateInput>
  }

  /**
   * SystemNotice delete
   */
  export type SystemNoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
    /**
     * Filter which SystemNotice to delete.
     */
    where: SystemNoticeWhereUniqueInput
  }

  /**
   * SystemNotice deleteMany
   */
  export type SystemNoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemNotices to delete
     */
    where?: SystemNoticeWhereInput
    /**
     * Limit how many SystemNotices to delete.
     */
    limit?: number
  }

  /**
   * SystemNotice without action
   */
  export type SystemNoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemNotice
     */
    select?: SystemNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemNotice
     */
    omit?: SystemNoticeOmit<ExtArgs> | null
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


  export const ActiveSessionScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    updatedAt: 'updatedAt'
  };

  export type ActiveSessionScalarFieldEnum = (typeof ActiveSessionScalarFieldEnum)[keyof typeof ActiveSessionScalarFieldEnum]


  export const SavedAccountCountScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    count: 'count',
    updatedAt: 'updatedAt'
  };

  export type SavedAccountCountScalarFieldEnum = (typeof SavedAccountCountScalarFieldEnum)[keyof typeof SavedAccountCountScalarFieldEnum]


  export const RedeemStatisticScalarFieldEnum: {
    id: 'id',
    count: 'count'
  };

  export type RedeemStatisticScalarFieldEnum = (typeof RedeemStatisticScalarFieldEnum)[keyof typeof RedeemStatisticScalarFieldEnum]


  export const SavedAccountScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    serverID: 'serverID',
    roleName: 'roleName',
    level: 'level',
    createdAt: 'createdAt'
  };

  export type SavedAccountScalarFieldEnum = (typeof SavedAccountScalarFieldEnum)[keyof typeof SavedAccountScalarFieldEnum]


  export const GiftcodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    createdAt: 'createdAt'
  };

  export type GiftcodeScalarFieldEnum = (typeof GiftcodeScalarFieldEnum)[keyof typeof GiftcodeScalarFieldEnum]


  export const SystemNoticeScalarFieldEnum: {
    id: 'id',
    content: 'content',
    isActive: 'isActive',
    updatedAt: 'updatedAt'
  };

  export type SystemNoticeScalarFieldEnum = (typeof SystemNoticeScalarFieldEnum)[keyof typeof SystemNoticeScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ActiveSessionWhereInput = {
    AND?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    OR?: ActiveSessionWhereInput[]
    NOT?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    id?: StringFilter<"ActiveSession"> | string
    ip?: StringFilter<"ActiveSession"> | string
    updatedAt?: DateTimeFilter<"ActiveSession"> | Date | string
  }

  export type ActiveSessionOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActiveSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ip?: string
    AND?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    OR?: ActiveSessionWhereInput[]
    NOT?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    updatedAt?: DateTimeFilter<"ActiveSession"> | Date | string
  }, "id" | "ip">

  export type ActiveSessionOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    updatedAt?: SortOrder
    _count?: ActiveSessionCountOrderByAggregateInput
    _max?: ActiveSessionMaxOrderByAggregateInput
    _min?: ActiveSessionMinOrderByAggregateInput
  }

  export type ActiveSessionScalarWhereWithAggregatesInput = {
    AND?: ActiveSessionScalarWhereWithAggregatesInput | ActiveSessionScalarWhereWithAggregatesInput[]
    OR?: ActiveSessionScalarWhereWithAggregatesInput[]
    NOT?: ActiveSessionScalarWhereWithAggregatesInput | ActiveSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActiveSession"> | string
    ip?: StringWithAggregatesFilter<"ActiveSession"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActiveSession"> | Date | string
  }

  export type SavedAccountCountWhereInput = {
    AND?: SavedAccountCountWhereInput | SavedAccountCountWhereInput[]
    OR?: SavedAccountCountWhereInput[]
    NOT?: SavedAccountCountWhereInput | SavedAccountCountWhereInput[]
    id?: StringFilter<"SavedAccountCount"> | string
    ip?: StringFilter<"SavedAccountCount"> | string
    count?: IntFilter<"SavedAccountCount"> | number
    updatedAt?: DateTimeFilter<"SavedAccountCount"> | Date | string
  }

  export type SavedAccountCountOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedAccountCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ip?: string
    AND?: SavedAccountCountWhereInput | SavedAccountCountWhereInput[]
    OR?: SavedAccountCountWhereInput[]
    NOT?: SavedAccountCountWhereInput | SavedAccountCountWhereInput[]
    count?: IntFilter<"SavedAccountCount"> | number
    updatedAt?: DateTimeFilter<"SavedAccountCount"> | Date | string
  }, "id" | "ip">

  export type SavedAccountCountOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
    _count?: SavedAccountCountCountOrderByAggregateInput
    _avg?: SavedAccountCountAvgOrderByAggregateInput
    _max?: SavedAccountCountMaxOrderByAggregateInput
    _min?: SavedAccountCountMinOrderByAggregateInput
    _sum?: SavedAccountCountSumOrderByAggregateInput
  }

  export type SavedAccountCountScalarWhereWithAggregatesInput = {
    AND?: SavedAccountCountScalarWhereWithAggregatesInput | SavedAccountCountScalarWhereWithAggregatesInput[]
    OR?: SavedAccountCountScalarWhereWithAggregatesInput[]
    NOT?: SavedAccountCountScalarWhereWithAggregatesInput | SavedAccountCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedAccountCount"> | string
    ip?: StringWithAggregatesFilter<"SavedAccountCount"> | string
    count?: IntWithAggregatesFilter<"SavedAccountCount"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SavedAccountCount"> | Date | string
  }

  export type RedeemStatisticWhereInput = {
    AND?: RedeemStatisticWhereInput | RedeemStatisticWhereInput[]
    OR?: RedeemStatisticWhereInput[]
    NOT?: RedeemStatisticWhereInput | RedeemStatisticWhereInput[]
    id?: StringFilter<"RedeemStatistic"> | string
    count?: IntFilter<"RedeemStatistic"> | number
  }

  export type RedeemStatisticOrderByWithRelationInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type RedeemStatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RedeemStatisticWhereInput | RedeemStatisticWhereInput[]
    OR?: RedeemStatisticWhereInput[]
    NOT?: RedeemStatisticWhereInput | RedeemStatisticWhereInput[]
    count?: IntFilter<"RedeemStatistic"> | number
  }, "id">

  export type RedeemStatisticOrderByWithAggregationInput = {
    id?: SortOrder
    count?: SortOrder
    _count?: RedeemStatisticCountOrderByAggregateInput
    _avg?: RedeemStatisticAvgOrderByAggregateInput
    _max?: RedeemStatisticMaxOrderByAggregateInput
    _min?: RedeemStatisticMinOrderByAggregateInput
    _sum?: RedeemStatisticSumOrderByAggregateInput
  }

  export type RedeemStatisticScalarWhereWithAggregatesInput = {
    AND?: RedeemStatisticScalarWhereWithAggregatesInput | RedeemStatisticScalarWhereWithAggregatesInput[]
    OR?: RedeemStatisticScalarWhereWithAggregatesInput[]
    NOT?: RedeemStatisticScalarWhereWithAggregatesInput | RedeemStatisticScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RedeemStatistic"> | string
    count?: IntWithAggregatesFilter<"RedeemStatistic"> | number
  }

  export type SavedAccountWhereInput = {
    AND?: SavedAccountWhereInput | SavedAccountWhereInput[]
    OR?: SavedAccountWhereInput[]
    NOT?: SavedAccountWhereInput | SavedAccountWhereInput[]
    id?: StringFilter<"SavedAccount"> | string
    roleId?: StringFilter<"SavedAccount"> | string
    serverID?: StringFilter<"SavedAccount"> | string
    roleName?: StringFilter<"SavedAccount"> | string
    level?: StringFilter<"SavedAccount"> | string
    createdAt?: DateTimeFilter<"SavedAccount"> | Date | string
  }

  export type SavedAccountOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    serverID?: SortOrder
    roleName?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId?: string
    AND?: SavedAccountWhereInput | SavedAccountWhereInput[]
    OR?: SavedAccountWhereInput[]
    NOT?: SavedAccountWhereInput | SavedAccountWhereInput[]
    serverID?: StringFilter<"SavedAccount"> | string
    roleName?: StringFilter<"SavedAccount"> | string
    level?: StringFilter<"SavedAccount"> | string
    createdAt?: DateTimeFilter<"SavedAccount"> | Date | string
  }, "id" | "roleId">

  export type SavedAccountOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    serverID?: SortOrder
    roleName?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    _count?: SavedAccountCountOrderByAggregateInput
    _max?: SavedAccountMaxOrderByAggregateInput
    _min?: SavedAccountMinOrderByAggregateInput
  }

  export type SavedAccountScalarWhereWithAggregatesInput = {
    AND?: SavedAccountScalarWhereWithAggregatesInput | SavedAccountScalarWhereWithAggregatesInput[]
    OR?: SavedAccountScalarWhereWithAggregatesInput[]
    NOT?: SavedAccountScalarWhereWithAggregatesInput | SavedAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedAccount"> | string
    roleId?: StringWithAggregatesFilter<"SavedAccount"> | string
    serverID?: StringWithAggregatesFilter<"SavedAccount"> | string
    roleName?: StringWithAggregatesFilter<"SavedAccount"> | string
    level?: StringWithAggregatesFilter<"SavedAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedAccount"> | Date | string
  }

  export type GiftcodeWhereInput = {
    AND?: GiftcodeWhereInput | GiftcodeWhereInput[]
    OR?: GiftcodeWhereInput[]
    NOT?: GiftcodeWhereInput | GiftcodeWhereInput[]
    id?: StringFilter<"Giftcode"> | string
    code?: StringFilter<"Giftcode"> | string
    createdAt?: DateTimeFilter<"Giftcode"> | Date | string
  }

  export type GiftcodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftcodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: GiftcodeWhereInput | GiftcodeWhereInput[]
    OR?: GiftcodeWhereInput[]
    NOT?: GiftcodeWhereInput | GiftcodeWhereInput[]
    createdAt?: DateTimeFilter<"Giftcode"> | Date | string
  }, "id" | "code">

  export type GiftcodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: GiftcodeCountOrderByAggregateInput
    _max?: GiftcodeMaxOrderByAggregateInput
    _min?: GiftcodeMinOrderByAggregateInput
  }

  export type GiftcodeScalarWhereWithAggregatesInput = {
    AND?: GiftcodeScalarWhereWithAggregatesInput | GiftcodeScalarWhereWithAggregatesInput[]
    OR?: GiftcodeScalarWhereWithAggregatesInput[]
    NOT?: GiftcodeScalarWhereWithAggregatesInput | GiftcodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Giftcode"> | string
    code?: StringWithAggregatesFilter<"Giftcode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Giftcode"> | Date | string
  }

  export type SystemNoticeWhereInput = {
    AND?: SystemNoticeWhereInput | SystemNoticeWhereInput[]
    OR?: SystemNoticeWhereInput[]
    NOT?: SystemNoticeWhereInput | SystemNoticeWhereInput[]
    id?: StringFilter<"SystemNotice"> | string
    content?: StringFilter<"SystemNotice"> | string
    isActive?: BoolFilter<"SystemNotice"> | boolean
    updatedAt?: DateTimeFilter<"SystemNotice"> | Date | string
  }

  export type SystemNoticeOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemNoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemNoticeWhereInput | SystemNoticeWhereInput[]
    OR?: SystemNoticeWhereInput[]
    NOT?: SystemNoticeWhereInput | SystemNoticeWhereInput[]
    content?: StringFilter<"SystemNotice"> | string
    isActive?: BoolFilter<"SystemNotice"> | boolean
    updatedAt?: DateTimeFilter<"SystemNotice"> | Date | string
  }, "id">

  export type SystemNoticeOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemNoticeCountOrderByAggregateInput
    _max?: SystemNoticeMaxOrderByAggregateInput
    _min?: SystemNoticeMinOrderByAggregateInput
  }

  export type SystemNoticeScalarWhereWithAggregatesInput = {
    AND?: SystemNoticeScalarWhereWithAggregatesInput | SystemNoticeScalarWhereWithAggregatesInput[]
    OR?: SystemNoticeScalarWhereWithAggregatesInput[]
    NOT?: SystemNoticeScalarWhereWithAggregatesInput | SystemNoticeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemNotice"> | string
    content?: StringWithAggregatesFilter<"SystemNotice"> | string
    isActive?: BoolWithAggregatesFilter<"SystemNotice"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"SystemNotice"> | Date | string
  }

  export type ActiveSessionCreateInput = {
    id?: string
    ip: string
    updatedAt?: Date | string
  }

  export type ActiveSessionUncheckedCreateInput = {
    id?: string
    ip: string
    updatedAt?: Date | string
  }

  export type ActiveSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionCreateManyInput = {
    id?: string
    ip: string
    updatedAt?: Date | string
  }

  export type ActiveSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedAccountCountCreateInput = {
    id?: string
    ip: string
    count?: number
    updatedAt?: Date | string
  }

  export type SavedAccountCountUncheckedCreateInput = {
    id?: string
    ip: string
    count?: number
    updatedAt?: Date | string
  }

  export type SavedAccountCountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedAccountCountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedAccountCountCreateManyInput = {
    id?: string
    ip: string
    count?: number
    updatedAt?: Date | string
  }

  export type SavedAccountCountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedAccountCountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemStatisticCreateInput = {
    id: string
    count?: number
  }

  export type RedeemStatisticUncheckedCreateInput = {
    id: string
    count?: number
  }

  export type RedeemStatisticUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type RedeemStatisticUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type RedeemStatisticCreateManyInput = {
    id: string
    count?: number
  }

  export type RedeemStatisticUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type RedeemStatisticUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type SavedAccountCreateInput = {
    id?: string
    roleId: string
    serverID?: string
    roleName?: string
    level?: string
    createdAt?: Date | string
  }

  export type SavedAccountUncheckedCreateInput = {
    id?: string
    roleId: string
    serverID?: string
    roleName?: string
    level?: string
    createdAt?: Date | string
  }

  export type SavedAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    serverID?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    serverID?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedAccountCreateManyInput = {
    id?: string
    roleId: string
    serverID?: string
    roleName?: string
    level?: string
    createdAt?: Date | string
  }

  export type SavedAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    serverID?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    serverID?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftcodeCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type GiftcodeUncheckedCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type GiftcodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftcodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftcodeCreateManyInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type GiftcodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftcodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNoticeCreateInput = {
    id?: string
    content?: string
    isActive?: boolean
    updatedAt?: Date | string
  }

  export type SystemNoticeUncheckedCreateInput = {
    id?: string
    content?: string
    isActive?: boolean
    updatedAt?: Date | string
  }

  export type SystemNoticeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNoticeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNoticeCreateManyInput = {
    id?: string
    content?: string
    isActive?: boolean
    updatedAt?: Date | string
  }

  export type SystemNoticeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemNoticeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ActiveSessionCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActiveSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActiveSessionMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    updatedAt?: SortOrder
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

  export type SavedAccountCountCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedAccountCountAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type SavedAccountCountMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedAccountCountMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedAccountCountSumOrderByAggregateInput = {
    count?: SortOrder
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

  export type RedeemStatisticCountOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type RedeemStatisticAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type RedeemStatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type RedeemStatisticMinOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type RedeemStatisticSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type SavedAccountCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    serverID?: SortOrder
    roleName?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    serverID?: SortOrder
    roleName?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedAccountMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    serverID?: SortOrder
    roleName?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftcodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftcodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftcodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SystemNoticeCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemNoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemNoticeMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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