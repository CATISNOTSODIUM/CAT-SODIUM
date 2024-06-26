import projects from "./projects.json"
function Projects() {
    return (
        <>
            {
                projects.map((data) =>
                    <>
                        <div className="flex flex-col gap-1">

                            <h3>{data.name}</h3>

                            <h4 className="text-sm -mt-2 flex gap-2">
                                <span>{data.position} | </span>
                                <span>{data.date}</span>
                                <span><a target="_blank" href={data.link}>{
                                    data.link && " | ★"
                                }</a></span>
                            </h4>

                            <div className="text-xs">{data.description}</div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Projects
