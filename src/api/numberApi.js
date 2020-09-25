import axios from 'axios';

export default async function NumberApi() {
  try {
    const response = await axios.get('http://numbersapi.com/random/year?json');
    return response
  } catch (error) {
    console.error(error);
  }
}  
