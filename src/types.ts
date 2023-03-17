export type DialogsType = {
    id: number
    name: string
}
export type  AppPropsType = {
    dialog: Array<ChatMessagesType>
    dialogsList: Array<DialogsType>
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