import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  const transactionData = [
    {
      name: "Micaheal Clark",
      status: "Cancelled",
      date: "14.02.2024",
      amount: "$5.200",
    },
    {
      name: "Simaul Touby",
      status: "Pending",
      date: "14.02.2024",
      amount: "$9.200",
    },
    {
      name: "Ricky Ponting",
      status: "Done",
      date: "10.03.2024",
      amount: "$2.200",
    },
    {
      name: "Kiroan Pollard",
      status: "Pending",
      date: "18.02.2024",
      amount: "$3.100",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data) => (
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {data?.name}
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    data?.status === "Pending"
                      ? styles.pending
                      : data?.status === "Cancelled"
                      ? styles.cancelled
                      : styles.done
                  }`}
                >
                  {data?.status}
                </span>
              </td>
              <td>{data?.date}</td>
              <td>{data?.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
