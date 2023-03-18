export type DialogsType = {
    id: number
    name: string
}
export type  AppPropsType = {
    dialog: Array<ChatMessagesType>
    dialogsList: Array<DialogsType>
    posts?: PostsListType[]
}

export type ChatMessagesType = {
    friend_id: number
    friend: string
    chat: Array<ChatType>

}
type ChatType = {
    id: number
    text: string
    author: boolean
}

export type PostsListType = {
    userId: number,
    id: number,
    title: string,
    body: string
}
export type PostPropsType = {
    posts?: PostsListType[]
}