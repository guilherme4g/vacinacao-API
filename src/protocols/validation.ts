export interface Validation<T> {
  validation: ( body: T ) => ( null | string[])
}