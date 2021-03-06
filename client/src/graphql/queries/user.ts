import { gql } from "@apollo/client"

export const CONFIRM_USER_NAME = gql `
  mutation Mutation($userEmail: String, $reqEmail: String) {
  confirmRequest(userEmail: $userEmail, reqEmail: $reqEmail) {
    email
    _id
    username
    picture
    friends
  }
}
`

export const UPDATE_USER_IMAGE = gql`
mutation Mutation($email: String, $picture: String) {
  checkUserImage(email: $email, picture: $picture) {
    email
  }
}
`

export const MUTE_USER = gql`
  mutation Mutation($userEmail: String, $mutedEmail: String) {
  addToMute(userEmail: $userEmail, mutedEmail: $mutedEmail) {
    email
    _id
    username
    picture
    mutes
  }
}
`


export const GET_CURRENT_USER = gql`
query Query($email: String) {
  getCurrentUser(email: $email) {
    email
    mutes
    picture
    _id
    bgPicture
    friendRequests
    yourSendedFriendReq
    friends
    username
  }

}
`
export const GET_USER_DATA = gql`
query Query($email: String) {
  getCurrentUser(email: $email) {
    email
    picture
    _id
    bgPicture
    username
    friends
  }

}
`
export const CHANGE_USER_IMAGE = gql`
  mutation Mutation($email: String, $picture: String) {
  changeUserImage(email: $email, picture: $picture) {
    email
    _id
  }
}
`

export const CHANGE_BG_PICTURE = gql`
mutation Mutation($email: String, $bgPicture: String) {
  changeBgPicture(email: $email, bgPicture: $bgPicture) {
    email
    _id
  }
}

`