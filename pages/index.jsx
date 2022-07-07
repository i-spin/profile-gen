import Head from "next/head";
import { Page } from "@geist-ui/core";
import useSWR from "swr";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ErrorBlankslate from "../components/ErrorBlankslate";
import LoadingBlankslate from "../components/LoadingBlankslate";
import Bar from "../components/Bar";
import { useRef } from "react";
import HomeCard from "../components/HomeCard";
import GalleryCard from "../components/GalleryCard";

export default function Home(props) {
  const { toggleTheme, themeType } = props;
  const parallaxRef = useRef();
  const fetchJSON = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/config", fetchJSON);

  if (error) {
    return (
      <ErrorBlankslate
        stack={`Information:\n${JSON.stringify(error, null, 2)}`}
      />
    );
  }
  if (!data) return <LoadingBlankslate />;

  return (
    <>
      <Head>
        <title>{data.profile.title}</title>
        <meta property="og:title" content={data.profile.title} />
        <meta
          property="og:image"
          content={`${window.location.href}${data.profile.image.path}`}
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Page margin={0} padding={0} width="100%">
        <Page.Header height="10vh">
          <Bar themeType={themeType} toggleTheme={toggleTheme} parallaxRef={parallaxRef} title={data.profile.name} />
        </Page.Header>
        <Page.Content padding={0}>
          <Parallax pages={3} ref={parallaxRef}>
            <ParallaxLayer offset={0} speed={1.5}>
              <HomeCard profile={data.profile} />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.5}>
              <GalleryCard gallery={data.gallery} />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1.5}>
              <HomeCard profile={data.profile} />
            </ParallaxLayer>
          </Parallax>
        </Page.Content>
      </Page>
    </>
  );
}
