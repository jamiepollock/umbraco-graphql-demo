// 1
import gql from 'graphql-tag'

// 2
export const SIMPLE_PEOPLE_QUERY = gql`
query SimplePeopleQuery {
  content {
    byType {
      People(id: "1116") {
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

export const SIMPLE_QUERY_WITH_VARIABLE = gql`
query SingleVariableQuery ($searchLetter: String!) {
  content {
    byType {
      People(id: "1116") {
        _contentData {
          peopleStartsWithLetter: children(filter: {name_starts_with: $searchLetter}, orderBy: name_ASC) {
            items {
              ... on Person {
                _contentData {
                  name
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
}
`