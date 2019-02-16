var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 字典映射状态ID到状态
 *
 * @class StateDictionary
 * @implements {IStateDictionary<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
var StateDictionary = (function () {
    function StateDictionary(factory) {
        this.factory = factory;
    }
    return StateDictionary;
}());
__reflect(StateDictionary.prototype, "StateDictionary", ["IStateDictionary"]);
//# sourceMappingURL=StateDictionary.js.map