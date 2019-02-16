/**
 * 保存上下文信息的事件参数
 *
 * @class ContextEventArgs
 * @template TState
 * @template TEvent
 */
class ContextEventArgs<TState, TEvent>{
    private readonly context: ITransitionContext<TState, TEvent>;

    constructor(context: ITransitionContext<TState, TEvent>){
        this.context = context;
    }

    protected get Context(): ITransitionContext<TState, TEvent>{
        return this.context;
    }
}