import { Prop } from 'vue';

declare module 'vue' {
  /**
   * PropOptions is not exported from Vue, this is a "hack" to get the object
   * variant from Prop instead of the full union with the Array type.
   */
  export type PropOptions<T, D = T> = Extends<Prop<T, D>, Record<string, any>>

  export default Vue;
}
