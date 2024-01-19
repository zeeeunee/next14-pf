'use client';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { handleLogin } from '@/lib/actions';

export default function LoginForm() {
	//useFormState를 쓰는 이유
	//서버액션 함수 실행시 이전 기존 결과값을 state에 자동으로 담아줌으로써
	//액션실행결과값의 내용을 해당 컴포넌트 화면에서 활용가능
	//만약 기존 auth설정에서 throw로 Error객체를 던져주면 사용자는 미리 설정한 error.jsx화면을 봐야 되므로
	//에러 객체를 내보내는 대신 Error객체의 정보만 state로 받아서 error.jsx화면이동없이 에러 내용 확인 가능
	const [state, formAction] = useFormState(handleLogin, undefined);
	return (
		<form action={formAction}>
			<input type='text' placeholder='username' name='username' />
			<input type='password' placeholder='password' name='password' />
			<button>Login</button>
			{state?.error}
			<Link href='/join'>
				{"Don't have an account?"} <b>Join</b>
			</Link>
		</form>
	);
}
