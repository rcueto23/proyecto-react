export const PokemonCard = ({ name, id }) => {

  return (
    <>
      <div className="card d-flex justify-content-center m-5">
        <div className="d-flex justify-content-center">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="card-img-top w-80" alt="..." />

        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a href={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="btn btn-primary">
            Ir a la imagen
          </a>
        </div>
      </div>
    </>
  );
};
