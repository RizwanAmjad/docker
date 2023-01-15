const express = require("express")

const app = express()

app.get("/", (req, res) => {
  return res.send("Express app Dockerized :-)")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
