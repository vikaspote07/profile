import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const sendContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const downloadResume = async () => {
  try {
    const response = await axios.get(`${API_URL}/resume/download`, {
      responseType: 'blob',
    });
    
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'vikas-pote-resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    throw error;
  }
};