type Item = string | number;
export declare function filterById<T extends object>(array: T[], key: keyof T, item: Item): T[];
export {};
