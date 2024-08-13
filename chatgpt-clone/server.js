import express from "express"
import cors from "cors"
const app = express()
const PORT = 8000
app.use(cors())
app.use(express.json())


app.post("/completions", async (rew, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      model: "dall-e-3",
      //   model: "gpt-4o-mini",
      message: [{ role: "user", content: "how are you?" }],
      max_tokens: 10,
    }),
  }
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    )
    const data = await response.json()
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log("Server running on port number ", PORT)
})
