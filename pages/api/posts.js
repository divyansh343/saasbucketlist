// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { posts } from "../../db/posts";

export default function handler(req, res) {
  if (req.method==='GET') {
    console.log("at get");
    res.status(200).json(posts)
  } else if (req.method === 'POST') {
    console.log("at post");
    const post = req.body.post
    const newPost = {
      name : req.body.name,
      age : req.body.age,
      sage : req.body.sage,
      cage : req.body.cage,
    }
    posts.push(newPost);

    const resp = {
      ...newPost,
      msg:"maaka naaka"
    }
    
    res.status(201).json(resp)
  }
}
