type Response<T> = T extends "success" ? { data: string } : { error: string };

type SuccessType = Response<"success">; // { data: string }
type ErrorType = Response<"error">; // { error: string }
