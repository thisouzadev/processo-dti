import axios from "axios";

class ReminderService {
  async get() {
    try {
      const response = await axios.get("http://localhost:5130/api/reminder");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter lembretes:", error);
      throw error; 
    }
  }

  async create(note: string, date: Date) {
    try {
      const response = await axios.post("http://localhost:5130/api/reminder", {
        note,
        date
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar lembrete:", error);
      throw error; 
    }
  }

  async delete(id: number) {
    try {
      const response = await axios.delete(`http://localhost:5130/api/reminder/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir lembrete:", error);
      throw error; 
    }
  }

  async update(note: string, date: Date, id: number) {
    try {
      const response = await axios.put(`http://localhost:5130/api/reminder/${id}`, {
        note,
        date
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar lembrete:", error);
      throw error; 
    }
  }

  async findById(id: number) {
    try {
      const response = await axios.get(`http://localhost:5130/api/reminder/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao encontrar lembrete:", error);
      throw error; 
    }
  }
}

export default ReminderService;
