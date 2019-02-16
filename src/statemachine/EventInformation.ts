/**
 * 包含事件及其参数的容器
 *
 * @class EventInformation
 * @template TEvent
 */
class EventInformation<TEvent>{
    constructor(eventId: TEvent, eventArgument: object){
        this.EventId = eventId;
        this.EventArgument = eventArgument;
    }

    public EventId: TEvent;
    public EventArgument: object;
}