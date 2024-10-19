/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/groq-sdk/_shims/MultipartBody.mjs":
/*!********************************************************!*\
  !*** ./node_modules/groq-sdk/_shims/MultipartBody.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipartBody: () => (/* binding */ MultipartBody)
/* harmony export */ });
/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
class MultipartBody {
    constructor(body) {
        this.body = body;
    }
    get [Symbol.toStringTag]() {
        return 'MultipartBody';
    }
}
//# sourceMappingURL=MultipartBody.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/_shims/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/groq-sdk/_shims/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blob: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Blob),
/* harmony export */   File: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.File),
/* harmony export */   FormData: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.FormData),
/* harmony export */   Headers: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Headers),
/* harmony export */   ReadableStream: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.ReadableStream),
/* harmony export */   Request: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Request),
/* harmony export */   Response: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.Response),
/* harmony export */   auto: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.auto),
/* harmony export */   fetch: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.fetch),
/* harmony export */   fileFromPath: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.fileFromPath),
/* harmony export */   getDefaultAgent: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultAgent),
/* harmony export */   getMultipartRequestOptions: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.getMultipartRequestOptions),
/* harmony export */   isFsReadStream: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.isFsReadStream),
/* harmony export */   kind: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.kind),
/* harmony export */   setShims: () => (/* reexport safe */ _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.setShims)
/* harmony export */ });
/* harmony import */ var _registry_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry.mjs */ "./node_modules/groq-sdk/_shims/registry.mjs");
/* harmony import */ var groq_sdk_shims_auto_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq-sdk/_shims/auto/runtime */ "./node_modules/groq-sdk/_shims/web-runtime.mjs");
/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */


if (!_registry_mjs__WEBPACK_IMPORTED_MODULE_0__.kind) _registry_mjs__WEBPACK_IMPORTED_MODULE_0__.setShims(groq_sdk_shims_auto_runtime__WEBPACK_IMPORTED_MODULE_1__.getRuntime(), { auto: true });



/***/ }),

/***/ "./node_modules/groq-sdk/_shims/registry.mjs":
/*!***************************************************!*\
  !*** ./node_modules/groq-sdk/_shims/registry.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blob: () => (/* binding */ Blob),
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   FormData: () => (/* binding */ FormData),
/* harmony export */   Headers: () => (/* binding */ Headers),
/* harmony export */   ReadableStream: () => (/* binding */ ReadableStream),
/* harmony export */   Request: () => (/* binding */ Request),
/* harmony export */   Response: () => (/* binding */ Response),
/* harmony export */   auto: () => (/* binding */ auto),
/* harmony export */   fetch: () => (/* binding */ fetch),
/* harmony export */   fileFromPath: () => (/* binding */ fileFromPath),
/* harmony export */   getDefaultAgent: () => (/* binding */ getDefaultAgent),
/* harmony export */   getMultipartRequestOptions: () => (/* binding */ getMultipartRequestOptions),
/* harmony export */   isFsReadStream: () => (/* binding */ isFsReadStream),
/* harmony export */   kind: () => (/* binding */ kind),
/* harmony export */   setShims: () => (/* binding */ setShims)
/* harmony export */ });
let auto = false;
let kind = undefined;
let fetch = undefined;
let Request = undefined;
let Response = undefined;
let Headers = undefined;
let FormData = undefined;
let Blob = undefined;
let File = undefined;
let ReadableStream = undefined;
let getMultipartRequestOptions = undefined;
let getDefaultAgent = undefined;
let fileFromPath = undefined;
let isFsReadStream = undefined;
function setShims(shims, options = { auto: false }) {
    if (auto) {
        throw new Error(`you must \`import 'groq-sdk/shims/${shims.kind}'\` before importing anything else from groq-sdk`);
    }
    if (kind) {
        throw new Error(`can't \`import 'groq-sdk/shims/${shims.kind}'\` after \`import 'groq-sdk/shims/${kind}'\``);
    }
    auto = options.auto;
    kind = shims.kind;
    fetch = shims.fetch;
    Request = shims.Request;
    Response = shims.Response;
    Headers = shims.Headers;
    FormData = shims.FormData;
    Blob = shims.Blob;
    File = shims.File;
    ReadableStream = shims.ReadableStream;
    getMultipartRequestOptions = shims.getMultipartRequestOptions;
    getDefaultAgent = shims.getDefaultAgent;
    fileFromPath = shims.fileFromPath;
    isFsReadStream = shims.isFsReadStream;
}
//# sourceMappingURL=registry.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/_shims/web-runtime.mjs":
/*!******************************************************!*\
  !*** ./node_modules/groq-sdk/_shims/web-runtime.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntime: () => (/* binding */ getRuntime)
/* harmony export */ });
/* harmony import */ var _MultipartBody_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipartBody.mjs */ "./node_modules/groq-sdk/_shims/MultipartBody.mjs");

function getRuntime({ manuallyImported } = {}) {
    const recommendation = manuallyImported ?
        `You may need to use polyfills`
        : `Add one of these imports before your first \`import … from 'groq-sdk'\`:
- \`import 'groq-sdk/shims/node'\` (if you're running on Node)
- \`import 'groq-sdk/shims/web'\` (otherwise)
`;
    let _fetch, _Request, _Response, _Headers;
    try {
        // @ts-ignore
        _fetch = fetch;
        // @ts-ignore
        _Request = Request;
        // @ts-ignore
        _Response = Response;
        // @ts-ignore
        _Headers = Headers;
    }
    catch (error) {
        throw new Error(`this environment is missing the following Web Fetch API type: ${error.message}. ${recommendation}`);
    }
    return {
        kind: 'web',
        fetch: _fetch,
        Request: _Request,
        Response: _Response,
        Headers: _Headers,
        FormData: 
        // @ts-ignore
        typeof FormData !== 'undefined' ? FormData : (class FormData {
            // @ts-ignore
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${recommendation}`);
            }
        }),
        Blob: typeof Blob !== 'undefined' ? Blob : (class Blob {
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${recommendation}`);
            }
        }),
        File: 
        // @ts-ignore
        typeof File !== 'undefined' ? File : (class File {
            // @ts-ignore
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${recommendation}`);
            }
        }),
        ReadableStream: 
        // @ts-ignore
        typeof ReadableStream !== 'undefined' ? ReadableStream : (class ReadableStream {
            // @ts-ignore
            constructor() {
                throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${recommendation}`);
            }
        }),
        getMultipartRequestOptions: async (
        // @ts-ignore
        form, opts) => ({
            ...opts,
            body: new _MultipartBody_mjs__WEBPACK_IMPORTED_MODULE_0__.MultipartBody(form),
        }),
        getDefaultAgent: (url) => undefined,
        fileFromPath: () => {
            throw new Error('The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/groq/groq-typescript#file-uploads');
        },
        isFsReadStream: (value) => false,
    };
}
//# sourceMappingURL=web-runtime.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/core.mjs":
/*!****************************************!*\
  !*** ./node_modules/groq-sdk/core.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIClient: () => (/* binding */ APIClient),
/* harmony export */   APIPromise: () => (/* binding */ APIPromise),
/* harmony export */   AbstractPage: () => (/* binding */ AbstractPage),
/* harmony export */   PagePromise: () => (/* binding */ PagePromise),
/* harmony export */   castToError: () => (/* binding */ castToError),
/* harmony export */   coerceBoolean: () => (/* binding */ coerceBoolean),
/* harmony export */   coerceFloat: () => (/* binding */ coerceFloat),
/* harmony export */   coerceInteger: () => (/* binding */ coerceInteger),
/* harmony export */   createForm: () => (/* reexport safe */ _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.createForm),
/* harmony export */   createResponseHeaders: () => (/* binding */ createResponseHeaders),
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   ensurePresent: () => (/* binding */ ensurePresent),
/* harmony export */   getRequiredHeader: () => (/* binding */ getRequiredHeader),
/* harmony export */   hasOwn: () => (/* binding */ hasOwn),
/* harmony export */   isEmptyObj: () => (/* binding */ isEmptyObj),
/* harmony export */   isHeadersProtocol: () => (/* binding */ isHeadersProtocol),
/* harmony export */   isObj: () => (/* binding */ isObj),
/* harmony export */   isRequestOptions: () => (/* binding */ isRequestOptions),
/* harmony export */   isRunningInBrowser: () => (/* binding */ isRunningInBrowser),
/* harmony export */   maybeCoerceBoolean: () => (/* binding */ maybeCoerceBoolean),
/* harmony export */   maybeCoerceFloat: () => (/* binding */ maybeCoerceFloat),
/* harmony export */   maybeCoerceInteger: () => (/* binding */ maybeCoerceInteger),
/* harmony export */   maybeMultipartFormRequestOptions: () => (/* reexport safe */ _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.maybeMultipartFormRequestOptions),
/* harmony export */   multipartFormRequestOptions: () => (/* reexport safe */ _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions),
/* harmony export */   readEnv: () => (/* binding */ readEnv),
/* harmony export */   safeJSON: () => (/* binding */ safeJSON),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   toBase64: () => (/* binding */ toBase64)
/* harmony export */ });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version.mjs */ "./node_modules/groq-sdk/version.mjs");
/* harmony import */ var _lib_streaming_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/streaming.mjs */ "./node_modules/groq-sdk/lib/streaming.mjs");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/groq-sdk/error.mjs");
/* harmony import */ var _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shims/index.mjs */ "./node_modules/groq-sdk/_shims/index.mjs");
/* harmony import */ var _uploads_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploads.mjs */ "./node_modules/groq-sdk/uploads.mjs");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractPage_client;






