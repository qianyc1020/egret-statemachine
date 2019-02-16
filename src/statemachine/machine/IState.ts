/**
 * 表示状态机的状态
 *
 * @interface IState
 * @template TState
 * @template TEvent
 */
interface IState<TState, TEvent>{
    /**
     * 获取此状态的id
     *
     * @type {TState}
     * @memberof IState
     */
    Id: TState;

    /**
     * 获取或设置初始子状态。 
     * 如果此状态没有子状态，则为空
     *
     * @type {IState<TState, TEvent>}
     * @memberof IState
     */
    InitialState: IState<TState, TEvent>;

    /**
     * 获取或设置超级状态。 
     * 如果这是根状态，则为空
     *
     * @type {IState<TState, TEvent>}
     * @memberof IState
     */
    SuperState: IState<TState, TEvent>;

    /**
     * 获取子状态
     *
     * @type {Array<IState<TEvent, TEvent>>}
     * @memberof IState
     */
    SubStates: Array<IState<TEvent, TEvent>>;

    /**
     * 获取转换
     *
     * @type {ITransitionDictionary<TState, TEvent>}
     * @memberof IState
     */
    Transitions: ITransitionDictionary<TState, TEvent>;

    /**
     * 获取或设置此状态的最后一个活动状态
     *
     * @type {IState<TState, TEvent>}
     * @memberof IState
     */
    LastActiveState: IState<TState, TEvent>;

    /**
     * 获取退出操作
     *
     * @type {Array<IActionHolder>}
     * @memberof IState
     */
    EntryActions: Array<IActionHolder>;

    /**
     * 获取或设置此状态的历史记录类型
     *
     * @type {HistoryType}
     * @memberof IState
     */
    HistoryType: HistoryType;
}