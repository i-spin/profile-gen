import { Card, Grid, Image, Text } from "@geist-ui/core";

export default function HomeCard(props) {
  const { profile } = props;
  const { title, name, image } = profile;

  return (
    <Card height={image.dimentions.height}>
      <Grid.Container gap={3} justify="space-evenly">
        <Grid md={12}>
          <Image draggable={false} src={image.path} alt={`${name}'s profile`} width={image.dimentions.width} height={image.dimentions.height} />
        </Grid>
        <Grid lg={12}>
          <Text h1>{title}</Text>
        </Grid>
      </Grid.Container>
    </Card>
  );
}
