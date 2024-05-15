import './About.css'
import AboutHeader from './AboutHeader'

const AboutHero = () => {

    const photos = Array.from({ length: 8 }, (_, index) => `/awards/Award${index + 1}.png`)

    const awardsData = [
        {
            title:'AAA Technologies Private Limited',
            paragraph:'Award for Listing of SME AAA as Market Maker and Fund Raising'
        },
        {
            title:'Deep Polymers',
            paragraph:'Award for Listing of SME Deep Polymer to act as Advisor/Market Maker/Fund Raising'
        },
        {
            title:'Orissa Bengal Carrier Limited',
            paragraph:'Award for Listing of SME OBCL to act as Advisor/Market Maker/Fund Raising'
        },
        {
            title:'Suumaya Industries Limited',
            paragraph:'Award for Listing of SME Suumaya to act as Market Maker/Fund Raising'
        },
        {
            title:'Tasty Dairy Specialities',
            paragraph:'Award for Listing of SME Tasty Dairy to act as Advisor/Market Maker/Fund Raising'
        },
        {
            title:'Startup Pitch India',
            paragraph:'Awarded for being the Moderator and Organiser'
        },
        {
            title:'BSE',
            paragraph:'Awarded for listing 300th company on the exchange'
        },
        {
            title:'Ashapura Intimate fashion Ltd',
            paragraph:'Awarded for listing 2nd SME company on the BSE SME platform as an Advisor/Market Maker/Fund Raiser'
        },
        
    ]


    return (
        <>
            <AboutHeader heading="About" />
            <div className='about-page-section'>
                <div className='sec-headers'>
                    <h3>About nnm group</h3>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 about-page-content'>
                            <h3>About Us</h3>
                            <h2>Empowering Your Financial Journey with Personalized Strategies and Trusted Expertise</h2>
                            <p>NNM Group is a comprehensive financial service provider, offering not just services but customized and personalized strategies that are insightful, smarter, and aptly devised.

                                We strongly believe in Chanakya Niti for financial success: "दैवम् विनतिप्रयत्नम् करोति यत्तद्विफलम्" which means "A well-planned work produces a good result." Since its inception in 1950, NNM Group has invested time and resources in gaining expertise and innovating services, aiming for profitable returns for its investors.</p>
                        </div>
                        <div className='col-lg-6 about-page-image'>
                            <img src='/Analysis-bro-about.svg' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='about-second-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 about-second-image'>
                            <img src='/Analysis-pana-about.svg' />

                        </div>
                        <div className='col-lg-6 about-second-content '>
                            <h3>NNM Group</h3>
                            <h2>Personalized Financial Solutions and Unwavering Commitment</h2>
                            <p>
                                {/* NNM Group caters to a diverse client base, including institutions, corporations, and individuals, providing an extensive range of financial products and services. Originating from a small office with a handful of employees, our team's commitment to continuous innovation has led to a dream team of over 70+ employees today. <br /><br /> */}
                                Our core value at NNM Group is a customer-first attitude, fostering strong trust relationships that result in a win-win situation for everyone associated with us. We offer tailor-made products and services, placing the customer's needs at the forefront. Employing real-time customer service through effective individual account information management, we have successfully satisfied more than 19,000 clients across various business segments. We continually build on our strengths to deliver commendable services to our expanding customer base.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-mission'>
                <div className='container-fluid'>
                    <div className='row about-vision-wrapper'>
                        <div className='col-lg-3 about-vision'>
                            <h3>Our Vision</h3>
                            <p>To inspire confidence and propel success in the ever-evolving world of finance.</p>
                        </div>
                        <div className='col-lg-3 about-vision'>
                            <h3>Our Mission</h3>
                            <p> Fostering a community where informed decisions pave the way to financial prosperity.</p>
                        </div>
                        <div className='col-lg-3 about-vision'>
                            <h3>Our Values</h3>
                            <p>Upholding the core values of integrity, transparency, professionalism, client-centricity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='awards-recognition'>
                <div className='sec-headers awards-header'>
                    <h3>Awards & Recognition</h3>

                </div>
                <div className='container-fluid'>
                    <div className='row awards-wrapper'>
                        <div className='col-lg-12 award-img-col'>
                            {photos.map((photo, index) => (
                                <PhotoAwards photo={photo} key={index} awardsData = {awardsData[index]} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function PhotoAwards({ photo  , awardsData }) {
    console.log(awardsData.title)
    return (<>

        <div className='wrap-box'>
            <img src={photo} />
            <h1>{awardsData.title}</h1>
            <p>{awardsData.paragraph}</p>
        </div>
    </>)
}
export default AboutHero;