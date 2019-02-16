/**
 * 可以初始化的值
 *
 * @class Initializable
 * @template T
 */
class Initializable<T>{
    private value: T;

    public get Value(): T{
        this.CheckInitialized();

        return this.value;
    }

    public set Value(value: T){
        this.CheckNotAlreadyInitialized();
        this.IsInitialized = true;
        this.value = value;
    }

    /**
     * 获取一个值，该值指示是否初始化此实例（具有设置值）
     *
     * @type {boolean}
     * @memberof Initializable
     */
    public IsInitialized: boolean;
    private CheckInitialized(){
        if (!this.IsInitialized)
            throw new Error(ExceptionMessages.ValueNotInitialized);
    }

    private CheckNotAlreadyInitialized(){
        if (this.IsInitialized)
            throw new Error(ExceptionMessages.ValueNotInitialized);
    }
}