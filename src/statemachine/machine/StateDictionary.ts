/**
 * 字典映射状态ID到状态
 *
 * @class StateDictionary
 * @implements {IStateDictionary<TState, TEvent>}
 * @template TState
 * @template TEvent
 */
class StateDictionary<TState, TEvent> implements IStateDictionary<TState, TEvent>{
    private readonly factory: IFactory<TState, TEvent>;
    
    constructor(factory: IFactory<TState, TEvent>){
        this.factory = factory;
    }
}