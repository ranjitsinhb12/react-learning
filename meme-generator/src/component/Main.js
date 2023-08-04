import React from 'react'
import data from '../memesData.js'

export default function Main() { 

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(data)

    function getMemeImage() {
        const memesArray = data.data.memes
        const randomUrl = Math.floor(Math.random() * memesArray.length)
        const memeUrl = memesArray[randomUrl].url
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