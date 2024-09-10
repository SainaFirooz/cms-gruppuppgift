const Grid = ({ blok }) => {

    console.log(blok);
    

    return(
        <>
            {blok.columns.map(gridItem => {
                return (
                    <img src={gridItem.image.filename} />
                )
            })}
        </>
    )
} 


export default Grid;