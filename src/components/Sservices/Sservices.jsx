import "./Sservices.css"
import brandingOrange from "./../../assets/images/brandingOrange.png"
import markiting from "./../../assets/images/markiting.png"
import brandingpattren from "./../../assets/images/brandingpattren.png"
import markrtingpattren from "./../../assets/images/markrtingpattren.png"
import brandingx from "./../../assets/images/brandingx.svg"
import marketingx from "./../../assets/images/marketingx.svg"

function Sservices() {
    const cardData = [
        {
            id: 1,
            title: 'Branding',
            pargraph: ' It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value  to your company.',
            text: 'In focal X agency, we provide:',
            list: ['Visual identity design.', 'Define Brand Identity.', 'Define Brand personality.', 'Building Your brand strategy.', 'Building Your brand strategy.'],
            parg: "We walk with you from A to Z.",
            image: brandingOrange,
            imageAfter: brandingpattren,
            imagemobile: brandingx,
        },
        {
            id: 2,
            title: 'Marketing',
            pargraph: ' Talk to your customers and tell them  you and your company story through us the way you want.Let us plan the content that will bring your audience closer to you.',
            text: 'In our marketing agency, we provide:',
            list: ['E-mail marketing.', 'Affiliate marketing.', 'Influencer marketing.', 'Market research and Analysis.', 'App store optimization ( ASO ).', 'Search engine Marketing ( SEM ).', 'Search engine optimization ( SEO ).', 'Social media marketing & campaigns.'],
            parg: "",
            image: markiting,
            imageAfter: markrtingpattren,
            imagemobile: marketingx,
        },
    ];
    const Card = (props) => {
        return (
            <div className={`card card${props.index}`}>
                <img src={props.imageAfter} alt="brandingpattren" className="pattren" />
                <h3>{props.title}</h3>
                <p>{props.pargraph}</p>
                <p className="bold provide">{props.text}</p>
                <ul className="provideList">
                    {
                        props.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>
                <p className="bold provide">{props.parg}</p>
                <img src={props.image} alt="focalx" className="brandimg" />
                <img src={props.imagemobile} alt="brandingx" className="brandingx" />
            </div>
        );
    };
    return (
        <>
            <section className="Services" id="Services">
                <h2 >Our Services</h2>
                <div className="cards">
                    {cardData.map(card => (
                        <Card key={card.id} title={card.title} pargraph={card.pargraph} text={card.text} index={card.id} image={card.image} imageAfter={card.imageAfter} imagemobile={card.imagemobile} parg={card.parg} list={card.list} />
                    ))}
                </div>
            </section>
        </>
    );
}
export default Sservices