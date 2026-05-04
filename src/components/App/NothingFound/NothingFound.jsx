import './NothingFound.css';

function NothingFound() {
  return (
    <section className="nothing-found">
      <div className="nothing-found__icon" aria-hidden="true">🔍</div>
      <h3 className="nothing-found__title">Nothing found</h3>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
        Please try again with some different keywords.
      </p>
    </section>
  );
}

export default NothingFound;
