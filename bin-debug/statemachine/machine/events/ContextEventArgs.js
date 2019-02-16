var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 保存上下文信息的事件参数
 *
 * @class ContextEventArgs
 * @template TState
 * @template TEvent
 */
var ContextEventArgs = (function () {
    function ContextEventArgs(context) {
        this.context = context;
    }
    Object.defineProperty(ContextEventArgs.prototype, "Context", {
        get: function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    return ContextEventArgs;
}());
__reflect(ContextEventArgs.prototype, "ContextEventArgs");
//# sourceMappingURL=ContextEventArgs.js.map