import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes: Note[] = [
      { 
        id: 11,
        title: 'Mr. Ajinkya Bapat',
        description: 'Electricity Bill month end  ',
        isDone: false,
        isArchived: true,
      },
      { 
        id: 12,
        title: 'Sudhanshu T',
        description: 'Medicine Reminder',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 13,
        title: 'Apurva B',
        description: 'Exam fees ',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 14,
        title: 'Pranav N',
        description: 'IPO Subscribe  ',
        isDone: false,
        isArchived: true,
      },
      { 
        id: 15,
        title: 'Aishwarya ',
        description: 'sunday Eveneing Party',
        isDone: false,
        isArchived: false,
      },
      
    ];
    return {notes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}
