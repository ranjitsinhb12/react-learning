import React from 'react'

export default function Main() { 

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomUrl = Math.floor(Math.random() * allMeme.length)
        const memeUrl = allMeme[randomUrl].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl
        }))
    }

    function handleChange(event) {      
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="main">
            <div className="main__container">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="main__text-input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="main__text-input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="main__meme-generator-button" onClick={getMemeImage}>
                   Generate New Meme Image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme__image" />
                <h2 className="meme__text top">
                    {meme.topText}
                </h2>
                <h2 className="meme__text bottom">
                    {meme.bottomText}
                </h2>
            </div>
        </main>
    )
}