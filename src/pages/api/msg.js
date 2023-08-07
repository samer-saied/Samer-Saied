// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import addMsg from "../../../core/add"

export default function handler(req, res) {
  if (req.method == "POST") {
    return addMsg(req.body.name, req.body.phone, req.body.body).then((data) => {
      res.status(200).json({ result: data })

    }).catch((error) => {
      res.status(400).json({ result: error })

    })
  } else if(req.method == "GET")  {
    res.status(200).json({ result: 'Test' })
  }else{
    res.status(404).json({ result: 'Not Found' })

  }
}
