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

    return (
        <main className="main">
            <div className="main__container">
                <input type="text" placeholder="Top Text" className="main__text-input" />
                <input type="text" placeholder="Bottom Text" className="main__text-input" />
                <button className="main__meme-generator-button" onClick={getMemeImage}>
                   Generate New Meme Image
                </button>
            </div>
            <img src={meme.randomImage} alt="" className="main__image" />
        </main>
    )
}