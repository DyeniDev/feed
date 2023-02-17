import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DyeniDev.png',
      name: 'Dyeniffer Balçanelli',
      role: 'Front End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é feed 🚀' },
      { type: 'link', content: 'https://github.com/DyeniDev/feed' },
    ],
    publishedAt: new Date('2023-02-17 07:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia pessoal' },
      { type: 'paragraph', content: 'Segue minha mais nova criação, uma Inteligência Artificial que além de responder perguntas ainda prevê o futuro!' },
      { type: 'link', content: 'https://chat.openai.com/chat' },
    ],
    publishedAt: new Date('2023-02-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}