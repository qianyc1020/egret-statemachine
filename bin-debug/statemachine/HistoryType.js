/**
 * 定义状态的历史行为（在重新进入超级状态时）
 *
 * @enum {number}
 */
var HistoryType;
(function (HistoryType) {
    /**
     * 状态进入其初始子状态。
     * 子状态本身进入其初始子状态，以此类推，直到达到最内部的嵌套状态
     */
    HistoryType[HistoryType["None"] = 0] = "None";
    /**
     * 该状态进入其最后一个活动子状态。
     * 子状态本身进入其初始子状态，以此类推，直到达到最内部的嵌套状态
     */
    HistoryType[HistoryType["Shallow"] = 1] = "Shallow";
    /**
     * 该状态进入其最后一个活动子状态。
     * 子状态本身进入其最后一个活动状态，以此类推，直到达到最内部的嵌套状态
     */
    HistoryType[HistoryType["Deep"] = 2] = "Deep";
})(HistoryType || (HistoryType = {}));
//# sourceMappingURL=HistoryType.js.map