async function defaultParseResponse(props) {
    const { response } = props;
    if (props.options.stream) {
        debug('response', response.status, response.url, response.headers, response.body);
        // Note: there is an invariant here that isn't represented in the type system
        // that if you set `stream: true` the response type must also be `Stream<T>`
        if (props.options.__streamClass) {
            return props.options.__streamClass.fromSSEResponse(response, props.controller);
        }
        return _lib_streaming_mjs__WEBPACK_IMPORTED_MODULE_2__.Stream.fromSSEResponse(response, props.controller);
    }
    // fetch refuses to read the body when the status code is 204.
    if (response.status === 204) {
        return null;
    }
    if (props.options.__binaryResponse) {
        return response;
    }
    const contentType = response.headers.get('content-type');
    const isJSON = contentType?.includes('application/json') || contentType?.includes('application/vnd.api+json');
    if (isJSON) {
        const json = await response.json();
        debug('response', response.status, response.url, response.headers, json);
        return json;
    }
    const text = await response.text();
    debug('response', response.status, response.url, response.headers, text);
    // TODO handle blob, arraybuffer, other content types, etc.
    return text;
}
/**
 * A subclass of `Promise` providing additional helper methods
 * for interacting with the SDK.
 */
class APIPromise extends Promise {
    constructor(responsePromise, parseResponse = defaultParseResponse) {
        super((resolve) => {
            // this is maybe a bit weird but this has to be a no-op to not implicitly
            // parse the response body; instead .then, .catch, .finally are overridden
            // to parse the response
            resolve(null);
        });
        this.responsePromise = responsePromise;
        this.parseResponse = parseResponse;
    }
    _thenUnwrap(transform) {
        return new APIPromise(this.responsePromise, async (props) => transform(await this.parseResponse(props)));
    }
    /**
     * Gets the raw `Response` instance instead of parsing the response
     * data.
     *
     * If you want to parse the response body but still get the `Response`
     * instance, you can use {@link withResponse()}.
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'groq-sdk'`:
     * - `import 'groq-sdk/shims/node'` (if you're running on Node)
     * - `import 'groq-sdk/shims/web'` (otherwise)
     */
    asResponse() {
        return this.responsePromise.then((p) => p.response);
    }
    /**
     * Gets the parsed response data and the raw `Response` instance.
     *
     * If you just want to get the raw `Response` instance without parsing it,
     * you can use {@link asResponse()}.
     *
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'groq-sdk'`:
     * - `import 'groq-sdk/shims/node'` (if you're running on Node)
     * - `import 'groq-sdk/shims/web'` (otherwise)
     */
    async withResponse() {
        const [data, response] = await Promise.all([this.parse(), this.asResponse()]);
        return { data, response };
    }
    parse() {
        if (!this.parsedPromise) {
            this.parsedPromise = this.responsePromise.then(this.parseResponse);
        }
        return this.parsedPromise;
    }
    then(onfulfilled, onrejected) {
        return this.parse().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
        return this.parse().catch(onrejected);
    }
    finally(onfinally) {
        return this.parse().finally(onfinally);
    }
}
class APIClient {
    constructor({ baseURL, maxRetries = 2, timeout = 60000, // 1 minute
    httpAgent, fetch: overridenFetch, }) {
        this.baseURL = baseURL;
        this.maxRetries = validatePositiveInteger('maxRetries', maxRetries);
        this.timeout = validatePositiveInteger('timeout', timeout);
        this.httpAgent = httpAgent;
        this.fetch = overridenFetch ?? _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.fetch;
    }
    authHeaders(opts) {
        return {};
    }
    /**
     * Override this to add your own default headers, for example:
     *
     *  {
     *    ...super.defaultHeaders(),
     *    Authorization: 'Bearer 123',
     *  }
     */
    defaultHeaders(opts) {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': this.getUserAgent(),
            ...getPlatformHeaders(),
            ...this.authHeaders(opts),
        };
    }
    /**
     * Override this to add your own headers validation:
     */
    validateHeaders(headers, customHeaders) { }
    defaultIdempotencyKey() {
        return `stainless-node-retry-${uuid4()}`;
    }
    get(path, opts) {
        return this.methodRequest('get', path, opts);
    }
    post(path, opts) {
        return this.methodRequest('post', path, opts);
    }
    patch(path, opts) {
        return this.methodRequest('patch', path, opts);
    }
    put(path, opts) {
        return this.methodRequest('put', path, opts);
    }
    delete(path, opts) {
        return this.methodRequest('delete', path, opts);
    }
    methodRequest(method, path, opts) {
        return this.request(Promise.resolve(opts).then(async (opts) => {
            const body = opts && (0,_uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.isBlobLike)(opts?.body) ? new DataView(await opts.body.arrayBuffer())
                : opts?.body instanceof DataView ? opts.body
                    : opts?.body instanceof ArrayBuffer ? new DataView(opts.body)
                        : opts && ArrayBuffer.isView(opts?.body) ? new DataView(opts.body.buffer)
                            : opts?.body;
            return { method, path, ...opts, body };
        }));
    }
    getAPIList(path, Page, opts) {
        return this.requestAPIList(Page, { method: 'get', path, ...opts });
    }
    calculateContentLength(body) {
        if (typeof body === 'string') {
            if (typeof Buffer !== 'undefined') {
                return Buffer.byteLength(body, 'utf8').toString();
            }
            if (typeof TextEncoder !== 'undefined') {
                const encoder = new TextEncoder();
                const encoded = encoder.encode(body);
                return encoded.length.toString();
            }
        }
        else if (ArrayBuffer.isView(body)) {
            return body.byteLength.toString();
        }
        return null;
    }
    buildRequest(options) {
        const { method, path, query, headers: headers = {} } = options;
        const body = ArrayBuffer.isView(options.body) || (options.__binaryRequest && typeof options.body === 'string') ?
            options.body
            : (0,_uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.isMultipartBody)(options.body) ? options.body.body
                : options.body ? JSON.stringify(options.body, null, 2)
                    : null;
        const contentLength = this.calculateContentLength(body);
        const url = this.buildURL(path, query);
        if ('timeout' in options)
            validatePositiveInteger('timeout', options.timeout);
        const timeout = options.timeout ?? this.timeout;
        const httpAgent = options.httpAgent ?? this.httpAgent ?? (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultAgent)(url);
        const minAgentTimeout = timeout + 1000;
        if (typeof httpAgent?.options?.timeout === 'number' &&
            minAgentTimeout > (httpAgent.options.timeout ?? 0)) {
            // Allow any given request to bump our agent active socket timeout.
            // This may seem strange, but leaking active sockets should be rare and not particularly problematic,
            // and without mutating agent we would need to create more of them.
            // This tradeoff optimizes for performance.
            httpAgent.options.timeout = minAgentTimeout;
        }
        if (this.idempotencyHeader && method !== 'get') {
            if (!options.idempotencyKey)
                options.idempotencyKey = this.defaultIdempotencyKey();
            headers[this.idempotencyHeader] = options.idempotencyKey;
        }
        const reqHeaders = this.buildHeaders({ options, headers, contentLength });
        const req = {
            method,
            ...(body && { body: body }),
            headers: reqHeaders,
            ...(httpAgent && { agent: httpAgent }),
            // @ts-ignore node-fetch uses a custom AbortSignal type that is
            // not compatible with standard web types
            signal: options.signal ?? null,
        };
        return { req, url, timeout };
    }
    buildHeaders({ options, headers, contentLength, }) {
        const reqHeaders = {};
        if (contentLength) {
            reqHeaders['content-length'] = contentLength;
        }
        const defaultHeaders = this.defaultHeaders(options);
        applyHeadersMut(reqHeaders, defaultHeaders);
        applyHeadersMut(reqHeaders, headers);
        // let builtin fetch set the Content-Type for multipart bodies
        if ((0,_uploads_mjs__WEBPACK_IMPORTED_MODULE_1__.isMultipartBody)(options.body) && _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.kind !== 'node') {
            delete reqHeaders['content-type'];
        }
        this.validateHeaders(reqHeaders, headers);
        return reqHeaders;
    }
    /**
     * Used as a callback for mutating the given `FinalRequestOptions` object.
     */
    async prepareOptions(options) { }
    /**
     * Used as a callback for mutating the given `RequestInit` object.
     *
     * This is useful for cases where you want to add certain headers based off of
     * the request properties, e.g. `method` or `url`.
     */
    async prepareRequest(request, { url, options }) { }
    parseHeaders(headers) {
        return (!headers ? {}
            : Symbol.iterator in headers ?
                Object.fromEntries(Array.from(headers).map((header) => [...header]))
                : { ...headers });
    }
    makeStatusError(status, error, message, headers) {
        return _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIError.generate(status, error, message, headers);
    }
    request(options, remainingRetries = null) {
        return new APIPromise(this.makeRequest(options, remainingRetries));
    }
    async makeRequest(optionsInput, retriesRemaining) {
        const options = await optionsInput;
        if (retriesRemaining == null) {
            retriesRemaining = options.maxRetries ?? this.maxRetries;
        }
        await this.prepareOptions(options);
        const { req, url, timeout } = this.buildRequest(options);
        await this.prepareRequest(req, { url, options });
        debug('request', url, options, req.headers);
        if (options.signal?.aborted) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIUserAbortError();
        }
        const controller = new AbortController();
        const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
        if (response instanceof Error) {
            if (options.signal?.aborted) {
                throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIUserAbortError();
            }
            if (retriesRemaining) {
                return this.retryRequest(options, retriesRemaining);
            }
            if (response.name === 'AbortError') {
                throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIConnectionTimeoutError();
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.APIConnectionError({ cause: response });
        }
        const responseHeaders = createResponseHeaders(response.headers);
        if (!response.ok) {
            if (retriesRemaining && this.shouldRetry(response)) {
                const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
                debug(`response (error; ${retryMessage})`, response.status, url, responseHeaders);
                return this.retryRequest(options, retriesRemaining, responseHeaders);
            }
            const errText = await response.text().catch((e) => castToError(e).message);
            const errJSON = safeJSON(errText);
            const errMessage = errJSON ? undefined : errText;
            const retryMessage = retriesRemaining ? `(error; no more retries left)` : `(error; not retryable)`;
            debug(`response (error; ${retryMessage})`, response.status, url, responseHeaders, errMessage);
            const err = this.makeStatusError(response.status, errJSON, errMessage, responseHeaders);
            throw err;
        }
        return { response, options, controller };
    }
    requestAPIList(Page, options) {
        const request = this.makeRequest(options, null);
        return new PagePromise(this, request, Page);
    }
    buildURL(path, query) {
        const url = isAbsoluteURL(path) ?
            new URL(path)
            : new URL(this.baseURL + (this.baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));
        const defaultQuery = this.defaultQuery();
        if (!isEmptyObj(defaultQuery)) {
            query = { ...defaultQuery, ...query };
        }
        if (typeof query === 'object' && query && !Array.isArray(query)) {
            url.search = this.stringifyQuery(query);
        }
        return url.toString();
    }
    stringifyQuery(query) {
        return Object.entries(query)
            .filter(([_, value]) => typeof value !== 'undefined')
            .map(([key, value]) => {
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            }
            if (value === null) {
                return `${encodeURIComponent(key)}=`;
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError(`Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
        })
            .join('&');
    }
    async fetchWithTimeout(url, init, ms, controller) {
        const { signal, ...options } = init || {};
        if (signal)
            signal.addEventListener('abort', () => controller.abort());
        const timeout = setTimeout(() => controller.abort(), ms);
        return (this.getRequestClient()
            // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
            .fetch.call(undefined, url, { signal: controller.signal, ...options })
            .finally(() => {
            clearTimeout(timeout);
        }));
    }
    getRequestClient() {
        return { fetch: this.fetch };
    }
    shouldRetry(response) {
        // Note this is not a standard header.
        const shouldRetryHeader = response.headers.get('x-should-retry');
        // If the server explicitly says whether or not to retry, obey.
        if (shouldRetryHeader === 'true')
            return true;
        if (shouldRetryHeader === 'false')
            return false;
        // Retry on request timeouts.
        if (response.status === 408)
            return true;
        // Retry on lock timeouts.
        if (response.status === 409)
            return true;
        // Retry on rate limits.
        if (response.status === 429)
            return true;
        // Retry internal errors.
        if (response.status >= 500)
            return true;
        return false;
    }
    async retryRequest(options, retriesRemaining, responseHeaders) {
        let timeoutMillis;
        // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
        const retryAfterMillisHeader = responseHeaders?.['retry-after-ms'];
        if (retryAfterMillisHeader) {
            const timeoutMs = parseFloat(retryAfterMillisHeader);
            if (!Number.isNaN(timeoutMs)) {
                timeoutMillis = timeoutMs;
            }
        }
        // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
        const retryAfterHeader = responseHeaders?.['retry-after'];
        if (retryAfterHeader && !timeoutMillis) {
            const timeoutSeconds = parseFloat(retryAfterHeader);
            if (!Number.isNaN(timeoutSeconds)) {
                timeoutMillis = timeoutSeconds * 1000;
            }
            else {
                timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
            }
        }
        // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
        // just do what it says, but otherwise calculate a default
        if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
            const maxRetries = options.maxRetries ?? this.maxRetries;
            timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
        }
        await sleep(timeoutMillis);
        return this.makeRequest(options, retriesRemaining - 1);
    }
    calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
        const initialRetryDelay = 0.5;
        const maxRetryDelay = 8.0;
        const numRetries = maxRetries - retriesRemaining;
        // Apply exponential backoff, but not more than the max.
        const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);
        // Apply some jitter, take up to at most 25 percent of the retry time.
        const jitter = 1 - Math.random() * 0.25;
        return sleepSeconds * jitter * 1000;
    }
    getUserAgent() {
        return `${this.constructor.name}/JS ${_version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION}`;
    }
}
class AbstractPage {
    constructor(client, response, body, options) {
        _AbstractPage_client.set(this, void 0);
        __classPrivateFieldSet(this, _AbstractPage_client, client, "f");
        this.options = options;
        this.response = response;
        this.body = body;
    }
    hasNextPage() {
        const items = this.getPaginatedItems();
        if (!items.length)
            return false;
        return this.nextPageInfo() != null;
    }
    async getNextPage() {
        const nextInfo = this.nextPageInfo();
        if (!nextInfo) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError('No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.');
        }
        const nextOptions = { ...this.options };
        if ('params' in nextInfo && typeof nextOptions.query === 'object') {
            nextOptions.query = { ...nextOptions.query, ...nextInfo.params };
        }
        else if ('url' in nextInfo) {
            const params = [...Object.entries(nextOptions.query || {}), ...nextInfo.url.searchParams.entries()];
            for (const [key, value] of params) {
                nextInfo.url.searchParams.set(key, value);
            }
            nextOptions.query = undefined;
            nextOptions.path = nextInfo.url.toString();
        }
        return await __classPrivateFieldGet(this, _AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
    }
    async *iterPages() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let page = this;
        yield page;
        while (page.hasNextPage()) {
            page = await page.getNextPage();
            yield page;
        }
    }
    async *[(_AbstractPage_client = new WeakMap(), Symbol.asyncIterator)]() {
        for await (const page of this.iterPages()) {
            for (const item of page.getPaginatedItems()) {
                yield item;
            }
        }
    }
}
/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
class PagePromise extends APIPromise {
    constructor(client, request, Page) {
        super(request, async (props) => new Page(client, props.response, await defaultParseResponse(props), props.options));
    }
    /**
     * Allow auto-paginating iteration on an unawaited list call, eg:
     *
     *    for await (const item of client.items.list()) {
     *      console.log(item)
     *    }
     */
    async *[Symbol.asyncIterator]() {
        const page = await this;
        for await (const item of page) {
            yield item;
        }
    }
}
const createResponseHeaders = (headers) => {
    return new Proxy(Object.fromEntries(
    // @ts-ignore
    headers.entries()), {
        get(target, name) {
            const key = name.toString();
            return target[key.toLowerCase()] || target[key];
        },
    });
};
// This is required so that we can determine if a given object matches the RequestOptions
// type at runtime. While this requires duplication, it is enforced by the TypeScript
// compiler such that any missing / extraneous keys will cause an error.
const requestOptionsKeys = {
    method: true,
    path: true,
    query: true,
    body: true,
    headers: true,
    maxRetries: true,
    stream: true,
    timeout: true,
    httpAgent: true,
    signal: true,
    idempotencyKey: true,
    __binaryRequest: true,
    __binaryResponse: true,
    __streamClass: true,
};
const isRequestOptions = (obj) => {
    return (typeof obj === 'object' &&
        obj !== null &&
        !isEmptyObj(obj) &&
        Object.keys(obj).every((k) => hasOwn(requestOptionsKeys, k)));
};
const getPlatformProperties = () => {
    if (typeof Deno !== 'undefined' && Deno.build != null) {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': normalizePlatform(Deno.build.os),
            'X-Stainless-Arch': normalizeArch(Deno.build.arch),
            'X-Stainless-Runtime': 'deno',
            'X-Stainless-Runtime-Version': typeof Deno.version === 'string' ? Deno.version : Deno.version?.deno ?? 'unknown',
        };
    }
    if (typeof EdgeRuntime !== 'undefined') {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': 'Unknown',
            'X-Stainless-Arch': `other:${EdgeRuntime}`,
            'X-Stainless-Runtime': 'edge',
            'X-Stainless-Runtime-Version': process.version,
        };
    }
    // Check if Node.js
    if (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': normalizePlatform(process.platform),
            'X-Stainless-Arch': normalizeArch(process.arch),
            'X-Stainless-Runtime': 'node',
            'X-Stainless-Runtime-Version': process.version,
        };
    }
    const browserInfo = getBrowserInfo();
    if (browserInfo) {
        return {
            'X-Stainless-Lang': 'js',
            'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
            'X-Stainless-OS': 'Unknown',
            'X-Stainless-Arch': 'unknown',
            'X-Stainless-Runtime': `browser:${browserInfo.browser}`,
            'X-Stainless-Runtime-Version': browserInfo.version,
        };
    }
    // TODO add support for Cloudflare workers, etc.
    return {
        'X-Stainless-Lang': 'js',
        'X-Stainless-Package-Version': _version_mjs__WEBPACK_IMPORTED_MODULE_4__.VERSION,
        'X-Stainless-OS': 'Unknown',
        'X-Stainless-Arch': 'unknown',
        'X-Stainless-Runtime': 'unknown',
        'X-Stainless-Runtime-Version': 'unknown',
    };
};
// Note: modified from https://github.com/JS-DevTools/host-environment/blob/b1ab79ecde37db5d6e163c050e54fe7d287d7c92/src/isomorphic.browser.ts
function getBrowserInfo() {
    if (typeof navigator === 'undefined' || !navigator) {
        return null;
    }
    // NOTE: The order matters here!
    const browserPatterns = [
        { key: 'edge', pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'ie', pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'ie', pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'chrome', pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'firefox', pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
        { key: 'safari', pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ },
    ];
    // Find the FIRST matching browser
    for (const { key, pattern } of browserPatterns) {
        const match = pattern.exec(navigator.userAgent);
        if (match) {
            const major = match[1] || 0;
            const minor = match[2] || 0;
            const patch = match[3] || 0;
            return { browser: key, version: `${major}.${minor}.${patch}` };
        }
    }
    return null;
}
const normalizeArch = (arch) => {
    // Node docs:
    // - https://nodejs.org/api/process.html#processarch
    // Deno docs:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    if (arch === 'x32')
        return 'x32';
    if (arch === 'x86_64' || arch === 'x64')
        return 'x64';
    if (arch === 'arm')
        return 'arm';
    if (arch === 'aarch64' || arch === 'arm64')
        return 'arm64';
    if (arch)
        return `other:${arch}`;
    return 'unknown';
};
const normalizePlatform = (platform) => {
    // Node platforms:
    // - https://nodejs.org/api/process.html#processplatform
    // Deno platforms:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    // - https://github.com/denoland/deno/issues/14799
    platform = platform.toLowerCase();
    // NOTE: this iOS check is untested and may not work
    // Node does not work natively on IOS, there is a fork at
    // https://github.com/nodejs-mobile/nodejs-mobile
    // however it is unknown at the time of writing how to detect if it is running
    if (platform.includes('ios'))
        return 'iOS';
    if (platform === 'android')
        return 'Android';
    if (platform === 'darwin')
        return 'MacOS';
    if (platform === 'win32')
        return 'Windows';
    if (platform === 'freebsd')
        return 'FreeBSD';
    if (platform === 'openbsd')
        return 'OpenBSD';
    if (platform === 'linux')
        return 'Linux';
    if (platform)
        return `Other:${platform}`;
    return 'Unknown';
};
let _platformHeaders;
const getPlatformHeaders = () => {
    return (_platformHeaders ?? (_platformHeaders = getPlatformProperties()));
};
const safeJSON = (text) => {
    try {
        return JSON.parse(text);
    }
    catch (err) {
        return undefined;
    }
};
// https://stackoverflow.com/a/19709846
const startsWithSchemeRegexp = new RegExp('^(?:[a-z]+:)?//', 'i');
const isAbsoluteURL = (url) => {
    return startsWithSchemeRegexp.test(url);
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const validatePositiveInteger = (name, n) => {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError(`${name} must be an integer`);
    }
    if (n < 0) {
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError(`${name} must be a positive integer`);
    }
    return n;
};
const castToError = (err) => {
    if (err instanceof Error)
        return err;
    return new Error(err);
};
const ensurePresent = (value) => {
    if (value == null)
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError(`Expected a value to be given but received ${value} instead.`);
    return value;
};
/**
 * Read an environment variable.
 *
 * Trims beginning and trailing whitespace.
 *
 * Will return undefined if the environment variable doesn't exist or cannot be accessed.
 */
const readEnv = (env) => {
    if (typeof process !== 'undefined') {
        return process.env?.[env]?.trim() ?? undefined;
    }
    if (typeof Deno !== 'undefined') {
        return Deno.env?.get?.(env)?.trim();
    }
    return undefined;
};
const coerceInteger = (value) => {
    if (typeof value === 'number')
        return Math.round(value);
    if (typeof value === 'string')
        return parseInt(value, 10);
    throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
const coerceFloat = (value) => {
    if (typeof value === 'number')
        return value;
    if (typeof value === 'string')
        return parseFloat(value);
    throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
const coerceBoolean = (value) => {
    if (typeof value === 'boolean')
        return value;
    if (typeof value === 'string')
        return value === 'true';
    return Boolean(value);
};
const maybeCoerceInteger = (value) => {
    if (value === undefined) {
        return undefined;
    }
    return coerceInteger(value);
};
const maybeCoerceFloat = (value) => {
    if (value === undefined) {
        return undefined;
    }
    return coerceFloat(value);
};
const maybeCoerceBoolean = (value) => {
    if (value === undefined) {
        return undefined;
    }
    return coerceBoolean(value);
};
// https://stackoverflow.com/a/34491287
function isEmptyObj(obj) {
    if (!obj)
        return true;
    for (const _k in obj)
        return false;
    return true;
}
// https://eslint.org/docs/latest/rules/no-prototype-builtins
function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * Copies headers from "newHeaders" onto "targetHeaders",
 * using lower-case for all properties,
 * ignoring any keys with undefined values,
 * and deleting any keys with null values.
 */
function applyHeadersMut(targetHeaders, newHeaders) {
    for (const k in newHeaders) {
        if (!hasOwn(newHeaders, k))
            continue;
        const lowerKey = k.toLowerCase();
        if (!lowerKey)
            continue;
        const val = newHeaders[k];
        if (val === null) {
            delete targetHeaders[lowerKey];
        }
        else if (val !== undefined) {
            targetHeaders[lowerKey] = val;
        }
    }
}
function debug(action, ...args) {
    if (typeof process !== 'undefined' && process?.env?.['DEBUG'] === 'true') {
        console.log(`Groq:DEBUG:${action}`, ...args);
    }
}
/**
 * https://stackoverflow.com/a/2117523
 */
const uuid4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
const isRunningInBrowser = () => {
    return (
    // @ts-ignore
    typeof window !== 'undefined' &&
        // @ts-ignore
        typeof window.document !== 'undefined' &&
        // @ts-ignore
        typeof navigator !== 'undefined');
};
const isHeadersProtocol = (headers) => {
    return typeof headers?.get === 'function';
};
const getRequiredHeader = (headers, header) => {
    const lowerCasedHeader = header.toLowerCase();
    if (isHeadersProtocol(headers)) {
        // to deal with the case where the header looks like Stainless-Event-Id
        const intercapsHeader = header[0]?.toUpperCase() +
            header.substring(1).replace(/([^\w])(\w)/g, (_m, g1, g2) => g1 + g2.toUpperCase());
        for (const key of [header, lowerCasedHeader, header.toUpperCase(), intercapsHeader]) {
            const value = headers.get(key);
            if (value) {
                return value;
            }
        }
    }
    for (const [key, value] of Object.entries(headers)) {
        if (key.toLowerCase() === lowerCasedHeader) {
            if (Array.isArray(value)) {
                if (value.length <= 1)
                    return value[0];
                console.warn(`Received ${value.length} entries for the ${header} header, using the first entry.`);
                return value[0];
            }
            return value;
        }
    }
    throw new Error(`Could not find ${header} header`);
};
/**
 * Encodes a string to Base64 format.
 */
const toBase64 = (str) => {
    if (!str)
        return '';
    if (typeof Buffer !== 'undefined') {
        return Buffer.from(str).toString('base64');
    }
    if (typeof btoa !== 'undefined') {
        return btoa(str);
    }
    throw new _error_mjs__WEBPACK_IMPORTED_MODULE_3__.GroqError('Cannot generate b64 string; Expected `Buffer` or `btoa` to be defined');
};
function isObj(obj) {
    return obj != null && typeof obj === 'object' && !Array.isArray(obj);
}
//# sourceMappingURL=core.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/error.mjs":
/*!*****************************************!*\
  !*** ./node_modules/groq-sdk/error.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIConnectionError: () => (/* binding */ APIConnectionError),
/* harmony export */   APIConnectionTimeoutError: () => (/* binding */ APIConnectionTimeoutError),
/* harmony export */   APIError: () => (/* binding */ APIError),
/* harmony export */   APIUserAbortError: () => (/* binding */ APIUserAbortError),
/* harmony export */   AuthenticationError: () => (/* binding */ AuthenticationError),
/* harmony export */   BadRequestError: () => (/* binding */ BadRequestError),
/* harmony export */   ConflictError: () => (/* binding */ ConflictError),
/* harmony export */   GroqError: () => (/* binding */ GroqError),
/* harmony export */   InternalServerError: () => (/* binding */ InternalServerError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   PermissionDeniedError: () => (/* binding */ PermissionDeniedError),
/* harmony export */   RateLimitError: () => (/* binding */ RateLimitError),
/* harmony export */   UnprocessableEntityError: () => (/* binding */ UnprocessableEntityError)
/* harmony export */ });
/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.mjs */ "./node_modules/groq-sdk/core.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

class GroqError extends Error {
}
class APIError extends GroqError {
    constructor(status, error, message, headers) {
        super(`${APIError.makeMessage(status, error, message)}`);
        this.status = status;
        this.headers = headers;
        this.error = error;
    }
    static makeMessage(status, error, message) {
        const msg = error?.message ?
            typeof error.message === 'string' ?
                error.message
                : JSON.stringify(error.message)
            : error ? JSON.stringify(error)
                : message;
        if (status && msg) {
            return `${status} ${msg}`;
        }
        if (status) {
            return `${status} status code (no body)`;
        }
        if (msg) {
            return msg;
        }
        return '(no status code or body)';
    }
    static generate(status, errorResponse, message, headers) {
        if (!status) {
            return new APIConnectionError({ cause: (0,_core_mjs__WEBPACK_IMPORTED_MODULE_0__.castToError)(errorResponse) });
        }
        const error = errorResponse;
        if (status === 400) {
            return new BadRequestError(status, error, message, headers);
        }
        if (status === 401) {
            return new AuthenticationError(status, error, message, headers);
        }
        if (status === 403) {
            return new PermissionDeniedError(status, error, message, headers);
        }
        if (status === 404) {
            return new NotFoundError(status, error, message, headers);
        }
        if (status === 409) {
            return new ConflictError(status, error, message, headers);
        }
        if (status === 422) {
            return new UnprocessableEntityError(status, error, message, headers);
        }
        if (status === 429) {
            return new RateLimitError(status, error, message, headers);
        }
        if (status >= 500) {
            return new InternalServerError(status, error, message, headers);
        }
        return new APIError(status, error, message, headers);
    }
}
class APIUserAbortError extends APIError {
    constructor({ message } = {}) {
        super(undefined, undefined, message || 'Request was aborted.', undefined);
        this.status = undefined;
    }
}
class APIConnectionError extends APIError {
    constructor({ message, cause }) {
        super(undefined, undefined, message || 'Connection error.', undefined);
        this.status = undefined;
        // in some environments the 'cause' property is already declared
        // @ts-ignore
        if (cause)
            this.cause = cause;
    }
}
class APIConnectionTimeoutError extends APIConnectionError {
    constructor({ message } = {}) {
        super({ message: message ?? 'Request timed out.' });
    }
}
class BadRequestError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 400;
    }
}
class AuthenticationError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 401;
    }
}
class PermissionDeniedError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 403;
    }
}
class NotFoundError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 404;
    }
}
class ConflictError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 409;
    }
}
class UnprocessableEntityError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 422;
    }
}
class RateLimitError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 429;
    }
}
class InternalServerError extends APIError {
}
//# sourceMappingURL=error.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/groq-sdk/index.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIConnectionError: () => (/* binding */ APIConnectionError),
/* harmony export */   APIConnectionTimeoutError: () => (/* binding */ APIConnectionTimeoutError),
/* harmony export */   APIError: () => (/* binding */ APIError),
/* harmony export */   APIUserAbortError: () => (/* binding */ APIUserAbortError),
/* harmony export */   AuthenticationError: () => (/* binding */ AuthenticationError),
/* harmony export */   BadRequestError: () => (/* binding */ BadRequestError),
/* harmony export */   ConflictError: () => (/* binding */ ConflictError),
/* harmony export */   Groq: () => (/* binding */ Groq),
/* harmony export */   GroqError: () => (/* binding */ GroqError),
/* harmony export */   InternalServerError: () => (/* binding */ InternalServerError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   PermissionDeniedError: () => (/* binding */ PermissionDeniedError),
/* harmony export */   RateLimitError: () => (/* binding */ RateLimitError),
/* harmony export */   UnprocessableEntityError: () => (/* binding */ UnprocessableEntityError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fileFromPath: () => (/* binding */ fileFromPath),
/* harmony export */   toFile: () => (/* binding */ toFile)
/* harmony export */ });
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/groq-sdk/error.mjs");
/* harmony import */ var _uploads_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploads.mjs */ "./node_modules/groq-sdk/uploads.mjs");
/* harmony import */ var _uploads_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uploads.mjs */ "./node_modules/groq-sdk/_shims/index.mjs");
/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.mjs */ "./node_modules/groq-sdk/core.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/groq-sdk/resources/completions.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/groq-sdk/resources/chat/chat.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/groq-sdk/resources/embeddings.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/groq-sdk/resources/audio/audio.mjs");
/* harmony import */ var _resources_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/index.mjs */ "./node_modules/groq-sdk/resources/models.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var _a;




/**
 * API Client for interfacing with the Groq API.
 */
class Groq extends _core_mjs__WEBPACK_IMPORTED_MODULE_0__.APIClient {
    /**
     * API Client for interfacing with the Groq API.
     *
     * @param {string | undefined} [opts.apiKey=process.env['GROQ_API_KEY'] ?? undefined]
     * @param {string} [opts.baseURL=process.env['GROQ_BASE_URL'] ?? https://api.groq.com] - Override the default base URL for the API.
     * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     */
    constructor({ baseURL = _core_mjs__WEBPACK_IMPORTED_MODULE_0__.readEnv('GROQ_BASE_URL'), apiKey = _core_mjs__WEBPACK_IMPORTED_MODULE_0__.readEnv('GROQ_API_KEY'), ...opts } = {}) {
        if (apiKey === undefined) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.GroqError("The GROQ_API_KEY environment variable is missing or empty; either provide it, or instantiate the Groq client with an apiKey option, like new Groq({ apiKey: 'My API Key' }).");
        }
        const options = {
            apiKey,
            ...opts,
            baseURL: baseURL || `https://api.groq.com`,
        };
        if (!options.dangerouslyAllowBrowser && _core_mjs__WEBPACK_IMPORTED_MODULE_0__.isRunningInBrowser()) {
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.GroqError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew Groq({ apiKey, dangerouslyAllowBrowser: true })");
        }
        super({
            baseURL: options.baseURL,
            timeout: options.timeout ?? 60000 /* 1 minute */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            fetch: options.fetch,
        });
        this.completions = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Completions(this);
        this.chat = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Chat(this);
        this.embeddings = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Embeddings(this);
        this.audio = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Audio(this);
        this.models = new _resources_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Models(this);
        this._options = options;
        this.apiKey = apiKey;
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(opts) {
        return {
            ...super.defaultHeaders(opts),
            ...this._options.defaultHeaders,
        };
    }
    authHeaders(opts) {
        return { Authorization: `Bearer ${this.apiKey}` };
    }
}
_a = Groq;
Groq.Groq = _a;
Groq.DEFAULT_TIMEOUT = 60000; // 1 minute
Groq.GroqError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.GroqError;
Groq.APIError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIError;
Groq.APIConnectionError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIConnectionError;
Groq.APIConnectionTimeoutError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIConnectionTimeoutError;
Groq.APIUserAbortError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIUserAbortError;
Groq.NotFoundError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.NotFoundError;
Groq.ConflictError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.ConflictError;
Groq.RateLimitError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.RateLimitError;
Groq.BadRequestError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.BadRequestError;
Groq.AuthenticationError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.AuthenticationError;
Groq.InternalServerError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.InternalServerError;
Groq.PermissionDeniedError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.PermissionDeniedError;
Groq.UnprocessableEntityError = _error_mjs__WEBPACK_IMPORTED_MODULE_1__.UnprocessableEntityError;
Groq.toFile = _uploads_mjs__WEBPACK_IMPORTED_MODULE_7__.toFile;
Groq.fileFromPath = _uploads_mjs__WEBPACK_IMPORTED_MODULE_8__.fileFromPath;
const { GroqError, APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError, } = _error_mjs__WEBPACK_IMPORTED_MODULE_1__;
var toFile = _uploads_mjs__WEBPACK_IMPORTED_MODULE_7__.toFile;
var fileFromPath = _uploads_mjs__WEBPACK_IMPORTED_MODULE_8__.fileFromPath;
(function (Groq) {
    Groq.Completions = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Completions;
    Groq.Chat = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Chat;
    Groq.Embeddings = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Embeddings;
    Groq.Audio = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_5__.Audio;
    Groq.Models = _resources_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Models;
})(Groq || (Groq = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Groq);
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/lib/streaming.mjs":
/*!*************************************************!*\
  !*** ./node_modules/groq-sdk/lib/streaming.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stream: () => (/* binding */ Stream),
/* harmony export */   readableStreamAsyncIterable: () => (/* binding */ readableStreamAsyncIterable)
/* harmony export */ });
/* harmony import */ var _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_shims/index.mjs */ "./node_modules/groq-sdk/_shims/index.mjs");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error.mjs */ "./node_modules/groq-sdk/error.mjs");



