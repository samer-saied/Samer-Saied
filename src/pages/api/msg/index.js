
import addMsg from "../../../../core/add"

const handler = async (req, res) => {

  const data = req.body;
  res.header("Access-Control-Allow-Origin", "*");
  switch (req.method) {
    case "POST":
      try {
        await addMsg(data.name, data.phone, data.body)
          .then(response => {
            res.status(200).json({ result: response })
          })
      } catch (error) {
        res.status(400).json({ result: error })
      }
      break
  }
}

export default handler
