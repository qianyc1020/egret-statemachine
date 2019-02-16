var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 标准实施的状态机工厂
 *
 * @class StandardFactory
 * @implements {IFactory<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
var StandardFactory = (function () {
    function StandardFactory(stateMachineInformation, extensionHost) {
        this.stateMachineInformation = stateMachineInformation;
        this.extensionHost = extensionHost;
    }
    return StandardFactory;
}());
__reflect(StandardFactory.prototype, "StandardFactory", ["IFactory"]);
//# sourceMappingURL=StandardFactory.js.map