class Stream {
    constructor(iterator, controller) {
        this.iterator = iterator;
        this.controller = controller;
    }
    static fromSSEResponse(response, controller) {
        let consumed = false;
        const decoder = new SSEDecoder();
        async function* iterMessages() {
            if (!response.body) {
                controller.abort();
                throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.GroqError(`Attempted to iterate over a response with no body`);
            }
            const lineDecoder = new LineDecoder();
            const iter = readableStreamAsyncIterable(response.body);
            for await (const chunk of iter) {
                for (const line of lineDecoder.decode(chunk)) {
                    const sse = decoder.decode(line);
                    if (sse)
                        yield sse;
                }
            }
            for (const line of lineDecoder.flush()) {
                const sse = decoder.decode(line);
                if (sse)
                    yield sse;
            }
        }
        async function* iterator() {
            if (consumed) {
                throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
            }
            consumed = true;
            let done = false;
            try {
                for await (const sse of iterMessages()) {
                    if (done)
                        continue;
                    if (sse.data.startsWith('[DONE]')) {
                        done = true;
                        continue;
                    }
                    if (sse.event === null || sse.event === 'error') {
                        let data;
                        try {
                            data = JSON.parse(sse.data);
                        }
                        catch (e) {
                            console.error(`Could not parse message into JSON:`, sse.data);
                            console.error(`From chunk:`, sse.raw);
                            throw e;
                        }
                        if (data && data.error) {
                            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.APIError(data.error.status_code, data.error, data.error.message, undefined);
                        }
                        yield data;
                    }
                }
                done = true;
            }
            catch (e) {
                // If the user calls `stream.controller.abort()`, we should exit without throwing.
                if (e instanceof Error && e.name === 'AbortError')
                    return;
                throw e;
            }
            finally {
                // If the user `break`s, abort the ongoing request.
                if (!done)
                    controller.abort();
            }
        }
        return new Stream(iterator, controller);
    }
    /**
     * Generates a Stream from a newline-separated ReadableStream
     * where each item is a JSON value.
     */
    static fromReadableStream(readableStream, controller) {
        let consumed = false;
        async function* iterLines() {
            const lineDecoder = new LineDecoder();
            const iter = readableStreamAsyncIterable(readableStream);
            for await (const chunk of iter) {
                for (const line of lineDecoder.decode(chunk)) {
                    yield line;
                }
            }
            for (const line of lineDecoder.flush()) {
                yield line;
            }
        }
        async function* iterator() {
            if (consumed) {
                throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
            }
            consumed = true;
            let done = false;
            try {
                for await (const line of iterLines()) {
                    if (done)
                        continue;
                    if (line)
                        yield JSON.parse(line);
                }
                done = true;
            }
            catch (e) {
                // If the user calls `stream.controller.abort()`, we should exit without throwing.
                if (e instanceof Error && e.name === 'AbortError')
                    return;
                throw e;
            }
            finally {
                // If the user `break`s, abort the ongoing request.
                if (!done)
                    controller.abort();
            }
        }
        return new Stream(iterator, controller);
    }
    [Symbol.asyncIterator]() {
        return this.iterator();
    }
    /**
     * Splits the stream into two streams which can be
     * independently read from at different speeds.
     */
    tee() {
        const left = [];
        const right = [];
        const iterator = this.iterator();
        const teeIterator = (queue) => {
            return {
                next: () => {
                    if (queue.length === 0) {
                        const result = iterator.next();
                        left.push(result);
                        right.push(result);
                    }
                    return queue.shift();
                },
            };
        };
        return [
            new Stream(() => teeIterator(left), this.controller),
            new Stream(() => teeIterator(right), this.controller),
        ];
    }
    /**
     * Converts this stream to a newline-separated ReadableStream of
     * JSON stringified values in the stream
     * which can be turned back into a Stream with `Stream.fromReadableStream()`.
     */
    toReadableStream() {
        const self = this;
        let iter;
        const encoder = new TextEncoder();
        return new _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.ReadableStream({
            async start() {
                iter = self[Symbol.asyncIterator]();
            },
            async pull(ctrl) {
                try {
                    const { value, done } = await iter.next();
                    if (done)
                        return ctrl.close();
                    const bytes = encoder.encode(JSON.stringify(value) + '\n');
                    ctrl.enqueue(bytes);
                }
                catch (err) {
                    ctrl.error(err);
                }
            },
            async cancel() {
                await iter.return?.();
            },
        });
    }
}
class SSEDecoder {
    constructor() {
        this.event = null;
        this.data = [];
        this.chunks = [];
    }
    decode(line) {
        if (line.endsWith('\r')) {
            line = line.substring(0, line.length - 1);
        }
        if (!line) {
            // empty line and we didn't previously encounter any messages
            if (!this.event && !this.data.length)
                return null;
            const sse = {
                event: this.event,
                data: this.data.join('\n'),
                raw: this.chunks,
            };
            this.event = null;
            this.data = [];
            this.chunks = [];
            return sse;
        }
        this.chunks.push(line);
        if (line.startsWith(':')) {
            return null;
        }
        let [fieldname, _, value] = partition(line, ':');
        if (value.startsWith(' ')) {
            value = value.substring(1);
        }
        if (fieldname === 'event') {
            this.event = value;
        }
        else if (fieldname === 'data') {
            this.data.push(value);
        }
        return null;
    }
}
/**
 * A re-implementation of httpx's `LineDecoder` in Python that handles incrementally
 * reading lines from text.
 *
 * https://github.com/encode/httpx/blob/920333ea98118e9cf617f246905d7b202510941c/httpx/_decoders.py#L258
 */
