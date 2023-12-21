import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);
//if image is >9.7kb then it treated as seprete file otherwise it gets inlined

function App() {
    return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digital Assistants</p>
            </div>
        </section>

        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                    <ProfileCard 
                        title="Alexa" 
                        handle="@alexa09" 
                        image={AlexaImage}
                        description="Alexa was created by Amazon and helps you buy things." />
                    </div>

                    <div className="column is-3">
                    <ProfileCard 
                    title="Cortana" 
                    handle="@cortana06" 
                    image={CortanaImage}
                    description="Cortana was made by Microsoft. who knows what it does?" />
                    </div>

                    <div className="column is-3">
                    <ProfileCard 
                    title="Siri" 
                    handle="@siri03" 
                    image={SiriImage}
                    description="Siri was made by Apple and is being phased out." />
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
}

export default App;