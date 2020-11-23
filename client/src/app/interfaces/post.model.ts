export interface Post {
  _id: string;
  title: string;
  content: string;
  image: any; // string | {};
  user: { _id: string; name: string; avatar: string };
  createdAt: Date;
}
