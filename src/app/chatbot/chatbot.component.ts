import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: Message[] = [];
  newMessage = '';

  ngOnInit() {
    this.messages.push({
      content: 'Hello! I\'m your ticket clustering assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        content: this.newMessage,
        sender: 'user',
        timestamp: new Date()
      });

      setTimeout(() => {
        this.messages.push({
          content: 'I\'m processing your request about: ' + this.newMessage,
          sender: 'bot',
          timestamp: new Date()
        });
      }, 1000);

      this.newMessage = '';
    }
  }
}
