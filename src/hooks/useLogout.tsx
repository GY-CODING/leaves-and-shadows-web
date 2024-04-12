import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function useLogout() {
    const router = useRouter();
        Cookies.remove('session');
        Cookies.remove('email');
        Cookies.remove('token');
        router.push('/dashboard/');
}