class LineDecoder {
    constructor() {
        this.buffer = [];
        this.trailingCR = false;
    }
    decode(chunk) {
        let text = this.decodeText(chunk);
        if (this.trailingCR) {
            text = '\r' + text;
            this.trailingCR = false;
        }
        if (text.endsWith('\r')) {
            this.trailingCR = true;
            text = text.slice(0, -1);
        }
        if (!text) {
            return [];
        }
        const trailingNewline = LineDecoder.NEWLINE_CHARS.has(text[text.length - 1] || '');
        let lines = text.split(LineDecoder.NEWLINE_REGEXP);
        if (lines.length === 1 && !trailingNewline) {
            this.buffer.push(lines[0]);
            return [];
        }
        if (this.buffer.length > 0) {
            lines = [this.buffer.join('') + lines[0], ...lines.slice(1)];
            this.buffer = [];
        }
        if (!trailingNewline) {
            this.buffer = [lines.pop() || ''];
        }
        return lines;
    }
    decodeText(bytes) {
        if (bytes == null)
            return '';
        if (typeof bytes === 'string')
            return bytes;
        // Node:
        if (typeof Buffer !== 'undefined') {
            if (bytes instanceof Buffer) {
                return bytes.toString();
            }
            if (bytes instanceof Uint8Array) {
                return Buffer.from(bytes).toString();
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.GroqError(`Unexpected: received non-Uint8Array (${bytes.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`);
        }
        // Browser
        if (typeof TextDecoder !== 'undefined') {
            if (bytes instanceof Uint8Array || bytes instanceof ArrayBuffer) {
                this.textDecoder ?? (this.textDecoder = new TextDecoder('utf8'));
                return this.textDecoder.decode(bytes);
            }
            throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.GroqError(`Unexpected: received non-Uint8Array/ArrayBuffer (${bytes.constructor.name}) in a web platform. Please report this error.`);
        }
        throw new _error_mjs__WEBPACK_IMPORTED_MODULE_1__.GroqError(`Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.`);
    }
    flush() {
        if (!this.buffer.length && !this.trailingCR) {
            return [];
        }
        const lines = [this.buffer.join('')];
        this.buffer = [];
        this.trailingCR = false;
        return lines;
    }
}
// prettier-ignore
LineDecoder.NEWLINE_CHARS = new Set(['\n', '\r', '\x0b', '\x0c', '\x1c', '\x1d', '\x1e', '\x85', '\u2028', '\u2029']);
LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g;
function partition(str, delimiter) {
    const index = str.indexOf(delimiter);
    if (index !== -1) {
        return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
    }
    return [str, '', ''];
}
/**
 * Most browsers don't yet have async iterable support for ReadableStream,
 * and Node has a very different way of reading bytes from its "ReadableStream".
 *
 * This polyfill was pulled from https://github.com/MattiasBuelens/web-streams-polyfill/pull/122#issuecomment-1627354490
 */
function readableStreamAsyncIterable(stream) {
    if (stream[Symbol.asyncIterator])
        return stream;
    const reader = stream.getReader();
    return {
        async next() {
            try {
                const result = await reader.read();
                if (result?.done)
                    reader.releaseLock(); // release lock when stream becomes closed
                return result;
            }
            catch (e) {
                reader.releaseLock(); // release lock when stream becomes errored
                throw e;
            }
        },
        async return() {
            const cancelPromise = reader.cancel();
            reader.releaseLock();
            await cancelPromise;
            return { done: true, value: undefined };
        },
        [Symbol.asyncIterator]() {
            return this;
        },
    };
}
//# sourceMappingURL=streaming.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resource.mjs":
/*!********************************************!*\
  !*** ./node_modules/groq-sdk/resource.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIResource: () => (/* binding */ APIResource)
