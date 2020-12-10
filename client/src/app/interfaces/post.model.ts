export interface Post {
  _id: string;
  title: string;
  content: string;
  image: string;
  user: { _id: string; name: string; avatar: string };
  comments: Comment[];
  likes: string[];
  createdAt: Date;
}

export interface Comment {
  _id?: string;
  user: string;
  name: string;
  avatar: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}
