export interface SignUpType {
  (x: boolean | undefined): void
}

export interface eventFunc<T> {
  (): T
}