import clsx from 'clsx';
import styles from './youtube.module.scss';
import YoutubeCard from '@/components/youtubeCard/YoutubeCard';

async function fetchYoutube() {
	const api_key = process.env.NEXT_PUBLIC_YOUTUBE_API;
	const pid = 'PLM7Wu-2kzIQPISbXB5yK53ANqLA6I1IZs';
	const num = 9;
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

	const data = await fetch(baseURL);
	const resultData = await data.json();
	return resultData;
}

export default async function Youtube() {
	const data = await fetchYoutube();

	return (
		<section className={clsx(styles.youtube)}>
			<h1>Youtube</h1>
			{data.items.map((data, idx) => {
				return <YoutubeCard key={data.id} data={data} isPriority={idx < 4 ? true : false} isPrefetch={idx < 6 ? false : true} />;
			})}
		</section>
	);
}
