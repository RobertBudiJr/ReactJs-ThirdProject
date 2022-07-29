import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import memesData from './data';

export default function Main() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemes, setAllMemes] = useState(memesData);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className='main'>
      <div className='main__top'>
        <input type='text' className='input__first' placeholder='First Text Here' name='topText' value={meme.topText} onChange={handleChange} />
        <input type='text' className='input__second' placeholder='Second Text Here' name='bottomText' value={meme.bottomText} onChange={handleChange} />
      </div>

      <div className='main__bot'>
        <input type='submit' className='input__submit' value='Get a New Meme Image 🖼' onClick={getMemeImage} />
      </div>

      <div className='main__meme'>
        <img src={meme.randomImage} className='main__image' />
        <h2 className='main__topText'>{meme.topText}</h2>
        <h2 className='main__bottomText'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
