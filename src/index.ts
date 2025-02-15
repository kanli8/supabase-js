import SupabaseClient from './SupabaseClient'
import type { GenericSchema, SupabaseClientOptions } from './lib/types'

export * from '@kanli8_supabase/gotrue-js'
export type { User as AuthUser, Session as AuthSession } from '@kanli8_supabase/gotrue-js'
export type {
  PostgrestResponse,
  PostgrestSingleResponse,
  PostgrestMaybeSingleResponse,
  PostgrestError,
} from '@kanli8_supabase/postgrest-js'
export {
  FunctionsHttpError,
  FunctionsFetchError,
  FunctionsRelayError,
  FunctionsError,
} from '@kanli8_supabase/functions-js'
export * from '@kanli8_supabase/realtime-js'
export { default as SupabaseClient } from './SupabaseClient'
export type { SupabaseClientOptions } from './lib/types'

/**
 * Creates a new Supabase Client.
 */
export const createClient = <
  Database = any,
  SchemaName extends string & keyof Database = 'public' extends keyof Database
    ? 'public'
    : string & keyof Database,
  Schema extends GenericSchema = Database[SchemaName] extends GenericSchema
    ? Database[SchemaName]
    : any
>(
  supabaseUrl: string,
  supabaseKey: string,
  options?: SupabaseClientOptions<SchemaName>
): SupabaseClient<Database, SchemaName, Schema> => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options)
}
