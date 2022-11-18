const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="row" >
                    <div className="col space">
                        <img src={data.place.pic} />
                    </div>

                    <div className="col space">
                        <h1 className="text-center">{data.place.name}</h1>
                        <h2 className="text-center">Rating</h2>
                        <p className="text-center" id="desc">Not Rated</p>
                        <h2 className="text-center">Description</h2>
                        <p className="text-center" id="desc" >
                            Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}.
                        </p>
                    </div>
                </div>

            </main>
            <div className="comment">
                <div className="row">
                    <h2 className="text-center">Comments</h2>
                    <p className="text-center">No comments yet!</p>
                </div>
            </div>
        </Def>
    )
}

module.exports = show
