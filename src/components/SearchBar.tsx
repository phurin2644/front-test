import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function SearchBar(props: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { value, onChange } = props;

  return (
    <div className="justify-center">
      <Input
        className="w-full sm:w-64 md:w-80 lg:w-96"
        icon={<IconSearch className="h-5" />}
        variant="filled"
        placeholder="Search"
        radius="lg"
        type="search"
        onChange={(event) => {
          const text = event.target.value;
          onChange(text);
          console.log(text.toLowerCase());
        }}
        value={value}
      />
    </div>
  );
}
export default SearchBar;
