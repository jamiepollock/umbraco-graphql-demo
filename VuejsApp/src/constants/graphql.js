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

export const SIMPLE_PEOPLE_QUERY_FRAGMENTS = gql`
query SimplePeopleQueryFragments {
  content {
    byType {
      People(id: "1116") {
        pageTitle
        _contentData {
          children {
            items {
              ... SimplePerson
            }
          }
        }
      }
    }
  }
}

fragment SimplePerson on Person {
  photo {
    _contentData {
      url
    }
  }
  _contentData{
    name,
    id
  }
}`