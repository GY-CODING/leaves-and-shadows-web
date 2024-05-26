import { type session, type user } from '@/utils/types';

export async function login({ user, password }: user): Promise<session | null> {
  try {
    const response = await fetch('https://gy-accounts.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    });

    if (response.ok) {
      if ((await response.text()) === 'true') {
        const session: session = await getSession({ user, password });
        return session;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getSession({ user, password }: user): Promise<any> {
  try {
    const response = await fetch('https://gy-accounts.onrender.com/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function SignUp({ user, email, password }: user): Promise<string> {
  try {
    const response = await fetch('https://gy-accounts.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, email, password }),
    });

    const data = await response.text();
    if (data === '0' && email != null && user != null) {
      await sendEmail(email, user);
    }
    return data;
  } catch (error: any) {
    console.error(error);
    return error.toString();
  }
}

async function sendEmail(email: string, username: string): Promise<void> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, username }),
    });

    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData.message);
  } catch (err) {
    console.error(err);
  }
}
