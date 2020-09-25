import axios from 'axios';

export async function UsersApi() {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    return response.data.data
  } catch (error) {
    console.error(error);
  }
}  
