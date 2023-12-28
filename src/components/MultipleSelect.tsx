import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface filterProps {
  title: string;
  value: string[];
}

interface MultipleSelectProps {
  filters: filterProps[];
  onChange: (filter: any) => void;
  filter: any;
}

export default function MultipleSelect({
  filters,
  onChange,
  filter,
}: MultipleSelectProps) {
  return (
    <div>
      {filters.map((filterGroup) => (
        <div className="my-2" key={filterGroup.title}>
          <h1 className="font-[500]">{filterGroup.title}</h1>
          <FormGroup>
            {filterGroup.value.map((item) => (
              <FormControlLabel
                key={item}
                control={<Checkbox />}
                label={item}
              />
            ))}
          </FormGroup>
        </div>
      ))}
    </div>
  );
}
