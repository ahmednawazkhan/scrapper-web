import { BaseEntity } from '@/types';

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  role: 'ADMIN' | 'USER';
  teamId: string;
  bio: string;
} & BaseEntity;
