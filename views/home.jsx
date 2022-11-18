const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/fish-chips.jpg" alt="Fish and Chips Plate" />
          <div>
            Photo by <a href="https://unsplash.com/@ahungryblonde_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sara Dubler</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </main>
      {/* <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a> */}

    </Def>
  )
}


module.exports = home
