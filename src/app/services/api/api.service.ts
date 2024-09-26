import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'ab',
      price: 23,
      rating: 6.746,
      status: true,
      cover: 'https://t3.ftcdn.net/jpg/00/57/08/46/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg',
      description: 'alguma coisa',
    },
    {
      id: '2',
      name: 'abcd',
      price: 67,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4erfZMj1c7f6FRJK6WV322SL91FD8hUCIA&s',
      description: 'alguma coisa',
    },
    {
      id: '3',
      name: 'abcdef',
      price: 45,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppmsVkO2iZns9XWje68kQQ8sQcxNvu2C5jZE_QsuCbelvk6xvfvc-tOqRG0dRjFwHna8&usqp=CAU',
      description: 'alguma coisa',
    },
    {
      id: '4',
      name: 'ab',
      price: 23,
      rating: 6.746,
      status: true,
      cover: 'https://t3.ftcdn.net/jpg/00/57/08/46/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg',
      description: 'alguma coisa',
    },
    {
      id: '5',
      name: 'abcd',
      price: 67,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4erfZMj1c7f6FRJK6WV322SL91FD8hUCIA&s',
      description: 'alguma coisa',
    },
    {
      id: '6',
      name: 'abcdef',
      price: 45,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppmsVkO2iZns9XWje68kQQ8sQcxNvu2C5jZE_QsuCbelvk6xvfvc-tOqRG0dRjFwHna8&usqp=CAU',
      description: 'alguma coisa',
    },
    {
      id: '7',
      name: 'ab',
      price: 23,
      rating: 6.746,
      status: true,
      cover: 'https://t3.ftcdn.net/jpg/00/57/08/46/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg',
      description: 'alguma coisa',
    },
    {
      id: '8',
      name: 'abcd',
      price: 67,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4erfZMj1c7f6FRJK6WV322SL91FD8hUCIA&s',
      description: 'alguma coisa',
    },
    {
      id: '9',
      name: 'abcdef',
      price: 45,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppmsVkO2iZns9XWje68kQQ8sQcxNvu2C5jZE_QsuCbelvk6xvfvc-tOqRG0dRjFwHna8&usqp=CAU',
      description: 'alguma coisa',
    },
    {
      id: '10',
      name: 'ab',
      price: 23,
      rating: 6.746,
      status: true,
      cover: 'https://t3.ftcdn.net/jpg/00/57/08/46/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg',
      description: 'alguma coisa',
    },
    {
      id: '11',
      name: 'abcd',
      price: 67,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4erfZMj1c7f6FRJK6WV322SL91FD8hUCIA&s',
      description: 'alguma coisa',
    },
    {
      id: '12',
      name: 'abcdef',
      price: 45,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppmsVkO2iZns9XWje68kQQ8sQcxNvu2C5jZE_QsuCbelvk6xvfvc-tOqRG0dRjFwHna8&usqp=CAU',
      description: 'alguma coisa',
    },
    {
      id: '13',
      name: 'abcd',
      price: 67,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4erfZMj1c7f6FRJK6WV322SL91FD8hUCIA&s',
      description: 'alguma coisa',
    },
    {
      id: '14',
      name: 'abcdef',
      price: 45,
      rating: 6.746,
      status: true,
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppmsVkO2iZns9XWje68kQQ8sQcxNvu2C5jZE_QsuCbelvk6xvfvc-tOqRG0dRjFwHna8&usqp=CAU',
      description: 'alguma coisa',
    },
  ]


  constructor() { }
}