/* harmony export */ });
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
class APIResource {
    constructor(client) {
        this._client = client;
    }
}
//# sourceMappingURL=resource.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/audio/audio.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/groq-sdk/resources/audio/audio.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Audio: () => (/* binding */ Audio)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
/* harmony import */ var _transcriptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transcriptions.mjs */ "./node_modules/groq-sdk/resources/audio/transcriptions.mjs");
/* harmony import */ var _translations_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations.mjs */ "./node_modules/groq-sdk/resources/audio/translations.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.



class Audio extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    constructor() {
        super(...arguments);
        this.transcriptions = new _transcriptions_mjs__WEBPACK_IMPORTED_MODULE_1__.Transcriptions(this._client);
        this.translations = new _translations_mjs__WEBPACK_IMPORTED_MODULE_2__.Translations(this._client);
    }
}
(function (Audio) {
    Audio.Transcriptions = _transcriptions_mjs__WEBPACK_IMPORTED_MODULE_1__.Transcriptions;
    Audio.Translations = _translations_mjs__WEBPACK_IMPORTED_MODULE_2__.Translations;
})(Audio || (Audio = {}));
//# sourceMappingURL=audio.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/audio/transcriptions.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/groq-sdk/resources/audio/transcriptions.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transcriptions: () => (/* binding */ Transcriptions)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core.mjs */ "./node_modules/groq-sdk/uploads.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.


