var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Missable = (function () {
    function Missable(value) {
        if (value === void 0) { value = null; }
        if (!value)
            this.IsMissing = true;
        this.value;
    }
    Object.defineProperty(Missable.prototype, "Value", {
        get: function () {
            if (this.IsMissing)
                throw new Error("一个missing值不能被允许");
            return this.value;
        },
        set: function (value) {
            this.value = value;
            this.IsMissing = false;
        },
        enumerable: true,
        configurable: true
    });
    return Missable;
}());
__reflect(Missable.prototype, "Missable");
//# sourceMappingURL=Missable.js.map