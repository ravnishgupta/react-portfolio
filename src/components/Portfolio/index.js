import React from "react";

function Portfolio() {
    const projects = [
        {name:'Employee Tracker', github:'https://github.com/ravnishgupta/employee-tracker', num:1},
        {name:'Note Taker', github:'https://github.com/ravnishgupta/note-taker', num:2},
        {name:'Team Profile Generator', github:'https://github.com/ravnishgupta/team-profile-generator', num:3},
        {name:'Professional ReadMe Generator', github:'https://github.com/ravnishgupta/team-profile-generator',  num:4},
        {name:'Movie Search', github:'https://github.com/ravnishgupta/movie-search', num:5},
        {name:'Weather Dashboard', github:'https://github.com/ravnishgupta/weather-dashboard', num:6},
    ]

    return (
        <section>
        <h2>My Portfolio</h2>
        <div className="row">
            {
                projects.map((project) => (
                    <div className="col-sm-6" key={project.num}>
                        <div className="card bg-light mb-3" >
                            <div className="card-body">
                                <h6 className="card-title">{project.name}</h6>
                                <a href={project.name} className="btn btn-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
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