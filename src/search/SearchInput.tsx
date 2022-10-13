import { TextField, styled } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';

export default function SearchInput(): JSX.Element {
  const CurvyTextField = styled(TextField)({
    fieldset: {
      borderRadius: '50px'
    }
  });

  return (
    <>
      <CurvyTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />
    </>
  )
}