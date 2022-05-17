enum ErrorType {
    API_ERROR = "API_ERROR",
    EMPTY = "EMPTY"
}

type ErrorCustom = {
    type: ErrorType,
    message: string
}

export type {
    ErrorCustom
}

export {
    ErrorType
}