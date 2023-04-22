import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profileReducer";
import {ChatReducer} from "./chatReducer";

let reducers = combineReducers({
    forDialogs: ChatReducer,
    forProfile: ProfileReducer
})
let initialState = {
        forDialogs: {
            chatMessages: [
                {
                    friend_id: 1,
                    friend: 'Danik',
                    chat: [
                        {id: 1, text: 'wanna go for a walk?', author: true},
                        {id: 2, text: 'yeah, great', author: false},
                        {id: 3, text: 'so tired sitting at home', author: false},
                        {id: 4, text: 'I\'ll be ready in 15 minutes', author: true}
                    ]
                },
                {
                    friend_id: 2,
                    friend: 'Kirill',
                    chat: [
                        {id: 1, text: 'hey!', author: true},
                        {id: 2, text: 'hi, how\'s it going?', author: false},
                        {id: 3, text: 'okay, are you at home?', author: true},
                        {id: 4, text: 'yeah, chilling ... you?', author: false}
                    ]
                }
            ],
            dialogsList: [
                {id: 1, name: 'Danik'},
                {id: 2, name: 'Kirill'},
                {id: 3, name: 'Ivan'},
                {id: 4, name: 'Denis'},
                {id: 5, name: 'Andrei'},
                {id: 6, name: 'Demiyan'},
                {id: 7, name: 'Arsenyi'}
            ]
            // addMessage: (newmessage) => console.log(newmessage)
        },
        forProfile: {
            postsList: [
                {
                    userId: 1,
                    id: 1,
                    title: "First post title",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    userId: 1,
                    id: 2,
                    title: "Second post title",
                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                }
            ]
        }
    }

let store = createStore(reducers)

export default store;