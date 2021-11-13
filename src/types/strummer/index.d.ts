interface IJSONSchema {
    type: string
    properties: object
    required?: string[]
    additionalProperties?: boolean
}

interface IMatcher {
    match: (value: any) => any
    toJSONSchema: () => IJSONSchema
}

interface IObjectWithOnlyMatcher {
    [key: string]: IMatcher
}

declare module 'strummer' {
    export function objectWithOnly (
        object: IObjectWithOnlyMatcher,
        options?: object
    ): IMatcher
    export function number (options?: object): IMatcher
    export function integer (options?: object): IMatcher
    export function string (options?: object): IMatcher
    export function boolean (options?: object): IMatcher
    export function isoDate (options?: object): IMatcher
    export function array (options?: object): IMatcher
    export function uuid (options?: object): IMatcher
    export function optional (matcher: IMatcher): IMatcher
    export function oneOf (matcher: IMatcher[]): IMatcher
    export function createMatcher ({ match }: { match: (path: string, value: any) => string | null }): any
    export function hashmap (options?: object): IMatcher

    function _enum (options?: object): IMatcher

    export { _enum as enum }
}