import { Card, Grid } from '@geist-ui/core'
import Image from 'next/image'
import useSWR from 'swr';
import ErrorPage from '../components/error';
import LoadingPage from './loading';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const fetchJSON = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR('/api/config', fetchJSON);

  if (error) return (
    <ErrorPage stack={JSON.stringify(data)} />
  )
  if (!data) return (
    <LoadingPage />
  )

  return (
    <Grid.Container justify='center'>
      <Grid lg={24}>
        <Card shadow>
          <Image width='48px' height='48px' src={data.profile.image} alt={data.profile.name} />
        </Card>
      </Grid>
    </Grid.Container>
  )
}
