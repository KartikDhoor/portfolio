import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
	const homeScrollRef = useRef(null);
	const serviceScrollRef = useRef(null);
	const educationScrollRef = useRef(null);
	const workScrollRef = useRef(null);
	const blogScrollRef = useRef(null);
	const contactScrollRef = useRef(null);
	const [sidebar, setSidebar] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const { ref: homeRef, inView: homeVisible } = useInView({ threshold: 0.5 });
	const { ref: serviceRef, inView: serviceVisible } = useInView({ threshold: 0.3 });
	const { ref: educationRef, inView: educationVisible } = useInView({ threshold: 0.3 });
	const { ref: workRef, inView: workVisible } = useInView({ threshold: 0.3 });
	const { ref: blogRef, inView: blogVisible } = useInView({ threshold: 0.2 });
	const { ref: contactRef, inView: contactVisible } = useInView({ threshold: 0.3 });
	const [Day, setDay] = useState(true);

	const handleSidebar = () => {
		setSidebar(!sidebar);
	}
	const scrollToSection = (scrollRef) => {
		if (scrollRef && scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const handleNavbar = () => {
		setNavbar(!navbar);
	}
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <div></div>,
		preArrow: <div></div>,
	};
	return (
		<>
			<div className={Day?'container-fluid light-main-bg':'container-fluid dark-main-bg'}>
				<div className='row'>
					<div className='col-md-2 ml-0 d-none d-md-block '>
						<div className={Day?'container text-col sidebar':'container sidebar text-col1'}>

							<div className={Day?'row text-col':'row text-col1'}>
								<img className={Day?'img text-col':'img text-col1'} src='./assets/images/my1.png' alt='' />
							</div>
							<div>
								<h5 className={Day?'text-center text-col poppins-regular':'text-center text-col1 poppins-regular'}>Kartik</h5>
							</div>
							<div>
								<p className={Day?'text-muted text-center text-col sidebar-siz':'text-muted text-center dark-text text-col1 sidebar-siz'}>Full-Stack Developer</p>
							</div>
							<div className={Day?'side-panel text-col':'side-panel text-col1'}>
								<div className={Day?'text-col':'text-col1'}><Link className={Day?'text-col':'text-col1'} target='./' to='https://www.instagram.com/kartik_dhoor?igsh=azZ1bjc4ODR4c2o3'><img className={Day?'side-img text-col':'side-img text-col1'} src='./assets/images/instagram.png'></img></Link></div>
								<div className={Day?'text-col':'text-col1'}><Link className={Day?'text-col':'text-col1'} target='./'><img className={Day?'side-img text-col':'side-img text-col1'} src='./assets/images/facebook.png'></img></Link></div>
								<div className={Day?'text-col':'text-col1'}><Link className={Day?'text-col':'text-col1'} target='./' to="https://github.com/KartikDhoor"><img className={Day?'side-img text-col':'side-img text-col1'} src='./assets/images/github.png'></img></Link></div>
								<div className={Day?'text-col':'text-col1'}><Link className={Day?'text-col':'text-col1'} target='./' to='https://www.linkedin.com/in/kartik-dhoor-56970b247/'><img className={Day?'side-img text-col':'side-img text-col1'} src='./assets/images/linkedin.png'></img></Link></div>
								<div className={Day?'text-col':'text-col1'}><Link className={Day?'text-col':'text-col1'} to='/'><img className={Day?'side-img text-col':'side-img text-col1'} src='./assets/images/web.png'></img></Link></div>
							</div>
							<div className={Day ? "br mt-1 text-col" : "br mt-1 text-col1"}></div>
							<div className={Day?'row text-col':'row text-col1'}>
								<div className={Day?'col-md-6 text-col mt-2':'col-md-6 text-col1 mt-2'}>
									<p className={Day?'text-col sidebar-siz':'text-col1 sidebar-siz'}><span className='side-sp'>Age:</span></p>
									<p className={Day?'text-col sidebar-siz':'text-col1 sidebar-siz'}><span className='side-sp'>Freelance:</span></p>
									<p className={Day?'text-col sidebar-siz':'text-col1 sidebar-siz'}><span className='side-sp'>Address:</span></p>
								</div>
								<div className={Day?'col-md-6 text-col mt-2':'col-md-6 text-col1 mt-2'}>
									<p className={Day?'text-col text-end sidebar-siz':'text-col1 text-end sidebar-siz'}>21</p>
									<p className={Day?'text-col text-success text-end sidebar-siz':'text-col1 text-success text-end sidebar-siz'}>Available</p>
									<p className={Day?'text-col text-end sidebar-siz':'text-col1 text-end sidebar-siz'}>Punjab,India</p>
								</div>
							</div>
							<div className='br mt-1'></div>
							<div className={Day?'text-col my-2':'text-col1 my-2'}>
								<p className={Day?'text-col sidebar-siz poppins-semibold':'text-col1 sidebar-siz poppins-semibold'}>Language</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Hindi</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>English</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Punjabi</p>
							</div>
							<div className='br mt-1'></div>
							<div className={Day?'text-col my-2':'text-col1 my-2'}>
								<p className={Day?'text-col sidebar-siz poppins-semibold':'text-col1 sidebar-siz poppins-semibold'}>Skills</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>React js</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Node js</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Express</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>MongoDB</p>
							</div>
							<div className='br mt-1'></div>
							<div className={Day?'text-col my-2':'text-col1 my-2'}>
								<p className={Day?'text-col sidebar-siz poppins-semibold':'text-col1 sidebar-siz poppins-semibold'}>Extra Skills</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Tailwind,Bootstrap</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Git Knowledge</p>
								<p className={Day?'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Aws,S3 Bucket</p>
							</div>
							<div className={Day?'br mt-1 text-col':'br mt-1 text-col1'}></div>
							<div className={Day?'cvbtn text-col my-3' :'cvbtn text-col1 my-3'}>
								<Link to='https://drive.google.com/file/d/110DNA4v9y40AP5fVZrDeNoocE5s_vyc0/view' target='./'>
									<button className='py-2 px-3 border-0' >
										Download CV
									</button></Link>
							</div>
						</div>
					</div>
					<div className='col-md-9 col-sm-12 col-12 col-lg-9 col-xl-9'>
						<div>
							<div className='container-fluid'>
								<div className='container-fluid'>
									{sidebar ?
										<div className='row'>
											<div className='col-sm-5 col-5'>
												<div className={Day?'container text-col sidebar1' :'container text-col1 sidebar1'}>
													<div className={Day?'row text-col mt-1':'row text-col1 mt-1'}>
														<div className={Day?'sm-nav-icon text-col mx-auto':'dark-sm-nav-icon text-col1 mx-auto'}>
															<img className={Day?'icon-img text-col':'icon-img text-col1'}
																src='./assets/images/close.png'
																onClick={handleSidebar} />
														</div>
													</div>
													<div className={Day?'row text-col' :'row text-col1'}>
														<img className={Day?'img text-col' :'img text-col1'} src='./assets/images/my1.png' alt='' />
													</div>
													<div>
														<h5 className={Day? 'text-center text-col poppins-regular':'text-center text-col1 poppins-regular'}>Kartik</h5>
													</div>
													<div>
														<p className={Day?'text-muted text-center text-col sidebar-siz' :'text-muted dark-text text-center text-col1 sidebar-siz'}>Full-Stack Developer</p>
													</div>
													<div className={Day?'side-panel text-col' :'side-panel text-col1'}>
														<div className={Day? 'text-col':'text-col1'}><Link className={Day? 'text-col':'text-col1'} target='./' to='https://www.instagram.com/kartik_dhoor?igsh=azZ1bjc4ODR4c2o3'><img className={Day? 'side-img text-col':'side-img text-col1'} src='./assets/images/instagram.png'></img></Link></div>
														<div className={Day? 'text-col':'text-col1'}><Link className={Day? 'text-col':'text-col1'} target='./'><img className={Day? 'side-img text-col':'side-img text-col1'} src='./assets/images/facebook.png'></img></Link></div>
														<div className={Day? 'text-col':'text-col1'}><Link className={Day? 'text-col':'text-col1'} target='./' to="https://github.com/KartikDhoor"><img className={Day? 'side-img text-col':'side-img text-col1'} src='./assets/images/github.png'></img></Link></div>
														<div className={Day? 'text-col':'text-col1'}><Link className={Day? 'text-col':'text-col1'} target='./' to='https://www.linkedin.com/in/kartik-dhoor-56970b247/'><img className={Day? 'side-img text-col':'side-img text-col1'} src='./assets/images/linkedin.png'></img></Link></div>
														<div className={Day? 'text-col':'text-col1'}><Link className={Day? 'text-col':'text-col1'} to='/'><img className={Day? 'side-img text-col':'side-img text-col1'} src='./assets/images/web.png'></img></Link></div>
													</div>
													<div className={Day?'br mt-1 text-col':'br mt-1 text-col1'}></div>
													<div className={Day? 'row text-col':'row text-col1'}>
														<div className={Day?'col-sm-6 col-6 text-col mt-2':'col-sm-6 col-6 text-col1 mt-2'}>
															<p className={Day?'text-col sidebar-siz':'text-col1 sidebar-siz'}><span className='side-sp'>Age:</span></p>
															<p className={Day?'text-col sidebar-siz':'text-col1 sidebar-siz'}><span className='side-sp'>Freelance:</span></p>
															<p className={Day?'text-col sidebar-siz':'text-col1 sidebar-siz'}><span className='side-sp'>Address:</span></p>
														</div>
														<div className={Day?'col-sm-6 col-6 text-col mt-2':'col-sm-6 col-6 text-col1 mt-2'}>
															<p className={Day?'text-col text-end sidebar-siz':'text-col1 text-end sidebar-siz'}>21</p>
															<p className={Day? 'text-col text-success text-end sidebar-siz':'text-col1 text-success text-end sidebar-siz'}>Available</p>
															<p className={Day? 'text-col text-end sidebar-siz':'text-col1 text-end sidebar-siz'}>Punjab,India</p>
														</div>
													</div>
													<div className='br mt-1'></div>
													<div className={Day? 'text-col my-2':'text-col1 my-2'}>
														<p className={Day? 'text-col sidebar-siz poppins-semibold':'text-col1 sidebar-siz poppins-semibold'}>Language</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Hindi</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>English</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Punjabi</p>
													</div>
													<div className='br mt-1'></div>
													<div className={Day? 'text-col my-2':'text-col1 my-2'}>
														<p className={Day? 'text-col sidebar-siz poppins-semibold':'text-col1 sidebar-siz poppins-semibold'}>Skills</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>React js</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Node js</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Express</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>MongoDB</p>
													</div>
													<div className='br mt-1'></div>
													<div className={Day? 'text-col my-2':'text-col1 my-2'}>
														<p className={Day? 'text-col sidebar-siz poppins-semibold':'text-col1 sidebar-siz poppins-semibold'}>Extra Skills</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Tailwind,Bootstrap</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Git Knowledge</p>
														<p className={Day? 'text-col sidebar-siz poppins-regular':'text-col1 sidebar-siz poppins-regular'}>Aws,S3 Bucket</p>
													</div>

													<div className={Day?'br mt-1 text-col':'br mt-1 text-col1'}></div>
													<div className={Day?'cvbtn text-col my-3':'cvbtn text-col1 my-3'}>
														<Link to='https://drive.google.com/file/d/110DNA4v9y40AP5fVZrDeNoocE5s_vyc0/view' target='./'>
															<button className='py-2 px-3 border-0' >
																Download CV
															</button></Link>
													</div>

												</div>
											</div>
										</div>
										:
										<div></div>}
									{navbar ?
										<div className={Day?'container text-col nav-siz1':'container text-col1 nav-siz1'}>
											<div className={Day?'row text-col':'row text-col1'}>
												<div className={Day?'text-col':'text-col1'}>
												<div className={Day?'row text-col mt-5':'row text-col1 mt-5'}>
													<div className={Day?'nav-sty':'dark-nav-sty'}>
														<img onClick={handleNavbar}
															className='icon-img text-col on-click-col'
															src='./assets/images/close.png'
															alt='home'
														/>
													</div>
												</div>
												<div className={Day?'row text-col mt-5':'row text-col1 mt-5'}>
													<div className={Day? homeVisible ? "nav-sty1" : 'nav-sty text-col':homeVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
														<img onClick={() => scrollToSection(homeScrollRef)}
															className='icon-img text-col on-click-col'
															src='./assets/images/home-icon-silhouette.png'
															alt='home'
														/>
													</div>
												</div>
												<div className={Day?'row text-col':'row text-col1'}>
													<div id='services' className={Day? serviceVisible ? "nav-sty1" : 'nav-sty text-col':serviceVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
														<img onClick={() => scrollToSection(serviceScrollRef)}
															className='icon-img text-col'
															src='./assets/images/solution.png'
															alt='Service'
														/>
													</div>
												</div>
												<div className={Day?'row text-col':'row text-col1'}>
													<div className={Day? educationVisible ? "nav-sty1" : 'nav-sty text-col':educationVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
														<img onClick={() => scrollToSection(educationScrollRef)}
															className='icon-img text-col'
															src='./assets/images/open-book.png'
															alt='Education'
														/>
													</div>
												</div>
												<div className={Day?'row text-col':'row text-col1'}>
													<div className={Day? workVisible ? "nav-sty1" : 'nav-sty text-col':workVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
														<img onClick={() => scrollToSection(workScrollRef)}
															className='icon-img text-col'
															src='./assets/images/suitcase.png'
															alt='Experience'
														/>
													</div>
												</div>
												<div className={Day?'row text-col':'row text-col1'}>
													<div className={Day? blogVisible? "nav-sty1" : 'nav-sty text-col': blogVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
														<img onClick={() => scrollToSection(blogScrollRef)}
															className='icon-img text-col'
															src='./assets/images/edit-button.png'
															alt='Blog'
														/>
													</div>
												</div>
												<div className={Day?'row text-col':'row text-col1'}>
													<div className={Day? contactVisible ? "nav-sty1" : 'nav-sty text-col':contactVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
														<img onClick={() => scrollToSection(contactScrollRef)}
															className='icon-img text-col'
															src='./assets/images/email.png'
															alt='Contact'
														/>
													</div>
												</div>
												</div>
											</div>
										</div>
										: <div></div>}
									<div className='small-nav d-block d-md-none'>
										<div className={Day?'mt-3 rounded-4 row text-col':'mt-3 rounded-4 row text-col1'}>
											<div className={Day?'col-sm-2 col-2 text-col rounded-4':'col-sm-2 col-2 text-col1 rounded-4'}>
												<img className={Day?'img2  text-col':'img2  text-col1'} src='./assets/images/my1.png'
													onClick={handleSidebar}
												/>
											</div>
											<div className={Day?'col-sm-6 col-6 text-col':'col-sm-6 col-6 text-col1'} />
											<div className={Day?'col-sm-2 col-2 text-col':'col-sm-2 col-2'}>
												{Day ? (
													<div className={Day?'sm-nav-icon':'dark-sm-nav-icon'}>
														<img
															className='icon-img'
															onClick={() => setDay(false)}
															src='./assets/images/sun (1).png'
															alt='Day Icon'
														/>
													</div>
												) : (
													<div className={Day?'sm-nav-icon':'dark-sm-nav-icon'}>
														<img
															className='icon-img'
															onClick={() => setDay(true)}
															src='./assets/images/moon.png'
															alt='Night Icon'
														/>
													</div>
												)}
											</div>
											<div className={Day?'col-md-2 col-2 text-col rounded-4':'col-md-2 col-2 rounded-4'}>
												<div className={Day?'sm-nav-icon':'dark-sm-nav-icon'}>
													<img
														className='icon-img'
														onClick={handleNavbar}
														src='./assets/images/menu.png'
														alt='Night Icon'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='container-fluid'>
									<div ref={homeRef} id='home' className={Day?"row hero rounded-4 mx-auto zoom2":"row hero1 rounded-4 mx-auto zoom2"}>
										<div ref={homeScrollRef} className={Day? 'col-md-7 col-lg-8 col-xl-8 col-sm-8 col-12 my-auto home-text poppins-regular text-col rounded-4':'col-md-7 col-lg-8 col-xl-8 col-sm-8 col-12 my-auto home-text poppins-regular text-col1 rounded-4'}>
											<h1 className={Day? 'text-col':'text-col1'}>I'm Kartik</h1>
											<h1 className={Day? 'text-col':'text-col1'}><span className='main-ani'>Full-Stack</span> Developer</h1>
											<p className={Day? 'text-col mt-3':'text-col1 mt-3'}>Passionate about building innovative web applications with a focus on both front-end and back-end development. I enjoy working with the latest technologies to create seamless user experiences and efficient backend systems.</p>
											<button className='btn btn-warning mt-3'>HIRE ME&#10170;</button>
										</div>
										<div className= {Day?'col-md-5 col-lg-4 col-xl-4 col-sm-4 d-none d-sm-block text-col rounded-4':'col-md-5 col-lg-4 col-xl-4 col-sm-4 d-none d-sm-block text-col1 rounded-4'}>
											<img className={Day? 'img-main text-col rounded-4':'img-main text-col1 rounded-4'} src='./assets/images/my1.png' />
										</div>
									</div>
								</div>
							</div>
							<div ref={serviceRef} className='zin'>
								<div ref={serviceScrollRef} id='service' className='row mt-5'>
									<h2 className='text-center mb-3 poppins-bold'>My Services</h2>
								</div>
								<div className='row'>
									<div className='col-md-2' />
									<div className='col-md-8'>
										<p className={Day? 'text-center text-muted poppins-light mb-4':'text-center dark-text text-muted poppins-light mb-4'}>Providing a range of services to meet your needs, using the latest technologies to deliver high-quality solutions.</p>
									</div>
									<div className='col-md-2' />
								</div>
								<div className='row siz' >
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className={Day?'col zoom my-responsive-height':'dark-col zoom my-responsive-height'}>
											<img className={Day? 'icon-image':'icon-dark-image'} src='./assets/images/Front end.png'></img>
											<div className={Day?'text-col':'text-col1'}>
												<p className={Day? 'h6 text-center  text-col poppins-semibold':'h6 text-center  text-col1 poppins-semibold'}>Front End Developer</p>
												<p className={Day? 'text-muted text-center text-col poppins-regular':'text-muted dark-text text-center text-col1 poppins-regular'}>ReactJS, HTML, CSS, Bootstrap</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className={Day?'col zoom my-responsive-height':'dark-col zoom my-responsive-height'}>
											<img className={Day? 'icon-image':'icon-dark-image'} src='./assets/images/Back End.png'></img>
											<div className={Day?'text-col':'text-col1'}>
												<p className={Day? 'h6 text-center  text-col poppins-semibold':'h6 text-center  text-col1 poppins-semibold'}>Back End Developer</p>
												<p className={Day? 'text-muted text-center text-col poppins-regular':'text-muted dark-text text-center text-col1 poppins-regular'}>Node.js, Express.js</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className={Day?'col zoom my-responsive-height':'dark-col zoom my-responsive-height'}>
											<img className={Day? 'icon-image':'icon-dark-image'} src='./assets/images/Management.png'></img>
											<div className={Day?'text-col':'text-col1'}>
												<p className={Day? 'h6 text-center  text-col poppins-semibold':'h6 text-center  text-col1 poppins-semibold'}>Website Management</p>
												<p className={Day? 'text-muted text-center text-col poppins-regular':'text-muted dark-text text-center text-col1 poppins-regular'}>Node.js, S3 Bucket</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className={Day?'col zoom my-responsive-height':'dark-col zoom my-responsive-height'}>
											<img className={Day? 'icon-image':'icon-dark-image'} src='./assets/images/Database.png'></img>
											<div className={Day?'text-col':'text-col1'}>
												<p className={Day? 'h6 text-center  text-col poppins-semibold':'h6 text-center  text-col1 poppins-semibold'}>Website Management</p>
												<p className={Day? 'text-muted text-center text-col poppins-regular':'text-muted dark-text text-center text-col1 poppins-regular'}>node js,S3 Bucket</p>
											</div>
										</div>

									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className={Day?'col zoom my-responsive-height':'dark-col zoom my-responsive-height'}>
											<img className={Day? 'icon-image':'icon-dark-image'} src='./assets/images/Online Support.png'></img>
											<div className={Day?'text-col':'text-col1'}>
												<p className={Day? 'h6 text-center  text-col poppins-semibold':'h6 text-center  text-col1 poppins-semibold'}>Website Management</p>
												<p className={Day? 'text-muted text-center text-col poppins-regular':'text-muted dark-text text-center text-col1 poppins-regular'}>node js,S3 Bucket</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className={Day?'col zoom my-responsive-height':'dark-col zoom my-responsive-height'}>
											<img className={Day? 'icon-image':'icon-dark-image'} src='./assets/images/Front end.png'></img>
											<div className={Day?'text-col':'text-col1'}>
												<p className={Day? 'h6 text-center  text-col poppins-semibold':'h6 text-center  text-col1 poppins-semibold'}>Website Management</p>
												<p className={Day? 'text-muted text-center text-col poppins-regular':'text-muted dark-text text-center text-col1 poppins-regular'}>node js,S3 Bucket</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div ref={educationRef} className='container'>
								<div ref={educationScrollRef} className='row mt-5'>
									<p className='h2 text-center poppins-bold'>Education</p>
								</div>
								<div className='row'>
									<div className='col-md-2' />
									<div className='col-md-8'>
										<p className={Day? ' text-center text-muted poppins-light mb-4':' text-center dark-text text-muted poppins-light mb-4'}>Dive into the foundation of my tech journey. Scroll down to discover how my education has shaped my passion and expertise in software development</p>
									</div>
									<div className='col-md-2' />
								</div>
								<div className={Day? 'container mt-3 edu':'container mt-3 dark-edu'}>
									<div className={Day? 'row edu':'row dark-edu'}>
										<div className={Day? 'row mt-5 mb-4 edu':'row mt-5 mb-4 dark-edu'}>
											<div className={Day?'col-md-5 col-sm-12 col-12 text-col':'col-md-5 col-sm-12 col-12 text-col1'}>
												<p className={Day?'h3 mb-4 text-col':'h3 mb-4 text-col1'}>D.A.V University</p>
												<p className={Day?'h6 text-col':'h6 text-col1'}>Student:- <span className={Day?'col1':'col1 dark-text'}>Completed in june 2024</span></p>
											</div>
											<div className={Day?'col-md-7 col-sm-12 col-12 text-col':'col-md-7 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Certificate of C.S.E</p>
												<p className={Day? 'text-muted text-col':'text-muted text-col1 dark-text'}>Gained a strong foundation in computer science principles, including software development, algorithms, and database management. Participated in various projects and internships, gaining practical experience with the MERN stack and other technologies. Graduated with a CGPA of 7.00/10.</p>
											</div>
											<div className='br' />
										</div>
										<div className={Day? 'row mt-5 mb-4 edu':'row mt-5 mb-4 dark-edu'}>
											<div className={Day?'col-md-5 col-sm-12 col-12 text-col':'col-md-5 col-sm-12 col-12 text-col1'}>
												<p className={Day?'h3 mb-4 text-col':'h3 mb-4 text-col1'}>D.S.S.D. Senior Secondary School</p>
												<p className={Day?'h6 text-col':'h6 text-col1'}>Student:- <span className={Day?'col1':'col1 dark-text'}>Completed in 2020</span></p>
											</div>
											<div className={Day?'col-md-7 col-sm-12 col-12 text-col':'col-md-7 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Certificate of Senior Secondary (XII)</p>
												<p className={Day? 'text-muted text-col':'text-muted text-col1 dark-text'}>My senior secondary education at Devi Sahai S.D. Senior Secondary School provided me with a solid foundation in science, particularly in mathematics and computer science. The curriculum emphasized critical thinking and problem-solving skills. I completed this phase of education with a CGPA of 8.00/10, showcasing my strong academic performance and readiness for higher education.</p>
											</div>
											<div className='br' />
										</div>
										<div className={Day? 'row mt-5 mb-4 edu':'row mt-5 mb-4 dark-edu'}>
											<div className={Day?'col-md-5 col-sm-12 col-12 text-col':'col-md-5 col-sm-12 col-12 text-col1'}>
												<p className={Day?'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Jyoti Public High School</p>
												<p className={Day?'h6 text-col':'h6 text-col1'}>Student:- <span className={Day?'col1':'col1 dark-text'}>Completed in 2018</span></p>
											</div>
											<div className={Day?'col-md-7 col-sm-12 col-12 text-col':'col-md-7 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Certificate of Secondary (X)</p>
												<p className={Day? 'text-muted text-col':'text-muted text-col1 dark-text'}>At Jyoti Public High School, I completed my secondary education with a focus on a broad range of general subjects. This foundational education helped build my academic base and fostered essential skills in various disciplines.I graduated with a CGPA of 6.50/10, marking the beginning of my educational journey in technology and setting the stage for my subsequent studies in computer science.</p>
											</div>
											<div className='br' />
										</div>
									</div>
								</div>
							</div>
							<div ref={workRef} className='container'>

								<div className='row mt-5' ref={workScrollRef}>
									<p className='h2 text-center poppins-bold'>Work History</p>
								</div>
								<div className='row'>
									<div className='col-md-2' />
									<div className='col-md-8'>
										<p className={Day? ' text-center text-muted poppins-light mb-4':' text-center dark-text text-muted poppins-light mb-4'}>Explore the hands-on experience I've gained through impactful work. Scroll down to see how I've applied my skills in real-world projects.</p>
									</div>
									<div className='col-md-2' />
								</div>
								<div className={Day? 'container mt-3 edu':'container mt-3 dark-edu'}>
									<div className={Day? 'row edu':'row dark-edu'}>
										<div className={Day? 'row mt-5 mb-4 edu':'row mt-5 mb-4 dark-edu'}>
											<div className={Day?'col-md-5 col-sm-12 col-12 text-col':'col-md-5 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Hoping Minds</p>
												<p className={Day? 'text-col':' text-col1'}>internship:- <span className={Day?'col1':'col-1 dark-text'}>june 2024 - Present</span></p>
											</div>
											<div className={Day?'col-md-7 col-sm-12 col-12 text-col':'col-md-7 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Certificate of Mern-Stack</p>
												<p className={Day? 'text-muted text-col':'text-muted text-col1 dark-text'}> Developing and maintaining web applications using MongoDB, Express.js, ReactJS, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions. Involved in all stages of the software development lifecycle, from requirement analysis to deployment and maintenance.</p>
											</div>
											<div className='br' />
										</div>
										<div className={Day? 'row mt-5 mb-4 edu':'row mt-5 mb-4 dark-edu'}>
											<div className={Day?'col-md-5 col-sm-12 col-12 text-col':'col-md-5 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>O7 Services</p>
												<p className={Day? 'text-col':' text-col1'}>Student/Intern:- <span className={Day?'col1':'col-1 dark-text'}>June 2023 - December 2023</span></p>
											</div>
											<div className={Day?'col-md-7 col-sm-12 col-12 text-col':'col-md-7 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Certificate of Full-Stack</p>
												<p className={Day? 'text-muted text-col':'text-muted text-col1 dark-text'}>Worked on various projects involving full-stack development. Gained hands-on experience with the MERN stack, focusing on building scalable web applications. Learned best practices for coding, testing, and deploying applications in a professional environment.</p>
											</div>
											<div className='br' />
										</div>
										<div className={Day? 'row mt-5 mb-4 edu':'row mt-5 mb-4 dark-edu'}>
											<div className={Day?'col-md-5 col-sm-12 col-12 text-col':'col-md-5 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Webdoxs</p>
												<p className={Day? 'text-col':' text-col1'}>Student/Intern:- <span className={Day?'col1':'col-1 dark-text'}>June 2022 - July 2022</span></p>
											</div>
											<div className={Day?'col-md-7 col-sm-12 col-12 text-col':'col-md-7 col-sm-12 col-12 text-col1'}>
												<p className={Day? 'h3 mb-4 text-col':'h3 mb-4 text-col1'}>Certificate of Java</p>
												<p className={Day? 'text-muted text-col':'text-muted text-col1 dark-text'}>Developed Java applications and gained experience in Swing and other Java technologies. Worked on enhancing existing applications and creating new features. Collaborated with senior developers to learn and implement industry-standard coding practices.</p>
											</div>
											<div className='br' />
										</div>
									</div>
								</div>
							</div>
							<div ref={blogRef} className='container'>
								<div className='row mt-5' ref={blogScrollRef} >
									<p className='h2 text-center poppins-bold'>Portfolio</p>
								</div>
								<div className='row'>
									<div className='col-md-2' />
									<div className='col-md-8'>
										<p className={Day?' text-center text-muted poppins-light mb-4':' text-center dark-text text-muted poppins-light mb-4'}>Discover the innovative projects that showcase my development skills. Scroll down to see how I bring ideas to life through code.</p>
									</div>
									<div className='col-md-2' />
								</div>
								<div className=''>
									<div className='row'>
										<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
											<img className='portfolio-img' src='./assets/images/pic1.jpg'></img>
										</div>
										<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
											<img className='portfolio-img' src='./assets/images/pic2.jpg'></img>
										</div>
										<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
											<img className='portfolio-img' src='./assets/images/pic3.jpg'></img>
										</div>
										<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
											<img className='portfolio-img' src='./assets/images/pic4.jpg'></img>
										</div>
										<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
											<img className='portfolio-img' src='./assets/images/pic5.jpg'></img>
										</div>
										<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
											<img className='portfolio-img' src='./assets/images/pic6.jpg'></img>
										</div>
									</div>
								</div>
								<div className='row mt-5'>
									<p className='h2 text-center poppins-bold'>Blog</p>
								</div>
								<div className='row'>
									<div className='col-md-2' />
									<div className='col-md-8'>
										<p className={Day?' text-center text-muted poppins-light mb-4':' text-center dark-text text-muted poppins-light mb-4'}>Gain insights from my experiences and expertise in web development. Scroll down to explore articles that dive deep into coding and technology.</p>
									</div>
									<div className='col-md-2' />
								</div>
								<div className='row mt-3'>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6 mt-2'>
										<div className={Day? 'blog-siz text-col zoom':'blog-siz text-col1 zoom'}>
											<div>
												<img className={Day? 'blog-img text-col':'blog-img text-col1'} src='./assets/images/pic1.jpg' />
											</div>
											<div className={Day? 'text-col p-2 rounded-2':'text-col1 p-2 rounded-2'}>
												<p className={Day?'h4 text-col':'h4 text-col1'}>How to Make Web templates</p>
												<p className={Day?'text-col':'text-col1'}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized of please...</p>
												<p className={Day?'h5 text-col rounded-2':'h5 text-col1 rounded-2'}>Learn More</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6 mt-2'>
									<div className={Day? 'blog-siz text-col zoom':'blog-siz text-col1 zoom'}>
											<div>
												<img className={Day? 'blog-img text-col':'blog-img text-col1'} src='./assets/images/pic2.jpg' />
											</div>
											<div className={Day? 'text-col p-2 rounded-2':'text-col1 p-2 rounded-2'}>
												<p className={Day?'h4 text-col':'h4 text-col1'}>How to Make Web templates</p>
												<p className={Day?'text-col':'text-col1'}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized of please...</p>
												<p className={Day?'h5 text-col rounded-2':'h5 text-col1 rounded-2'}>Learn More</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6 mt-2 d-none d-md-block'>
									<div className={Day? 'blog-siz text-col zoom':'blog-siz text-col1 zoom'}>
											<div>
												<img className={Day? 'blog-img text-col':'blog-img text-col1'} src='./assets/images/pic3.jpg' />
											</div>
											<div className={Day? 'text-col p-2 rounded-2':'text-col1 p-2 rounded-2'}>
												<p className={Day?'h4 text-col':'h4 text-col1'}>How to Make Web templates</p>
												<p className={Day?'text-col':'text-col1'}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized of please...</p>
												<p className={Day?'h5 text-col rounded-2':'h5 text-col1 rounded-2'}>Learn More</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='recomendation container'>
								<div className='row mt-5'>
									<p className='h1 text-center poppins-bold'>Recommendation</p>
								</div>
								<div className='row'>
									<div className='col-md-2' />
									<div className='col-md-8'>
										<p className={Day? ' text-center text-muted poppins-light mb-4':'text-center dark-text text-muted poppins-light mb-4'}>Gain insights from my experiences and expertise in web development. Scroll down to explore articles that dive deep into coding and technology.</p>
									</div>
									<div className='col-md-2' />
								</div>
								<div className='row p-0'>
									<div className='col-md-4 col-sm-6 col-12 mt-2'>
										<div className={Day?'row mar text-col':'row mar text-col1'}>
											<div className={Day?'row mt-4 text-col m-0':'row mt-4 text-col1 m-0'}>
												<p className={Day? 'text-col text-warning mb-0':'text-col1 text-warning mb-0'}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
											</div>
											<div className={Day?'row text-col m-0':'row text-col1 m-0'}>
												<p className={Day?'poppins-bold text-col h4 mb-1':'poppins-bold text-col1 h4 mb-1'}>Great Frontend Developer</p>
											</div>
											<p className={Day?'text-col poppins-regular':'text-col1 poppins-regular'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
											<div className={Day?'row mb-3 text-col m-0':'row mb-3 text-col1 m-0'}>
												<div className={Day? 'col-md-5  text-col':'col-md-5  text-col1'}><img className={Day? 'review-image text-col':'review-image text-col1'} src='./assets/images/temp.jpg' /></div>
												<div className={Day?'col-md-7  text-col':'col-md-7  text-col1'}>
													<p className={Day?'h4  text-col':'h4  text-col1'}>James Gouse</p>
													<p className={Day?'text-col text-muted':'text-col1 dark-text text-muted'}>Graphic Designer</p>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-sm-6 d-none d-sm-block mt-2'>
										<div className={Day?'row mar text-col':'row mar text-col1'}>
											<div className={Day?'row mt-4 text-col m-0':'row mt-4 text-col1 m-0'}>
												<p className={Day? 'text-col text-warning mb-0':'text-col1 text-warning mb-0'}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
											</div>
											<div className={Day?'row text-col m-0':'row text-col1 m-0'}>
												<p className={Day?'poppins-bold text-col h4 mb-1':'poppins-bold text-col1 h4 mb-1'}>Great Frontend Developer</p>
											</div>
											<p className={Day?'text-col poppins-regular':'text-col1 poppins-regular'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
											<div className={Day?'row mb-3 text-col m-0':'row mb-3 text-col1 m-0'}>
												<div className={Day? 'col-md-5  text-col':'col-md-5  text-col1'}><img className={Day? 'review-image text-col':'review-image text-col1'} src='./assets/images/temp.jpg' /></div>
												<div className={Day?'col-md-7  text-col':'col-md-7  text-col1'}>
													<p className={Day?'h4  text-col':'h4  text-col1'}>James Gouse</p>
													<p className={Day?'text-col text-muted':'text-col1 dark-text text-muted'}>Graphic Designer</p>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-4 d-none d-md-block'>
										<div className={Day?'row mar text-col':'row mar text-col1'}>
											<div className={Day?'row mt-4 text-col m-0':'row mt-4 text-col1 m-0'}>
												<p className={Day? 'text-col text-warning mb-0':'text-col1 text-warning mb-0'}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
											</div>
											<div className={Day?'row text-col m-0':'row text-col1 m-0'}>
												<p className={Day?'poppins-bold text-col h4 mb-1':'poppins-bold text-col1 h4 mb-1'}>Great Frontend Developer</p>
											</div>
											<p className={Day?'text-col poppins-regular':'text-col1 poppins-regular'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
											<div className={Day?'row mb-3 text-col m-0':'row mb-3 text-col1 m-0'}>
												<div className={Day? 'col-md-5  text-col':'col-md-5  text-col1'}><img className={Day? 'review-image text-col':'review-image text-col1'} src='./assets/images/temp.jpg' /></div>
												<div className={Day?'col-md-7  text-col':'col-md-7  text-col1'}>
													<p className={Day?'h4  text-col':'h4  text-col1'}>James Gouse</p>
													<p className={Day?'text-col text-muted':'text-col1 dark-text text-muted'}>Graphic Designer</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='container'>
								<div className='row' ref={contactRef}>
									<div className='col-md-8 col-sm-12 col-12  mt-5' ref={contactScrollRef}>
										<p className='h1 poppins-bold'>Leave us your info</p>
										<div className={Day? 'container text-col mt-5':'container text-col1 mt-5'}>
											<from className=''>
												<div className={Day?'row text-col p-2':'row text-col1 p-2'}>
													<div className={Day?'text-col':'text-col1'}>
														<p className={Day?'h5 poppins-bold text-col mt-4 text-muted':'h5 poppins-bold text-col1 mt-4 dark-text'}>Your Full Name(required)*</p>
														<input type='text' className={Day?'contact-inp':'contact-inp-dark'}></input>
													</div>
													<div className={Day?'text-col':'text-col1'}>
														<p className={Day?'h5 poppins-bold text-col mt-4 text-muted':'h5 poppins-bold text-col1 mt-4 dark-text'}>Your Email(required)*</p>
														<input type='text' className={Day?'contact-inp':'contact-inp-dark'}></input>
													</div>
													<div className={Day?'text-col':'text-col1'}>
														<p className={Day?'h5 poppins-bold text-col mt-4 text-muted':'h5 poppins-bold text-col1 mt-4 dark-text'}>Subject</p>
														<input type='text' className={Day?'contact-inp':'contact-inp-dark'}></input>
													</div>
													<div className={Day?'text-col':'text-col1'}>
														<p className={Day?'h5 poppins-bold text-col mt-4 text-muted':'h5 poppins-bold text-col1 mt-4 dark-text'}>your message</p>
														<textarea type='text' className={Day?'contact-inp1':'contact-inp1-dark'}></textarea>
													</div>
													<button className='message-btn poppins-bold '>Send Message</button>
												</div>

											</from>

										</div>
									</div>
									<div className='col-md-4 col-sm-12 col-12 mt-5'>
										<p className='h1 poppins-bold'>Contact Info</p>
										<div className={Day? 'row text-col mt-5':'row text-col1 mt-5'}>
											<div className={Day?'contact-cen contact-siz text-col':'contact-cen contact-siz text-col1'}><img className='contact-img' src='./assets/images/map.png' /></div>
											<div className={Day?'row m-0 text-col':'row m-0 text-col1'}>
												<div className={Day?'col-md-6 col-sm-6 col-6 text-col':'col-md-6 col-sm-6 col-6 text-col1'}>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>Country:-</p>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>City:-</p>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>Streat:-</p>
												</div>
												<div className={Day?'col-md-6 col-sm-6 col-6 text-col':'col-md-6 col-sm-6 col-6 text-col1'}>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>INDIA</p>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>Jalandhar City</p>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>5A,Aman Nager</p>
												</div>
											</div>
										</div>
										<div className={Day? 'row text-col mt-5':'row text-col1 mt-5'}>
											<div className={Day?'contact-cen contact-siz text-col':'contact-cen contact-siz text-col1'}><img className='contact-img' src='./assets/images/link.png' /></div>
											<div className={Day?'row m-0 text-col':'row m-0 text-col1'}>
												<div className={Day?'col-md-5 col-sm-6 col-5 text-col':'col-md-5 col-sm-6 col-5 text-col1'}>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>Email:-</p>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>LinkedIN:-</p>
													<p className={Day? 'h6 text-col':'h6 text-col1'}>GitHUB:-</p>
												</div>
												<div className={Day?'col-md-7 col-sm-6 col-7 text-col':'col-md-7 col-sm-6 col-7 text-col1'}>
													<Link className='text-decoration-none' onClick={() => window.location = 'mailto:kartikdhoor121@gmail.com'}><p className={Day?'h6 text-dark text-col':'h6 dark-text text-col1'}>kartikdhoor121@gmail.com</p></Link>
													<Link className='text-decoration-none' to='https://www.linkedin.com/in/kartik-dhoor-56970b247/' target='./'><p className={Day?'h6 text-dark text-col':'h6 dark-text text-col1'}>KartikDhoor</p></Link>
													<Link className='text-decoration-none' to="https://github.com/KartikDhoor" target='./'><p className={Day?'h6 text-dark text-col':'h6 dark-text text-col1'}>Kartik Dhoor</p></Link>
												</div>
											</div>
										</div>
										<div className={Day? 'row text-col mt-5':'row text-col1 mt-5'}>
											<div className={Day?'contact-cen contact-siz text-col':'contact-cen contact-siz text-col1'}><img className='contact-img' src='./assets/images/phone-call.png' /></div>
											<div className={Day?'row m-0 text-col':'row m-0 text-col1'}>
												<div className={Day?'col-md-6 col-sm-6 col-6 text-col':'col-md-6 col-sm-6 col-6 text-col1'}>
													<p className={Day?'h6 text-col':'h6 text-col1'}>Phone no:-</p>
													<p className={Day?'h6 text-col':'h6 text-col1'}>WhatSapp no:-</p>
												</div>
												<div className={Day?'col-md-6 col-sm-6 col-6 text-col contact-mr':'col-md-6 col-sm-6 col-6 text-col1 contact-mr'}>
													<p className={Day?'h6 text-col':'h6 text-col1'}>+916280887657</p>
													<p className={Day?'h6 text-col':'h6 text-col1'}>+916280887657</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={Day?'row mt-5 mb-0 text-col':'row mt-5 mb-0 text-col1'}>
								<div className={Day?'col-md-12 text-col':'col-md-12 text-col1'}>
									<p className={Day?'h5 text-col text-center':'h5 text-col1 text-center'}>@all right are reserved by kartik</p>
								</div>
							</div></div>
					</div>
					<div className='col-md-1'>
						<div className={Day? 'container text-col nav-siz':'container text-col1 nav-siz'}>
							<div className={Day?'row text-col':'row text-col1'}>
								{Day ? (
									<div className={Day?'nav-sty':'dark-nav-sty'}>
										<img
											className='icon-img'
											onClick={() => setDay(false)}
											src='./assets/images/sun (1).png'
											alt='Day Icon'
										/>
									</div>
								) : (
									<div className={Day?'nav-sty':'dark-nav-sty'}>
										<img
											className='icon-img'
											onClick={() => setDay(true)}
											src='./assets/images/moon.png'
											alt='Night Icon'
										/>
									</div>
								)}
							</div>
							<div className={Day?'row text-col mt-5':'row text-col1 mt-5'}>
								<div className={Day? homeVisible ? "nav-sty1" : 'nav-sty text-col':homeVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
									<img onClick={() => scrollToSection(homeScrollRef)}
										className='icon-img text-col on-click-col'
										src='./assets/images/home-icon-silhouette.png'
										alt='home'
									/>
								</div>
							</div>
							<div className={Day?'row text-col':'row text-col1'}>
								<div id='services' className={Day?serviceVisible ? "nav-sty1" : 'nav-sty text-col':serviceVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
									<img onClick={() => scrollToSection(serviceScrollRef)}
										className='icon-img text-col'
										src='./assets/images/solution.png'
										alt='Service'
									/>
								</div>
							</div>
							<div className={Day?'row text-col':'row text-col1'}>
								<div className={Day?educationVisible ? "nav-sty1" : 'nav-sty text-col':educationVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
									<img onClick={() => scrollToSection(educationScrollRef)}
										className='icon-img text-col'
										src='./assets/images/open-book.png'
										alt='Education'
									/>
								</div>
							</div>
							<div className={Day?'row text-col':'row text-col1'}>
								<div className={Day?workVisible ? "nav-sty1" : 'nav-sty text-col':workVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
									<img onClick={() => scrollToSection(workScrollRef)}
										className='icon-img text-col'
										src='./assets/images/suitcase.png'
										alt='Experience'
									/>
								</div>
							</div>
							<div className={Day?'row text-col':'row text-col1'}>
								<div className={Day?blogVisible ? "nav-sty1" : 'nav-sty text-col':blogVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
									<img onClick={() => scrollToSection(blogScrollRef)}
										className='icon-img text-col'
										src='./assets/images/edit-button.png'
										alt='Blog'
									/>
								</div>
							</div>
							<div className={Day?'row text-col':'row text-col1'}>
								<div className={Day?contactVisible ? "nav-sty1" : 'nav-sty text-col':contactVisible? "dark-nav-sty1" : 'dark-nav-sty'}>
									<img onClick={() => scrollToSection(contactScrollRef)}
										className='icon-img text-col'
										src='./assets/images/email.png'
										alt='Contact'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}