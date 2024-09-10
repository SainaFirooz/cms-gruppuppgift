const Hero = ({ blok }) => {

    // console.log(blok);


    return (
        <>
            <h1> {blok.title} </h1>
            <p>{blok.text}</p>
            <button> { blok.button_text } </button>
        </>
    )
}

export default Hero;