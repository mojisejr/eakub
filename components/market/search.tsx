export default function SearchBar() {
  return (
    <div className="join">
      <div>
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search"
          />
        </div>
      </div>
      <select className="select select-bordered join-item bg-slate-300 text-base-100">
        <option disabled>Filter</option>
        <option>EA Id</option>
        <option>Type</option>
      </select>
      <div className="indicator">
        <button className="btn join-item btn-primary">Search</button>
      </div>
    </div>
  );
}
