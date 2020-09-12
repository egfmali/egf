
export const valueOr0 = function (value: any): number {
    return <number>(value === undefined || value === null ? 0 : value);
}

export const valueOrEmpty = function (value: any): string {
    return <string>(value === undefined || value === null ? '' : value);
}
