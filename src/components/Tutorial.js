import "../Tutorial.css";
import buzz from "../assets/img/buzz.png";
import goku from "../assets/img/goku.png";

export const Tutorial = () => {
    return(
    <div>
        <div class="tutorial-container">
            <h1>Tutorial</h1>
            <div class="tutorial-row">
                <div class="tutorial-col">
                    <div class="char-img-buzz">
                        <img src={ buzz } alt="chad" width="100%"></img>
                    </div>
                </div>
                <div class="tutorial-col">
                    <div class="img-ta-row">
                        <div class="img-ta">
                            <img src={ goku } alt="erik"></img>
                        </div>
                        <p>Lorem<br></br> Ipsum</p>
                    </div>
                    <div class="img-ta-row">
                        <div class="img-ta">
                            <img src={ goku } alt="erik"></img>
                        </div>
                        <p>Lorem<br></br> Ipsum</p>
                    </div>
                    <div class="img-ta-row">
                        <div class="img-ta">
                            <img src={ goku } alt="erik"></img>
                        </div>
                        <p>Lorem<br></br> Ipsum</p>
                    </div>
                    <div class="img-ta-row">
                        <div class="img-ta">
                            <img src={ goku } alt="erik"></img>
                        </div>
                        <p>Lorem<br></br> Ipsum</p>
                    </div>
                    <div class="img-ta-row">
                        <div class="img-ta">
                            <img src={ goku } alt="erik"></img>
                        </div>
                        <p>Lorem<br></br> Ipsum</p>
                    </div>


                </div>
            </div>
        </div>    
    </div>

    )
}