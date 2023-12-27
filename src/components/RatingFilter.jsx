import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';

const data = [5, 4, 3, 2, 1];

export default function RatingFilter() {
  return (
    <FormGroup className="mt-2">
      <h1 className="font-[500]">RATINGS</h1>
      {data.map((item) => (
        <FormControlLabel
          key={item}
          control={<Checkbox />}
          label={<Rating name="size-small" defaultValue={item} size="small" />}
        />
      ))}
    </FormGroup>
  );
}