class Transcriptions extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Transcribes audio into the input language.
     */
    create(body, options) {
        return this._client.post('/openai/v1/audio/transcriptions', _core_mjs__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions({ body, ...options }));
    }
}
(function (Transcriptions) {
})(Transcriptions || (Transcriptions = {}));
//# sourceMappingURL=transcriptions.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/audio/translations.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/groq-sdk/resources/audio/translations.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Translations: () => (/* binding */ Translations)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core.mjs */ "./node_modules/groq-sdk/uploads.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.


class Translations extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Translates audio into English.
     */
    create(body, options) {
        return this._client.post('/openai/v1/audio/translations', _core_mjs__WEBPACK_IMPORTED_MODULE_1__.multipartFormRequestOptions({ body, ...options }));
    }
}
(function (Translations) {
})(Translations || (Translations = {}));
//# sourceMappingURL=translations.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/chat/chat.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/groq-sdk/resources/chat/chat.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chat: () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
/* harmony import */ var _completions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completions.mjs */ "./node_modules/groq-sdk/resources/chat/completions.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.


class Chat extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    constructor() {
        super(...arguments);
        this.completions = new _completions_mjs__WEBPACK_IMPORTED_MODULE_1__.Completions(this._client);
    }
}
(function (Chat) {
    Chat.Completions = _completions_mjs__WEBPACK_IMPORTED_MODULE_1__.Completions;
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/chat/completions.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/groq-sdk/resources/chat/completions.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Completions: () => (/* binding */ Completions)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

class Completions extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    create(body, options) {
        return this._client.post('/openai/v1/chat/completions', {
            body,
            ...options,
            stream: body.stream ?? false,
        });
    }
}
(function (Completions) {
})(Completions || (Completions = {}));
//# sourceMappingURL=completions.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/completions.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/groq-sdk/resources/completions.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Completions: () => (/* binding */ Completions)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

class Completions extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
}
(function (Completions) {
})(Completions || (Completions = {}));
//# sourceMappingURL=completions.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/embeddings.mjs":
/*!********************************************************!*\
  !*** ./node_modules/groq-sdk/resources/embeddings.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Embeddings: () => (/* binding */ Embeddings)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

