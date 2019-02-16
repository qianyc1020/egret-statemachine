var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 保留所有异常消息
 *
 * @class ExceptionMessages
 */
var ExceptionMessages = (function () {
    function ExceptionMessages() {
    }
    ExceptionMessages.ValueNotInitialized = "值未初始化";
    ExceptionMessages.VlaueAlreadyInitialized = "值已经初始化";
    return ExceptionMessages;
}());
__reflect(ExceptionMessages.prototype, "ExceptionMessages");
//# sourceMappingURL=ExceptionMessages.js.map