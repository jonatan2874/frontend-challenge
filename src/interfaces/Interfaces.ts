export interface Tweet{
    avatar : string,
    name :string,
    nickName : string,
    tweet : string
}

export interface TweetsState {
    page : number,
    tweets? : Tweet[] | []
}