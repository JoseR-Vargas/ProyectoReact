import spinner from "./loading.gif"

export const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="loading"
             style={{width: "40px", margin: "auto", display:"block"}}/>
        </div>
    )
}