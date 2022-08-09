import axios from "axios";
const BASE_URL = "https://localhost:7117/";

const getPersons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/Transactions/GetPersons`);
    return response;
  } catch (err) {
    console.log("err");
  }
};

const getCards = async (cardNo) => {
  try {
    const response = await axios.get(
      `${BASE_URL}api/Transactions/GetCards?cardNo=${cardNo}`
    );
    return response;
  } catch (err) {
    console.log("err");
  }
};

const getTransactions = async (appId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}api/Transactions/GetTransactions?appId=${appId}`
    );
    return response;
  } catch (err) {
    console.log("err");
  }
};

export { getPersons, getCards, getTransactions };
