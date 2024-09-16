import { CreateTransferDB } from "../repositories/RepTransferencias";
import transferData from "data";




export const createTransferServices = async (data: transferData)=> {
    try {

      const transfer = await CreateTransferDB(data);
      return transfer;

    } catch (error) {
      console.error('Error en CreateTransferDB:', error);
      throw error; 
    }

}
