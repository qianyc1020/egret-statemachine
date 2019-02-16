/**
 * 状态机的基本实现
 *
 * @class StateMachine
 * @implements {INotifier<TState, TEvent>}
 * @implements {IStateMachineInformation<TState, TEvent>}
 * @implements {IExtensionHost<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
class StateMachine<TState, TEvent> implements INotifier<TState, TEvent>, IStateMachineInformation<TState, TEvent>, IExtensionHost<TState, TEvent>{
    private readonly name: string;
    private readonly factory: IFactory<TState, TEvent>;
    private readonly states: IStateDictionary<TState, TEvent>;
    private readonly extensions: Array<IExtension<TState, TEvent>>;
    private readonly initialStateId: Initializable<TState>;
    
    constructor(name: string, factory: IFactory<TState, TEvent>){
        this.name = name;
        this.factory = factory ? factory : new StandardFactory<TState, TEvent>(this, this);
        this.states = new StateDictionary<TState, TEvent>(this.factory);
        this.extensions = new Array<IExtension<TState, TEvent>>();

        this.initialStateId = new Initializable<TState>();
    }
}