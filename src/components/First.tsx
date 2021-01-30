import "./First.scss";
const First = () =>{
    return(
        <div className="firstWrapper">
            First Wrapper Contents
            <div className="secondWrapper">
                Second Wrapper contents
                <div className="thirdWrapper">
                    Third Wrapper contents
                </div>
            </div>

            <div data-testid="firstData">
                First Data contents
                <div data-testid="secondData">
                    Second Data contents
                </div>
            </div>
        </div>
    )
};

export default First;