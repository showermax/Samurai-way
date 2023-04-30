// let rerenderEntireTree = () => {
// }

import {ProfileActionType, ProfileReducer} from "./profileReducer";
import {ChatActionType, ChatReducer} from "./chatReducer";

export type DialogsType = {
    id: number
    name: string
}

export type ChatMessagesType = {
    friend_id: number
    friend: string
    chat: Array<ChatType>

}
export type ChatType = {
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
export type ForDialogsType = {
    chatMessages: Array<ChatMessagesType>
    dialogsList: Array<DialogsType>
}

export type ForProfileType = {
    postsList: PostsListType[]
}

export type StateType = {
    forDialogs: ForDialogsType
    forProfile: ForProfileType
}
export type StoreType = {
    _subscriber:()=> void
    _state:StateType
    getState:()=>StateType
    subscribe:(observer: () => void)=>void
    // addPost: (title: string, content: string)=> void
    // addMessage:(newmessage: string, id: number, author: boolean)=> void
    dispatch:(action: AllActionType) => void
}
export type AllActionType = ProfileActionType | ChatActionType
// export const store:StoreType = {
//     _subscriber() {
//     },
//     _state: {
//         forDialogs: {
//             chatMessages: [
//                 {
//                     friend_id: 1,
//                     friend: 'Danik',
//                     chat: [
//                         {id: 1, text: 'wanna go for a walk?', author: true},
//                         {id: 2, text: 'yeah, great', author: false},
//                         {id: 3, text: 'so tired sitting at home', author: false},
//                         {id: 4, text: 'I\'ll be ready in 15 minutes', author: true}
//                     ]
//                 },
//                 {
//                     friend_id: 2,
//                     friend: 'Kirill',
//                     chat: [
//                         {id: 1, text: 'hey!', author: true},
//                         {id: 2, text: 'hi, how\'s it going?', author: false},
//                         {id: 3, text: 'okay, are you at home?', author: true},
//                         {id: 4, text: 'yeah, chilling ... you?', author: false}
//                     ]
//                 }
//             ],
//             dialogsList: [
//                 {id: 1, name: 'Danik'},
//                 {id: 2, name: 'Kirill'},
//                 {id: 3, name: 'Ivan'},
//                 {id: 4, name: 'Denis'},
//                 {id: 5, name: 'Andrei'},
//                 {id: 6, name: 'Demiyan'},
//                 {id: 7, name: 'Arsenyi'}
//             ]
//             // addMessage: (newmessage) => console.log(newmessage)
//         },
//         forProfile: {
//             postsList: [
//                 {
//                     userId: 1,
//                     id: 1,
//                     title: "First post title",
//                     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//                 },
//                 {
//                     userId: 1,
//                     id: 2,
//                     title: "Second post title",
//                     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//                 }
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._subscriber = observer
//     },
//     // addPost(title: string, content: string) {
//     //     this._state.forProfile.postsList.push({userId: 1, id: 3, title: title, body: content})
//     //     this._subscriber()
//     // },
//     // addMessage(newmessage: string, id: number, author: boolean) {
//     //     const newChatMessages = this._state.forDialogs.chatMessages.map(el => el.friend_id === id ? {
//     //         ...el,
//     //         chat: [...el.chat, {id: el.chat.length + 1, text: newmessage, author: author}]
//     //     } : el)
//     //     this._state = {...this._state, forDialogs: {...this._state.forDialogs, chatMessages: newChatMessages}}
//     //     this._subscriber()
//     // },
//     dispatch(action:AllActionType) {
//         this._state.forProfile = ProfileReducer(this._state.forProfile, action)
//         this._state.forDialogs = ChatReducer(this._state.forDialogs, action)
//         this._subscriber()
//         // switch (action.type) {
//         //     case 'ADD-MESSAGE': return this.addMessage(action.payload.title, action.payload.id, action.payload.author)
//         //     case 'ADD-POST': return this.addPost(action.payload.title, action.payload.content)
//         // }
//     }
// }


























// export const addMessageAC = (title:string, id: number, author:boolean) => ({type: 'ADD-MESSAGE', payload:{title: title, id: id, author: author}})
// export let state: StateType = {
//     forDialogs: {
//         chatMessages: [
//             {
//                 friend_id: 1,
//                 friend: 'Danik',
//                 chat: [
//                     {id: 1, text: 'wanna go for a walk?', author: true},
//                     {id: 2, text: 'yeah, great', author: false},
//                     {id: 3, text: 'so tired sitting at home', author: false},
//                     {id: 4, text: 'I\'ll be ready in 15 minutes', author: true}
//                 ]
//             },
//             {
//                 friend_id: 2,
//                 friend: 'Kirill',
//                 chat: [
//                     {id: 1, text: 'hey!', author: true},
//                     {id: 2, text: 'hi, how\'s it going?', author: false},
//                     {id: 3, text: 'okay, are you at home?', author: true},
//                     {id: 4, text: 'yeah, chilling ... you?', author: false}
//                 ]
//             }
//         ],
//         dialogsList: [
//             {id: 1, name: 'Danik'},
//             {id: 2, name: 'Kirill'},
//             {id: 3, name: 'Ivan'},
//             {id: 4, name: 'Denis'},
//             {id: 5, name: 'Andrei'},
//             {id: 6, name: 'Demiyan'},
//             {id: 7, name: 'Arsenyi'}
//         ]
//         // addMessage: (newmessage) => console.log(newmessage)
//     },
//     forProfile: {
//         postsList: [
//             {
//                 userId: 1,
//                 id: 1,
//                 title: "First post title",
//                 body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//             },
//             {
//                 userId: 1,
//                 id: 2,
//                 title: "Second post title",
//                 body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//             }
//         ]
//     }
// }
// export const addMessage = (newmessage: string, id: number, author: boolean) => {
//     let state = store.getState()
//     const newChatMessages = state.forDialogs.chatMessages.map(el => el.friend_id === id ? {
//         ...el,
//         chat: [...el.chat, {id: el.chat.length + 1, text: newmessage, author: author}]
//     } : el)
//     const newState = {...state, forDialogs: {...state.forDialogs, chatMessages: newChatMessages}}
//     state = newState
//     rerenderEntireTree()
// }

// export const addPost =(title: string, content: string,) =>{
//     state.forProfile.postsList.push({userId:1, id:3, title: title, body:content})
//     rerenderEntireTree ()
//  }
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }