function App() {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how u doing?",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    try {
      const response = await fetch("http://localhost:8000/completions", options)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>Chat 1</li>
        </ul>
        <nav>
          <p>Made by Dhruv</p>
        </nav>
      </section>
      <section className="main">
        <h1>Drew GPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" placeholder="Type a message" />
            <div id="submit" onClick={getMessages}>
              send
            </div>
          </div>
          <p className="info">this app is made using Open Ai Api</p>
        </div>
      </section>
    </div>
  )
}

export default App
