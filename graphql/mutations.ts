import { gql } from "@apollo/client";

export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const ADD_POST = gql`
  mutation MyMutation(
    $title: String!
    $body: String!
    $image: String!
    $subreddit_id: ID!
    $username: String!
  ) {
    insertPost(
      title: $title
      body: $body
      image: $image
      subreddit_id: $subreddit_id
      username: $username
    ) {
      id
      title
      body
      image
      subreddit_id
      username
      created_at
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, text: $text, username: $username) {
      id
      text
      post_id
      username
      created_at
    }
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
    insertVote(post_id: $post_id, username: $username, upvote: $upvote) {
      id
      upvote
      post_id
      username
      created_at
    }
  }
`;