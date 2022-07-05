import { Page } from "@geist-ui/core";
import useSWR from "swr";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ErrorBlankslate from "../components/ErrorBlankslate";
import LoadingBlankslate from "../components/LoadingBlankslate";
import Bar from "../components/Bar";
import { createRef, useRef } from "react";
import HomeCard from "../components/HomeCard";

export default function Home(props) {
  const fetchJSON = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/config", fetchJSON);

  if (error) return <ErrorBlankslate stack={JSON.stringify(data)} />;
  if (!data) return <LoadingBlankslate />;

  return (
    <Page>
      <Page.Header>
        <Bar currentTheme="dark" toggleTheme={() => {}} />
      </Page.Header>
      <Page.Content>
        <HomeCard title={data.profile.title} name={data.profile.name} src={data.profile.image.path} dimentions={data.profile.image.dimentions}/>
      </Page.Content>
    </Page>
  );
}
