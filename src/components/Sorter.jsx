function Sorter({ setSortBy, setOrder, setSearchParams, setParams, params }) {
  function handleSortByChange(event) {
    setSortBy(event.target.value);
    setParams({ ...params, sortBy: event.target.value });
  }

  function handleOrderChange(event) {
    setOrder(event.target.value);
    setParams({ ...params, order: event.target.value });
  }

  return (
    <div id="sorter">
      <label htmlFor="sort_by">Sort by:</label>

      <select onChange={handleSortByChange} name="sort_by" id="sort_by">
        <option value="created_at">Date</option>
        <option value="votes">Likes</option>
        <option value="comment_count">Comments</option>
      </select>

      <label htmlFor="order">Order:</label>

      <select onChange={handleOrderChange} name="order" id="order">
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
}

export default Sorter;
