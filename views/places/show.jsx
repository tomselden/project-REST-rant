const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
      </main>
      <a href={`/places/${data.i}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${data.i}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Def>
  );
}

module.exports = show;
