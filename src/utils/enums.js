const HTTP_CLIENT_ERRORS = {
    ClientErrorBadRequest: 400,
    ClientErrorConflict: 409,
    ClientErrorExpectationFailed: 417,
    ClientErrorFailedDependency: 424,
    ClientErrorForbidden: 403,
    ClientErrorGone: 410,
    ClientErrorImATeapot: 418,
    ClientErrorLengthRequired: 411,
    ClientErrorLocked: 423,
    ClientErrorLoginTimeOut: 440,
    ClientErrorMethodNotAllowed: 405,
    ClientErrorMisdirectedRequest: 421,
    ClientErrorNotAcceptable: 406,
    ClientErrorNotFound: 404,
    ClientErrorPayloadTooLarge: 413,
    ClientErrorPaymentRequired: 402,
    ClientErrorPreconditionFailed: 412,
    ClientErrorPreconditionRequired: 428,
    ClientErrorProxyAuthRequired: 407,
    ClientErrorRangeNotSatisfiable: 416,
    ClientErrorRequestHeaderFieldsTooLarge: 431,
    ClientErrorRequestTimeout: 408,
    ClientErrorRetryWith: 449,
    ClientErrorTooManyRequests: 429,
    ClientErrorUnauthorized: 401,
    ClientErrorUnavailableForLegalReasons: 451,
    ClientErrorUnprocessableEntity: 422,
    ClientErrorUnsupportedMediaType: 415,
    ClientErrorUpgradeRequired: 426,
    ClientErrorURITooLong: 414,
};

const HTTP_INFO = {
    InfoContinue: 100,
    InfoProcessing: 102,
    InfoSwitchingProtocols: 101
};

const HTTP_REDIRECT = {
    RedirectFound: 302,
    RedirectMovedPermanently: 301,
    RedirectMultipleChoices: 300,
    RedirectNotModified: 304,
    RedirectPermanent: 308,
    RedirectSeeOther: 303,
    RedirectSwitchProxy: 306,
    RedirectTemp: 307,
    RedirectUseProxy: 305
};

const HTTP_SERVER_ERRORS = {
    ServerErrorBadGateway: 502,
    ServerErrorBandwidthLimitExceeded: 509,
    ServerErrorGatewayTimeout: 504,
    ServerErrorHTTPVersionNotSupported: 505,
    ServerErrorInsufficientStorage: 507,
    ServerErrorInternal: 500,
    ServerErrorLoopDetected: 508,
    ServerErrorNetworkAuthRequired: 511,
    ServerErrorNotExtended: 510,
    ServerErrorNotImplemented: 501,
    ServerErrorServiceUnavailable: 503,
    ServerErrorVariantAlsoNegotiates: 506
};

const HTTP_SUCCESS = {
    SuccessAccepted: 202,
    SuccessAlreadyReported: 208,
    SuccessCreated: 201,
    SuccessIMUsed: 229,
    SuccessMultiStatus: 207,
    SuccessNoContent: 204,
    SuccessNonAuthoritativeInfo: 203,
    SuccessOK: 200,
    SuccessPartialContent: 206,
    SuccessResetContent: 205
};

const DYNAMO_DB_CONFIGS = {
    TableName: "tcc3"
};

const FAUNA_DB_COLLECTIONS = {
    SERVICE: "service",
    REQUEST: "request",
    SCHEDULE: "schedule"
};

const REQUEST_STATUS = {
    CONFIRMED: "confirmed",
    CANCELED: "canceled",
    WAITING: "waiting"
}


module.exports = {
    HTTP_CLIENT_ERRORS,
    HTTP_INFO,
    HTTP_REDIRECT,
    HTTP_SERVER_ERRORS,
    HTTP_SUCCESS,
    DYNAMO_DB_CONFIGS,
    FAUNA_DB_COLLECTIONS,
    REQUEST_STATUS,
    DYNAMO_DB_APPLICATIONS
}