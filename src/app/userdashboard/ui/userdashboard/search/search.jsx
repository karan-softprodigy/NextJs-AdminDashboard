"use client";
import React from "react";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBox = ({ placeholder }) => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParam);
    const val = e.target.value;
    params.set("page", 1);
    if (val) {
      val?.length > 1 && params.set("q", val);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
