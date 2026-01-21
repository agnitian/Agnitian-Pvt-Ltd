// API configuration
const API_BASE_URL = 'https://agnitian-backend.vercel.app/api/blogs';

// Type definitions matching backend
export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  published: boolean;
  readTime?: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogsResponse {
  success: boolean;
  data: Blog[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface CategoriesResponse {
  success: boolean;
  data: string[];
}

export interface TagsResponse {
  success: boolean;
  data: string[];
}

// Get all published blogs with filters
export async function fetchBlogs(params?: {
  page?: number;
  limit?: number;
  category?: string;
  tag?: string;
  search?: string;
}): Promise<BlogsResponse> {
  try {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', String(params.page));
    if (params?.limit) searchParams.append('limit', String(params.limit));
    if (params?.category) searchParams.append('category', params.category);
    if (params?.tag) searchParams.append('tag', params.tag);
    if (params?.search) searchParams.append('search', params.search);

    const url = searchParams.toString()
      ? `${API_BASE_URL}?${searchParams}`
      : API_BASE_URL;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch blogs');
    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

// Get blog by slug
export async function fetchBlogBySlug(slug: string): Promise<{ success: boolean; data: Blog }> {
  try {
    const response = await fetch(`${API_BASE_URL}/slug/${slug}`);
    if (!response.ok) throw new Error('Failed to fetch blog');
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
}

// Get blog by ID
export async function fetchBlogById(id: string): Promise<{ success: boolean; data: Blog }> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch blog');
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
}

// Get categories
export async function fetchCategories(): Promise<CategoriesResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

// Get all tags
export async function fetchTags(): Promise<TagsResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/tags`);
    if (!response.ok) throw new Error('Failed to fetch tags');
    return await response.json();
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
}

// Create blog (Admin)
export async function createBlog(blogData: Omit<Blog, '_id' | 'createdAt' | 'updatedAt' | 'readTime'>): Promise<{ success: boolean; data: Blog }> {
  try {
    const response = await fetch(`${API_BASE_URL}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogData)
    });
    if (!response.ok) throw new Error('Failed to create blog');
    return await response.json();
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
}

// Update blog (Admin)
export async function updateBlog(id: string, updates: Partial<Blog>): Promise<{ success: boolean; data: Blog }> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    });
    if (!response.ok) throw new Error('Failed to update blog');
    return await response.json();
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
}

// Delete blog (Admin)
export async function deleteBlog(id: string): Promise<{ success: boolean }> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete blog');
    return await response.json();
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
}
