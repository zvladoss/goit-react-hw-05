import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query.trim()) {
      toast.error("Please enter a valid search term.", { duration: 2500 });
      return;
    }
    handleSearch(query);
    setInputValue("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
