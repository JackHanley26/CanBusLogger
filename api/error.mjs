"use strict";

export class HttpError extends Error {
    constructor(message) {
        super(message);
        this.message = message || "Internal Error.";
        this.name = "HTTPError";
        this.httpCode = 500;
    }
}