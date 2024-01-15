import clsx from 'clsx';
import styles from './btnLogin.module.scss';

export default function BtnLogin({ session }) {
	return <button className={clsx(styles.btn, session ? styles.btnLogout : styles.btnLogin)}>{session ? 'Logout' : 'Login'}</button>;
}