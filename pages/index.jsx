import Head from "next/head";
import { Grid, Page } from "@geist-ui/core";
import useSWR from "swr";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ErrorBlankslate from "../components/ErrorBlankslate";
import LoadingBlankslate from "../components/LoadingBlankslate";
import Bar from "../components/Bar";
import { useRef } from "react";
import HomeCard from "../components/HomeCard";
import GalleryCard from "../components/GalleryCard";
import MarkdownCard from "../components/MarkdownCard";

export default function Home(props) {
  const { toggleTheme, themeType } = props;
  const parallaxRef = useRef();
  const fetchJSON = (...args) => fetch(...args).then((res) => res.json());
  const populateExtraPages = (...args) => args.forEach((a) => {
    a.content = fetch(a.path).then((res) => res.text())
  })
  const { data: configData, error: configError } = useSWR("/api/config", fetchJSON);

  if (configError) {
    return (
      <ErrorBlankslate
        stacks={[JSON.stringify(configError, null, 2)]}
      />
    );
  }
  if (!configData) return <LoadingBlankslate />;

  return (
    <>
      <Head>
        <title>{configData.profile.title}</title>
        <meta property="og:title" content={configData.profile.title} />
        <meta
          property="og:image"
          content={`${window.location.href}${configData.profile.image.path}`}
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Page margin={0} padding={0} width="100%">
        <Page.Header height="10vh">
          <Bar themeType={themeType} toggleTheme={toggleTheme} parallaxRef={parallaxRef} title={configData.profile.name} />
        </Page.Header>
        <Page.Content padding={0}>
          <Parallax pages={3} ref={parallaxRef}>
            <ParallaxLayer offset={0} speed={1.5}>
              <HomeCard profile={configData.profile} />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.5}>
              <GalleryCard gallery={configData.gallery} />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1.5}>
              <Grid.Container gap={3}>
                <Grid xs={24} md={12}>
                  <MarkdownCard title="Long markdown example">skdjfhalfhklafkljh</MarkdownCard>
                </Grid>
              </Grid.Container>
            </ParallaxLayer>
          </Parallax>
        </Page.Content>
      </Page>
    </>
  );
}
