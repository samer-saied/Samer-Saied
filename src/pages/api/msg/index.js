
import addMsg from "../../../../core/add"

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body
    return new Promise((resolve, reject) => {
      addMsg(data.name, data.phone, data.body)
        .then(response => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'max-age=180000');
          res.status(200).json({ result: response })
          resolve();
        })
        .catch(error => {
          res.json(error);
          res.status(405).end();
          resolve(); // in case something goes wrong in the catch block (as vijay commented)
        });
    });




  } else if (req.method === "GET") {
    console.log("GET")
    res.status(200).json({ result: 'Test' })
  } else {
    res.status(404).json({ result: 'Not Found' })

  }
}
