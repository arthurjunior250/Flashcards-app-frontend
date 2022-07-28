import { gql } from '@apollo/client';

const GET_CARDS = gql`
query getCards {
  allCards {
    id
    question
    description
    answer
  }
}
`

const GET_CARD = gql`
  query oneCard ($id: Int!) {
    oneCard(id: $id) {
      id
      question
      description
      answer
    }
  }
`

export {
  GET_CARDS,
  GET_CARD
}