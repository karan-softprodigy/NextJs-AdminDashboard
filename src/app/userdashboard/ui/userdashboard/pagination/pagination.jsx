"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const ITEM_PER_PAGE = 4;

  const page = searchParam.get("page") || 1;
  const params = new URLSearchParams(searchParam);

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => handleChangePage("prev")}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => handleChangePage("next")}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
