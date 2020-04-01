export interface Message{
  sender?:string
  content:string
  receivedAt?:Date
  language?:string,
  id?:string
}
export interface Conversation{
  sender?:string
  messages?:Message[]
  lastActivity?:Date,
  id:string
}
