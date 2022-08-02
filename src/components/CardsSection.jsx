import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import Card from "./Card"
import Spinner from "./Spinner"

const baseURL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"

const CardSection = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data)
    })
  }, [])

  if (!posts) {
    return <Spinner />
  }

  return (
    <section className="row u-equal-height">
      {posts.map((post) => (
        <Card
          key={post.id}
          image={post.featured_media}
          title={post.title.rendered}
          author={post._embedded.author[0].name}
          authorLink={post._embedded.author[0].link}
          date={moment(post.date).format("DD MMMM YYYY")}
          articleLink={post.link}
        />
      ))}
    </section>
  )
}

export default CardSection
