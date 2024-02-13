using Microsoft.AspNetCore.Mvc;
using ReminderApp.Models;
using System;
using System.Collections.Generic;

namespace ReminderApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReminderController : ControllerBase
    {
        private static List<Reminder> reminders = new List<Reminder>();

        [HttpGet]
        public IEnumerable<Reminder> Get()
        {
            return reminders;
        }

        [HttpPost]
        public Reminder Post([FromBody] Reminder reminder)
        {
            reminder.Id = reminders.Count + 1;
            reminders.Add(reminder);
            return reminder;
        }

          [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Reminder updatedReminder)
        {
            var existingReminder = reminders.FirstOrDefault(r => r.Id == id);
            if (existingReminder == null)
            {
                return NotFound(); // Retorna 404 se o lembrete não existir
            }

            existingReminder.Note = updatedReminder.Note;
            existingReminder.Date = updatedReminder.Date;

            return Ok(existingReminder); // Retorna o lembrete atualizado
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            reminders.RemoveAll(r => r.Id == id);
        }
    }
}
