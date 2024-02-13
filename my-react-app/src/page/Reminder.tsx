import React, { useState } from 'react';
import ReminderService from '../service/reminder.service';

const Reminder: React.FC = () => {
  // Definindo um estado para armazenar um texto
  const [note, setNote] = useState<string>('');
  const [date, setDate] = useState<string>('');

  // Função para atualizar o estado com o valor do input
  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    new ReminderService()
      .create(note, date)
      .then(() => alert(`Remember to ${note} on ${date}`))
      .catch((error: Error) => alert(error.message));
    // Realizar a lógica para criar um novo lembrete aqui
    console.log('Novo lembrete criado:');
    console.log('Nota:', note);
    console.log('Data:', date);

    // Limpar os inputs após a submissão
    setNote('');
    setDate('');
  };
  return (
    <div>
      <h1>Novo Lembrete</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="noteInput">Nota:</label>
          <input
            type="text"
            id="noteInput"
            value={note}
            onChange={handleNoteChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dateInput">Data:</label>
          <input
            type="date"
            id="dateInput"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default Reminder;
