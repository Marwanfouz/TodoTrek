import { newTodo } from '@/utils/actions';
import Snarkbar from './mui/Snarkbar';
import { TextField } from '@mui/material';

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo} style={{ display: 'flex' }}>
        <TextField
          variant="outlined"
          label="type your task"
          name="content"
          sx={{ m: 2, width: { xs: 150, sm: 200, md: 300 } }}
        ></TextField>
        <Snarkbar></Snarkbar>
      </form>
    </div>
  );
};

export default NewTodoForm;
