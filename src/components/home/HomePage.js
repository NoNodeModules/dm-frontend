import React from 'react';
import PropTypes from 'prop-types';
import { SectionsContainer, Section } from 'react-fullpage';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix', 'sectionSeven', 'sectionEight', 'sectionNine'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '0px',
            sectionPaddingBottom: '0px',
            arrowNavigation: false
        };
        return (
            <div>
                <SectionsContainer {...options}>
                    <Section>
                        <div className="section-one">
                            <div className='container'>
                                <h1 className='text-white text-center font-80'>FOR GOOD DESIGNS<br />NOW IS THE RIGHT TIME...</h1>
                                <p className="section-one-p text-white">and we have enough data to prove it</p>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-two">
                            <div className='container'>
                                <p className="section-two-p text-white">India, a rapidly growing economy, with more youth than elderly population,
Biggest democracy in the world, and population of 1.37 Billion.</p>
                                <p className="section-two-p text-white">
                                    Needless to say the  consumption of good designed products
                                    is only going to go up. But these needs are unique to India.
                                    Given the length and breath of our Religions, Caste, Languages,
Cultures, Festivals, Spiritual beliefs, Philosophies, Mythologies, etc..</p>
                                <p className="section-two-p text-white">
                                    And this is exactly where Designmocha contributes.
                                    We believe that unlike many other countries in the world,
                                    Indian doesn`t blindly follow global design trends and practises.
                                    We are many Indias in one, a world of our own.
And that is exactly the approach we should have towards design aswell. </p>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-three">
                            <div className='container'>
                                <h1 className='text-white text-center font-80'>WHAT WE DO</h1>
                                <p className="section-three-p text-white">is actually a lot.. but lets just start with the categories..</p>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-four">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className="feature-box">
                                            <div className='feature-img img1'>
                                                <img src='/images/icon-1.png' />
                                            </div>
                                            <h3 className="feature-heading">Branding</h3>
                                            <p className='fdesc'>We collaborate with you in building your brand`s story. </p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className="feature-box img2">
                                            <div className='feature-img'>
                                                <img src='/images/icon-2.png' />
                                            </div>
                                            <h3 className="feature-heading">Artistic Design</h3>
                                            <p className='fdesc'>Design Will Always Be Incomplete Without Art</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className="feature-box">
                                            <div className='feature-img img3'>
                                                <img src='/images/icon-3.png' />
                                            </div>
                                            <h3 className="feature-heading">Fashion Design</h3>
                                            <p className='fdesc'>Apparel, Accessories, Graphics, We have got you covered.</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className="feature-box img4">
                                            <div className='feature-img'>
                                                <img src='/images/icon-4.png' />
                                            </div>
                                            <h3 className="feature-heading">Digital Design</h3>
                                            <p className='fdesc'>We support you in telling your brand`s story more effectively.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-five">
                            <div className='container'>
                                <h1 className='text-white text-center font-80'>LET US ELABORATE..</h1>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-six">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-sm-6 vmiddle'>
                                        <h3 className='text-white ftitle'>Fashion Design</h3>
                                        <div className='f-description'>
                                            <p className='text-white'>Mood Board Design</p>
                                            <p className='text-white'>Graphic Design</p>
                                            <p className='text-white'>T-Shirt Design</p>
                                            <p className='text-white'>Look and Silhouette</p>
                                            <p className='text-white'>Menswear Design</p>
                                            <p className='text-white'>Womenswear Design</p>
                                            <p className='text-white'>Kidswear Design</p>
                                            <p className='text-white'>Ethnicwear Design</p>
                                            <p className='text-white'>Activewear Design</p>
                                            <p className='text-white'>Textile Design</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 vmiddle'>
                                        <div className="fimage">
                                        <img src='/images/fimg-1.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-seven">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-sm-8 vmiddle'>
                                        <div className="fimage">
                                        <img src='/images/fimg-2.png' />
                                        </div>
                                    </div>
                                    <div className='col-sm-4 vmiddle'>
                                        <h3 className='text-white ftitle text-right'>Branding</h3>
                                        <div className='f-description'>
                                            <p className='text-white text-right'>Logo Design</p>
                                            <p className='text-white text-right'>Brand Style Guides</p>
                                            <p className='text-white text-right'>Packaging Design</p>
                                            <p className='text-white text-right'>Brochure Design</p>
                                            <p className='text-white text-right'>Signage and Banner Design</p>
                                            <p className='text-white text-right'>Book Cover Design</p>
                                            <p className='text-white text-right'>Podcast Cover Design</p>
                                            <p className='text-white text-right'>Catalog Design</p>
                                            <p className='text-white text-right'> Presentation Design</p>
                                            <p className='text-white text-right'>Infographic Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-eight">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-sm-4 vmiddle'>
                                        <h3 className='text-white ftitle'>Artistic Design</h3>
                                        <div className='f-description'>
                                        <p className='text-white'>Illustrations</p>
                                            <p className='text-white'>Caricature and Portraits</p>
                                            <p className='text-white'>Fine Arts</p>
                                            <p className='text-white'>Pattern Design</p>
                                            <p className='text-white'>Character Design</p>
                                            <p className='text-white'>Comic Design</p>
                                            <p className='text-white'>Vector Tracing</p>
                                            <p className='text-white'>Textile Design</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-8 vmiddle'>
                                        <div className="fimage">
                                        <img src='/images/fimg-3.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-nine">
                            <div className='container'>
                                <div className='row'>
                                <div className='col-sm-8 vmiddle'>
                                        <div className="fimage">
                                        <img src='/images/fimg-4.png' />
                                        </div>
                                    </div>
                                    <div className='col-sm-4 vmiddle'>
                                        <h3 className='text-white ftitle text-right'>Digital Design</h3>
                                        <div className='f-description'>
                                            <p className='text-white text-right'>Motion Logo</p>
                                            <p className='text-white text-right'>Motion Creatives</p>
                                            <p className='text-white text-right'>Animation Video</p>
                                            <p className='text-white text-right'>Video Design</p>
                                            <p className='text-white text-right'>UI/UX</p>
                                            <p className='text-white text-right'>3D</p>
                                            <p className='text-white text-right'>Copy Writing</p>
                                            <p className='text-white text-right'>Image/Video edits</p>
                                            <p className='text-white text-right'>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                </SectionsContainer>
            </div>
        );
    }
}
export default HomePage;