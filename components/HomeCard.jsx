import { Card, Grid, Image, Text } from "@geist-ui/core";

export default function HomeCard(props) {
  const { title, name, src, dimentions } = props;

  return (
    <Card shadow hoverable width="100%">
      <Grid.Container gap={3} justify="space-evenly">
        <Grid md={12}>
          <Image draggable={false} src={src} alt={`${name}'s profile`} width={dimentions.width} height={dimentions.height} />
        </Grid>
        <Grid lg={12}>
          <Text h1>{title}</Text>
        </Grid>
      </Grid.Container>
    </Card>
  );
}
