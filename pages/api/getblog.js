import * as fs from 'fs'

export default function handler(req, res) {
  
  fs.readFile(`blogdata/${req.query.slug}.json` , 'utf-8' , (err , data) => {
    if(err){
      console.log(err)
      res.status(500).json({error : "some error occurred"})
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}
