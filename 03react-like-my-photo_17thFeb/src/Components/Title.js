const Title=({text})=>{
    console.log(text)
    return(
        <div>
            <h1>{!text?"Title":text}</h1>
        </div>
    )
}
export default Title;