import { Card, Grid } from '@geist-ui/core'
import Image from 'next/image'
import useSWR from 'swr';
import Bar from '../components/Bar';
import ErrorBlankslate from '../components/ErrorBlankslate';
import LoadingBlankslate from '../components/LoadingBlankslate';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const fetchJSON = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR('/api/config', fetchJSON);

  if (error) return (
    <ErrorBlankslate stack={JSON.stringify(data)} />
  )
  if (!data) return (
    <LoadingBlankslate />
  )

  return (
    <>
    <Bar />
    <Grid.Container justify='center'>
      <Grid lg={24}>
        <Card shadow>
          <Image width='48px' height='48px' src={data.profile.image} alt={data.profile.name} />
        </Card>
      </Grid>
    </Grid.Container>
    </>
  )
}
