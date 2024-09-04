import React from 'react'

export default function About() {
    return (
        <>
            <h3 className="text-center my-4">About Us</h3>
            <div className="accordion my-4" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Our Journey</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Our journey began with a shared fascination for technology and its potential to transform industries. Each of us brought different skills and experiences to the table, allowing us to form a well-rounded team that thrives on collaboration and continuous learning. Over the years, we have honed our skills in various programming languages, frameworks, and tools, enabling us to tackle complex projects with confidence.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Our Expertise</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>As full-stack developers, we have extensive experience in both client-side and server-side development. On the front end, we utilize modern frameworks such as React, Angular, and Vue.js to create intuitive and engaging user interfaces. We understand that a great user experience is critical to the success of any application, and we take pride in crafting responsive, accessible, and visually appealing designs.</p>

                            <p>On the back end, we work with technologies like Node.js, Express, and MongoDB to build robust and scalable server-side applications. Our expertise in RESTful APIs and database management allows us to create seamless integrations and handle large volumes of data efficiently. We are also well-versed in cloud services like AWS and Azure, which enable us to deploy and manage applications with ease.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Join Us</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>We are excited about the future of technology and the possibilities it holds. As we continue to grow and evolve, we remain dedicated to pushing the boundaries of what is possible in web development. Whether you are a startup looking to build your first application or an established business seeking to enhance your online presence, we are here to help you navigate the ever-changing digital landscape.</p>

                            <p>Let us be your partner in innovation. Together, we can turn your ideas into reality and create solutions that drive results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
