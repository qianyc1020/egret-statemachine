class Missable<T>{
    private value: T;
    
    constructor(value: T = null){
        if (!value)
            this.IsMissing = true;

        this.value;
    }

    public IsMissing: boolean;

    public get Value(): T{
        if (this.IsMissing)
            throw new Error("一个missing值不能被允许");

        return this.value;
    }

    public set Value(value: T){
        this.value = value;
        this.IsMissing = false;
    }
}