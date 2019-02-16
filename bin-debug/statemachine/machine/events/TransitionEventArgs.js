var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 提供转换上下文的事件参数。
 *
 * @class TransitionEventArgs
 * @template TState
 * @template TEvent
 */
var TransitionEventArgs = (function (_super) {
    __extends(TransitionEventArgs, _super);
    function TransitionEventArgs(context) {
        return _super.call(this, context) || this;
    }
    Object.defineProperty(TransitionEventArgs.prototype, "StateId", {
        /**
         * 获取转换的源状态的id
         *
         * @readonly
         * @type {TState}
         * @memberof TransitionEventArgs
         */
        get: function () {
            return this.Context.State.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionEventArgs.prototype, "EventId", {
        /**
         * 获取事件ID
         *
         * @readonly
         * @type {TEvent}
         * @memberof TransitionEventArgs
         */
        get: function () {
            return this.Context.EventId.Value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionEventArgs.prototype, "EventArgument", {
        /**
         * 获取事件参数
         *
         * @readonly
         * @type {object}
         * @memberof TransitionEventArgs
         */
        get: function () {
            return this.Context.EventArgument;
        },
        enumerable: true,
        configurable: true
    });
    TransitionEventArgs.prototype.ToString = function () {
        return "\u8F6C\u6362\u6765\u81EA\u72B6\u6001" + this.StateId + "\u5728\u4E8B\u4EF6" + this.EventId;
    };
    return TransitionEventArgs;
}(ContextEventArgs));
__reflect(TransitionEventArgs.prototype, "TransitionEventArgs");
//# sourceMappingURL=TransitionEventArgs.js.map