class Embeddings extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Creates an embedding vector representing the input text.
     */
    create(body, options) {
        return this._client.post('/openai/v1/embeddings', { body, ...options });
    }
}
(function (Embeddings) {
})(Embeddings || (Embeddings = {}));
//# sourceMappingURL=embeddings.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/resources/models.mjs":
/*!****************************************************!*\
  !*** ./node_modules/groq-sdk/resources/models.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Models: () => (/* binding */ Models)
/* harmony export */ });
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource.mjs */ "./node_modules/groq-sdk/resource.mjs");
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

class Models extends _resource_mjs__WEBPACK_IMPORTED_MODULE_0__.APIResource {
    /**
     * Get a specific model
     */
    retrieve(model, options) {
        return this._client.get(`/openai/v1/models/${model}`, options);
    }
    /**
     * get all available models
     */
    list(options) {
        return this._client.get('/openai/v1/models', options);
    }
    /**
     * Delete a model
     */
    delete(model, options) {
        return this._client.delete(`/openai/v1/models/${model}`, options);
    }
}
(function (Models) {
})(Models || (Models = {}));
//# sourceMappingURL=models.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/uploads.mjs":
/*!*******************************************!*\
  !*** ./node_modules/groq-sdk/uploads.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm),
/* harmony export */   fileFromPath: () => (/* reexport safe */ _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.fileFromPath),
/* harmony export */   isBlobLike: () => (/* binding */ isBlobLike),
/* harmony export */   isFileLike: () => (/* binding */ isFileLike),
/* harmony export */   isMultipartBody: () => (/* binding */ isMultipartBody),
/* harmony export */   isResponseLike: () => (/* binding */ isResponseLike),
/* harmony export */   isUploadable: () => (/* binding */ isUploadable),
/* harmony export */   maybeMultipartFormRequestOptions: () => (/* binding */ maybeMultipartFormRequestOptions),
/* harmony export */   multipartFormRequestOptions: () => (/* binding */ multipartFormRequestOptions),
/* harmony export */   toFile: () => (/* binding */ toFile)
/* harmony export */ });
/* harmony import */ var _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shims/index.mjs */ "./node_modules/groq-sdk/_shims/index.mjs");


const isResponseLike = (value) => value != null &&
    typeof value === 'object' &&
    typeof value.url === 'string' &&
    typeof value.blob === 'function';
const isFileLike = (value) => value != null &&
    typeof value === 'object' &&
    typeof value.name === 'string' &&
    typeof value.lastModified === 'number' &&
    isBlobLike(value);
/**
 * The BlobLike type omits arrayBuffer() because @types/node-fetch@^2.6.4 lacks it; but this check
 * adds the arrayBuffer() method type because it is available and used at runtime
 */
const isBlobLike = (value) => value != null &&
    typeof value === 'object' &&
    typeof value.size === 'number' &&
    typeof value.type === 'string' &&
    typeof value.text === 'function' &&
    typeof value.slice === 'function' &&
    typeof value.arrayBuffer === 'function';
const isUploadable = (value) => {
    return isFileLike(value) || isResponseLike(value) || (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.isFsReadStream)(value);
};
/**
 * Helper for creating a {@link File} to pass to an SDK upload method from a variety of different data formats
 * @param value the raw content of the file.  Can be an {@link Uploadable}, {@link BlobLikePart}, or {@link AsyncIterable} of {@link BlobLikePart}s
 * @param {string=} name the name of the file. If omitted, toFile will try to determine a file name from bits if possible
 * @param {Object=} options additional properties
 * @param {string=} options.type the MIME type of the content
 * @param {number=} options.lastModified the last modified timestamp
 * @returns a {@link File} with the given properties
 */
async function toFile(value, name, options) {
    // If it's a promise, resolve it.
    value = await value;
    // Use the file's options if there isn't one provided
    options ?? (options = isFileLike(value) ? { lastModified: value.lastModified, type: value.type } : {});
    if (isResponseLike(value)) {
        const blob = await value.blob();
        name || (name = new URL(value.url).pathname.split(/[\\/]/).pop() ?? 'unknown_file');
        return new _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.File([blob], name, options);
    }
    const bits = await getBytes(value);
    name || (name = getName(value) ?? 'unknown_file');
    if (!options.type) {
        const type = bits[0]?.type;
        if (typeof type === 'string') {
            options = { ...options, type };
        }
    }
    return new _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.File(bits, name, options);
}
async function getBytes(value) {
    let parts = [];
    if (typeof value === 'string' ||
        ArrayBuffer.isView(value) || // includes Uint8Array, Buffer, etc.
        value instanceof ArrayBuffer) {
        parts.push(value);
    }
    else if (isBlobLike(value)) {
        parts.push(await value.arrayBuffer());
    }
    else if (isAsyncIterableIterator(value) // includes Readable, ReadableStream, etc.
    ) {
        for await (const chunk of value) {
            parts.push(chunk); // TODO, consider validating?
        }
    }
    else {
        throw new Error(`Unexpected data type: ${typeof value}; constructor: ${value?.constructor
            ?.name}; props: ${propsForError(value)}`);
    }
    return parts;
}
function propsForError(value) {
    const props = Object.getOwnPropertyNames(value);
    return `[${props.map((p) => `"${p}"`).join(', ')}]`;
}
function getName(value) {
    return (getStringFromMaybeBuffer(value.name) ||
        getStringFromMaybeBuffer(value.filename) ||
        // For fs.ReadStream
        getStringFromMaybeBuffer(value.path)?.split(/[\\/]/).pop());
}
const getStringFromMaybeBuffer = (x) => {
    if (typeof x === 'string')
        return x;
    if (typeof Buffer !== 'undefined' && x instanceof Buffer)
        return String(x);
    return undefined;
};
const isAsyncIterableIterator = (value) => value != null && typeof value === 'object' && typeof value[Symbol.asyncIterator] === 'function';
const isMultipartBody = (body) => body && typeof body === 'object' && body.body && body[Symbol.toStringTag] === 'MultipartBody';
/**
 * Returns a multipart/form-data request if any part of the given request body contains a File / Blob value.
 * Otherwise returns the request as is.
 */
