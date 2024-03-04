
import styles from "./page.module.css";
import ParamEditor from "@/components/ParamEditor";
import {Model, Param} from "@/types";

const params: Param[] = [
    {
        id: 1,
        name: '11111',
        type: "string"
    },
    {
        id: 2,
        name: '22222',
        type: "string"
    }
]

const model: Model = {
    paramValues: [
        {paramId: 1, value: "value1"},
        {paramId: 2, value: "value2"},
    ]
}

export default function Home() {
  return (
    <main className={styles.main}>
      <ParamEditor params={params} model={model}/>
    </main>
  );
}
