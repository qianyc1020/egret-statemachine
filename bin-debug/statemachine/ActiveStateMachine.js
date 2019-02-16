var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 一个活动状态机。此状态机对自身工作线程上的事件做出反应，并且方法立即返回给调用方。
 *
 * @class ActiveStateMachine
 * @implements {IStateMachine<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
var ActiveStateMachine = (function () {
    function ActiveStateMachine(name, factory) {
        if (name === void 0) { name = null; }
        if (factory === void 0) { factory = null; }
        this.stateMachine = new StateMachine(name ? name : "ActiveStateMachine", factory);
        this.queue = new Array();
    }
    return ActiveStateMachine;
}());
__reflect(ActiveStateMachine.prototype, "ActiveStateMachine", ["IStateMachine"]);
//# sourceMappingURL=ActiveStateMachine.js.map