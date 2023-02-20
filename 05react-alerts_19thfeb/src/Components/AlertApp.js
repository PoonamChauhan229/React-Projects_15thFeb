import Alert from "./Alert";

const AlertApp=()=>{
    return(
        <>
        <Alert type={"success"} message={"Nice, you triggered this alert message!"}/>
        <Alert type={"primary"} message={"Well done!"} delay={true}/>
        </>
    )
}
export default AlertApp;