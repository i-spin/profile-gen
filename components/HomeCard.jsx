import { Card, Grid, Image, Text } from "@geist-ui/core";

export default function HomeCard(props) {
  const { profile } = props;
  const { title, name, image } = profile;

  return (
    <Card style={{height: image.dimentions.height ?? "auto"}}>
      <Grid.Container gap={3} justify="space-evenly">
        <Grid md={12}>
          <Image draggable={false} src={image.path} alt={`${name}'s profile`} width={image.dimentions.width ?? "auto"} height={image.dimentions.height ?? "auto"} />
        </Grid>
        <Grid lg={12}>
          <Text h1>{title}</Text>
        </Grid>
      </Grid.Container>
    </Card>
  );
}
