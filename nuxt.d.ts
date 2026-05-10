export type TsConfigValue =
  | string
  | number
  | boolean
  | null
  | string[]
  | Record<string, unknown>

export interface NuxtTsConfig {
  compilerOptions: Record<string, TsConfigValue>
}

export declare const nuxtTsConfig: NuxtTsConfig
