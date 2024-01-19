import clsx from 'clsx';
import styles from './write.module.scss';
import { addPost } from '@/lib/actions';
import Flickr from '@/components/flickr/Flickr';
import InputImage from '@/components/inputImage/InputImage';
import { auth } from '@/lib/auth';

export default async function Write() {
	const session = await auth();
	console.log('write', session.user.email);

	return (
		<>
			<section className={clsx(styles.write)}>
				<h1>Write Post</h1>

				<form action={addPost}>
					<input type='hidden' name='email' defaultValue={session.user.email} />
					<input type='text' placeholder='title' name='title' />
					<InputImage />
					<textarea name='desc' cols='30' rows='3' placeholder='description'></textarea>
					<nav>
						<input type='reset' value='cancel' />
						<input type='submit' value='write' />
					</nav>
				</form>
			</section>
			<Flickr />
		</>
	);
}
