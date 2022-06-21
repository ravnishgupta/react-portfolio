import React from "react";

function Portfolio() {
    const projects = [
        {name:'Employee Tracker', github:'https://github.com/ravnishgupta/employee-tracker'},
        {name:'Note Taker', github:'https://github.com/ravnishgupta/note-taker'},
        {name:'Team Profile Generator', github:'https://github.com/ravnishgupta/team-profile-generator'},
        {name:'Professional ReadMe Generator', github:'https://github.com/ravnishgupta/team-profile-generator'},
        {name:'Movie Search', github:'https://github.com/ravnishgupta/movie-search'},
        {name:'Weather Dashboard', github:'https://github.com/ravnishgupta/weather-dashboard'},
    ]

    return (
        <section>
        <h2>My Portfolio</h2>
        <div className="row">
            {
                projects.map((project) => (
                    <div className="col-sm-6">
                        <div class="card bg-light mb-3">
                            <div class="card-body">
                                <h6 class="card-title">{project.name}</h6>
                                <a href={project.github} className="btn btn-primary" target='_blank' rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                    )
                )
            }
        </div>
        </section>
    )
}

export default Portfolio;