
export interface Course {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  groupMembers: number;
  participants: number;
  tag?: string;
}

export interface GroupBuyItem {
  id: string;
  user: string;
  avatar: string;
  time: string;
  course: Course;
  missingMembers: number;
  timeLeft: string;
  status: 'active' | 'completed';
}
