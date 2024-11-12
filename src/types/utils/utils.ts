/**
 * Represents a function that does nothing.
 */
export type Noop = () => void;

/**
 * Represents a generic function type for managing state in React components.
 * @template T - The type of the state value.
 * @param value - The initial state value or a function that returns the new state value.
 */
export type UseState<T> = (value: T | ((value: T) => T)) => void;

/**
 * Returns a union type of all unique keys in an object,
 * including nested keys.
 */
export type ObjectKeys<T> = T extends object ? keyof T | ObjectKeys<T[keyof T]> : never;

/**
 * Returns a union type of all unique values in an object.
 * including nested keys.
 */
export type ObjectValues<T> = T extends { [key: string | number]: infer value }
  ? value extends object
    ? ObjectValues<value>
    : value
  : never;
