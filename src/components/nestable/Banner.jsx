

const Banner = ({ blok }) => {

    // console.log(blok);
    //className="banner-container p-6 flex justify-center h-64" 

    return(
        <div >
            <img src={blok.background_image.filename} alt=""  className="h-64 w-full object-cover" />
        </div>

    )
}

export default Banner