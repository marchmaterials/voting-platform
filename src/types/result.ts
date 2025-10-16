
export enum ErrorCode {
    DbError
}


export type ServerError = {
    ok: false,
    type: "error",
    code: ErrorCode
}


export type Result<T extends { ok: true; type: "success" }> = T | ServerError
