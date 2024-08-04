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

	const { ref: homeRef, inView: homeVisible } = useInView({ threshold: 0.5 });
	const { ref: serviceRef, inView: serviceVisible } = useInView({ threshold: 0.5 });
	const { ref: educationRef, inView: educationVisible } = useInView({ threshold: 0.5 });
	const { ref: workRef, inView: workVisible } = useInView({ threshold: 0.5 });
	const { ref: blogRef, inView: blogVisible } = useInView({ threshold: 0.2 });
	const { ref: contactRef, inView: contactVisible } = useInView({ threshold: 0.5 });
	const [Day, setDay] = useState(true);

	const handleSidebar = () => {
		setSidebar(!sidebar);
	}
	const scrollToSection = (scrollRef) => {
		if (scrollRef && scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
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
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-2 ml-0 d-none d-md-block '>
						<div className='container text-col sidebar'>

							<div className='row text-col'>
								<img className='img text-col' src='./assets/images/my1.png' alt='' />
							</div>
							<div>
								<h5 className='text-center text-col poppins-regular'>Kartik</h5>
							</div>
							<div>
								<p className='text-muted text-center text-col sidebar-siz'>Full-Stack Developer</p>
							</div>
							<div className='side-panel text-col'>
								<div className='text-col'><Link className='text-col' target='./' to='https://www.instagram.com/kartik_dhoor?igsh=azZ1bjc4ODR4c2o3'><img className='side-img text-col' src='./assets/images/instagram.png'></img></Link></div>
								<div className='text-col'><Link className='text-col' target='./'><img className='side-img text-col' src='./assets/images/facebook.png'></img></Link></div>
								<div className='text-col'><Link className='text-col' target='./' to="https://github.com/KartikDhoor"><img className='side-img text-col' src='./assets/images/github.png'></img></Link></div>
								<div className='text-col'><Link className='text-col' target='./' to='https://www.linkedin.com/in/kartik-dhoor-56970b247/'><img className='side-img text-col' src='./assets/images/linkedin.png'></img></Link></div>
								<div className='text-col'><Link className='text-col' to='/'><img className='side-img text-col' src='./assets/images/web.png'></img></Link></div>
							</div>
							<div className='br mt-1 text-col'></div>
							<div className='row text-col'>
								<div className='col-md-6 text-col mt-2'>
									<p className='text-col sidebar-siz'><span className='side-sp'>Age:</span></p>
									<p className='text-col sidebar-siz'><span className='side-sp'>Freelance:</span></p>
									<p className='text-col sidebar-siz'><span className='side-sp'>Address:</span></p>
								</div>
								<div className='col-md-6 text-col mt-2'>
									<p className='text-col text-end sidebar-siz'>21</p>
									<p className='text-col text-success text-end sidebar-siz'>Available</p>
									<p className='text-col text-end sidebar-siz'>Punjab,India</p>
								</div>
							</div>
							<div className='br mt-1'></div>
							<div className='text-col my-2'>
								<p className='text-col sidebar-siz poppins-semibold'>Language</p>
								<p className='text-col sidebar-siz poppins-regular'>Hindi</p>
								<p className='text-col sidebar-siz poppins-regular'>English</p>
								<p className='text-col sidebar-siz poppins-regular'>Punjabi</p>
							</div>
							<div className='br mt-1'></div>
							<div className='text-col my-2'>
								<p className='text-col sidebar-siz poppins-semibold'>Skills</p>
								<p className='text-col sidebar-siz poppins-regular'>React js</p>
								<p className='text-col sidebar-siz poppins-regular'>Node js</p>
								<p className='text-col sidebar-siz poppins-regular'>Express</p>
								<p className='text-col sidebar-siz poppins-regular'>MongoDB</p>
							</div>
							<div className='br mt-1'></div>
							<div className='text-col my-2'>
								<p className='text-col sidebar-siz poppins-semibold'>Extra Skills</p>
								<p className='text-col sidebar-siz poppins-regular'>Tailwind,Bootstrap</p>
								<p className='text-col sidebar-siz poppins-regular'>Git Knowledge</p>
								<p className='text-col sidebar-siz poppins-regular'>Aws,S3 Bucket</p>
							</div>

							<div className='br mt-1 text-col'></div>
							<div className='cvbtn text-col my-3'>
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
											<div className='col-sm-5'>
												<div className='container text-col sidebar1'>
													<div className='row text-col'>
														<div className='sm-nav-icon text-col mx-auto'>
															<img className='icon-img text-col'
																src='./assets/images/close.png'
																onClick={handleSidebar} />
														</div>
													</div>
													<div className='row text-col'>
														<img className='img text-col' src='./assets/images/my1.png' alt='' />
													</div>
													<div>
														<h5 className='text-center text-col poppins-regular'>Kartik</h5>
													</div>
													<div>
														<p className='text-muted text-center text-col sidebar-siz'>Full-Stack Developer</p>
													</div>
													<div className='side-panel text-col'>
														<div className='text-col'><Link className='text-col' target='./' to='https://www.instagram.com/kartik_dhoor?igsh=azZ1bjc4ODR4c2o3'><img className='side-img text-col' src='./assets/images/instagram.png'></img></Link></div>
														<div className='text-col'><Link className='text-col' target='./'><img className='side-img text-col' src='./assets/images/facebook.png'></img></Link></div>
														<div className='text-col'><Link className='text-col' target='./' to="https://github.com/KartikDhoor"><img className='side-img text-col' src='./assets/images/github.png'></img></Link></div>
														<div className='text-col'><Link className='text-col' target='./' to='https://www.linkedin.com/in/kartik-dhoor-56970b247/'><img className='side-img text-col' src='./assets/images/linkedin.png'></img></Link></div>
														<div className='text-col'><Link className='text-col' to='/'><img className='side-img text-col' src='./assets/images/web.png'></img></Link></div>
													</div>
													<div className='br mt-1 text-col'></div>
													<div className='row text-col'>
														<div className='col-sm-6 text-col mt-2'>
															<p className='text-col sidebar-siz'><span className='side-sp'>Age:</span></p>
															<p className='text-col sidebar-siz'><span className='side-sp'>Freelance:</span></p>
															<p className='text-col sidebar-siz'><span className='side-sp'>Address:</span></p>
														</div>
														<div className='col-sm-6 text-col mt-2'>
															<p className='text-col text-end sidebar-siz'>21</p>
															<p className='text-col text-success text-end sidebar-siz'>Available</p>
															<p className='text-col text-end sidebar-siz'>Punjab,India</p>
														</div>
													</div>
													<div className='br mt-1'></div>
													<div className='text-col my-2'>
														<p className='text-col sidebar-siz poppins-semibold'>Language</p>
														<p className='text-col sidebar-siz poppins-regular'>Hindi</p>
														<p className='text-col sidebar-siz poppins-regular'>English</p>
														<p className='text-col sidebar-siz poppins-regular'>Punjabi</p>
													</div>
													<div className='br mt-1'></div>
													<div className='text-col my-2'>
														<p className='text-col sidebar-siz poppins-semibold'>Skills</p>
														<p className='text-col sidebar-siz poppins-regular'>React js</p>
														<p className='text-col sidebar-siz poppins-regular'>Node js</p>
														<p className='text-col sidebar-siz poppins-regular'>Express</p>
														<p className='text-col sidebar-siz poppins-regular'>MongoDB</p>
													</div>
													<div className='br mt-1'></div>
													<div className='text-col my-2'>
														<p className='text-col sidebar-siz poppins-semibold'>Extra Skills</p>
														<p className='text-col sidebar-siz poppins-regular'>Tailwind,Bootstrap</p>
														<p className='text-col sidebar-siz poppins-regular'>Git Knowledge</p>
														<p className='text-col sidebar-siz poppins-regular'>Aws,S3 Bucket</p>
													</div>

													<div className='br mt-1 text-col'></div>
													<div className='cvbtn text-col my-3'>
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
									<div className='small-nav d-block d-md-none'>
										<div className='mt-3 rounded-4 row text-col'>
											<div className='col-sm-2 col-2 text-col rounded-4'>
												<img className='img2  text-col' src='./assets/images/my1.png'
													onClick={handleSidebar}
												/>
											</div>
											<div className='col-sm-6 col-6 text-col' />
											<div className='col-sm-2 col-2 text-col'>
												{Day ? (
													<div className='sm-nav-icon text-col'>
														<img
															className='icon-img text-col'
															onClick={() => setDay(false)}
															src='./assets/images/sun (1).png'
															alt='Day Icon'
														/>
													</div>
												) : (
													<div className='sm-nav-icon text-col'>
														<img
															className='icon-img text-col'
															onClick={() => setDay(true)}
															src='./assets/images/moon.png'
															alt='Night Icon'
														/>
													</div>
												)}
											</div>
											<div className='col-md-2 col-2 text-col rounded-4'>

											</div>
										</div>
									</div>
								</div>
								<div className='container-fluid'>
									<div ref={homeRef} id='home' className='row hero rounded-4 mx-auto zoom2'>
										<div ref={homeScrollRef} className='col-md-7 col-lg-8 col-xl-8 col-sm-8 col-12 my-auto home-text poppins-regular text-col rounded-4'>
											<h1 className='text-col'>I'm Kartik</h1>
											<h1 className='text-col'><span className='main-ani'>Full-Stack</span> Developer</h1>
											<p className='text-col mt-3'>Passionate about building innovative web applications with a focus on both front-end and back-end development. I enjoy working with the latest technologies to create seamless user experiences and efficient backend systems.</p>
											<button className='btn btn-warning mt-3'>HIRE ME&#10170;</button>
										</div>
										<div className='col-md-5 col-lg-4 col-xl-4 col-sm-4 d-none d-sm-block text-col rounded-4'>
											<img className='img-main text-col rounded-4' src='./assets/images/my1.png' />
										</div>
									</div>
								</div>
							</div>
							<div ref={serviceRef} className='zin'>
								<div ref={serviceScrollRef} id='service' className='row mt-5'>
									<h2 className='text-center mb-3 poppins-bold'>My Services</h2>
									<p className='text-center text-muted mb-0 poppins-light'>Providing a range of services to meet your needs, </p>
									<p className='text-center text-muted mb-0 poppins-light'>using the latest technologies to deliver high-quality solutions.</p>
								</div>
								<div className='row siz' >
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className='col zoom my-responsive-height'>
											<img className='icon-image' src='./assets/images/Front end.png'></img>
											<div className='text-col'>
												<p className='h6 text-center  text-col poppins-semibold'>Front End Developer</p>
												<p className='text-muted text-center text-col poppins-regular'>ReactJS, HTML, CSS, Bootstrap</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className='col zoom my-responsive-height'>
											<img className='icon-image' src='./assets/images/Back End.png'></img>
											<div className='text-col'>
												<p className='h6 text-center text-col poppins-semibold'>Back End Developer</p>
												<p className='text-muted text-center text-col poppins-regular'>Node.js, Express.js</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className='col zoom my-responsive-height'>
											<img className='icon-image' src='./assets/images/Management.png'></img>
											<div className='text-col'>
												<p className='h6 text-center  text-col poppins-semibold'>Website Management</p>
												<p className='text-muted text-center text-col poppins-regular'>Node.js, S3 Bucket</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className='col zoom my-responsive-height'>
											<img className='icon-image' src='./assets/images/Database.png'></img>
											<div className='text-col'>
												<p className='h6 text-center text-col poppins-semibold'>Website Management</p>
												<p className='text-muted text-center  text-col poppins-regular'>node js,S3 Bucket</p>
											</div>
										</div>

									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className='col zoom my-responsive-height'>
											<img className='icon-image' src='./assets/images/Online Support.png'></img>
											<div className='text-col'>
												<p className='h6 text-center text-col poppins-semibold'>Website Management</p>
												<p className='text-muted text-center text-col poppins-regular'>node js,S3 Bucket</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6'>
										<div className='col zoom my-responsive-height'>
											<img className='icon-image' src='./assets/images/Front end.png'></img>
											<div className='text-col'>
												<p className='h6 text-center  text-col poppins-semibold'>Website Management</p>
												<p className='text-muted text-center text-col poppins-regular'>node js,S3 Bucket</p>
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
									<p className='h6 text-muted text-center mb-0 poppins-light'>Dive into the foundation of my tech journey. Scroll down </p>
									<p className='h6 text-muted text-center mb-0 poppins-light'> to discover how my education has shaped my passion and expertise </p>
									<p className='h6 text-muted text-center mb-2 poppins-light'>in software development</p>
								</div>
								<div className='container mt-3 edu'>
									<div className='row edu'>
										<div className='row mt-5 mb-4 edu'>
											<div className='col-md-5 col-sm-12 col-12 text-col'>
												<p className='h3 mb-4 text-col'>D.A.V University</p>
												<p className='h6 text-col'>Student:- <span className='col1'>Completed in june 2024</span></p>
											</div>
											<div className='col-md-7 col-sm-12 col-12 text-col'>
												<p className='h3 mb-4 text-col'>Certificate of C.S.E</p>
												<p className='text-muted text-col'>Gained a strong foundation in computer science principles, including software development, algorithms, and database management. Participated in various projects and internships, gaining practical experience with the MERN stack and other technologies. Graduated with a CGPA of 7.00/10.</p>
											</div>
											<div className='br' />
										</div>
										<div className='row mt-5 mb-4 edu'>
											<div className='col-md-5 col-sm-12 col-12  text-col'>
												<p className='h3 mb-4 text-col'>D.S.S.D. Senior Secondary School</p>
												<p className='h6 text-col'>Student:- <span className='col1'>Completed in 2020</span></p>
											</div>
											<div className='col-md-7 col-sm-12 col-12 text-col'>
												<p className='h3 mb-4 text-col'>Certificate of Senior Secondary (XII)</p>
												<p className='text-muted text-col'>My senior secondary education at Devi Sahai S.D. Senior Secondary School provided me with a solid foundation in science, particularly in mathematics and computer science. The curriculum emphasized critical thinking and problem-solving skills. I completed this phase of education with a CGPA of 8.00/10, showcasing my strong academic performance and readiness for higher education.</p>
											</div>
											<div className='br' />
										</div>
										<div className='row mt-5 mb-4 edu'>
											<div className='col-md-5 col-sm-12 col-12  text-col'>
												<p className='h3 mb-4 text-col'>Jyoti Public High School</p>
												<p className='h6 text-col'>Student:- <span className='col1'>Completed in 2018</span></p>
											</div>
											<div className='col-md-7 col-sm-12 col-12 text-col'>
												<p className='h3 mb-4 text-col'>Certificate of Secondary (X)</p>
												<p className='text-muted text-col'>At Jyoti Public High School, I completed my secondary education with a focus on a broad range of general subjects. This foundational education helped build my academic base and fostered essential skills in various disciplines.I graduated with a CGPA of 6.50/10, marking the beginning of my educational journey in technology and setting the stage for my subsequent studies in computer science.</p>
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
									<p className='h6 text-muted text-center mb-0 poppins-light'>Explore the hands-on experience I've gained through impactful work. </p>
									<p className='h6 text-muted text-center mb-4 poppins-light'>Scroll down to see how I've applied my skills in real-world projects.</p>
								</div>
								<div className='container mt-3 edu'>
									<div className='row edu'>
										<div className='row mt-5 mb-4 edu'>
											<div className='col-md-5 col-sm-12 col-12  t  text-col'>
												<p className='h3 mb-4 text-col'>Hoping Minds</p>
												<p className=' text-col'>internship:- <span className='col1'>june 2024 - Present</span></p>
											</div>
											<div className='col-md-7 col-sm-12 col-12  t text-col'>
												<p className='h3 mb-4 text-col'>Certificate of Mern-Stack</p>
												<p className='text-muted text-col'> Developing and maintaining web applications using MongoDB, Express.js, ReactJS, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions. Involved in all stages of the software development lifecycle, from requirement analysis to deployment and maintenance.</p>
											</div>
											<div className='br' />
										</div>
										<div className='row mt-5 mb-4 edu'>
											<div className='col-md-5 col-sm-12 col-12  t  text-col'>
												<p className='h3 mb-4 text-col'>O7 Services</p>
												<p className=' text-col'>Student/Intern:- <span className='col1'>June 2023 - December 2023</span></p>
											</div>
											<div className='col-md-7 text-col'>
												<p className='h3 mb-4 col-sm-12 col-12  t text-col'>Certificate of Full-Stack</p>
												<p className='text-muted text-col'>Worked on various projects involving full-stack development. Gained hands-on experience with the MERN stack, focusing on building scalable web applications. Learned best practices for coding, testing, and deploying applications in a professional environment.</p>
											</div>
											<div className='br' />
										</div>
										<div className='row mt-5 mb-4 edu'>
											<div className='col-md-5 col-sm-12 col-12  t  text-col'>
												<p className='h3 mb-4 text-col'>Webdoxs</p>
												<p className=' text-col'>Student/Intern:- <span className='col1'>June 2022 - July 2022</span></p>
											</div>
											<div className='col-md-7 col-sm-12 col-12  t text-col'>
												<p className='h3 mb-4 text-col'>Certificate of Java</p>
												<p className='text-muted text-col'>Developed Java applications and gained experience in Swing and other Java technologies. Worked on enhancing existing applications and creating new features. Collaborated with senior developers to learn and implement industry-standard coding practices.</p>
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
										<p className=' text-center text-muted poppins-light mb-4'>Discover the innovative projects that showcase my development skills. Scroll down to see how I bring ideas to life through code.</p>
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
										<p className=' text-center text-muted poppins-light mb-4'>Gain insights from my experiences and expertise in web development. Scroll down to explore articles that dive deep into coding and technology.</p>
									</div>
									<div className='col-md-2' />
								</div>
								<div className='row mt-3'>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6 mt-2'>
										<div className='blog-siz text-col'>
											<div>
												<img className='blog-img text-col' src='./assets/images/pic1.jpg' />
											</div>
											<div className='text-col p-2 rounded-2'>
												<p className='h4 text-col'>How to Make Web templates</p>
												<p className='text-col'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized of please...</p>
												<p className='h5 text-col rounded-2'>Learn More</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6 mt-2'>
										<div className='blog-siz text-col'>
											<div>
												<img className='blog-img text-col' src='./assets/images/pic2.jpg' />
											</div>
											<div className='text-col p-2 rounded-2'>
												<p className='h4 text-col'>How to Make Web templates</p>
												<p className='text-col'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized of please...</p>
												<p className='h5 text-col rounded-2'>Learn More</p>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-lg-4 col-xl-4 col-sm-6 col-6 mt-2 d-none d-md-block'>
										<div className='blog-siz text-col'>
											<div>
												<img className='blog-img text-col' src='./assets/images/pic3.jpg' />
											</div>
											<div className='text-col p-2 rounded-2'>
												<p className='h4 text-col'>How to Make Web templates</p>
												<p className='text-col'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized of please...</p>
												<p className='h5 text-col rounded-2'>Learn More</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='recomendation container'>
								<div className='row mt-5'>
									<p className='h1 text-center'>Recommendation</p>
								</div>
								<div className='row'>
									<p className='h6 text-muted text-center mb-0'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
									<p className='h6 text-muted text-center mb-0'> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>
									<p className='h6 text-muted text-center mb-4'>quae ab illo inventore veritatis et quasi</p>
								</div>
								<div className='row p-0'>
									<div className='col-md-4 col-sm-6 col-12 mt-2'>
										<div className='row mar text-col'>
											<div className='row mt-4 text-col m-0'>
												<p className='text-col text-warning mb-0'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
											</div>
											<div className='row text-col m-0'>
												<p className='poppins-bold text-col h4 mb-1'>Great Frontend Developer</p>
											</div>
											<p className='text-col poppins-regular'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
											<div className='row mb-3 text-col m-0'>
												<div className='col-md-5  text-col'><img className='review-image  text-col' src='./assets/images/temp.jpg' /></div>
												<div className='col-md-7  text-col'>
													<p className='h4  text-col'>James Gouse</p>
													<p className='text-col text-muted'>Graphic Designer</p>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-4 col-sm-6 d-none d-sm-block mt-2'>
										<div className='row mar text-col'>
											<div className='row mt-4 text-col m-0'>
												<p className='text-col text-warning mb-0'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
											</div>
											<div className='row text-col m-0'>
												<p className='poppins-bold text-col h4 mb-1'>Great Frontend Developer</p>
											</div>
											<p className='text-col poppins-regular'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
											<div className='row mb-3 text-col m-0'>
												<div className='col-md-5  text-col'><img className='review-image  text-col' src='./assets/images/temp.jpg' /></div>
												<div className='col-md-7  text-col'>
													<p className='h4  text-col'>James Gouse</p>
													<p className='text-col text-muted'>Graphic Designer</p>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-4 d-none d-md-block'>
										<div className='row mar text-col'>
											<div className='row mt-4 text-col m-0'>
												<p className='text-col text-warning mb-0'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
											</div>
											<div className='row text-col m-0'>
												<p className='poppins-bold text-col h4 mb-1'>Great Frontend Developer</p>
											</div>
											<p className='text-col poppins-regular'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
											<div className='row mb-3 text-col m-0'>
												<div className='col-md-5  text-col'><img className='review-image  text-col' src='./assets/images/temp.jpg' /></div>
												<div className='col-md-7  text-col'>
													<p className='h4  text-col'>James Gouse</p>
													<p className='text-col text-muted'>Graphic Designer</p>
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
										<div className='container text-col mt-5'>
											<from className=''>
												<div className='row text-col p-2'>
													<div className='text-col'>
														<p className='h5 poppins-bold text-col mt-4 text-muted'>Your Full Name(required)*</p>
														<input type='text' className='contact-inp'></input>
													</div>
													<div className='text-col' >
														<p className='h5 poppins-bold text-col mt-4 text-muted'>Your Email(required)*</p>
														<input type='text' className='contact-inp'></input>
													</div>
													<div className='text-col' >
														<p className='h5 poppins-bold  text-col mt-4 text-muted'>Subject</p>
														<input type='text' className='contact-inp'></input>
													</div>
													<div className='text-col'>
														<p className='h5 poppins-bold  text-col mt-4 text-muted'>your message</p>
														<textarea type='text' className='contact-inp1'></textarea>
													</div>
													<button className='message-btn poppins-bold '>Send Message</button>
												</div>

											</from>

										</div>
									</div>
									<div className='col-md-4 col-sm-12 col-12 mt-5'>
										<p className='h1 poppins-bold'>Contact Info</p>
										<div className='row text-col mt-5'>
											<div className='contact-cen contact-siz text-col'><img className='contact-img' src='./assets/images/map.png' /></div>
											<div className='row m-0 text-col'>
												<div className='col-md-6 col-sm-6 col-6 text-col'>
													<p className='h6 text-col'>Country:-</p>
													<p className='h6 text-col'>City:-</p>
													<p className='h6 text-col'>Streat:-</p>
												</div>
												<div className='col-md-6 col-sm-6 col-6 text-col'>
													<p className='h6 text-col'>INDIA</p>
													<p className='h6 text-col'>Jalandhar City</p>
													<p className='h6 text-col'>5A,Aman Nager</p>
												</div>
											</div>
										</div>
										<div className='row text-col mt-5'>
											<div className='contact-cen contact-siz text-col'><img className='contact-img' src='./assets/images/link.png' /></div>
											<div className='row m-0 text-col'>
												<div className='col-md-5 col-sm-6 col-5 text-col'>
													<p className='h6 text-col'>Email:-</p>
													<p className='h6 text-col'>LinkedIN:-</p>
													<p className='h6 text-col'>GitHUB:-</p>
												</div>
												<div className='col-md-7 col-sm-6 col-7 text-col'>
													<Link className='text-decoration-none' onClick={() => window.location = 'mailto:kartikdhoor121@gmail.com'}><p className='h6 text-dark text-col'>kartikdhoor121@gmail.com</p></Link>
													<Link className='text-decoration-none' to='https://www.linkedin.com/in/kartik-dhoor-56970b247/' target='./'><p className='h6 text-dark text-col'>KartikDhoor</p></Link>
													<Link className='text-decoration-none' to="https://github.com/KartikDhoor" target='./'><p className='h6 text-dark text-col'>Kartik Dhoor</p></Link>
												</div>
											</div>
										</div>
										<div className='row text-col mt-5'>
											<div className='contact-cen contact-siz text-col'><img className='contact-img' src='./assets/images/phone-call.png' /></div>
											<div className='row m-0 text-col'>
												<div className='col-md-6 col-sm-6 col-6 text-col'>
													<p className='h6 text-col'>Phone no:-</p>
													<p className='h6 text-col'>WhatSapp no:-</p>
												</div>
												<div className='col-md-6 col-sm-6 col-6 text-col contact-mr'>
													<p className='h6 text-col'>+916280887657</p>
													<p className='h6 text-col'>+916280887657</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='row mt-5 mb-0 text-col'>
								<div className='col-md-12 text-col'>
									<p className='h5 text-col text-center'>@all right are reserved by kartik</p>
								</div>
							</div></div>
					</div>
					<div className='col-md-1'>
						<div className='container text-col nav-siz'>
							<div className='row text-col'>
								{Day ? (
									<div className='nav-sty text-col'>
										<img
											className='icon-img text-col'
											onClick={() => setDay(false)}
											src='./assets/images/sun (1).png'
											alt='Day Icon'
										/>
									</div>
								) : (
									<div className='nav-sty text-col'>
										<img
											className='icon-img text-col'
											onClick={() => setDay(true)}
											src='./assets/images/moon.png'
											alt='Night Icon'
										/>
									</div>
								)}
							</div>
							<div className='row text-col mt-5'>
								<div className={homeVisible ? "nav-sty1" : 'nav-sty text-col'}>
									<img onClick={() => scrollToSection(homeScrollRef)}
										className='icon-img text-col on-click-col'
										src='./assets/images/home-icon-silhouette.png'
										alt='home'
									/>
								</div>
							</div>
							<div className='row text-col'>
								<div id='services' className={serviceVisible ? "nav-sty1" : 'nav-sty text-col'}>
									<img onClick={() => scrollToSection(serviceScrollRef)}
										className='icon-img text-col'
										src='./assets/images/solution.png'
										alt='Service'
									/>
								</div>
							</div>
							<div className='row text-col'>
								<div className={educationVisible ? "nav-sty1" : 'nav-sty text-col'}>
									<img onClick={() => scrollToSection(educationScrollRef)}
										className='icon-img text-col'
										src='./assets/images/open-book.png'
										alt='Education'
									/>
								</div>
							</div>
							<div className='row text-col'>
								<div className={workVisible ? "nav-sty1" : 'nav-sty text-col'}>
									<img onClick={() => scrollToSection(workScrollRef)}
										className='icon-img text-col'
										src='./assets/images/suitcase.png'
										alt='Experience'
									/>
								</div>
							</div>
							<div className='row text-col'>
								<div className={blogVisible ? "nav-sty1" : 'nav-sty text-col'}>
									<img onClick={() => scrollToSection(blogScrollRef)}
										className='icon-img text-col'
										src='./assets/images/edit-button.png'
										alt='Blog'
									/>
								</div>
							</div>
							<div className='row text-col'>
								<div className={contactVisible ? "nav-sty1" : 'nav-sty text-col'}>
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