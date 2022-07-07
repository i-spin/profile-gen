import { Card, Grid, Image, Link, Text } from "@geist-ui/core";

export default function GalleryCard(props) {
  const { gallery } = props;

  return (
    <>
      <Grid.Container gap={3}>
        <Grid md={24} justify="center"><Text h1>Gallery</Text></Grid>
        {gallery.map((c) => (
          <Grid md={12} key={c.title}>
            <Card shadow>
              <Image src={c.path} draggable={false} alt={c.title} />
              <Text h4>{c.title}</Text>
              <Text type="secondary" small>{c.caption}</Text>
              <Card.Footer>
                <Link block href={`${window.location.href}${c.path}`}>
                  Click to see full image.
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
