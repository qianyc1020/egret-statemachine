/**
 * 提供有关当前转换的信息
 *
 * @interface ITransitionContext
 * @template TState
 * @template TEvent
 */
interface ITransitionContext<TState, TEvent>{
    State: IState<TState, TEvent>;
    EventId: Missable<TEvent>;
    EventArgument: object;
}