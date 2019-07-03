---
layout: single
title: GraphQL Voyager for Rails
date: 2019-07-02 19:36 -0400
---

<figure>
    <a href="/assets/images/graphql-voyager-rails/screenshot.png"><img src="/assets/images/graphql-voyager-rails/screenshot.png"></a>
    <figcaption>Exploring your GraphQL Schema with <a href="https://github.com/tamcgoey/graphql-voyager-rails">GraphQL Voyager Rails</a>.</figcaption>
</figure>

It's been almost a year now working and building with GraphQL backed APIs. One of the best things about GraphQL has always been their dev tooling.

Firing up [GraphiQL](https://github.com/rmosolgo/graphiql-rails), and crafting a query on the fly has been amazing.

But, one of the struggles I've found when building a relatively new and larger API is juggling all the different API requests one can make.

GraphiQL is great for sketching out a quick query, but starts to fall apart when you're needing to fire that same query you were working on a week or two ago.

This is where [Insomnia](https://insomnia.rest/) comes in! Insomnia is a great beautiful API (REST + GraphQL) client that lives on your desktop.

It's great for keeping up with all those partially built out API requests you've been collecting.

One of the biggest problems or really lack of functionality has been [no support for GraphQL API docs](https://github.com/getinsomnia/insomnia/issues/451).

That's where [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) comes in.

A great GraphQL schema + documentation browsing tool that makes it easy to dig into your API.

Like a lot of these GraphQL tools, it was originally built outside of the Rails ecosystem.

So, this past weekend I worked on porting building a Rails engine gem that easily allows you mount GraphQL Voyager on your Rails app.

Building on top of GraphiQL Rails, I took the same lessons learned to support easily mounting GraphQL Voyager on any rails app.

## How to get started

First go ahead and add the gem. Since this is only used in development, I've actually purposely grouped this dependency.

```ruby
gem 'graphql-voyager-rails'
```

Next mount the rails engine in your routes files (`config/routes.rb`)

```ruby
if Rails.env.development?
  mount Graphql::Voyager::Rails::Engine, at: "/graphql-voyager", graphql_path: "/graphql"
end
```

*You'll notice that the `Graphql` isn't `GraphQL`, I'm hoping in the future to support this naming convention (just wanted to avoid the additional `ActiveSupport` changes).*
