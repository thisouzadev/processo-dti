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

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            reminders.RemoveAll(r => r.Id == id);
        }
    }
}
