import "./Hosting.css"
function Hosting() {
    const cards = [
        {
            id: 1,
            title: 'Branding',
            pargraph: 'for very small businesses and freelancers.',
            text: '$2.5/mo',
            discount: '',
            list: ['Disk Space: 500 M.B', 'Bandwidth:500 G.B', 'Parked Domains:Unlimited', 'E-mail Accounts:Unlimited', 'Cpanel (control panel):Yes', 'Money Back Guarantee:14 Days'],
            buuton: 'You will have 1 Gift',
        },
        {
            id: 2,
            title: 'Pro',
            pargraph: 'for Individuals that need sharing vlogs or need huge portfolio.',
            text: '$5/mo',
            discount: '',
            list: ['Disk Space: 500 M.B', 'Bandwidth:500 G.B', 'Parked Domains:Unlimited', 'E-mail Accounts:Unlimited', 'Cpanel (control panel):Yes', 'Money Back Guarantee:14 Days'],
            buuton: '3 Gifts per/mo for year',
        },
        {
            id: 3,
            title: 'Business',
            pargraph: 'for Team that need sharing and reporting.',
            text: '$8/mo',
            discount: '5% discount during 2022',
            list: ['Disk Space: 500 M.B', 'Bandwidth:500 G.B', 'Parked Domains:Unlimited', 'E-mail Accounts:Unlimited', 'Cpanel (control panel):Yes', 'Money Back Guarantee:14 Days'],
            buuton: '3 Gifts per/mo for year',
        },
        {
            id: 4,
            title: 'Enterprise',
            pargraph: 'for large companies that need admins & security',
            text: '$12/mo',
            discount: '8% discount during 2022',
            list: ['Disk Space: 500 M.B', 'Bandwidth:500 G.B', 'Parked Domains:Unlimited', 'E-mail Accounts:Unlimited', 'Cpanel (control panel):Yes', 'Money Back Guarantee:14 Days'],
            buuton: 'Just Call Us',
        },
    ];
    const Host = (props) => {
        return (
            <div className={`hostCard host${props.index}`}>
                <h4>{props.title}</h4>
                <p>{props.pargraph}</p>
                <div className="discount">
                    <h3>{props.text}</h3>
                    <p>{props.discount}</p>
                </div>
                <ul className="hostList">
                    {
                        props.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>
                <button className={`btn btn${props.index}`}>{props.buuton}</button>
            </div>
        );
    };
    return (
        <>
            <section className="hosting">
                <h2>Hosting Pricing</h2>
                <div className="hostCards">
                    {cards.map(host => (
                        <Host key={host.id} title={host.title} pargraph={host.pargraph} text={host.text} discount={host.discount} index={host.id} list={host.list} buuton={host.buuton} />
                    ))}
                </div>
                <div className="concatInfo">
                    <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
                    <p>Go Online, choose your plan and Contact us on:<a href="mailto:acontact@focal-x.com">acontact@focal-x.com </a> | <a href="tel:+963 935 033 139">+963 935 033 139</a></p>
                </div>
            </section>
        </>
    );
}
export default Hosting