import education from "./education.json"
function Education() {
    return (
        <>
            <h2>═══ Education ═══ </h2>
            {
                education.map((data) =>
                    <>
                        <div className="flex flex-col gap-1">

                            <h3>{data.name}</h3>

                            <h4 className="text-sm -mt-1 flex gap-2">
                                <span>{data.status}</span>
                            </h4>
                            <div className="text-xs -mt-1">{data.date}</div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Education
