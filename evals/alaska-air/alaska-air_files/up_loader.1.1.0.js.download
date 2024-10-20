(function () {
    "use strict";
    // log related
    let logLevel = null,
        logCategory = "(TTD)";
    const LOG_LEVELS = ["debug", "info", "warn", "error"];
    let Logger = LOG_LEVELS.reduce(((e, t, n) => (e[t] = function () {
        const e = "debug" === t ? "log" : t;
        if (logLevel && console && "function" == typeof console[e]) {
            const a = LOG_LEVELS.indexOf(logLevel.toString().toLocaleLowerCase());
            if (!0 === logLevel || a > -1 && n >= a) {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                const [n, ...a] = [...o];
                console[e](`${t.toUpperCase()} - ${logCategory} ${n}`, ...a)
            }
        }
    }, e)), {});

    function updateLogLevl(l) {
        logLevel = l
    }

    // config example:
    // {
    //     "cssSelectors": ["input[type=email]"],
    //     "detectionSubject": ["email"],
    //     "detectionEventType": "onclick",
    //     "triggerElements": ["button.form-submit"],
    //     "detectDynamicNodes": false
    // }
    let config = null;
    let scopedDynamicObservers = {};
    let scopedTriggers = {};
    let scopedValidInputs = {};
    let scopedEventListeners = {};

    function startDetection(c) {
        config = c;

        Logger.info("Detection started! Library is configured to detect: ", config.detectionSubject);
        Logger.info("Detection event type is ", config.detectionEventType);
        Logger.debug("Full config: ", config);

        if (config.detectionEventType === "onclick") {
            // deprecated onclick, switch to click
            config.detectionEventType = "click";
        }

        if ("onsubmit" === config.detectionEventType || "click" === config.detectionEventType) {
            let body = document.querySelector("body");
            if (body) {
                restartDetection(body, "document");
                if (config.detectDynamicNodes) startDynamicObserver(body, "document");
            }
        }
        else {
            Logger.debug("Detection type not supported! We will not start auto detection.");
        }

        // Check events layer after we started the detection.
        window.ttdPixelEventsLayer = window.ttdPixelEventsLayer || [];
        // Trigger existing events, in case identifier event is pushed before js load.
        window.ttdPixelEventsLayer.forEach(argsToSdkFunction);
        window.ttdPixelEventsLayer.push = function (args) {
            Array.prototype.push.call(window.ttdPixelEventsLayer, args);
            argsToSdkFunction(args);
            return this.length;
        };
    }

    function argsToSdkFunction(args) {
        const method = args[0];
        const params = args[1];
        switch (method) {
            case "setIdentifier":
                setIdentifier(params);
                break;
            default:
                throw "method not implemented";
        }
    }

    function restartDetection(root, scopeName) {
        clearDetectionHooks(scopeName);
        addDetectionHooks(root, scopeName);
    }

    function addDetectionHooks(root, scopeName) {
        let triggers = collectElements(root, scopeName, config.triggerElements);
        let inputs = collectElements(root, scopeName, config.cssSelectors);

        scopedTriggers[scopeName] = scopedTriggers[scopeName] || [];
        scopedValidInputs[scopeName] = scopedValidInputs[scopeName] || [];
        scopedEventListeners[scopeName] = scopedEventListeners[scopeName] || [];

        for (let e of inputs) {
            e && e.tagName && "INPUT" === e.tagName && scopedValidInputs[scopeName].push(e);
        }

        Logger.debug(`triggers ["${scopeName}"] `, triggers);
        Logger.debug(`validInputs ["${scopeName}"] `, inputs);

        triggers.forEach((e => {
            scopedTriggers[scopeName].push(e);
        }));

        for (let e = 0; e < triggers.length; e++) {
            var clickFunc = function clicked () {
                try {
                    Logger.debug("Detect event: ", config.detectionEventType, "on element, ", triggers[e]);
                    let allValidInputs = Object.entries(scopedValidInputs).map(kv => kv[1]).flatMap(inputs => inputs);
                    for (let i of allValidInputs) {
                        let t = i.value.trim();
                        if (foundId(t)) {
                            Logger.debug("We detected: ", t);
                            stopDetection();
                            break;
                        }
                    }
                } catch (e) { }

            }
            scopedEventListeners[scopeName].push(clickFunc);
            triggers[e].addEventListener(config.detectionEventType, clickFunc, { once: true, capture: true });
        }

        let sr = findShadowRoots(root);
        for (let n = 0; n < sr.length; n++) {
            const shadowRoot = sr[n];
            const subscopeName = scopeName + "/shadow_root_" + n;
            addDetectionHooks(shadowRoot, subscopeName);
            startDynamicObserver(shadowRoot, subscopeName);
        }
    }

    function stopDetection() {
        Logger.debug("Detection stopped.");
        stopDynamicObserver();
        clearDetectionHooks("all");
    }

    function clearDetectionHooks(scopeName) {
        Logger.debug(`clearing detection hooks (${scopeName})`);
        if (scopeName === "all") {
            for (const [sname, triggers] of Object.entries(scopedTriggers)) {
                if (triggers) {
                    for (let e = 0; e < triggers.length; e++) triggers[e].removeEventListener(config.detectionEventType, scopedEventListeners[sname][e], {capture: true});
                }
            }
            scopedTriggers = {}
            scopedEventListeners = [];
        } else {
            let scopeNamesToClear = [];
            // clear current scope and all subscopes because addDetectionHooks will add them recursively.
            for (const [sname, triggers] of Object.entries(scopedTriggers)) {
                if (sname.startsWith(scopeName)) {
                    if (triggers) {
                        for (let e = 0; e < triggers.length; e++) triggers[e].removeEventListener(config.detectionEventType, scopedEventListeners[sname][e], {capture: true});
                    }
                    scopeNamesToClear.push(sname);
                }
            }
            for (let i = 0; i < scopeNamesToClear.length; i++) {
                let sname = scopeNamesToClear[i];
                scopedTriggers[sname] = [];
                scopedEventListeners[sname] = [];
            }
        }
    }

    function foundId(e) {
        return foundEmail(e) || foundPhone(e);
    }

    function foundEmail(e) {
        const g = /((([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,}))/i;
        if (config.detectionSubject.includes("email") && g.test(e)) {
            const t = normalizeEmail(e.match(g)[0]);
            Logger.debug("We detected email: " + t);
            dispatch(t, "email");
            return true;
        }
        return false;
    }

    function foundPhone(e) {
        return false;
    }

    function normalizeEmail(e) {
        return e.toLowerCase().trim();
    }

    function startDynamicObserver(root, scopeName) {
        if (!config.detectDynamicNodes) {
            return;
        }
        scopedDynamicObservers[scopeName] = new ThrottledMutationObserver(function (e, t) {
            Logger.debug("Detected dynamically added nodes.");
            // do not reassign: t is passed through as the original mutation observer, not throttled
            // scopedDynamicObservers[scopeName] = t;
            restartDetection(root, scopeName);
        }, 500);
        scopedDynamicObservers[scopeName].observe(root, {
            childList: true,
            subtree: true,
            attributes: true,
        })
    }

    function stopDynamicObserver() {
        if (!config.detectDynamicNodes) {
            return;
        }
        Logger.debug("Checking for dynamically added elements is turned off.");

        for (const [_, observer] of Object.entries(scopedDynamicObservers)) {
            if (observer) {
                observer.disconnect();
            }
            scopedDynamicObservers = {};
        }
    }

    // {
    //     "type": "email",
    //     "identifier": "example@thetradedesk.com"
    // }
    function setIdentifier(details) {
        if (!details || !details.type || !details.identifier) {
            Logger.error("wrong identifier format");
            return;
        }
        if (details.type !== "email") {
            Logger.error("Identifier type is not supported, ", details.type);
            return;
        }
        dispatch(details.identifier, details.type);
        stopDetection();
    }

    function dispatch(i, t) {
        if (i && t) {
            const e = new CustomEvent("detected-identifier", {
                detail: {
                    identifier: i,
                    type: t
                }
            });
            Logger.info("Dispatched event with identifier: ", i, " and type: ", t);
            window.dispatchEvent(e);
        }
    }

    function canAccessIframe(e, t) {
        if (!t.src) return false;
        try {
            const n = e === new URL(t.src).hostname;
            if (n) {
                Logger.debug("Iframe " + t.src + " can be accessed");
            }
            return n;
        } catch (e) {
            Logger.debug("error: ", e)
            return false;
        }
    }

    // name function so we can reference it in `removeEventListener`
    function restartDetectionOnLoad(evt) {
        if (!evt || !evt.__upixel_detection) return;
        try {
            restartDetection(evt.__upixel_detection.root, evt.__upixel_detection.scopeName);
        } catch (e) { }
    }

    function collectElements(root, scopeName, cssSelectors) {
        Logger.debug(`collectElements("${scopeName}", ${cssSelectors})`);
        let collections = [];
        for (let e of cssSelectors) {
            if (e.length > 0) {
                let elements = root.querySelectorAll(e);
                if (elements) {
                    elements.forEach((e => {
                        collections.includes(e) || collections.push(e)
                    }));
                }
            }
        }
        let h = window.location.hostname,
            t = document.getElementsByTagName("iframe");
        for (let n = 0; n < t.length; n++) {
            const iframe = t[n];
            if (canAccessIframe(h, iframe)) {
                iframe.__upixel_detection = { root: root, scopeName: scopeName + "/iframe" };
                iframe.removeEventListener('load', restartDetectionOnLoad);
                iframe.addEventListener('load', restartDetectionOnLoad);
                if (iframe.contentDocument) {
                    for (let e of cssSelectors)
                        if (e.length > 0) {
                            iframe.contentDocument.querySelectorAll(e).forEach((e => {
                                collections.includes(e) || collections.push(e)
                            }))
                        }
                }
            }
        }

        return collections;
    }

    function findShadowRoots(ele) {
        return [...ele.querySelectorAll('*')].filter(e => !!e.shadowRoot).map(e => e.shadowRoot);
    }

    function ThrottledMutationObserver(callback, minDelayMs) {
        this.callback = callback;
        this.minDelayMs = minDelayMs;
        this.lastInvocationTime = 0;
        this.args = null;
        this.nextTimeoutHandle = null;
        this.mutationObserver = new MutationObserver(this.throttledCallback.bind(this));
    }

    ThrottledMutationObserver.prototype.observe = function (target, options) {
        this.mutationObserver.observe(target, options);
    };

    ThrottledMutationObserver.prototype.disconnect = function () {
        if (this.nextTimeoutHandle != null) {
            clearTimeout(this.nextTimeoutHandle);
        }
        this.mutationObserver.disconnect();
    };

    ThrottledMutationObserver.prototype.takeRecords = function () {
        return this.mutationObserver.takeRecords();
    };

    ThrottledMutationObserver.prototype.throttledCallback = function (e, t) {
        var now = Date.now();

        if (this.args != null) {
            // Case 1: There is already a pending invocation.
            // Update the arguments to invoke the callback with and bail out.
            this.args = arguments;
        } else if (this.lastInvocationTime + this.minDelayMs < now) {
            // Case 2: No pending invocation and the previous one is old enough,
            // so invoke the callback now.
            this.lastInvocationTime = now;
            this.callback(e, t);
        } else {
            // Case 3: Recently invoked, so schedule the next invocation later.
            this.args = arguments;
            this.nextTimeoutHandle = setTimeout(function () {
                this.lastInvocationTime = Date.now();
                this.nextTimeoutHandle = null;
                this.callback.apply(null, this.args);
                this.args = null;
            }.bind(this), this.minDelayMs);
        }
    };

    window.ttdPixel = window.ttdPixel || {};
    window.ttdPixel.startDetection = startDetection;
    window.ttdPixel.setIdentifier = setIdentifier;
    // window.ttdPixel.activeDetection = window.ttdPixel.activeDetection || null;
    // window.ttdPixel.uid2SdkLoaderPromise = window.ttdPixel.uid2SdkLoaderPromise || null;
    window.ttdPixel.enableDebug = () => updateLogLevl("debug");
    window.ttdPixel.disableLog = () => updateLogLevl(null);
})();

/**
 * Pulled from jQuery.
 * Used to wait for the DOM to load before calling function.
 * Fixes issues if body is not loaded yet; we need to wait.
 */
var ttd_dom_ready = (function () {

    var readyList,
        DOMContentLoaded,
        class2type = {};
    class2type["[object Boolean]"] = "boolean";
    class2type["[object Number]"] = "number";
    class2type["[object String]"] = "string";
    class2type["[object Function]"] = "function";
    class2type["[object Array]"] = "array";
    class2type["[object Date]"] = "date";
    class2type["[object RegExp]"] = "regexp";
    class2type["[object Object]"] = "object";

    var ReadyObj = {
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function (hold) {
            if (hold) {
                ReadyObj.readyWait++;
            } else {
                ReadyObj.ready(true);
            }
        },
        // Handle when the DOM is ready
        ready: function (wait) {
            // Either a released hold or an DOMready/load event and not yet ready
            if ((wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady)) {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if (!document.body) {
                    return setTimeout(ReadyObj.ready, 1);
                }

                // Remember that the DOM is ready
                ReadyObj.isReady = true;
                // If a normal DOM Ready event fired, decrement, and wait if need be
                if (wait !== true && --ReadyObj.readyWait > 0) {
                    return;
                }
                // If there are functions bound, to execute
                readyList.resolveWith(document, [ReadyObj]);

                // Trigger any bound ready events
                //if ( ReadyObj.fn.trigger ) {
                //    ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                //}
            }
        },
        bindReady: function () {
            if (readyList) {
                return;
            }
            readyList = ReadyObj._Deferred();

            // Catch cases where $(document).ready() is called after the
            // browser event has already occurred.
            if (document.readyState === "complete") {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                return setTimeout(ReadyObj.ready, 1);
            }

            // Mozilla, Opera and webkit nightlies currently support this event
            if (document.addEventListener) {
                // Use the handy event callback
                document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
                // A fallback to window.onload, that will always work
                window.addEventListener("load", ReadyObj.ready, false);

                // If IE event model is used
            } else if (document.attachEvent) {
                // ensure firing before onload,
                // maybe late but safe also for iframes
                document.attachEvent("onreadystatechange", DOMContentLoaded);

                // A fallback to window.onload, that will always work
                window.attachEvent("onload", ReadyObj.ready);

                // If IE and not a frame
                // continually check to see if the document is ready
                var toplevel = false;

                try {
                    toplevel = window.frameElement == null;
                } catch (e) { }

                if (document.documentElement.doScroll && toplevel) {
                    doScrollCheck();
                }
            }
        },
        _Deferred: function () {
            var // callbacks list
                callbacks = [],
                // stored [ context , args ]
                fired,
                // to avoid firing when already doing so
                firing,
                // flag to know if the deferred has been cancelled
                cancelled,
                // the deferred itself
                deferred = {

                    // done( f1, f2, ...)
                    done: function () {
                        if (!cancelled) {
                            var args = arguments,
                                i,
                                length,
                                elem,
                                type,
                                _fired;
                            if (fired) {
                                _fired = fired;
                                fired = 0;
                            }
                            for (i = 0, length = args.length; i < length; i++) {
                                elem = args[i];
                                type = ReadyObj.type(elem);
                                if (type === "array") {
                                    deferred.done.apply(deferred, elem);
                                } else if (type === "function") {
                                    callbacks.push(elem);
                                }
                            }
                            if (_fired) {
                                deferred.resolveWith(_fired[0], _fired[1]);
                            }
                        }
                        return this;
                    },

                    // resolve with given context and args
                    resolveWith: function (context, args) {
                        if (!cancelled && !fired && !firing) {
                            // make sure args are available (#8421)
                            args = args || [];
                            firing = 1;
                            try {
                                while (callbacks[0]) {
                                    callbacks.shift().apply(context, args);//shifts a callback, and applies it to document
                                }
                            }
                            finally {
                                fired = [context, args];
                                firing = 0;
                            }
                        }
                        return this;
                    },

                    // resolve with this as context and given arguments
                    resolve: function () {
                        deferred.resolveWith(this, arguments);
                        return this;
                    },

                    // Has this deferred been resolved?
                    isResolved: function () {
                        return !!(firing || fired);
                    },

                    // Cancel
                    cancel: function () {
                        cancelled = 1;
                        callbacks = [];
                        return this;
                    }
                };

            return deferred;
        },
        type: function (obj) {
            return obj == null ?
                String(obj) :
                class2type[Object.prototype.toString.call(obj)] || "object";
        }
    }
    // The DOM ready check for Internet Explorer
    function doScrollCheck() {
        if (ReadyObj.isReady) {
            return;
        }

        try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            document.documentElement.doScroll("left");
        } catch (e) {
            setTimeout(doScrollCheck, 1);
            return;
        }

        // and execute any waiting functions
        ReadyObj.ready();
    }
    // Cleanup functions for the document ready method
    if (document.addEventListener) {
        DOMContentLoaded = function () {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
            ReadyObj.ready();
        };

    } else if (document.attachEvent) {
        DOMContentLoaded = function () {
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if (document.readyState === "complete") {
                document.detachEvent("onreadystatechange", DOMContentLoaded);
                ReadyObj.ready();
            }
        };
    }
    function ready(fn) {
        // Attach the listeners
        ReadyObj.bindReady();

        var type = ReadyObj.type(fn);

        // Add the callback
        readyList.done(fn);//readyList is result of _Deferred()
    }
    return ready;
})();

