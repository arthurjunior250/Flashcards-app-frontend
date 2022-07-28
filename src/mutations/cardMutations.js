import { gql } from '@apollo/client';

const ADD_CARD = gql`
  mutation createCard($question: String!, $description: String!, $answer: String!) {
    createCard(question: $question, description: $description, answer: $answer) {
      id
      question
      description
      answer
    }
  }
`

const DELETE_CARD = gql`
  mutation deleteCard($id: Int!) {
    deleteCard(id: $id) {
      id
      question
      description
      answer
    }
  }
`
const UPDATE_CARD = gql`
  mutation updateCard($id:Int!, $question: String!, $description: String!, $answer: String!) {
    updateCard(id: $id, question: $question, description: $description, answer: $answer) {
      id
      question
      description
      answer  
    }
  }
`

export {
  DELETE_CARD,
  ADD_CARD,
  UPDATE_CARD
}