/**
 * 标准实施的状态机工厂
 *
 * @class StandardFactory
 * @implements {IFactory<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
class StandardFactory<TState, TEvent> implements IFactory<TState, TEvent>{
    private readonly stateMachineInformation: IStateMachineInformation<TState, TEvent>;
    private readonly extensionHost: IExtensionHost<TState, TEvent>;

    constructor(stateMachineInformation: IStateMachineInformation<TState, TEvent>, extensionHost: IExtensionHost<TState, TEvent>){
        this.stateMachineInformation = stateMachineInformation;
        this.extensionHost = extensionHost;
    }
}