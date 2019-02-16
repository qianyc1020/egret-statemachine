
/**
 * 提供转换上下文的事件参数。
 *
 * @class TransitionEventArgs
 * @template TState
 * @template TEvent
 */
class TransitionEventArgs<TState, TEvent> extends ContextEventArgs<TState, TEvent>{
    constructor(context: ITransitionContext<TState, TEvent>){
        super(context);
    }

    /**
     * 获取转换的源状态的id
     *
     * @readonly
     * @type {TState}
     * @memberof TransitionEventArgs
     */
    public get StateId(): TState{
        return this.Context.State.Id;
    }

    /**
     * 获取事件ID
     *
     * @readonly
     * @type {TEvent}
     * @memberof TransitionEventArgs
     */
    public get EventId(): TEvent{
        return this.Context.EventId.Value;
    }

    /**
     * 获取事件参数
     *
     * @readonly
     * @type {object}
     * @memberof TransitionEventArgs
     */
    public get EventArgument(): object{
        return this.Context.EventArgument;
    }

    public ToString(): string{
        return `转换来自状态${this.StateId}在事件${this.EventId}`;
    }
}