const maybeMultipartFormRequestOptions = async (opts) => {
    if (!hasUploadableValue(opts.body))
        return opts;
    const form = await createForm(opts.body);
    return (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getMultipartRequestOptions)(form, opts);
};
const multipartFormRequestOptions = async (opts) => {
    const form = await createForm(opts.body);
    return (0,_shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getMultipartRequestOptions)(form, opts);
};
const createForm = async (body) => {
    const form = new _shims_index_mjs__WEBPACK_IMPORTED_MODULE_0__.FormData();
    await Promise.all(Object.entries(body || {}).map(([key, value]) => addFormValue(form, key, value)));
    return form;
};
const hasUploadableValue = (value) => {
    if (isUploadable(value))
        return true;
    if (Array.isArray(value))
        return value.some(hasUploadableValue);
    if (value && typeof value === 'object') {
        for (const k in value) {
            if (hasUploadableValue(value[k]))
                return true;
        }
    }
    return false;
};
const addFormValue = async (form, key, value) => {
    if (value === undefined)
        return;
    if (value == null) {
        throw new TypeError(`Received null for "${key}"; to pass null in FormData, you must use the string 'null'`);
    }
    // TODO: make nested formats configurable
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        form.append(key, String(value));
    }
    else if (isUploadable(value)) {
        const file = await toFile(value);
        form.append(key, file);
    }
    else if (Array.isArray(value)) {
        await Promise.all(value.map((entry) => addFormValue(form, key + '[]', entry)));
    }
    else if (typeof value === 'object') {
        await Promise.all(Object.entries(value).map(([name, prop]) => addFormValue(form, `${key}[${name}]`, prop)));
    }
    else {
        throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${value} instead`);
    }
};
//# sourceMappingURL=uploads.mjs.map

/***/ }),

/***/ "./node_modules/groq-sdk/version.mjs":
/*!*******************************************!*\
  !*** ./node_modules/groq-sdk/version.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = '0.7.0'; // x-release-please-version
//# sourceMappingURL=version.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! groq-sdk */ "./node_modules/groq-sdk/index.mjs");


//==== IMPORTS ====//
// import OpenAI from "openai";
// import Groq from "groq-sdk";
// const Groq = require("groq-sdk");
// import { Groq } from "../node_modules/groq-sdk/index.js";
// import { Groq } from "../node_modules/groq-sdk/index.js";
// const Groq = require("./node_modules/groq-sdk");



//==== CHATLOG ====//
function addToChat(s, do_save = true) {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(s);
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("chatlog");
  currentDiv.appendChild(newDiv);
  console.log(s);
  if (do_save) saveToLocalStorage(s);
}

function saveToLocalStorage(message) {
  let chatLog = JSON.parse(localStorage.getItem("chatLog")) || [];
  chatLog.push(message);
  console.log(chatLog)
  localStorage.setItem("chatLog", JSON.stringify(chatLog));
}

function loadChatLog() {
  const chatLog = JSON.parse(localStorage.getItem("chatLog")) || [];
  chatLog.forEach((message) => addToChat(message, false));
}

function clearChatLog() {
  localStorage.removeItem("chatLog");
  const chatlogDiv = document.getElementById("chatlog");
  chatlogDiv.innerHTML = "";
}

//==== CHATTING FEATURE ====//
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("input-field-form");
  const input = document.getElementById("input-field");
  const chatClear = document.getElementById("clear-chat");
  // const output = document.getElementById('output');

  loadChatLog();
  console.log('test');

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    const userInput = input.value.trim();
    console.log(userInput);
    addToChat(userInput);
    messageGroq(userInput);
    // output.textContent = `You entered: ${userInput}`;
    input.value = ""; // Clear the input field
  }

  // Handle form submission
  form.addEventListener("submit", handleSubmit);

  // Handle Enter key press
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  });

  chatClear.addEventListener("click", clearChatLog);
});
// const inputs = document.getElementById("input-field").elements;
// const input = inputs[0];

// addEventListener("submit", (event) => {});

// onsubmit = (event) => {};

//==== GROQ CALLS ====//
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const groq = new groq_sdk__WEBPACK_IMPORTED_MODULE_0__.Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

// export
async function messageGroq(content) {
  const chatCompletion = await getGroqChatCompletion(content);
  // Print the completion returned by the LLM.
  //   console.log(chatCompletion.choices[0]?.message?.content || "");
  const s = chatCompletion.choices[0]?.message?.content || "";
  addToChat(s);
}

// export
async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama3-8b-8192",
  });
}

//==== MAIN ====//
// addToChat(instruction)
// main()

// call api
// fetch webpage elements

//==== mic attempts

// export const injectMicrophonePermissionIframe = () => {
//   const iframe = document.createElement("iframe");
//   iframe.setAttribute("hidden", "hidden");
//   iframe.setAttribute("id", "permissionsIFrame");
//   iframe.setAttribute("allow", "microphone");
//   iframe.src = chrome.runtime.getURL("sidebar.html");
//   document.body.appendChild(iframe);
// };

// navigator.mediaDevices.getUserMedia({ audio: true })
// .then(
//   (stream) => {
//     const audio = stream;
//   })
// .catch((err) => {
//   console.error(`${err.name}: ${err.message}`);
// })

// import Vapi from "@vapi-ai/web";

// const vapi = new Vapi("b1dcd146-1d59-4b93-802c-2ca2ce1c4462");

// const assistantOptions = {
//     name: "Vapi’s Pizza Front Desk",
//     firstMessage: "Vappy’s Pizzeria speaking, how can I help you?",
//     transcriber: {
//       provider: "deepgram",
//       model: "nova-2",
//       language: "en-US",
//     },
//     voice: {
//       provider: "playht",
//       voiceId: "jennifer",
//     },
//     model: {
//       provider: "openai",
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content: `You are a voice assistant for Vappy’s Pizzeria, a pizza shop located on the Internet.

//   Your job is to take the order of customers calling in. The menu has only 3 types
//   of items: pizza, sides, and drinks. There are no other types of items on the menu.

//   1) There are 3 kinds of pizza: cheese pizza, pepperoni pizza, and vegetarian pizza
//   (often called "veggie" pizza).
//   2) There are 3 kinds of sides: french fries, garlic bread, and chicken wings.
//   3) There are 2 kinds of drinks: soda, and water. (if a customer asks for a
//   brand name like "coca cola", just let them know that we only offer "soda")

//   Customers can only order 1 of each item. If a customer tries to order more
//   than 1 item within each category, politely inform them that only 1 item per
//   category may be ordered.

//   Customers must order 1 item from at least 1 category to have a complete order.
//   They can order just a pizza, or just a side, or just a drink.

//   Be sure to introduce the menu items, don't assume that the caller knows what
//   is on the menu (most appropriate at the start of the conversation).

//   If the customer goes off-topic or off-track and talks about anything but the
//   process of ordering, politely steer the conversation back to collecting their order.

//   Once you have all the information you need pertaining to their order, you can
//   end the conversation. You can say something like "Awesome, we'll have that ready
//   for you in 10-20 minutes." to naturally let the customer know the order has been
//   fully communicated.

//   It is important that you collect the order in an efficient manner (succinct replies
//   & direct questions). You only have 1 task here, and it is to collect the customers
//   order, then end the conversation.

//   - Be sure to be kind of funny and witty!
//   - Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
//   - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
//         },
//       ],
//     },
//   };

//   vapi.start(assistantOptions);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);


// Function to find input elements and textareas
function findInputElements() {
    const elements = [];

    // Find input elements
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(el => {
        if (el.id) {
            elements.push({ id: el.id, tag: 'input', name: el.name || '' });
        }
    });

    // Find textarea elements
    const textareaElements = documesnt.querySelectorAll('textarea');
    textareaElements.forEach(el => {
        if (el.id) {
            elements.push({ id: el.id, tag: 'textarea', name: el.name || '' });
        }
    });

    return elements;
}

// Function to set the value of an input or textarea
function setValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.value = value;
        console.log(`Value set for element ${elementId}: ${value}`);
    } else {
        console.log(`Element with ID ${elementId} not found`);
    }
}

// Function to submit a form
function submitForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.submit();
        console.log(`Form with ID ${formId} submitted.`);
    } else {
        console.log(`Form with ID ${formId} not found.`);
    }
}

// This function will execute a predefined set of actions
function executeActions(actions) {
    actions.forEach(action => {
        if (action.type === "input") {
            setValue(action.id, action.value);
        } else if (action.type === "submit") {
            submitForm(action.id);
        }
    });
}

// Function to be called when the "Debug" button is clicked
function triggerDebugActions() {
    // Log available elements on the page (optional)
    const elements = findInputElements();
    console.log("Elements found: ", JSON.stringify(elements, null, 2));  // Improved logging for better visibility

    // Example actions to perform (these could be dynamic or predefined)
    const actions = [
        { type: "input", id: "input-field", value: "Debug Test" },  // Set value in input field
        { type: "submit", id: "input-field-form" }  // Submit the form
    ];

    // Execute actions
    executeActions(actions);
}

document.addEventListener('DOMContentLoaded', function() {
    const debugBtn = document.getElementById('debug-button');

    console.log('doin stuff')

    debugBtn.addEventListener("click", () => {
        console.log('debug was clicked')
        // Call the function defined in content.js to execute actions
        triggerDebugActions();
    });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map