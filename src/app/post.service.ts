import { Injectable } from '@angular/core';
import axiosInstance from 'src/utils/axios.instance';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  async getPosts(): Promise<any[]> {
    return await axiosInstance
      .get(`/posts`)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching posts:', error);
        throw error;
      });
  }
  async getPostById(id: number): Promise<any> {
    return await axiosInstance
      .get(`/posts/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Error fetching post with ID ${id}:`, error);
        throw error;
      });
  }
}
