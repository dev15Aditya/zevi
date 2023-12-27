import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function MultipleSelect({ filters, onChange, filter }) {
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
