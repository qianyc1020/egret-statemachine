var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 可以初始化的值
 *
 * @class Initializable
 * @template T
 */
var Initializable = (function () {
    function Initializable() {
    }
    Object.defineProperty(Initializable.prototype, "Value", {
        get: function () {
            this.CheckInitialized();
            return this.value;
        },
        set: function (value) {
            this.CheckNotAlreadyInitialized();
            this.IsInitialized = true;
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Initializable.prototype.CheckInitialized = function () {
        if (!this.IsInitialized)
            throw new Error(ExceptionMessages.ValueNotInitialized);
    };
    Initializable.prototype.CheckNotAlreadyInitialized = function () {
        if (this.IsInitialized)
            throw new Error(ExceptionMessages.ValueNotInitialized);
    };
    return Initializable;
}());
__reflect(Initializable.prototype, "Initializable");
//# sourceMappingURL=Initializable.js.map