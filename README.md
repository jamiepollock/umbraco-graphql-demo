# Umbraco GraphQL demo

A basic implementation of [GraphQL for Umbraco](https://github.com/rasmusjp/umbraco-graphql) with a VueJS app to consume data.

## :warning: Please be aware!

I'm using this as a learning exercise. I have little to no experience in VueJS or GraphQL.

Also, at the time of development, GraphQL for Umbraco is not production ready but [could be with your help](https://github.com/rasmusjp/umbraco-graphql/issues)! :)

# Getting Started

The demo includes [UmbracoCMS](https://umbraco.com/) v7.13.1 preinstalled with the standard starter kit.

For ease of development, I configured my local IIS to point the GraphQLForUmbracoDemo.Web project with the following hostname:

http://umbraco.graphql.local/

If you intend on pointing to a different hostname please be sure to update the API endpoint in the VueJS app.

## Umbraco backoffice credentials

To access the backoffice you will need the following credentials:

**Username:** `admin@admin.com`  
**Password:** `v<vDQK82xX=a%[U~`