/**
 * 一个活动状态机。此状态机对自身工作线程上的事件做出反应，并且方法立即返回给调用方。
 *
 * @class ActiveStateMachine
 * @implements {IStateMachine<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
class ActiveStateMachine<TState, TEvent> implements IStateMachine<TState, TEvent>{
    private readonly stateMachine: StateMachine<TState, TEvent>;
    private readonly queue: Array<EventInformation<TEvent>>;

    constructor(name: string = null, factory: IFactory<TState, TEvent> = null){
        this.stateMachine = new StateMachine<TState, TEvent>(name ? name : "ActiveStateMachine", factory);
        this.queue = new Array<EventInformation<TEvent>>();
    }
}