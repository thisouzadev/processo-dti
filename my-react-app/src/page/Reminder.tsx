import React, { useEffect, useState } from 'react';
import ReminderService from '../service/reminder.service';

interface Reminder {
  id: number;
  note: string;
  date: Date;
}

const Reminder: React.FC = () => {
 
  const [note, setNote] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [reminders, setReminders] = useState<Reminder[]>([]);
  
  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); 
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
        alert('Por favor, selecione uma data futura.');
        
        event.preventDefault();
    } else {  
        setDate(event.target.value);
    }
};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    new ReminderService()
      .create(note, date)
      .then(() => {alert(`Lembre-se de ${note} em ${date}`)
      fetchReminders();
    })
      .catch((error: Error) => alert(error.message));
      fetchReminders();
    setNote('');
    setDate(new Date());
  };
  const fetchReminders = async () => {
    try {
      new ReminderService()
      .get()
      .then((data) => {
        setReminders(data);
      })
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  };
  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir este lembrete?')) {
      new ReminderService()
        .delete(id)
        .then(() => {
          alert('Lembrete excluído com sucesso');
          fetchReminders();
        })
        .catch((error: Error) => alert(error.message));
    }
  };
  useEffect(() => {
    fetchReminders();
  }, []);

  const groupedReminders = reminders.reduce((groups: { [date: string]: Reminder[] }, reminder) => {
    const date = new Date(reminder.date); 
    const dateKey = date.toDateString(); 
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(reminder);
    return groups;
  }, {});

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
      <h1>Lista de lembretes</h1>
      <ul>
      {Object.entries(groupedReminders).map(([date, remindersForDate]) => (
        <div key={date}>
          <div>{date}</div>
          <ul>
            {remindersForDate.map((reminder) => (
              <li key={reminder.id}>
                {reminder.note}
                <button onClick={() => handleDelete(reminder.id)}>x</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ul>

    </div>
  );
};

export default Reminder;
