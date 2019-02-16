var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 状态机的基本实现
 *
 * @class StateMachine
 * @implements {INotifier<TState, TEvent>}
 * @implements {IStateMachineInformation<TState, TEvent>}
 * @implements {IExtensionHost<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
var StateMachine = (function () {
    function StateMachine(name, factory) {
        this.name = name;
        this.factory = factory ? factory : new StandardFactory(this, this);
        this.states = new StateDictionary(this.factory);
        this.extensions = new Array();
        this.initialStateId = new Initializable();
    }
    return StateMachine;
}());
__reflect(StateMachine.prototype, "StateMachine", ["INotifier", "IStateMachineInformation", "IExtensionHost"]);
//# sourceMappingURL=StateMachine.js.map