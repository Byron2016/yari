// URLs of 500 pages randomly sampled from 4824 affected Web/API pages.
const TEST_GROUP = new Set(
  [
    "SVGStyleElement/media",
    "MutationEvent/initMutationEvent",
    "CSSPrimitiveValue/getStringValue",
    "RTCIceCandidateStats/candidateType",
    "RTCIceCandidate/relatedPort",
    "Cache/match",
    "URLSearchParams/append",
    "XRWebGLBinding/createEquirectLayer",
    "Element/ariaBusy",
    "GPUQuerySet/count",
    "UIEvent/detail",
    "Selection/toString",
    "MediaTrackConstraints/frameRate",
    "FileSystemSyncAccessHandle/truncate",
    "StylePropertyMapReadOnly/keys",
    "NetworkInformation/type",
    "WebGLRenderingContext/uniform",
    "DOMMatrixReadOnly/flipX",
    "XMLHttpRequest/status",
    "RTCIceTransport/getLocalCandidates",
    "BroadcastChannel/close",
    "GPUDevice/lost",
    "RTCOutboundRtpStreamStats/perDscpPacketsSent",
    "AudioListener/upZ",
    "BackgroundFetchRegistration/id",
    "ReadableStream/ReadableStream",
    "Notification/body",
    "InterventionReportBody/lineNumber",
    "WorkerNavigator/locks",
    "InterventionReportBody/toJSON",
    "ElementInternals/ariaValueMax",
    "Response/bodyUsed",
    "HTMLMediaElement/setSinkId",
    "GPU/getPreferredCanvasFormat",
    "WebGL2RenderingContext/beginTransformFeedback",
    "CSSScopeRule/start",
    "CacheStorage/keys",
    "DedicatedWorkerGlobalScope/postMessage",
    "RTCDTMFSender/toneBuffer",
    "PushSubscriptionOptions/applicationServerKey",
    "WebTransportDatagramDuplexStream/incomingMaxAge",
    "BatteryManager/charging",
    "Navigator/vibrate",
    "StylePropertyMapReadOnly/size",
    "TextMetrics/fontBoundingBoxAscent",
    "XRInputSourcesChangeEvent/XRInputSourcesChangeEvent",
    "MediaDeviceInfo/deviceId",
    "BaseAudioContext/createChannelMerger",
    "ImageData/ImageData",
    "URL/origin",
    "ServiceWorkerRegistration/active",
    "NavigationHistoryEntry/key",
    "ContentIndex/add",
    "Document/xmlVersion",
    "RemotePlayback/watchAvailability",
    "Document/documentElement",
    "MathMLElement/style",
    "WebGL2RenderingContext/uniformMatrix",
    "DeprecationReportBody/lineNumber",
    "SerialPort/forget",
    "GPUDevice/popErrorScope",
    "TaskController/TaskController",
    "FileSystemEntry/isDirectory",
    "console/timelog_static",
    "Selection/type",
    "XRViewerPose/views",
    "CanvasRenderingContext2D/fontStretch",
    "BaseAudioContext/createConvolver",
    "Touch/radiusX",
    "WebGL2RenderingContext/texSubImage3D",
    "Event/srcElement",
    "Element/ariaPosInSet",
    "CSSUnparsedValue/entries",
    "XRLightEstimate/primaryLightIntensity",
    "XRSession/requestReferenceSpace",
    "VideoFrame/allocationSize",
    "AudioContext/createMediaStreamTrackSource",
    "GPUQueue/onSubmittedWorkDone",
    "ExtendableMessageEvent/lastEventId",
    "MediaEncryptedEvent/initData",
    "HTMLAreaElement/ping",
    "EXT_disjoint_timer_query/getQueryObjectEXT",
    "Worklet/addModule",
    "Request/clone",
    "PasswordCredential/name",
    "Location/origin",
    "MediaTrackConstraints/sampleSize",
    "GPURenderPassEncoder/executeBundles",
    "XMLHttpRequest/send",
    "console/time_static",
    "HTMLTableElement/frame",
    "IDBObjectStore/getKey",
    "TextTrackCue/id",
    "WritableStreamDefaultController/signal",
    "RadioNodeList/value",
    "Element/ariaBrailleRoleDescription",
    "NavigatorUAData/toJSON",
    "Cache/delete",
    "OVR_multiview2/framebufferTextureMultiviewOVR",
    "WebGLRenderingContext/getSupportedExtensions",
    "DedicatedWorkerGlobalScope/name",
    "DOMPointReadOnly/y",
    "Range/collapsed",
    "USBDevice/controlTransferIn",
    "console/profile_static",
    "HTMLImageElement/decoding",
    "Window/postMessage",
    "HTMLVideoElement/videoWidth",
    "TextTrack/language",
    "Element/getElementsByClassName",
    "AudioEncoder/isConfigSupported_static",
    "AudioData/AudioData",
    "CSSNumericValue/type",
    "IDBDatabase/name",
    "AnimationEvent/pseudoElement",
    "BaseAudioContext/createAnalyser",
    "CSSVariableReferenceValue/variable",
    "PresentationConnection/binaryType",
    "CredentialsContainer/create",
    "ElementInternals/setValidity",
    "PannerNode/setOrientation",
    "DOMPointReadOnly/toJSON",
    "SVGAnimatedString/baseVal",
    "Document/links",
    "GPURenderBundleEncoder/drawIndirect",
    "CSSSkewY/ay",
    "Window/getSelection",
    "IDBObjectStore/clear",
    "HTMLElement/click",
    "HTMLTableElement/cellPadding",
    "RTCIceCandidatePairStats/writable",
    "XRRigidTransform/position",
    "OffscreenCanvas/width",
    "RTCCertificateStats/fingerprint",
    "ChannelSplitterNode/ChannelSplitterNode",
    "PerformanceResourceTiming/redirectEnd",
    "NamedNodeMap/length",
    "Path2D/Path2D",
    "SecurityPolicyViolationEvent/originalPolicy",
    "ServiceWorkerRegistration/navigationPreload",
    "GPUTexture/height",
    "ValidityState/rangeOverflow",
    "SpeechSynthesis/getVoices",
    "BluetoothRemoteGATTDescriptor/writeValue",
    "PaymentRequestEvent/methodData",
    "TaskController/setPriority",
    "MouseEvent/screenY",
    "XRView/eye",
    "ExtendableCookieChangeEvent/ExtendableCookieChangeEvent",
    "ContactAddress/recipient",
    "Document/prepend",
    "MediaTrackSupportedConstraints/channelCount",
    "XRMediaBinding/createCylinderLayer",
    "Blob/type",
    "CustomElementRegistry/whenDefined",
    "Navigator/getUserMedia",
    "WebGLRenderingContext/viewport",
    "Navigator/hid",
    "URLPattern/password",
    "GamepadPose/orientation",
    "HTMLAreaElement/hash",
    "Performance/getEntriesByName",
    "FileReader/readAsDataURL",
    "Location/hash",
    "Screen/isExtended",
    "StyleSheet/media",
    "MIDIOutput/clear",
    "Element/tagName",
    "BarProp/visible",
    "RTCInboundRtpStreamStats/qpSum",
    "HTMLMediaElement/networkState",
    "ElementInternals/ariaAutoComplete",
    "ViewTimeline/ViewTimeline",
    "WritableStreamDefaultWriter/write",
    "ServiceWorkerContainer/ready",
    "Window/scrollY",
    "CustomStateSet/has",
    "HTMLImageElement/vspace",
    "Range/cloneRange",
    "TransformStream/writable",
    "SVGAnimatedEnumeration/baseVal",
    "PositionSensorVRDevice/getImmediateState",
    "PaymentResponse/retry",
    "Document/createTreeWalker",
    "XRSession/requestLightProbe",
    "HTMLAnchorElement/username",
    "WebGLRenderingContext/deleteShader",
    "WebGLRenderingContext/texSubImage2D",
    "CanvasRenderingContext2D/clearRect",
    "Navigator/productSub",
    "HMDVRDevice/setFieldOfView",
    "HTMLObjectElement/useMap",
    "WebGLRenderingContext/isRenderbuffer",
    "Element/closest",
    "HTMLElement/blur",
    "GPUCommandEncoder/clearBuffer",
    "PromiseRejectionEvent/PromiseRejectionEvent",
    "GPUDevice/createSampler",
    "IDBObjectStore/openKeyCursor",
    "Window/speechSynthesis",
    "WebGLRenderingContext/stencilMaskSeparate",
    "Request/referrer",
    "RTCStatsReport/get",
    "HTMLSelectElement/namedItem",
    "HIDDevice/sendReport",
    "XRRay/matrix",
    "HTMLImageElement/Image",
    "DOMMatrixReadOnly/scale",
    "PerformanceLongTaskTiming/attribution",
    "SecurityPolicyViolationEvent/referrer",
    "HTMLMediaElement/defaultPlaybackRate",
    "PushManager/register",
    "InterventionReportBody/columnNumber",
    "BackgroundFetchRegistration/recordsAvailable",
    "HTMLElement/inert",
    "ConvolverNode/ConvolverNode",
    "HTMLImageElement/height",
    "ResizeObserverSize/inlineSize",
    "Text/assignedSlot",
    "RTCDtlsTransport/state",
    "GeolocationCoordinates/altitudeAccuracy",
    "WebGLRenderingContext/isContextLost",
    "AbortSignal/throwIfAborted",
    "CSSCounterStyleRule/negative",
    "HTMLLabelElement/form",
    "TaskSignal/any_static",
    "SVGGeometryElement/getTotalLength",
    "CSSMathNegate/CSSMathNegate",
    "NavigatorUAData/getHighEntropyValues",
    "CSSNumericValue/to",
    "URLSearchParams/delete",
    "SpeechRecognitionResult/isFinal",
    "XRSession/interactionMode",
    "SpeechGrammarList/addFromURI",
    "PointerEvent/twist",
    "XRViewport/x",
    "Range/createContextualFragment",
    "Navigator/locks",
    "MessagePort/start",
    "RTCPeerConnection/setRemoteDescription",
    "RTCRtpTransceiver/receiver",
    "FileSystemDirectoryEntry/getFile",
    "Document/lastStyleSheetSet",
    "IDBCursor/source",
    "VREyeParameters/offset",
    "CSSRule/parentStyleSheet",
    "Document/childElementCount",
    "CSSPropertyRule/syntax",
    "VRDisplay/submitFrame",
    "HTMLElement/title",
    "PaymentAddress/sortingCode",
    "RTCVideoSourceStats/id",
    "GPURenderPassEncoder/setBindGroup",
    "MediaKeyStatusMap/values",
    "MediaStream/getVideoTracks",
    "ElementInternals/ariaLevel",
    "HTMLMediaElement/controls",
    "WritableStream/getWriter",
    "Selection/setBaseAndExtent",
    "RTCIceCandidate/protocol",
    "NodeList/values",
    "XRWebGLLayer/fixedFoveation",
    "UIEvent/sourceCapabilities",
    "ShadowRoot/pointerLockElement",
    "OrientationSensor/populateMatrix",
    "HTMLFormElement/target",
    "PeriodicSyncEvent/PeriodicSyncEvent",
    "USB/requestDevice",
    "HTMLAreaElement/relList",
    "HIDConnectionEvent/HIDConnectionEvent",
    "MediaStream/addTrack",
    "SerialPort/setSignals",
    "RTCError/errorDetail",
    "HTMLInputElement/disabled",
    "BackgroundFetchRegistration/downloadTotal",
    "PushSubscriptionOptions/userVisibleOnly",
    "VTTCue/align",
    "URLSearchParams/sort",
    "AbstractRange/startOffset",
    "ImageTrackList/selectedIndex",
    "Bluetooth/getDevices",
    "LargestContentfulPaint/id",
    "CSSFontPaletteValuesRule/basePalette",
    "OverconstrainedError/constraint",
    "ElementInternals/ariaCurrent",
    "NDEFRecord/encoding",
    "GPURenderBundleEncoder/insertDebugMarker",
    "Element/clientTop",
    "SVGMarkerElement/markerWidth",
    "Performance/mark",
    "RTCRemoteOutboundRtpStreamStats/ssrc",
    "NodeList/entries",
    "Element/clientLeft",
    "ServiceWorkerRegistration/paymentManager",
    "RTCCodecStats/id",
    "TransitionEvent/TransitionEvent",
    "RTCDataChannel/bufferedAmountLowThreshold",
    "ShadowRoot/adoptedStyleSheets",
    "MediaQueryList/media",
    "ImageTrack/animated",
    "Request/headers",
    "PerformanceTiming/domainLookupEnd",
    "BackgroundFetchRegistration/uploadTotal",
    "PerformanceTiming/domComplete",
    "ImageCapture/getPhotoCapabilities",
    "Document/selectedStyleSheetSet",
    "WebGLRenderingContext/blendFuncSeparate",
    "CanvasRenderingContext2D/shadowColor",
    "XSLTProcessor/XSLTProcessor",
    "XRCylinderLayer/radius",
    "RTCRtpStreamStats/pliCount",
    "StorageEvent/newValue",
    "GPUBuffer/unmap",
    "RTCPeerConnection/createAnswer",
    "XMLHttpRequest/overrideMimeType",
    "WebGL2RenderingContext/transformFeedbackVaryings",
    "Window/closed",
    "AudioTrack/kind",
    "HTMLAnchorElement/search",
    "WebGLRenderingContext/createBuffer",
    "WebGLRenderingContext/getTexParameter",
    "XMLHttpRequest/setRequestHeader",
    "MutationRecord/attributeNamespace",
    "BaseAudioContext/createConstantSource",
    "VREyeParameters/minimumFieldOfView",
    "WindowControlsOverlay/getTitlebarAreaRect",
    "SVGPointList/appendItem",
    "AuthenticatorResponse/clientDataJSON",
    "RTCTrackEvent/track",
    "AudioDestinationNode/maxChannelCount",
    "History/replaceState",
    "PaymentRequestUpdateEvent/PaymentRequestUpdateEvent",
    "ImageData/data",
    "CSSRule/type",
    "BeforeInstallPromptEvent/userChoice",
    "IDBObjectStore/put",
    "NavigateEvent/formData",
    "StaticRange/collapsed",
    "PannerNode/PannerNode",
    "XRWebGLBinding/createCylinderLayer",
    "FileSystemFileEntry/createWriter",
    "Touch/Touch",
    "IDBVersionChangeEvent/IDBVersionChangeEvent",
    "HIDInputReportEvent/device",
    "PerformanceResourceTiming/domainLookupStart",
    "HTMLTableElement/border",
    "RTCCertificateStats/timestamp",
    "IdentityCredential/isAutoSelected",
    "MediaStreamTrack/enabled",
    "Range/endOffset",
    "IDBTransaction/mode",
    "Response/status",
    "PaymentAddress/recipient",
    "TouchEvent/touches",
    "MediaStreamEvent/stream",
    "ImageTrack/frameCount",
    "URL/hash",
    "TextMetrics/ideographicBaseline",
    "FileSystemFileHandle/createWritable",
    "Event/stopPropagation",
    "ScreenDetailed/left",
    "EXT_disjoint_timer_query/beginQueryEXT",
    "NavigateEvent/userInitiated",
    "DocumentFragment/querySelectorAll",
    "NavigatorUAData/brands",
    "RTCIceCandidate/tcpType",
    "HTMLElement/togglePopover",
    "MediaTrackConstraints/autoGainControl",
    "ElementInternals/ariaLive",
    "Navigator/getGamepads",
    "DynamicsCompressorNode/attack",
    "CharacterData/deleteData",
    "ImageCapture/getPhotoSettings",
    "WritableStreamDefaultWriter/abort",
    "XRDepthInformation/rawValueToMeters",
    "WorkerNavigator/serial",
    "XRWebGLLayer/XRWebGLLayer",
    "Fence/getNestedConfigs",
    "AnalyserNode/frequencyBinCount",
    "BaseAudioContext/state",
    "HTMLAreaElement/origin",
    "AudioBuffer/length",
    "WebSocket/binaryType",
    "SVGElement/style",
    "Document/getElementById",
    "ScreenOrientation/angle",
    "FileReader/FileReader",
    "MediaStreamAudioDestinationNode/stream",
    "Document/lastElementChild",
    "ReadableByteStreamController/close",
    "TextUpdateEvent/text",
    "CSSStyleSheet/removeRule",
    "AudioNode/channelCount",
    "ImageData/colorSpace",
    "DOMMatrixReadOnly/translate",
    "XRInputSourceArray/keys",
    "ElementInternals/ariaAtomic",
    "DeviceOrientationEvent/DeviceOrientationEvent",
    "CountQueuingStrategy/size",
    "RTCRtpSender/setStreams",
    "BluetoothRemoteGATTCharacteristic/writeValue",
    "SecurityPolicyViolationEvent/violatedDirective",
    "AudioParam/linearRampToValueAtTime",
    "HTMLButtonElement/disabled",
    "WaveShaperNode/curve",
    "SVGRect/The__X__property",
    "CSSTransformValue/keys",
    "ServiceWorkerRegistration/getNotifications",
    "Notification/timestamp",
    "IDBObjectStore/count",
    "AudioParam/cancelScheduledValues",
    "XREquirectLayer/radius",
    "CSSUnparsedValue/CSSUnparsedValue",
    "XSLTProcessor/getParameter",
    "Navigator/keyboard",
    "Metadata/modificationTime",
    "MediaDeviceInfo/kind",
    "NavigationHistoryEntry/sameDocument",
    "ViewTimeline/endOffset",
    "PerformanceNavigationTiming/toJSON",
    "XRProjectionLayer/fixedFoveation",
    "WebGLRenderingContext/compressedTexSubImage2D",
    "RTCPeerConnection/getIdentityAssertion",
    "Navigation/traverseTo",
    "InputEvent/InputEvent",
    "Storage/length",
    "ReadableStreamBYOBReader/closed",
    "VRFrameData/timestamp",
    "WheelEvent/WheelEvent",
    "Window/window",
    "VRDisplayEvent/VRDisplayEvent",
    "RTCRtpStreamStats/qpSum",
    "TrustedTypePolicy/name",
    "StylePropertyMap/set",
    "ReadableStreamDefaultController/close",
    "RTCSessionDescription/RTCSessionDescription",
    "URL/toString",
    "OffscreenCanvas/convertToBlob",
    "HTMLSlotElement/assign",
    "MediaTrackSupportedConstraints/displaySurface",
    "GPUAdapter/features",
    "HTMLFormElement/encoding",
    "PerformanceMeasure/detail",
    "OES_vertex_array_object/deleteVertexArrayOES",
    "Document/fullscreenEnabled",
    "TextUpdateEvent/TextUpdateEvent",
    "StorageEvent/storageArea",
    "PerformanceServerTiming/name",
    "PerformanceNavigation/type",
    "InterventionReportBody/id",
    "Window/statusbar",
    "Document/anchors",
    "Navigator/presentation",
    "Bluetooth/getAvailability",
    "USBDevice/selectConfiguration",
    "FileSystemDirectoryHandle/entries",
    "Element/ariaAtomic",
    "IDBIndex/openKeyCursor",
    "BaseAudioContext/createChannelSplitter",
    "VideoColorSpace/transfer",
    "MediaTrackConstraints/displaySurface",
    "CSSPropertyRule/initialvalue",
    "KeyframeEffect/setKeyframes",
    "RTCStatsReport/forEach",
    "SourceBuffer/changeType",
    "GPURenderPassEncoder/end",
    "RTCRtpScriptTransformer/writable",
    "CSSNamespaceRule/prefix",
    "ScreenDetailed/label",
    "PaymentRequest/shippingType",
    "MediaTrackSettings/logicalSurface",
    "HTMLTemplateElement/content",
    "IDBCursor/continuePrimaryKey",
    "window/getDefaultComputedStyle",
    "FileSystemWritableFileStream/seek",
    "CanvasRenderingContext2D/shadowBlur",
    "GPUCommandEncoder/copyTextureToTexture",
    "GPURenderBundleEncoder/setPipeline",
    "FileSystem/name",
    "USBDevice/opened",
    "IDBCursor/key",
    "HTMLFencedFrameElement/height",
    "PerformanceObserver/PerformanceObserver",
    "Blob/stream",
    "MediaTrackConstraints/volume",
    "LaunchQueue/setConsumer",
    "HTMLInputElement/stepDown",
    "CSSStyleDeclaration/getPropertyCSSValue",
    "BaseAudioContext/createPeriodicWave",
    "GamepadEvent/gamepad",
    "MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static",
    "SpeechSynthesisEvent/charIndex",
    "MediaTrackSupportedConstraints/volume",
    "BluetoothRemoteGATTCharacteristic/stopNotifications",
    "Element/prepend",
    "FormData/FormData",
    "Highlight/priority",
    "NavigateEvent/info",
    "HTMLAudioElement/Audio",
    "MediaKeySession/generateRequest",
  ].map((slugSuffix) => `/en-US/docs/Web/API/${slugSuffix}`.toLowerCase())
);

export function rewritePageTitleForSEO(
  mdn_url: string,
  s: string | null
): string | null {
  if (
    typeof s !== "string" ||
    typeof mdn_url !== "string" ||
    !TEST_GROUP.has(mdn_url.toLowerCase())
  ) {
    return s;
  }

  return (
    s
      // "AudioBuffer: sampleRate property" -> "AudioBuffer.sampleRate property"
      .replace(/^(.*): (.*?) (static )?(method|property)/, "$1.$2 $3$4")
      // "AudioBuffer: AudioBuffer() constructor" -> "AudioBuffer() constructor"
      .replace(/^(.*): (\1\(\)) constructor/, "$2 constructor") ?? null
  );
}