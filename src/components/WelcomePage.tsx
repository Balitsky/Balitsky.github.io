import React, {useState} from "react";
import Fade from '@material-ui/core/Fade'

const WelcomePage: React.FC = ({children}) => {
    let [appear, setAppear] = useState<boolean>(true)
    let [showChildren, setShowChildren] = useState<boolean>(false)

    return (
        <>
            {showChildren ? children : <></>}
            <Fade in={appear} timeout={{enter: 0, exit: 1000}} onExited={() => setShowChildren(true)}>
                <div id="welcome_container" className="welcome">
                    <div className="overlay"/>
                    <h1 className="text">Merry Christmas & Happy New Year</h1>
                    <button className="button waves-effect waves-light btn-large blue darken-1"
                            onClick={() => setAppear(false)}>lets party
                    </button>
                </div>
            </Fade>
        </>
    )
}

export default WelcomePage