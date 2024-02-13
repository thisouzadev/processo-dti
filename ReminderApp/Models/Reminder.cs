using System;

namespace ReminderApp.Models
{
    public class Reminder
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public DateTime Date { get; set; }

        // Construtor da classe Reminder
        public Reminder()
        {
            // Inicializa a propriedade Note com uma string vazia
            Note = "";
        }
    }
}
