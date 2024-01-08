const BASE_URL = 'https://reqres.in/api';

const handleResponse = async (response: Response) => {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Request failed');
    }
    return response.json();
}

export const login = async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
};

export const getUserData = async (userId: number) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    return response.json();
};

export const registerUser = async (userData: { email: string; password: string }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    const confirmationResponse = await fetch(`${BASE_URL}/confirm-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userData.email }),
    });

    if (!confirmationResponse.ok) {
      const errorData = await confirmationResponse.json();
      throw new Error(errorData.error || 'User registration confirmation failed');
    }
  
    return handleResponse(response);
};
  