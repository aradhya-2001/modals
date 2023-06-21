import Card from "./Card"
import Button from "./Button"

const ErrorModal = (props) => {
    return(
        <Card>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.messg}</p>
            </div>
            <footer>
                <Button btnClick={props.delError}>Okay</Button>   {/* btnClick is our own attribute (sent via props) which sends delError function pointer to Button.js where button's default onClick attribute calls the function */}
            </footer>
        </Card>
    )
}

export default  ErrorModal