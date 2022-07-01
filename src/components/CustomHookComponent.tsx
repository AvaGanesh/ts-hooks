import { useEffect, useState } from "react";
import "../index.css";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu?: any;
  logo: string;
  level: number;
}

const useFetchData = <T,>(url: string): { data: T[] | null; done: boolean } => {
  const [data, setData] = useState<T[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data: T[]) => {
        setData(data);
        setDone(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  return {
    data,
    done,
  };
};

function CustomHookComponent() {
  const { data, done } = useFetchData<Beverage>("../hv-taplist.json");
  return (
    <div className="beverage-grid">
      {done &&
        data?.map((item: Beverage, index: number) => (
          <div key={index} style={{ margin: "10px" }}>
            <h3>{item.producerName}</h3>
            <img src={item.logo} alt={item.name} />
          </div>
        ))}
    </div>
  );
}

export default CustomHookComponent;
