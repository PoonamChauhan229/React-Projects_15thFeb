const Button=({classes,text,icon,onClick})=>{
    return(
        <>
        <button type="button" className={`btn ${classes}`}
        onClick={onClick}
        >
            {icon}{!text?"BtnText":text}
            
        </button>
        </>
    )
}
export default Button