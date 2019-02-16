var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 包含事件及其参数的容器
 *
 * @class EventInformation
 * @template TEvent
 */
var EventInformation = (function () {
    function EventInformation(eventId, eventArgument) {
        this.EventId = eventId;
        this.EventArgument = eventArgument;
    }
    return EventInformation;
}());
__reflect(EventInformation.prototype, "EventInformation");
//# sourceMappingURL=EventInformation.js.map