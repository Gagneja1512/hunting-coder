import * as fs from 'fs'

export default function handler(req, res) {
  fs.readdir("blogdata" , (err , data) => {
    console.log(err)
    res.status(200).json(data)
  })
}
