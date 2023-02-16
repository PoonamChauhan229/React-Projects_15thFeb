const Title=({text})=>{
    console.log(text)
    return(
        <>
        <h1>{!text?"Title":text}</h1>
        </>
    )
}
export default Title;