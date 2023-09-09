import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function SearchBar(props: { value: string; onChange: (value: string) => void }) {
  const {value ,onChange} = props;
  
  return (
    <div className="justify-center">
      <Input
        style={{ width: 600 }}
        icon={<IconSearch className="h-5" />}
        variant="filled"
        placeholder="SearchBar"
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
export default SearchBar