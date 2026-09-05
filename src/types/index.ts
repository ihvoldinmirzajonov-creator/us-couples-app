/**
 * TypeScript types for Us App
 */

// User & Authentication
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  timezone: string;
  createdAt: Date;
  updatedAt: Date;
}

// Couple
export interface Couple {
  id: string;
  partner1Id: string;
  partner2Id: string;
  relationshipStartDate: Date;
  nextMeetingDate: Date;
  firstMeetingDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Questions & Answers
export interface Question {
  id: string;
  text: string;
  category: 'daily' | 'deep' | 'fun';
  createdAt: Date;
}

export interface Answer {
  id: string;
  questionId: string;
  coupleId: string;
  userId: string;
  text: string;
  timestamp: Date;
}

// Challenges
export interface Challenge {
  id: string;
  text: string;
  description?: string;
  category: 'creative' | 'adventure' | 'romantic';
  createdAt: Date;
}

export interface CompletedChallenge {
  id: string;
  challengeId: string;
  coupleId: string;
  photos?: string[];
  notes?: string;
  completedAt: Date;
}

// Messages
export interface Message {
  id: string;
  coupleId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

// Love Notes
export interface LoveNote {
  id: string;
  coupleId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isPublic: boolean;
}

// Memories
export interface Memory {
  id: string;
  coupleId: string;
  title: string;
  description?: string;
  photos: string[];
  date: Date;
  createdAt: Date;
}

export interface BucketListItem {
  id: string;
  coupleId: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

// Games
export interface Game {
  id: string;
  type: 'howWellDoYouKnowMe' | 'thisOrThat' | 'wouldYouRather' | 'guessMyAnswer';
  coupleId: string;
  createdAt: Date;
}

export interface GameQuestion {
  id: string;
  gameId: string;
  questionText: string;
  options?: string[];
}

export interface GameAnswer {
  id: string;
  gameQuestionId: string;
  userId: string;
  answer: string;
  timestamp: Date;
}

// Important Dates
export interface ImportantDate {
  id: string;
  coupleId: string;
  title: string;
  description?: string;
  date: Date;
  reminder: boolean;
  reminderTime?: number; // minutes before
  createdAt: Date;
}

// Settings & Privacy
export interface CoupleSettings {
  coupleId: string;
  notificationsEnabled: boolean;
  dailyQuestionReminder: boolean;
  dailyChallengeReminder: boolean;
  privateProfilePhotos: boolean;
  allowedVisibility: 'private' | 'friends' | 'public';
  createdAt: Date;
  updatedAt: Date;
}
