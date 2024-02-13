// using Microsoft.AspNetCore.Mvc;
// using ReminderApp.Controllers;
// using ReminderApp.Models;
// using System;
// using System.Collections.Generic;
// using Xunit;

// namespace ReminderApp.Tests
// {
//     public class ReminderControllerTests
//     {
//         [Fact]
//         public void Get_ReturnsEmptyList()
//         {
//             var controller = new ReminderController();
//             var result = controller.Get() as ActionResult<IEnumerable<Reminder>>;
//             Assert.Empty(result.Value);
//         }

//         [Fact]
//         public void Post_AddsReminder()
//         {
//             var controller = new ReminderController();
//             var reminder = new Reminder { Note = "Test Reminder", Date = DateTime.Now };
//             var result = controller.Post(reminder) as ActionResult<Reminder>;
//             Assert.Equal(reminder, result.Value);
//         }

//        [Fact]
// public void Delete_RemovesReminder()
// {
//     var controller = new ReminderController();
//     var reminder = new Reminder { Note = "Test Reminder", Date = DateTime.Now };
//     controller.Post(reminder);
    
//     controller.Delete(1); // Supondo que o ID do lembrete seja 1
    
//     // Verifica se a lista de lembretes está vazia após a remoção
//     var result = controller.Get() as ActionResult<IEnumerable<Reminder>>;
//     Assert.Empty(result.Value);
// }

//     }
// }
