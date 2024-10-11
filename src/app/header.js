export default function Header() {
  return (
    <header>
      <nav>
        <img src="/images/pokeball.png" alt="pokeball icon" />
        <h1>Pokédex</h1>
      </nav>
      <search>
        <form>
          <div className="form-container">
            <label>
              <img src="/images/search.png" alt="search icon" />
            </label>
            <input type="text" placeholder="search" />
          </div>
          <button type="submit" className="ctaBtn">
            <img src="/images/ctaBtn.svg" alt="form submit btn" />
          </button>
        </form>
      </search>
    </header>
  );
}
