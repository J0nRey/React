//Modularizar

//URL base
const API_URL = "https://react-11g-87359-default-rtdb.firebaseio.com"

//Endpoints
const postURL = `${API_URL}/Registrer/.json`
const postDetailURL = (id) => `${API_URL}/Registrer/${id}/.json`;

//Requests / Peticion
export const getFormDetail = async (id) => {
    try {
      const url = postDetailURL(id)
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  export const getForm = async () => {
    try {
        const response = await fetch(postURL);
        return await response.json();
      } catch (error) {
        console.log(error);
      }
  }


  export const postForm = async (data) => {
  const response = await fetch(postURL,{
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
  return await response.json();
}