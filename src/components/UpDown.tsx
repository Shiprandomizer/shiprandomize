import { Sort } from "../models/Config";

interface Props {
  sortConfig: Sort;
  name: string;
}

const UpDown: React.FC<Props> = ({ sortConfig, name }) => {
  let indicator = "";
  if (sortConfig && sortConfig.by === name) {
    indicator = sortConfig.order == "descending" ? "🠻" : "🠹";
  }

  return <>{indicator}</>;
};

export default UpDown;
