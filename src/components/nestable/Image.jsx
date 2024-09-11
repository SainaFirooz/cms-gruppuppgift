const Image = ({ blok }) => {

    // console.log(blok);

    return(
        <div className="p-10 flex justify-center  ">
            <img src={blok?.image.filename} alt=""  className="rounded-lg" />
        </div>
    )
}

export default Image