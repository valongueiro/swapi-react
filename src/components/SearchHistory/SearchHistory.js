import List from "../List/List";

export default function SearchHistory(props) {
  const { terms } = { ...props };

  const formattedData = terms.map((item, index) => {
    return {
      ref: index,
      title: item,
      txt: null,
    };
  });

  return (
    <div>
      <List data={formattedData} />
    </div>
  );
}
