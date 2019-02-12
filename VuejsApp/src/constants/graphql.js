// 1
import gql from 'graphql-tag'

// 2
export const SIMPLE_PEOPLE_QUERY = gql`
query SimplePeopleQuery {
  content {
    byType {
      People(id: "1116") {
        pageTitle
        _contentData {
          children {
            items {
              ... on Person {
                _contentData {
                  name
                  id
                }
                department
                photo {
                  _contentData {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`