//Define the TTDUniversalPixelApi object.
function TTDUniversalPixelApi(optionalTopLevelUrl) {
    return new _TTDUniversalPixelApi(optionalTopLevelUrl);
}

function _TTDUniversalPixelApi(optionalTopLevelUrl) {

    //Make sure this matches with the loader script version and
    //corresponding universal_pixel.<upLoaderScriptVersion>.js exists.
    var upLoaderScriptVersion = "1.1.0";

    const advertisersOptedInToRealtime = ["ru6qq3d", "ufqc9us", "ugj89je", "foh1kju", "1znfrjo"];

    function getVersion() {
        return upLoaderScriptVersion;
    }

    function getHostname(fullURL) {
        let url = new URL(fullURL);
        return url.hostname;
    }

    async function initializePixel(adv, tag_ids, base_src, dyn_params, uid_config, route_realtime_api) {
        this._uid2SdkListenerLock = {};

        this.setupUid2Sdk = function (pid, onLoad, onError) {
            if (this._uid2SdkListenerLock[pid] !== undefined) {
                return;
            }
            this._uid2SdkListenerLock[pid] = 1;
            if (window.__uid2 === undefined && window.ttdPixel.uid2SdkLoaderPromise === undefined) {
                window.ttdPixel.uid2SdkLoaderPromise = new Promise((resolve, reject) => {
                    let scriptElement = document.createElement("script");
                    scriptElement.setAttribute("defer", true);
                    scriptElement.setAttribute("src", "https://js.adsrvr.org/uid2-sdk.js");
                    scriptElement.addEventListener("load", () => {
                        resolve();
                        onLoad();
                    });
                    scriptElement.addEventListener("error", (e) => {
                        reject(e);
                        onError(e);
                    });
                    document.body.appendChild(scriptElement);
                });
            } else {
                let asyncOnLoad = async () => {
                    try {
                        await window.ttdPixel.uid2SdkLoaderPromise;
                        onLoad();
                    } catch (e) {
                        console.warn("Failed to load uid2 sdk: ", e);
                    }
                }
                asyncOnLoad();
            }
        }

        var embedElem = document.getElementsByTagName('body')[0];
        if (!embedElem) {
            return;
        }

        var src_with_params = "";
        var paramMap = {};

        var monetaryValueParamMap = {
            "MonetaryValue": "v",
            "MonetaryValueFormat": "vf"
        };

        var optionalParams = [];

        if (typeof (_pixelParams) !== 'undefined') {
            for (var i in _pixelParams) {
                var value = _pixelParams[i];
                var key = monetaryValueParamMap[i];

                // Make sure we have a valid key and value
                // Also check that the value doesn't match the macro replacement format
                if (key && value && !(/%%.*%%/i.test(value))) {
                    let encodedUri = encodeURIComponent(value);
                    optionalParams.push(key + "=" + encodedUri);
                    paramMap[key] = encodedUri;
                }
            }
        }

        var advParam = "adv=" + adv;
        var upParams = "upid=" + tag_ids.join(",");
        paramMap["adv"] = adv;

        // Use the given toplevel url or try to figure it out ourself
        var ref = optionalTopLevelUrl || TryFindTopMostReferrer();
        let encodedUri = encodeURIComponent(ref);
        paramMap["ref"] = ref;

        let upVersion = getVersion();
        paramMap["upv"] = upVersion;

        src_with_params = base_src
            + "?" + advParam
            + "&ref=" + encodedUri
            + "&" + upParams
            //This is the script version and should always match the version of the loader script.
            + "&upv=" + upVersion;

        if (dyn_params) {
            for (var param in dyn_params) {
                src_with_params = src_with_params + "&" + param + "=" + dyn_params[param];
                paramMap[param] = dyn_params[param];
            }
        }

        if (optionalParams.length > 0)
            src_with_params = src_with_params + "&" + optionalParams.join("&");

        if (navigator.joinAdInterestGroup) {
            src_with_params = src_with_params + "&paapi=1"
            paramMap["paapi"] = "1";
        }

        if (localStorage.getItem("UID2-sdk-identity")) {
            src_with_params = src_with_params + "&uidcs=1"; // UID_IDENTITY_EXISTS = 1;
            paramMap["uidcs"] = "1";
        }

        let legacyIframeCreatePromiseResolve;
        const legacyIframeCreatePromise = new Promise((resolve, reject) => {
            legacyIframeCreatePromiseResolve = resolve;
        })

        //
        // GDPR Alert!
        // if we are executing on a page that has integrated with a Consent Management Provider (CMP), then we need to wait until
        // user consent has been gathered, either via an onscreen consent screen or a cache cookie from a previously shown consent screen. the CMP code is
        // responsible for doing this and we can count on a standard __cmp function to exist if the page has loaded a CMP. once consent is available
        // we get called in a callback that can then fire the pixel. if there's no CMP, then we fire the pixel right away
        // https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/CMP%20JS%20API%20v1.1%20Final.md#CMP-JS-API
        //
        var pingRequestTimeout = null;
        var pingRequestHasTimedOut = false;
        var requestStartTime = null;
        if (typeof (__tcfapi) === 'function') {
            listenToCmpAndFirePixel();
        }
        else if (typeof (__cmp) === 'function') {
            pingCmpAndFirePixel();
        }
        else if (typeof (__gpp) === 'function') {
            listenToGppAndFirePixel()
        }
        else {
            firePixel();
        }

        function isUidConfigCstgValid() {
            if (typeof uid_config.subscriptionId !== "string" || typeof uid_config.serverPublicKey !== "string") {
                console.error('subscription id and serverPublicKey must both be provided and both be strings to run cstg');
                return false;
            }
            return true;
        }

        // uid_config example
        // {
        //     "baseUrl": "",
        //     "subscriptionId": "",
        //     "serverPublicKey": "",
        //     "cssSelectors": ["input[type=email]"],
        //     "detectionSubject": ["email"],
        //     "detectionEventType": "onclick",
        //     "triggerElements": ["button.form-submit"],
        //     "detectDynamicNodes": false,
        //     "email": "",
        //     "emailHash": "",
        //     "phone": ""
        // }
        let usingLocalUIDConfig = false;

        if (uid_config !== undefined) {
            usingLocalUIDConfig = true;
        }

        async function visibilityChangeHandler() {
            if (document.visibilityState === "hidden") {
                if (route_realtime_api) {
                    await fireRealtimeConversionEvent(paramMap);
                }
                document.removeEventListener("visibilitychange", visibilityChangeHandler);
            }
        }

        const UID_IDENTITY_EXISTS = 1;
        const UID_IDENTITY_GENERATED = 2;

        async function fireOrDetect(identity_getter, uid_config) {
            try {
                let identity = identity_getter();
                // if no identity and PII from uid_config exists, use PII to run CSTG and set identity
                if (!identity && isUidConfigCstgValid()) {
                    if (uid_config.email !== undefined) {
                        window.__uid2.setIdentityFromEmail(uid_config.email, uid_config);
                    }
                    else if(uid_config.emailHash !== undefined) {
                        window.__uid2.setIdentityFromEmailHash(uid_config.emailHash, uid_config);
                    }
                    else if (uid_config.phone !== undefined) {
                        window.__uid2.setIdentityFromPhone(uid_config.phone, uid_config);
                    }
                }
                if (identity) {
                    if (route_realtime_api) {
                        await fireRealtimeConversionEvent(paramMap, identity.advertising_token);
                    }
                    else {
                        await firePixelWithUID(identity.advertising_token);
                    }
                    document.removeEventListener("visibilitychange", visibilityChangeHandler);
                }
                else if (!window.ttdPixel.activeDetection) {
                    let detectionPromise = new Promise((resolve) => {
                        window.addEventListener("detected-identifier", function (e) {
                            // currently only detect email
                            resolve(e.detail.identifier);
                            // edge case: multiple client-generate if another `fireOrDetect` is called
                            // after this line and before `await __uid2.setIdentityFromEmail(..)` is finished
                            window.ttdPixel.activeDetection = null;
                        });
                        window.ttdPixel.startDetection(uid_config);
                    });
                    window.ttdPixel.activeDetection = detectionPromise;

                    let email = await detectionPromise;
                    await window.__uid2.setIdentityFromEmail(
                        email,
                        uid_config
                    );
                } else {
                    // There is no identity but an active detection.
                    // We do nothing, since we must have listened to "IdentityUpdated" event, the active detection will carry our weight.
                    // Do not queue up another client-generate call here.
                }
            } catch (e) {
                console.warn("error setting up fireOrDetact: ", e);
            }
        }

        function setupUid2Hooks(uid_config) {
            document.addEventListener("visibilitychange", visibilityChangeHandler);
            try {
                // reference: https://unifiedid.com/docs/sdks/client-side-identity#event-types-and-payload-details
                window.__uid2.callbacks.push(async (eventType, payload) => {
                    switch (eventType) {
                        // The SdkLoaded event occurs just once.
                        case "SdkLoaded":
                            try {
                                // initialize uid2 sdk and avoid double uid2.init with best effort
                                window.__ttd_m_invoke_once = window.__ttd_m_invoke_once || {};
                                if (!window.__ttd_m_invoke_once._uid2_init) {
                                    window.__ttd_m_invoke_once._uid2_init = 1;
                                    if (!uid_config.baseUrl) {
                                        uid_config.baseUrl = "https://global.prod.uidapi.com";
                                    }
                                    __uid2.init({
                                        baseUrl: uid_config.baseUrl,
                                    });
                                }
                            } catch (e) {
                                console.info("Non-TTD actor initialized UID2 SDK, mind the consistency of UID2 baseUrl.")
                            }
                            break;

                        // This is guaranteed to be invoked even the init is already completed
                        case "InitCompleted":
                            await fireOrDetect(() => payload.identity, uid_config);
                            break;

                        // The IdentityUpdated event will happen when a UID2 token was generated or refreshed.
                        case "IdentityUpdated":
                            if (route_realtime_api) {
                                await fireRealtimeConversionEvent(paramMap, payload.identity.advertising_token);
                            }
                            else {
                                await firePixelWithUID(payload.identity.advertising_token)
                            }
                            document.removeEventListener("visibilitychange", visibilityChangeHandler);
                            break;
                    }
                });

            } catch (e) {
                console.warn("Did not setup uid2 hooks: ", e);
            }
        }

        let pixel_identifier = adv + ":" + tag_ids.join(",");
        if (usingLocalUIDConfig) {
            // explicit uid config
            this.setupUid2Sdk(
                pixel_identifier,
                () => setupUid2Hooks(uid_config),
                (e) => { console.warn("UID2 enabled but failed to register hooks: ", e); }
            );
        } else {
            // until beacon supplies uid config and wakes us up
            window.addEventListener(
                "message",
                (event) => {
                    try {
                        if (event.origin !== null && event.origin !== "null") {
                            const e = new URL(event.origin);
                            if (e.hostname.endsWith(".adsrvr.org")) {
                                // if local uid_config exists, skip parsing
                                if (!usingLocalUIDConfig) {
                                    if (typeof event.data === "string") {
                                        const parsedEventData = JSON.parse(event.data);
                                        // checking for UID2 type parsing
                                        if (parsedEventData.type && typeof parsedEventData.type === "string" && parsedEventData.type === "UID2") {
                                            if (parsedEventData.advertiserId && typeof parsedEventData.advertiserId == "string" && parsedEventData.advertiserId == adv) {
                                                this.setupUid2Sdk(
                                                    pixel_identifier,
                                                    () => setupUid2Hooks(parsedEventData),
                                                    (e) => { console.warn("UID2 enabled but failed to register hooks: ", e); }
                                                );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (e) {

                    }
                }
            )
        }

        var listenToGppRequestTimeout = null;
        function listenToGppAndFirePixel() {
            // https://github.com/InteractiveAdvertisingBureau/Global-Privacy-Platform/blob/main/Core/CMP%20API%20Specification.md
            var gppObject = getGppStringAndApplicableSections();
            if (typeof gppObject.gppString !== 'undefined') {
                firePixelGpp(gppObject.gppString, gppObject.gppSid);
                return;
            }

            listenToGppRequestTimeout = setTimeout(listenToGppTimeout, 1000);
            __gpp('addEventListener', listenToGppCallback);
        }

        function getGppStringAndApplicableSections() {
            var gppData = __gpp('getGPPData');
            // version 1.0
            var gppObject = {
                gppString: gppData?.gppString,
                gppSid: gppData?.applicableSections?.join(",")
            }
            if (typeof gppObject.gppString === 'undefined') {
                // version 1.1
                var gppPing = __gpp('ping');
                gppObject.gppString = gppPing?.gppString;
                gppObject.gppSid = gppPing?.applicableSections?.join(",");
            }
            return gppObject;
        }

        var listenToGppRequestHasTimedOut = false;
        function listenToGppCallback(evt, success) {
            if (listenToGppRequestHasTimedOut) {
                __gpp('removeEventListener', function () { }, evt.listenerId);
                return;
            }

            if (evt.eventName !== 'signalStatus' || evt.data !== 'ready') {
                return;
            }
            var gppObject = getGppStringAndApplicableSections();
            clearTimeout(listenToGppRequestTimeout);
            requestStartTime = new Date();
            firePixelGpp(gppObject.gppString, gppObject.gppSid)
            __gpp('removeEventListener', function () { }, evt.listenerId);
        }

        function listenToGppTimeout() {
            listenToGppRequestHasTimedOut = true;
            firePixel();
        }

        function pingCmpAndFirePixel() {
            pingRequestTimeout = setTimeout(pingCmpTimeout, 1000);
            __cmp('ping', null, pingCmpCallback);
        }

        function pingCmpTimeout() {
            pingRequestHasTimedOut = true;
            firePixel();
        }

        function pingCmpCallback(pingResult) {
            if (pingRequestHasTimedOut) {
                // The timeout callback will fire the pixel for us
                return;
            }

            if (pingResult.cmpLoaded || pingResult.gdprAppliesGlobally) {
                // If GdprAppliesGlobally is true, the best we can do is be queued and wait
                clearTimeout(pingRequestTimeout);
                requestStartTime = new Date();
                __cmp('getConsentData', null, firePixel);
            }
            else {
                // The cmp hasn't loaded yet, keep trying with 200ms delay
                setTimeout(function () { __cmp('ping', null, pingCmpCallback); }, 200);
            }
        }

        function firePixel(cmpResult) {
            if (requestStartTime != null) {
                let responseTimeDelta = new Date() - requestStartTime;
                src_with_params = src_with_params + "&ret=" + responseTimeDelta;
                paramMap["ret"] = responseTimeDelta;
            }

            function getGdprAppliesParam(gdprApplies) {
                return gdprApplies ? "1" : "0";
            }

            if (pingRequestHasTimedOut) {
                src_with_params = src_with_params + "&pto=1"
                paramMap["pto"] = "1";
            }

            if (cmpResult != null) {
                let gdprParam = getGdprAppliesParam(cmpResult.gdprApplies);
                src_with_params = src_with_params +
                    "&gdpr=" + gdprParam +
                    "&gdpr_consent=" + cmpResult.consentData;
                paramMap["gdpr"] = gdprParam;
                paramMap["gdpr_consent"] = cmpResult.consentData;
            }
            createIFrame()
        }

        // legacy
        async function createIFrame() {
            let iFrameId = "universal_pixel_" + tag_ids.join("_");
            let title = "TTD Universal Pixel";
            legacyIframeCreatePromiseResolve(src_with_params);

            await createIFrameInternal(src_with_params, iFrameId, title);
            if (route_realtime_api && uid_config === undefined) {
                await fireRealtimeConversionEvent(paramMap);
            }
        }

        async function firePixelWithUID(uid_token, collection_source) {
            let legacyIframeSrc = await legacyIframeCreatePromise;
            let src = legacyIframeSrc +
                "&uiddt=" +
                uid_token +
                "&uidcs=" +
                collection_source;

            let iFrameId = "universal_pixel_" + tag_ids.join("_") + "_uid";
            let title = "TTD Universal Pixel with UID";

            await createIFrameInternal(src, iFrameId, title)
        }

        async function createIFrameInternal(src, iFrameId, title) {
            let existingElement = document.getElementById(iFrameId);
            do {
                if (existingElement) {
                    existingElement.parentElement.removeChild(existingElement);
                }
                existingElement = document.getElementById(iFrameId);
            } while (existingElement)

            let iframe = document.createElement("iframe");
            iframe.setAttribute("id", iFrameId);
            iframe.setAttribute("height", 0);
            iframe.setAttribute("width", 0);
            iframe.setAttribute("style", "display:none;");
            iframe.setAttribute("src", src);
            iframe.setAttribute("title", title);

            function addIframe() {
                embedElem.appendChild(iframe);
            }

            if (document.readyState === "complete") {
                setTimeout(addIframe, 0);
            }
            else if (window.addEventListener) {
                window.addEventListener("load", addIframe);
            }
            else if (window.attachEvent) { // Support for IE8 and below
                window.attachEvent("onload", addIframe);
            }
            else {
                addIframe();
            }
        }

        // GDPR V2 Alert!!!
        // https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md
        var listenToRequestTimeout = null;
        var listenToCmpRequestHasTimedOut = false;

        function listenToCmpAndFirePixel() {
            // listenToCmpCallback has 1000 millisecond to succeed otherwise we will time out and fire the pixel
            listenToRequestTimeout = setTimeout(listenToCmpTimeout, 1000);
            __tcfapi('addEventListener', 2, listenToCmpCallback);
        }

        function listenToCmpTimeout() {
            listenToCmpRequestHasTimedOut = true;
            firePixel();
        }

        function listenToCmpCallback(tcData, success) {
            if (listenToCmpRequestHasTimedOut) {
                __tcfapi('removeEventListener', 2, function (success) { }, tcData.listenerId);
                return;
            }

            if (success) {
                clearTimeout(listenToRequestTimeout);
                firePixelV2(tcData);
                requestStartTime = new Date();
                __tcfapi('removeEventListener', 2, function (success) { }, tcData.listenerId);
                return;
            }
            // Keep listening until timed out
        }

        function firePixelV2(tcData) {
            if (requestStartTime != null) {
                let responseTimeDelta = new Date() - requestStartTime;
                src_with_params = src_with_params + "&ret=" + responseTimeDelta;
                paramMap["ret"] = responseTimeDelta;
            }

            function getGdprAppliesParam(gdprApplies) {
                return gdprApplies ? "1" : "0";
            }

            if (listenToCmpRequestHasTimedOut) {
                src_with_params = src_with_params + "&pto=1"
                paramMap["pto"] = "1";
            }

            if (tcData != null) {
                let gdprParam = getGdprAppliesParam(tcData.gdprApplies);
                src_with_params = src_with_params +
                    "&gdpr=" + gdprParam +
                    "&gdpr_consent=" + tcData.tcString;
                paramMap["gdpr"] = gdprParam;
                paramMap["gdpr_consent"] = tcData.tcString;
            }
            createIFrame()
        }

        function firePixelGpp(gppString, gppSid) {
            if (requestStartTime != null) {
                let responseTimeDelta = new Date() - requestStartTime;
                src_with_params = src_with_params + "&ret=" + responseTimeDelta;
                paramMap["ret"] = responseTimeDelta;
            }

            if (gppString != null) {
                src_with_params = src_with_params +
                    "&gpp_consent=" + gppString;
                paramMap["gpp_consent"] = gppString;
            }

            if (gppSid != null) {
                src_with_params = src_with_params +
                    "&gpp_sid=" + gppSid;
                paramMap["gpp_sid"] = gppSid;
            }
            createIFrame()
        }

        async function fireRealtimeConversionEvent(paramMap, advertising_token) {
            paramMap["pixel_id"] = tag_ids[0];
            paramMap["referrer_url"] = paramMap["ref"]; //todo remove this shortly once the server handles it correctly

            if (advertising_token) {
                paramMap["uid2_token"] = advertising_token;
            }

            const body = {
                data: [
                    {
                        ...paramMap,
                    },
                ],
            };

            const eventsURL = `https://${getHostname(base_src)}/track/realtimeconversion`

            return new Promise((resolve, reject) => {
                const xmlHttp = new XMLHttpRequest();

                xmlHttp.withCredentials = true;
                xmlHttp.open("POST", eventsURL);
                xmlHttp.setRequestHeader("Content-type", "application/json");
                xmlHttp.setRequestHeader("eventDataSource", "UpSdk");
                xmlHttp.setRequestHeader("eventDataSourceVersion", getVersion());

                xmlHttp.onload = () => {
                    if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
                        resolve(xmlHttp.response);
                    } else {
                        reject(xmlHttp.response);
                    }
                };
                xmlHttp.onerror = () => reject(xmlHttp.statusText);

                xmlHttp.send(JSON.stringify(body));
            });
        }
    };

    // universal_pixel.js
    this.init = async function (adv, tag_ids, base_src, dyn_params, uid_config, route_realtime_api) {

        // Context: The signature for init used to be (adv, tag_ids, base_src, verifyCallback, dyn_params)
        //          We removed verifyCallback (a string), but we still have this function be called out in the wild
        //          To make everyone happy we just remove the fourth argument if it's a string, and move the fifth
        //          argument (dynamic parameters) into its spot. At this point, the arguments match up with the signature.
        if (typeof arguments[3] === 'string' || (!arguments[3] && arguments.length >= 7)) {
            arguments[3] = null;
            if (arguments.length > 4) {
                for (var i = 4; i < arguments.length; i++) {
                    arguments[i - 1] = arguments[i];
                }
                delete arguments[arguments.length - 1];
            }
        }

        if (!adv || adv == "" || !tag_ids || tag_ids.length <= 0) {
            return;
        }

        if (advertisersOptedInToRealtime.includes(adv)){
            route_realtime_api = true;
        }

        let base_src_url = base_src;
        if (route_realtime_api) {
            const rootURL = getHostname(base_src);
            base_src_url = `https://${rootURL}/track/cei`;
        }
        await initializePixel(adv, tag_ids, base_src_url, dyn_params, uid_config, route_realtime_api);
    }

    // Extract a value from the query string of a full url
    function GetQueryStringValue(url, name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(url);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Walks up to the top most IFRAME that can still be accessed without violating same-origin
    // policy and retrieves it's document's referrer value which is a URL for the parent window.
    // Before IFRAMEs are traveresed we attempt to read the top.location in case we are in the same
    // domain.
    function TryFindTopMostReferrer() {

        var currentWindow = window;
        var referrerTrace = '';
        var hasError = false;
        try {
            //Accessing the property of the location would either succeed or fail with XSS error.
            if (top.location.href) {
                referrerTrace = top.location.href;
            }
        }
        catch (error) {
            hasError = true;
        }

        if (hasError) {
            while (true) {
                try {
                    //Accessing the property of the document would either succeed or fail with XSS error.
                    referrerTrace = currentWindow.document.referrer;

                    if (window.parent != currentWindow) {
                        currentWindow = window.parent;
                    }
                    else {
                        break;
                    }
                } catch (error) {
                    break;
                }
            }
        }

        // This is a targeted fix for buckmason.com who puts our pixel into multiple levels of
        // iframes that preventing us from getting the real top level url. Fortunately, they put
        // the top level url on the query string of the url we were able to get. Charles 02/2015
        if (-1 < referrerTrace.indexOf('cloudfront.net'))
            referrerTrace = GetQueryStringValue(referrerTrace, 'url') || referrerTrace;

        return referrerTrace;
    }
}

// This block is only for exporting the main function for testing in UPixel.spec.js
if(typeof process !== "undefined" && process?.env?.JEST_WORKER_ID !== undefined) {
    module.exports ={TTDUniversalPixelApi};
}

