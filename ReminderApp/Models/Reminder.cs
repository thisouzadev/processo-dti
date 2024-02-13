using System;

namespace ReminderApp.Models
{
    public class Reminder
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public DateTime Date { get; set; }
    }
}
